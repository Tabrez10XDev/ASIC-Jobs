import React from 'react';
import { View, Text } from 'react-native';
import { Style, DropdownStyle } from '../../../styles';
import { Input, DropDown, RadioButton, DateInput } from '../../../components';
import { setDateFormat } from '../../../utils';

const ExportSalesFirstTab = (props) => {
  const { getPiNoList, lable, state, dropDownOnchnage, stateError, setState, handleValidation,
    arrayData,
    setShowDatepicker
  } = props;
  const _renderItem = item => {
    return (
      <View style={DropdownStyle.item}>
        <Text style={DropdownStyle.textItem}>{item.pi_no}</Text>
      </View>
    );
  };
  return (
    <View>
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
        title={lable.InvoiceNo}
        required={true}
        placeholder={lable.InvoiceNo}
        errorMessage={stateError.InvoiceNo}
        onChangeText={(text) => setState({ ...state, InvoiceNo: text })}
        value={state.InvoiceNo}
        onEndEditing={(e) => handleValidation(e.nativeEvent.text, 'InvoiceNo')}
      />
      <RadioButton
        arrayData={arrayData}
        title={lable.CfsReachStatus}
        errorMessage={""}
        onChangeText={(text) => setState({ ...state, CfsReachStatus: text })}
        value={state.CfsReachStatus}
      />
      {state.CfsReachStatus == '1' &&
        <>
          <RadioButton
            arrayData={arrayData}
            title={lable.Unload}
            errorMessage={""}
            onChangeText={(text) => setState({ ...state, Unload: text })}
            value={state.Unload}
          />
          {state.Unload == '1' &&
            <>
              <DateInput
                label={lable.Date}
                value={setDateFormat(state.Date)}
                onPress={() => setShowDatepicker(true, "Date")}
                textError={''}
              />
              <View style={Style.ProductAddMoreView}>
                <Input
                  title={lable.UnloadWeight}
                  required={false}
                  placeholder={lable.UnloadWeight}
                  errorMessage={""}
                  onChangeText={(text) => setState({ ...state, UnloadWeight: text })}
                  value={state.UnloadWeight}
                  containerStyle={Style.ProductAddMoreViewWidth}
                />
                <Input
                  title={lable.WeighLost}
                  required={false}
                  placeholder={lable.WeighLost}
                  errorMessage={""}
                  onChangeText={(text) => setState({ ...state, WeighLost: text })}
                  value={state.WeighLost}
                  containerStyle={Style.ProductAddMoreViewWidth}
                />
              </View>
            </>
          }
        </>
      }
    </View>
  );
}


export default ExportSalesFirstTab;
