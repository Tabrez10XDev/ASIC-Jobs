import React, { useMemo } from 'react';
import propTypes from 'prop-types';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { SF, SH, SW, Fonts, Colors } from '../../utils';
import { useTheme } from '@react-navigation/native';
import { Input } from 'react-native-elements';

function Inputs({
  title,
  placeholder,
  titleStyle,
  inputStyle,
  onChangeText,
  value,
  textprops,
  inputprops,
  onBlur,
  onFocus,
  inputType,
  autoFocus,
  autoCompleteType,
  secureTextEntry,
  maxLength,
  leftIcon = {},
  rightIcon = {},
  errorMessage = "",
  disabled = false,
  required = false,
  containerStyle,
  onEndEditing,
  inputContainerStyle
}) {
  const colorsset = Colors;
  const styles = useMemo(
    () =>
      StyleSheet.create({
        container: { width: '100%', ...containerStyle },
        inputContainerStyle: {
          borderBottomWidth: 0,
          width: "100%",
          ...inputContainerStyle
        },
        input_style: {
          width: '100%',
          borderColor: colorsset.gray,
          fontSize: SF(15),
          color: colorsset.black,
          paddingVertical: SH(8),
          paddingHorizontal: SH(10),
          fontFamily: Fonts.Poppins_Regular,
          backgroundColor: Colors.white,
          borderRadius: SH(7),
          borderWidth: SH(1),
          ...inputStyle,
        },
        labelStyle: {
          width: '100%',
          fontSize: SF(15),
          color: colorsset.theme_backgound,
          fontFamily: Fonts.Poppins_Medium,
          paddingHorizontal: SW(5),
          ...titleStyle,
          fontWeight: '500',
          paddingVertical: SH(2),
        },
        errorStyle: {
          color: colorsset.theme_backgound_second,
          fontFamily: Fonts.Poppins_Regular,
        },


      }),
    [title, titleStyle, inputStyle, colorsset],
  );
  return (
    <View style={styles.container}>
      <Input
        label={title + (required ? "*" : "")}
        placeholder={placeholder}
        onChangeText={(text) => onChangeText(text)}
        leftIcon={leftIcon}
        rightIcon={rightIcon}
        errorMessage={errorMessage}
        disabled={disabled}
        onFocus={() => onFocus()}
        onBlur={() => onBlur()}
        autoFocus={autoFocus}
        keyboardType={!inputType ? 'default' : inputType}
        secureTextEntry={secureTextEntry}
        value={value}
        selectionColor={colorsset.theme_backgound_second}
        maxLength={maxLength}
        {...inputprops}
        errorStyle={styles.errorStyle}
        inputStyle={styles.input_style}
        labelStyle={styles.labelStyle}
        inputContainerStyle={styles.inputContainerStyle}
        onEndEditing={(e) => onEndEditing(e)}
      />

    </View>
  );
}

Inputs.defaultProps = {
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
  autoCompleteType: '',
  onEndEditing: () => { },

};

Inputs.propTypes = {
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
  onEndEditing: propTypes.func,
};

export default Inputs;
