import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { ModalComponent, Spacing } from '../../components';
import { SH, Strings } from '../../utils';
import { Style } from '../../styles';
import { useSelector } from 'react-redux';

const PIDetailsModal = (props) => {
  const { visible, setModalVisible, viewDetailData } = props;
  const { getSettingData} = useSelector((state) => state.commonReducer);
  const lable = getSettingData?.Strings.expense;
  return (
    <ModalComponent
      visible={visible}
      setModalVisible={setModalVisible}
    >
      <ScrollView>

        <View style={Style.viewDetailModalView}>

          <Text style={Style.viewDetailModalHeader}>{Strings.common.expenselabel} Detail</Text>
          <Spacing space={SH(20)} />

          <Text style={Style.viewDetailText}><Text style={Style.viewDetailTextLabel}>{lable.PINO} :</Text> <Text style={Style.viewDetailBoldText}>{viewDetailData?.pi_no}</Text></Text>
          <Spacing space={SH(20)} />

          <Text style={[Style.viewDetailText, Style.viewDetailBoldText]}>{lable.ExpenseType}:</Text>
          <Spacing space={SH(20)} />

          {viewDetailData && viewDetailData?.expense.length != 0 &&
            viewDetailData?.expense.map((item, index) => {
              return (
                <View>
                  <Text style={Style.viewDetailText}><Text style={Style.viewDetailTextLabel}>{lable.ExpenseName} :</Text> {item?.expense_name}</Text>
                  <Spacing space={SH(15)} />

                  <Text style={Style.viewDetailText}><Text style={Style.viewDetailTextLabel}>{lable.Amount} :</Text> {item?.amount}</Text>
                  <Spacing space={SH(15)} />

                  <Text style={Style.viewDetailText}><Text style={Style.viewDetailTextLabel}>{lable.Note} :</Text> {item?.note}</Text>

                  <View style={Style.detailHr}></View>
                </View>
              )
            })
          }
          <Text style={[Style.viewDetailText, Style.viewDetailBoldText]}>{lable.Total}: {viewDetailData?.total_amount}</Text>

          <Spacing space={SH(20)} />

          <Text style={Style.viewDetailText}><Text style={Style.viewDetailTextLabel}>{lable.CreatedDate}:</Text> {viewDetailData?.created_at}</Text>

          <Spacing space={SH(20)} />
        </View>
      </ScrollView>

    </ModalComponent>
  );
}


export default PIDetailsModal;
