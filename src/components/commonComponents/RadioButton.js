import React, { useMemo } from 'react';
import propTypes from 'prop-types';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { SF, SH, SW, Fonts, Colors } from '../../utils';
import { CheckBox } from 'react-native-elements';

function RadioButton({
  title,
  onChangeText,
  value,
  errorMessage,
  arrayData
}) {
  const colorsset = Colors;
  const styles = useMemo(
    () =>
      StyleSheet.create({
        container: {
          width: "100%",
          paddingHorizontal:SW(15)
        },
        radioButtonView: {
          flexDirection: 'row',
          justifyContent:'flex-start'
        },
        labelStyle: {
          fontSize: SF(15),
          color: colorsset.theme_backgound,
          fontFamily: Fonts.Poppins_Medium,
          paddingVertical: SH(2),
        },
        errorStyle: {
          color:Colors.theme_backgound_second,
          margin: 5,
          fontSize: 12,
        },
        containerStyle:{
          backgroundColor:colorsset.transpharent,
          borderWidth:0,
          padding:0,
          marginLeft:0
        },
      }),
    [colorsset],
  );
  return (
    <View style={styles.container}>
        {title && <Text style={styles.labelStyle}>{title}</Text>}
      <View style={styles.radioButtonView}>
        {arrayData && arrayData.map((item)=>{
          return(
            <CheckBox
            key={item.value}
            title={item.label}
             checked={value === item.value}
             onPress={() => onChangeText(item.value)}
             checkedIcon="dot-circle-o"
             uncheckedIcon="circle-o"
             textStyle={styles.labelStyle}
             containerStyle={styles.containerStyle}
           />
          )
        })}
      </View>
      <Text style={styles.errorStyle}>{errorMessage}</Text>
    </View>
  );
}

RadioButton.defaultProps = {
  title: '',
  placeholder: '',
  titleStyle: {},
  inputStyle: {},
  onChangeText: () => { },
  onFocus: () => { },
  onBlur: () => { },
  value: '',
  textprops: {},
  inputprops: {},
  inputType: null,
  autoCompleteType: ''
};

RadioButton.propTypes = {
  title: propTypes.string,
  autoCompleteType: propTypes.string,
  placeholder: propTypes.string,
  titleStyle: propTypes.shape({}),
  inputStyle: propTypes.shape({}),
  onChangeText: propTypes.func,
  value: propTypes.string,
  textprops: propTypes.object,
  inputprops: propTypes.object,
  onFocus: propTypes.func,
  onBlur: propTypes.func,
  inputType: propTypes.any,
};

export default RadioButton;
