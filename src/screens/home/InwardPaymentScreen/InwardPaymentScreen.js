import React, { useState, useEffect } from 'react';
import { View, Text, KeyboardAvoidingView, TouchableOpacity, ScrollView, Platform } from 'react-native';
import { Style , TableStyle} from '../../../styles';
import { Container, Spacing, SweetAlertModal, Loader, TableSearchInput, Button, AddRoundButton ,PaymentDetailsModal} from '../../../components';
import { RouteName } from '../../../routes';
import { SH,  Colors, SF, Strings } from '../../../utils';
import { useDispatch, useSelector } from 'react-redux';
import { deletePayment_action, getAllPayment_action } from '../../../redux/action/';
import { DataTable } from 'react-native-paper';
import IconEA from 'react-native-vector-icons/Entypo';

const InwardPaymentScreen = (props) => {
  const { navigation } = props;
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  const [alertVisible, setAlertVisible] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [selectedID, setSelectedID] = useState('');
  const [message, setMessage] = useState('');
  const [alertType, setAlertType] = useState('');
  const [viewDetailData, setViewDetailData] = useState(null);

  const { commonLoading, getInwardPayment, deleteInwardPayment,getSettingData } = useSelector((state) => state.commonReducer);
  var confirmMessage = Strings.common.deleteConfirmMessage;
  const lable = getSettingData?.Strings.inwardpayment;

  var HeaderTitle = [{ title: lable.PINO }, { title: lable.Amount }, { title: lable.Date }, { title: 'Manage' }]; 
  const [tableData, setTableData] = useState([]);

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {    
      dispatch(getAllPayment_action())
    });
    return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    setTableData(getInwardPayment)
  }, [getInwardPayment])


  useEffect(() => {
    if (deleteInwardPayment.length != 0 && deleteInwardPayment.status == "success") {
      setAlertVisible(true)
      setMessage(deleteInwardPayment.message)
      dispatch(deletePayment_action(true));
      dispatch(getAllPayment_action())
    }
  }, [deleteInwardPayment])
  

  const onPressManage = (type, id, data = null) => {
    if(type == "Add"){
      navigation.navigate(RouteName.DRAWER_NAVIGATOR, {
        screen: RouteName.INWARD_PAYMENT_MANAGE_SCREEN,
        params: {
          screen: RouteName.INWARD_PAYMENT_MANAGE_SCREEN_STACK
        },
      });
    }else{
    setSelectedID(id)
    if (type == "Edit") {
      navigation.navigate(RouteName.DRAWER_NAVIGATOR, {
        screen: RouteName.INWARD_PAYMENT_MANAGE_SCREEN,
        params: {
          screen: RouteName.INWARD_PAYMENT_MANAGE_SCREEN_STACK,
          params: {
            managetype:'Edit',details:data
          },
        },
      });
    } else if (type == "View") {
      setViewDetailData(data)
      setModalVisible(true)
    } else if (type == "Delete") {
      setAlertType('Confirm')
      setMessage(confirmMessage)
      setAlertVisible(true)
    }
  }
  }

  const onPressDelete = (e) => {
    setAlertType('')
    e == "yes" && dispatch(deletePayment_action(false, selectedID));
    setAlertVisible(false)
  };

  const onPressFilter = (text) => {
    setSearchValue(text)
    var datas = getInwardPayment.filter((item) => {
      if (text === "") {
        return item;
      } else if (item.pi_no.toString().indexOf(text) > -1) {
        return item;
      }
    });
    setTableData(datas)
  }

  var extraProps = {};
  if (alertType == "Confirm") {
    extraProps['buttonText'] = "Yes",
      extraProps['onPress'] = () => onPressDelete("yes"),
      extraProps['cancelButtonText'] = "No",
      extraProps['onPressCancel'] = () => onPressDelete("no")
  } else {
    extraProps['buttonText'] = "Ok"
    extraProps['onPress'] = () => setAlertVisible(false)
  }


  return (
    <Container>
            {/* <KeyboardAvoidingView  behavior={Platform.OS === 'ios' ? 'padding' : 'height'}> */}
      <Loader loading={commonLoading} />
      <AddRoundButton onPress={() =>  onPressManage("Add")} />

        <View style={Style.themeMainViewContainer}>
          <Spacing space={SH(20)} />
          <View style={Style.piCretionButtonView}>
            <Button
              title={Strings.common.managePaymentlabel}
              onPress={() => onPressManage("Add")}
              icon={{
                name: 'plus',
                type: 'font-awesome',
                size: SF(15),
                color: 'white',
              }}
            />
          </View>
          <Spacing space={SH(20)} />
          <View style={Style.piCretionSearchView}>
          <TableSearchInput
            onChangeText={(text) => onPressFilter(text)}
            value={searchValue}
          />
          </View>
          <View>
          {tableData.length == 0 ?
        <View style={TableStyle.setdataviewnodata}>
            <Text style={TableStyle.nodatafoundtextstyle}>
              No data found ..!!!
            </Text>
        </View>
        :
        <ScrollView style={TableStyle.dataTableMainBody}>
            <DataTable style={TableStyle.dataTableMain}>
              <DataTable.Header style={TableStyle.headerTextView}>
                {
                  HeaderTitle.map((item, index) => {
                    return (
                      <DataTable.Title 
                      key={index.toString()}
                      style={[item.title == "Manage" && TableStyle.manageWidth]}><Text style={TableStyle.headerText}>{item.title}</Text></DataTable.Title>
                    )
                  })
                }
              </DataTable.Header>
              {
                tableData.map((item, index) => {
                  return (
                    <DataTable.Row
                      key={item.id.toString()+index}
                    >
                      <DataTable.Cell><Text style={TableStyle.cellText}>{item.pi_no}</Text> </DataTable.Cell>
                      <DataTable.Cell><Text style={TableStyle.cellText}>{item.amount}</Text>  </DataTable.Cell>
                      <DataTable.Cell><Text style={TableStyle.cellText}>{item.payment_date}</Text>  </DataTable.Cell>
                      <DataTable.Cell>
                        <View style={TableStyle.manageView}>
                          <TouchableOpacity style={TableStyle.manageIconView} onPress={() => onPressManage("Edit", item.id,item)}>
                            <IconEA
                              color={Colors.blue} size={SF(20)}
                              name="edit"
                            />
                          </TouchableOpacity>
                          <TouchableOpacity style={TableStyle.manageIconView} onPress={() => onPressManage("View", item.id, item)}>
                            <IconEA
                              color={Colors.green} size={SF(25)}
                              name="eye"
                            />
                          </TouchableOpacity>
                          <TouchableOpacity style={TableStyle.manageIconView} onPress={() => onPressManage("Delete", item.id)}>
                            <IconEA
                              color={Colors.theme_backgound_second} size={SF(25)}
                              name="circle-with-cross"
                            />
                          </TouchableOpacity>
                        </View>
                      </DataTable.Cell>
                    </DataTable.Row>
                  )
                })
              }
            </DataTable>
            </ScrollView>
}
          </View>
        </View>

       <PaymentDetailsModal
        visible={modalVisible}
        setModalVisible={setModalVisible}
        viewDetailData={viewDetailData}
       />
      
      <SweetAlertModal
        modalVisible={alertVisible}
        message={message}
        {...extraProps}
        />
 {/* </KeyboardAvoidingView> */}
    </Container>
  );
};

export default InwardPaymentScreen;
