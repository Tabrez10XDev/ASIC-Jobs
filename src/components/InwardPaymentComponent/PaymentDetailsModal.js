import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { ModalComponent, Spacing } from '../../components';
import { SH, Strings } from '../../utils';
import { Style } from '../../styles';
import { useDispatch, useSelector } from 'react-redux';

const PaymentDetailsModal = (props) => {
  const { visible, setModalVisible, viewDetailData } = props;
  const { getSettingData} = useSelector((state) => state.commonReducer);
  const lable = getSettingData?.Strings.inwardpayment;

  return (
    <ModalComponent
      visible={visible}
      setModalVisible={setModalVisible}
    >
      <ScrollView>

        <View style={Style.viewDetailModalView}>

          <Text style={Style.viewDetailModalHeader}>{Strings.common.paymentlabel} Detail</Text>
          <Spacing space={SH(20)} />

          <Text style={Style.viewDetailText}><Text style={Style.viewDetailTextLabel}>{lable.PINO} :</Text> <Text style={Style.viewDetailBoldText}>{viewDetailData?.pi_no}</Text></Text>
          <Spacing space={SH(20)} />
          <Text style={Style.viewDetailText}><Text style={Style.viewDetailTextLabel}>{lable.Amount} :</Text> {viewDetailData?.amount}</Text>

          <Spacing space={SH(20)} />

          <Text style={Style.viewDetailText}><Text style={Style.viewDetailTextLabel}>{lable.Date} :</Text> {viewDetailData?.payment_date}</Text>
          <Spacing space={SH(20)} />

          <Text style={Style.viewDetailText}><Text style={Style.viewDetailTextLabel}>{lable.PaymentThrough} :</Text> {viewDetailData?.payment_through}</Text>
          <Spacing space={SH(20)} />

        </View>
      </ScrollView>

    </ModalComponent>
  );
}


export default PaymentDetailsModal;
