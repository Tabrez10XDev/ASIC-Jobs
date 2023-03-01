import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { DropdownStyle, Style } from '../../../styles';
import { Container, Spacing, SweetAlertModal, Input, DropDown, Button, DatePicker, DateInput, Loader } from '../../../components';
import { RouteName } from '../../../routes';
import { SH, Colors, SF, filterOnlyNumericValue, PaymentValidator, setDateFormat, defaultDateSelectedFormat, Strings } from '../../../utils';
import { useDispatch, useSelector } from 'react-redux';
import IconEA from 'react-native-vector-icons/Entypo';
import { createPayment_action, getallPINoList_Action, updatePayment_action } from '../../../redux/action';

const InwardPaymentManageScreen = (props) => {
  const { navigation, route } = props;
  const { managetype = "", details = null } = route?.params || {};
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  const [message, setMessage] = useState('');
  const [showDatepicker, setShowDatepicker] = useState(false);
  var todayDate = new Date();
  const [saveNext, setSaveNext] = useState(false);

  const { userDetails } = useSelector((state) => state.authReducer);
  const { commonLoading, getPiNoList, getSettingData, createPayment } = useSelector((state) => state.commonReducer);
  const lable = getSettingData?.Strings.inwardpayment;
  const stateArray = {
    PINO: "",
    Amount: "",
    Date: todayDate,
    PaymentThrough: ""
  };
  const stateErrorArray = {
    PINO: "",
    Amount: "",
    Date: "",
    PaymentThrough: ""
  };
  const [state, setState] = useState(stateArray);
  const [stateError, setStateError] = useState(stateErrorArray);

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      clearFormData();
      if (userDetails.length != 0) {
        dispatch(getallPINoList_Action())
      }
    });
    return unsubscribe;
  }, [navigation, userDetails]);

  useEffect(() => {
    if (getPiNoList.length != 0) {
      if (managetype == "Edit") { storeEditData() }
    }
  }, [getPiNoList, managetype])


  const storeEditData = () => {
    const editArray = {
      PINO: details.pi_no.toString(),
      Amount: details.amount,
      Date: defaultDateSelectedFormat(details.payment_date),
      PaymentThrough: details.payment_through
    };

    setState(editArray)

  }

  useEffect(() => {
    if (createPayment.length != 0) {
      setMessage(createPayment.message)
      setModalVisible(true)
      dispatch(createPayment_action(true));
      if (managetype != "Edit") { clearFormData() }
    }
  }, [createPayment, managetype])

  const DateChange = (event, selectedDate) => {
    const currentDate = selectedDate || state.Date;
    setShowDatepicker(false);

    setState({ ...state, Date: currentDate })
    handleValidation(currentDate, "Date");
  };

  const handleValidation = (text, type) => {
    var valid = PaymentValidator({ type: type, "value": text })
    if (type == "Amount") {
      setStateError({ ...stateError, Amount: valid });
    } else if (type == "PINO") {
      setStateError({ ...stateError, PINO: valid });
    } else if (type == "Date") {
      setStateError({ ...stateError, Date: valid });
    } else if (type == "PaymentThrough") {
      setStateError({ ...stateError, PaymentThrough: valid });
    } else {

    }
  }

  const submitFormData = () => {
    var validCheck = false;

    if (state.PaymentThrough == "") {
      validCheck = true;
      handleValidation("", "PaymentThrough");
    }

    if (state.Date == "") {
      validCheck = true;
      handleValidation("", "Date");
    }

    if (state.Amount == "") {
      validCheck = true;
      handleValidation("", "Amount");
    }

    if (state.PINO == "") {
      validCheck = true;
      handleValidation("", "PINO");
    }
    if (validCheck) {
      return;
    }

    var data = {
      "user_id": userDetails.id,
      "pi_no": state.PINO,
      "amount": state.Amount,
      "payment_date": state.Date,
      "payment_through": state.PaymentThrough,
    };
    if (managetype == "Edit") {
      dispatch(updatePayment_action(false, data, details.id))
    } else {
      dispatch(createPayment_action(false, data))

    }

  }

  const clearFormData = () => {
    setState(stateArray)
    setStateError(stateErrorArray)
  }

  const _renderItem = item => {
    return (
      <View style={DropdownStyle.item}>
        <Text style={DropdownStyle.textItem}>{item.pi_no}</Text>
      </View>
    );
  };

  const dropDownOnchnage = (text, type) => {
    handleValidation(text, type)
    if (type == 'PINO') {
      setState({ ...state, PINO: filterOnlyNumericValue(text) })
    } else if (type == 'PaymentThrough') {
      setState({ ...state, PaymentThrough: text })
    }
  }

  return (
    <Container>
      <Loader loading={commonLoading} />

      <ScrollView>
        <View style={Style.themeMainViewContainer}>
          <Spacing space={SH(30)} />
          <DropDown
            required={true}
            data={getPiNoList}
            search
            searchPlaceholder="Search"
            label={lable.PINO}
            placeholder="Select item"
            labelField="pi_no"
            valueField="id"
            value={state.PINO}
            onChange={item => {
              dropDownOnchnage(item.id, 'PINO')

            }}
            textError={stateError.PINO}
            renderItem={item => _renderItem(item)}
          />

          <Input
            title={lable.Amount}
            required={true}
            placeholder={lable.Amount}
            errorMessage={stateError.Amount}
            onChangeText={(text) => setState({ ...state, Amount: filterOnlyNumericValue(text) })}
            value={state.Amount}
            inputType="numeric"
            onEndEditing={(e) => handleValidation(e.nativeEvent.text, 'Amount')}
          />
          <DateInput
            label={lable.Date}
            value={setDateFormat(state.Date)}
            onPress={() => setShowDatepicker(true)}
            textError={stateError.Date}
            required={true}
          />
          <DropDown
            data={getSettingData.payment_through}
            search
            searchPlaceholder="Search"
            label={lable.PaymentThrough}
            placeholder="Select item"
            labelField="label"
            valueField="value"
            value={state.PaymentThrough}
            onChange={item => {
              dropDownOnchnage(item.value, 'PaymentThrough')
            }}
            textError={stateError.PaymentThrough}
            required={true}
          />
          <Spacing space={SH(50)} />
        </View>

        <DatePicker show={showDatepicker} value={state.Date} mode="date" dateOnChange={DateChange} />
      </ScrollView>
      <View style={Style.bottomButtonView}>
        <TouchableOpacity onPress={() => navigation.navigate(RouteName.INWARD_PAYMENT_SCREEN)}>
          <IconEA
            color={Colors.theme_backgound_second} size={SF(40)}
            name="arrow-with-circle-left"
          />
        </TouchableOpacity>
        <Button
          title={managetype == "Edit" ? "Save & Next" : "Clear"}
          onPress={() => { if (managetype == "Edit") { submitFormData(); setSaveNext(true) } else { clearFormData() } }}
          containerStyle={Style.PrButtonStyle}
        />
        <Button
          title={managetype == "Edit" ? "Save" : "Submit"}
          onPress={() => { submitFormData(); setSaveNext(false) }}
          containerStyle={Style.PrButtonStyle}
        />
      </View>
      <SweetAlertModal modalVisible={modalVisible} onPress={() => { setModalVisible(false); saveNext && navigation.navigate(RouteName.INWARD_PAYMENT_SCREEN) }} message={message} />

    </Container>
  );
};
export default InwardPaymentManageScreen;
