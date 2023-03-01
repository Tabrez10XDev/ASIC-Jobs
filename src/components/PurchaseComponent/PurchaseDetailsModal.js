import React from 'react';
import {  View,Text,ScrollView } from 'react-native';
import { ModalComponent,Spacing } from '../../components';
import { SH, Strings } from '../../utils';
import { Style } from '../../styles';
import { useSelector } from 'react-redux';

const PurchaseDetailsModal = (props) => {
  const {visible,setModalVisible,viewDetailData } = props;
  const { getSettingData} = useSelector((state) => state.commonReducer);
  const lable = getSettingData?.Strings.purchase;

  return (
    <ModalComponent
    visible={visible}
    setModalVisible={setModalVisible}
  >
  <ScrollView>

    <View style={Style.viewDetailModalView}>

      <Text style={Style.viewDetailModalHeader}>{Strings.common.purchaselabel} Detail</Text>
      <Spacing space={SH(20)} />

      <Text style={Style.viewDetailText}><Text style={Style.viewDetailTextLabel}>{lable.PINO} :</Text> <Text style={Style.viewDetailBoldText}>{viewDetailData?.pi_no}</Text></Text>
      <Spacing space={SH(20)} /> 
      <Text style={Style.viewDetailText}><Text style={Style.viewDetailTextLabel}>{lable.Vendor} :</Text> {viewDetailData?.vendor}</Text>

      <Spacing space={SH(20)} />
      <Text style={Style.viewDetailText}><Text style={Style.viewDetailTextLabel}>{lable.BrokerName} :</Text> {viewDetailData?.broker_name}</Text>
      <Spacing space={SH(20)} />

      <Text style={Style.viewDetailText}><Text style={Style.viewDetailTextLabel}>{lable.Brokerage} :</Text> {viewDetailData?.brokerage}</Text>
  
      <Spacing space={SH(20)} />
      <Text style={Style.viewDetailText}><Text style={Style.viewDetailTextLabel}>{lable.Loading} :</Text> {viewDetailData?.loading_status == "1" && 'yes'}</Text>
      <Spacing space={SH(20)} />
      <Text style={Style.viewDetailText}><Text style={Style.viewDetailTextLabel}>{lable.QualityCheckBy} :</Text> {viewDetailData?.quality_checkby}</Text>


      <Spacing space={SH(20)} />

      <Text style={Style.viewDetailText}><Text style={Style.viewDetailTextLabel}>{lable.CreatedDate} :</Text> {viewDetailData?.purchase_date}</Text>

      <Spacing space={SH(20)} />

      <Text style={[Style.viewDetailText, Style.viewDetailBoldText]}>{lable.Product}:</Text>
      <Spacing space={SH(20)} />

      {viewDetailData && viewDetailData?.product.length != 0 &&
        viewDetailData?.product.map((item, index) => {
          return (
            <View key={index}>
              {index != 0 && <View style={Style.detailHr}></View>}
              <Text style={Style.viewDetailText}><Text style={Style.viewDetailTextLabel}>{lable.ProductName} :</Text> {item?.product_name}</Text>
              <Spacing space={SH(15)} />

              <View style={Style.viewDirectionRow}>
                <View style={Style.viewDirectionRowSize}>
                  <Text style={Style.viewDetailText}><Text style={Style.viewDetailTextLabel}>{lable.Price} :</Text> {item?.price}</Text>
                </View>
                <View style={Style.viewDirectionRowSize}>
                  <Text style={Style.viewDetailText}><Text style={Style.viewDetailTextLabel}>{lable.Quantity} :</Text> {item?.quantity}</Text>
                </View>
              </View>
              <Spacing space={SH(15)} />
              <Text style={[Style.viewDetailText,Style.viewDetailBoldText]}>{lable.Total} : {item?.total}</Text>
            </View>
          )
        })
      }

    </View>
  </ScrollView>

  </ModalComponent>
  );
}


export default PurchaseDetailsModal;
