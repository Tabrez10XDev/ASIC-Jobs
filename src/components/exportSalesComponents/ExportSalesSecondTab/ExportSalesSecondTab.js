import React from 'react';
import {  TouchableOpacity, View,Text } from 'react-native';
import { Input, RadioButton, DateInput, FileUploadInput } from '../../../components';
import { setDateFormat } from '../../../utils';

const ExportSalesSecondTab = (props) => {
  const { lable, state, setState,
    arrayData,
    setShowDatepicker,
    fileUpload,
    singleFile
  } = props;

  return (
    <View>
       

      <RadioButton
        arrayData={arrayData}
        title={lable.ContainerBooked}
        errorMessage={""}
        onChangeText={(text) => setState({ ...state, ContainerBooked: text })}
        value={state.ContainerBooked}
      />
      <RadioButton
        arrayData={arrayData}
        title={lable.Stuffing}
        errorMessage={""}
        onChangeText={(text) => setState({ ...state, Stuffing: text })}
        value={state.Stuffing}
      />
      {state.Stuffing == '1' &&
        <>
          <DateInput
            label={lable.StuffingDate}
            value={setDateFormat(state.StuffingDate)}
            onPress={() => setShowDatepicker(true, "StuffingDate")}
            textError={''}
          />

        </>
      }
      <Input
        title={lable.ContainerNo}
        placeholder={lable.ContainerNo}
        errorMessage={""}
        onChangeText={(text) => setState({ ...state, ContainerNo: text })}
        value={state.ContainerNo}
      />

      <Input
        title={lable.ShippingLine}
        placeholder={lable.ShippingLine}
        errorMessage={""}
        onChangeText={(text) => setState({ ...state, ShippingLine: text })}
        value={state.ShippingLine}
      />
      <Input
        title={lable.No}
        placeholder={lable.No}
        errorMessage={""}
        onChangeText={(text) => setState({ ...state, No: text })}
        value={state.No}
      />
       <DateInput
            label={lable.SailDate}
            value={setDateFormat(state.SailDate)}
            onPress={() => setShowDatepicker(true, "SailDate")}
            textError={''}
          />
            <DateInput
            label={lable.ETADate}
            value={setDateFormat(state.ETADate)}
            onPress={() => setShowDatepicker(true, "ETADate")}
            textError={''}
          />
             <DateInput
            label={lable.DestinationPortDate}
            value={setDateFormat(state.DestinationPortDate)}
            onPress={() => setShowDatepicker(true, "DestinationPortDate")}
            textError={''}
          />
          <FileUploadInput onPress={()=>fileUpload()} label={lable?.POD} value={singleFile && singleFile.length + " Item Selected"} />

    </View>
  );
}


export default ExportSalesSecondTab;
