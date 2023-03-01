import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Style } from '../../styles';
import { Container, Spacing, SweetAlertModal, Button, Loader, DatePicker, ExportSalesFirstTab, ExportSalesSecondTab } from '../../components';
import { RouteName } from '../../routes';
import { SH, Colors, SF, filterOnlyNumericValue, ExportValidator, defaultDateSelectedFormat, Strings, permissionCheck } from '../../utils';
import { useDispatch, useSelector } from 'react-redux';
import { getallPINoList_Action, createExport_action, updateExport_action } from '../../redux/action';
import IconEA from 'react-native-vector-icons/Entypo';
import DocumentPicker from 'react-native-document-picker';
import RNFetchBlob from 'rn-fetch-blob';
const ExportSalesManageScreen = (props) => {
  const { navigation, route } = props;
  const { managetype = "", details = null } = route?.params || {};
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  const [message, setMessage] = useState('');
  const { userDetails } = useSelector((state) => state.authReducer);
  const { createExport, commonLoading, getPiNoList, userPermissionData,getSettingData } = useSelector((state) => state.commonReducer);
  const [tabIndex, setTabIndex] = useState('1');
  var todayDate = new Date();
  const [saveNext, setSaveNext] = useState(false);
  const [singleFile, setSingleFile] = useState(null);
  const lable = getSettingData?.Strings.export;
  const arrayData = [
    { label: 'Yes', value: '1' },
    { label: 'No', value: '2' }
  ];

  const stateArray = {
    PINO: "",
    InvoiceNo: "",
    CfsReachStatus: "2",
    Unload: "2",
    Date: todayDate,
    UnloadWeight: "",
    WeighLost: "",

    ContainerBooked: "",
    Stuffing: "",
    StuffingDate: todayDate,
    ContainerNo: "",
    ShippingLine: "",
    No: "",
    SailDate: todayDate,
    ETADate: todayDate,
    DestinationPortDate: todayDate,
    PODStatus: "",
  };
  const stateErrorArray = {
    PINO: "",
    InvoiceNo: "",
  };

  const [state, setState] = useState(stateArray);
  const [stateError, setStateError] = useState(stateErrorArray);
  const [showDatepicker, setShowDatepicker] = useState(false);
  const [date, setDate] = useState(todayDate);
  const [selectedDateName, setSelectedDateName] = useState("");

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      clearFormData();
      dispatch(getallPINoList_Action())
    });
    return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    if (createExport.length != 0) {
      setMessage(createExport.message)
      setModalVisible(true)
      dispatch(createExport_action(true));
      if (managetype != "Edit") { clearFormData() }
    }
  }, [createExport, managetype])

  useEffect(() => {
    if (getPiNoList.length != 0) {
      if (managetype == "Edit") { storeEditData() }
    }
  }, [getPiNoList, managetype])

  const  storeEditData  =  () => {
    const editArray = {
      PINO: details.pi_no.toString(),
      InvoiceNo: details?.invoice,
      CfsReachStatus: details?.cfs_reach_status.toString(),
      Unload: details?.unload_status.toString(),
      Date: defaultDateSelectedFormat(details?.unload_date),
      UnloadWeight: details?.unload_weight,
      WeighLost: details?.lost_weight,

      ContainerBooked: details?.container_book_status.toString(),
      Stuffing: details?.stuffing_status.toString(),
      StuffingDate: defaultDateSelectedFormat(details?.stuffing_date),
      ContainerNo: details?.container_no,
      ShippingLine: details?.shipping_line,
      No: details?.bl_no,
      SailDate: defaultDateSelectedFormat(details?.sail_date),
      ETADate: defaultDateSelectedFormat(details?.arrival_date),
      DestinationPortDate: defaultDateSelectedFormat(details?.dest_port_date),
      PODStatus: "",
    };
    setState(editArray)

  }

  const handleValidation = (text, type) => {
    var valid = ExportValidator({ type: type, "value": text })
    if (type == "PINO") {
      setStateError({ ...stateError, PINO: valid });
    } else if (type == "InvoiceNo") {
      setStateError({ ...stateError, InvoiceNo: valid });
    } else {

    }
  }

  const getBase64Format = (base64, fileType) => {
    return `data:${fileType};base64,${base64}`;
  };
  const submitFormData = async () => {
    var validCheck = false;

    if (state.InvoiceNo == "") {
      validCheck = true;
      handleValidation("", "InvoiceNo");
    }
    if (state.PINO == "") {
      validCheck = true;
      handleValidation("", "PINO");
    }

    if (validCheck) {
      setTabIndex('1')
      return;
    }

    var fileResults = "";
    if(singleFile){
      fileResults = await RNFetchBlob.fs.readFile(singleFile[0]?.uri, 'base64') ;
      fileResults =  getBase64Format(fileResults,singleFile[0]?.type);
    }

    var data = {
      "user_id": userDetails.id,
      "pi_no": state.PINO,
      "invoice": state.InvoiceNo,
      "cfs_reach_status": state.CfsReachStatus,
      "unload_status": state.Unload,
      "unload_date": state.Date,
      "unload_weight": state.UnloadWeight,
      "lost_weight": state.WeighLost,
      "container_book_status": state.ContainerBooked,
      "stuffing_status": state.Stuffing,
      "stuffing_date": state.StuffingDate,
      "container_no": state.ContainerNo,
      "shipping_line": state.ShippingLine,
      "bl_no": state.No,
      "sail_date": state.SailDate,
      "arrival_date": state.ETADate,
      "dest_port_date": state.DestinationPortDate,
      "pod_status": state.PODStatus,
      "pod_file": fileResults
    };

    if (managetype == "Edit") {
      dispatch(updateExport_action(false, data, details.id))
    } else {
      dispatch(createExport_action(false, data))

    }
  }

  const clearFormData = () => {
    setTabIndex('1')
    setState(stateArray)
    setStateError(stateErrorArray)
    setSingleFile(null)
  }

  const dropDownOnchnage = (text, type) => {
    handleValidation(text, type)
    if (type == 'PINO') {
      setState({ ...state, PINO: filterOnlyNumericValue(text) })
    }
  }
  const DateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatepicker(false);
    setDate(currentDate);
    if (selectedDateName == "Date") {
      setState({ ...state, Date: currentDate })
    } else if (selectedDateName == "StuffingDate") {
      setState({ ...state, StuffingDate: currentDate })
    } else if (selectedDateName == "SailDate") {
      setState({ ...state, SailDate: currentDate })
    } else if (selectedDateName == "ETADate") {
      setState({ ...state, ETADate: currentDate })
    } else if (selectedDateName == "DestinationPortDate") {
      setState({ ...state, DestinationPortDate: currentDate })
    }

  };

  const onPressShowDatepicker = (status, type) => {
    setShowDatepicker(true)
    setSelectedDateName(type)
    if (type == "Date" && state.Date != "") {
      setDate(state.Date);
    } else if (type == "StuffingDate" && state.StuffingDate != "") {
      setDate(state.StuffingDate);
    } else if (type == "SailDate" && state.SailDate != "") {
      setDate(state.SailDate);
    } else if (type == "ETADate" && state.ETADate != "") {
      setDate(state.ETADate);
    } else if (type == "DestinationPortDate" && state.DestinationPortDate != "") {
      setDate(state.DestinationPortDate);
    }
  };

  const selectFile = async () => {
    // Opening Document Picker to select one file
    try {
      const res = await DocumentPicker.pick({
        // Provide which type of file you want user to pick
        type: [DocumentPicker.types.allFiles],
        // There can me more options as well
        // DocumentPicker.types.allFiles
        // DocumentPicker.types.images
        // DocumentPicker.types.plainText
        // DocumentPicker.types.audio
        // DocumentPicker.types.pdf
      });
      // Printing the log realted to the file
      console.log('res : ' + JSON.stringify(res));
      // Setting the state to show single file attributes
      setSingleFile(res);
    } catch (err) {
      setSingleFile(null);
      // Handling any exception (If any)
      if (DocumentPicker.isCancel(err)) {
        // If user canceled the document selection
        alert('Canceled');
      } else {
        // For Unknown Error
        alert('Unknown Error: ' + JSON.stringify(err));
        throw err;
      }
    }
  };

  return (
    <Container>
      <Loader loading={commonLoading} />
      <ScrollView>
        <View style={Style.themeMainViewContainer}>
          <View style={Style.tabOuterView}>
            {permissionCheck(userPermissionData, '4') &&
              <TouchableOpacity onPress={() => setTabIndex('1')} style={[Style.tabInnerView, tabIndex === '1' && Style.tabInnerActiveView]}>
                <Text style={Style.tabInnerText}>{lable.tabNameFirst}</Text>
              </TouchableOpacity>
            }
            {permissionCheck(userPermissionData, '5') &&
              <TouchableOpacity onPress={() => setTabIndex('2')} style={[Style.tabInnerView, tabIndex === '2' && Style.tabInnerActiveView]}>
                <Text style={Style.tabInnerText}>{lable.tabNameSecond}</Text>
              </TouchableOpacity>
            }
          </View>
          <Spacing space={SH(30)} />

          {tabIndex === '1' &&
            <ExportSalesFirstTab
              getPiNoList={getPiNoList}
              lable={lable}
              state={state}
              dropDownOnchnage={dropDownOnchnage}
              stateError={stateError}
              setState={setState}
              handleValidation={handleValidation}
              arrayData={arrayData}
              setShowDatepicker={onPressShowDatepicker}
            />
          }

          {tabIndex === '2' &&
            <ExportSalesSecondTab
              getPiNoList={getPiNoList}
              lable={lable}
              state={state}
              dropDownOnchnage={dropDownOnchnage}
              stateError={stateError}
              setState={setState}
              handleValidation={handleValidation}
              arrayData={arrayData}
              setShowDatepicker={onPressShowDatepicker}
              fileUpload={selectFile}
              singleFile={singleFile}
            />
          }
          <Spacing space={SH(60)} />
        </View>
      </ScrollView>
      <DatePicker show={showDatepicker} value={date} mode="date" dateOnChange={DateChange} />
      <SweetAlertModal modalVisible={modalVisible} onPress={() => {setModalVisible(false); saveNext && navigation.navigate(RouteName.EXPPORT_SALES_SCREEN)}} message={message} />
      <View style={Style.bottomButtonView}>
        <TouchableOpacity onPress={() => tabIndex === '1' ? navigation.navigate(RouteName.EXPPORT_SALES_SCREEN) : setTabIndex('1')}>
          <IconEA
            color={Colors.theme_backgound_second} size={SF(40)}
            name="arrow-with-circle-left"
          />
        </TouchableOpacity>
        <Button
          title={managetype == "Edit" ? "Save & Next" : "Clear"}
          onPress={() =>{ if(managetype == "Edit"){ submitFormData(); setSaveNext(true) }else{ clearFormData()} }}
          containerStyle={Style.PrButtonStyle}
        />
        {tabIndex === '1' ?
          <Button
            title="Next"
            onPress={() => setTabIndex('2')}
            containerStyle={Style.PrButtonStyle}
          />
          :
          <Button
            title={managetype == "Edit" ? "Save" : "Submit"}
            onPress={() => {submitFormData(); setSaveNext(false)}}
            containerStyle={Style.PrButtonStyle}
          />
        }

      </View>
    </Container>
  );
};
export default ExportSalesManageScreen;
