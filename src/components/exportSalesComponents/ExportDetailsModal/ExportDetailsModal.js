import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { ModalComponent, Spacing } from '../../../components';
import { SH, Strings } from '../../../utils';
import { Style } from '../../../styles';
import { useSelector } from 'react-redux';

const ExportDetailsModal = (props) => {
  const { visible, setModalVisible, viewDetailData } = props;
  const { getSettingData} = useSelector((state) => state.commonReducer);
  const lable = getSettingData?.Strings.export;

  return (
    <ModalComponent
      visible={visible}
      setModalVisible={setModalVisible}
    >
      <ScrollView>

        <View style={Style.viewDetailModalView}>

          <Text style={Style.viewDetailModalHeader}>{Strings.common.exportlabel} Detail</Text>
          <Spacing space={SH(20)} />

          <Text style={Style.viewDetailText}><Text style={Style.viewDetailTextLabel}>{lable.PINO} :</Text> <Text style={Style.viewDetailBoldText}>{viewDetailData?.pi_no}</Text></Text>
          <Spacing space={SH(20)} />
          <Text style={Style.viewDetailText}><Text style={Style.viewDetailTextLabel}>{lable.InvoiceNo} :</Text> <Text style={Style.viewDetailBoldText}>{viewDetailData?.invoice}</Text></Text>
          <Spacing space={SH(20)} />

          <Text style={Style.viewDetailText}><Text style={Style.viewDetailTextLabel}>{lable.CfsReachStatus} :</Text> {viewDetailData?.cfs_reach_status == "1" ? 'Yes' : 'No'}</Text>

          <Text style={Style.detailHr}></Text>
          <Text style={Style.viewDetailText}><Text style={Style.viewDetailTextLabel}>{lable.Unload} :</Text> {viewDetailData?.unload_status == "1" ? 'Yes' : 'No'}</Text>
          <Spacing space={SH(20)} />

          {viewDetailData?.unload_status == "1" &&
            <>
              <Text style={Style.viewDetailText}><Text style={Style.viewDetailTextLabel}>{lable.Date} :</Text> {viewDetailData?.unload_date}</Text>
              <Spacing space={SH(20)} />
              <Text style={Style.viewDetailText}><Text style={Style.viewDetailTextLabel}>{lable.UnloadWeight} :</Text> {viewDetailData?.unload_weight}</Text>
              <Spacing space={SH(20)} />
              <Text style={Style.viewDetailText}><Text style={Style.viewDetailTextLabel}>{lable.WeighLost} :</Text> {viewDetailData?.lost_weight}</Text>
             </>
          }
          <Text style={Style.detailHr}></Text>

          <Text style={Style.viewDetailText}><Text style={Style.viewDetailTextLabel}>{lable.ContainerBooked} :</Text> {viewDetailData?.container_book_status == "1" ? 'Yes' : 'No'}</Text>



          <Text style={Style.detailHr}></Text>
          <Text style={Style.viewDetailText}><Text style={Style.viewDetailTextLabel}>{lable.Stuffing} :</Text> {viewDetailData?.stuffing_status == "1" ? 'Yes' : 'No'}</Text>



          {viewDetailData?.stuffing_status == "1" &&
            <>
              <Spacing space={SH(20)} />
              <Text style={Style.viewDetailText}><Text style={Style.viewDetailTextLabel}>{lable.StuffingDate} :</Text> {viewDetailData?.stuffing_date}</Text>
            </>
          }
          <Text style={Style.detailHr}></Text>
          
          <Text style={Style.viewDetailText}><Text style={Style.viewDetailTextLabel}>{lable.ContainerNo} :</Text> {viewDetailData?.container_no}</Text>
          <Spacing space={SH(20)} />

          <Text style={Style.viewDetailText}><Text style={Style.viewDetailTextLabel}>{lable.ShippingLine} :</Text> {viewDetailData?.shipping_line}</Text>
          <Spacing space={SH(20)} />


          <Text style={Style.viewDetailText}><Text style={Style.viewDetailTextLabel}>{lable.No} :</Text> {viewDetailData?.bl_no}</Text>
          <Spacing space={SH(20)} />

          <Text style={Style.viewDetailText}><Text style={Style.viewDetailTextLabel}>{lable.SailDate} :</Text> {viewDetailData?.sail_date}</Text>
          <Spacing space={SH(20)} />

          <Text style={Style.viewDetailText}><Text style={Style.viewDetailTextLabel}>{lable.ETADate} :</Text> {viewDetailData?.arrival_date}</Text>
          <Spacing space={SH(20)} />

          <Text style={Style.viewDetailText}><Text style={Style.viewDetailTextLabel}>{lable.DestinationPortDate} :</Text> {viewDetailData?.dest_port_date}</Text>
          <Spacing space={SH(20)} />


        </View>
      </ScrollView>

    </ModalComponent>
  );
}


export default ExportDetailsModal;
