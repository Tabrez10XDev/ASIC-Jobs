import React, { useMemo } from 'react';
import { TouchableOpacity, StyleSheet, Text, Image, View } from 'react-native';
import PropTypes from 'prop-types';
import { Fonts, SF, SH, SW ,Colors} from '../../utils';
import { useTheme } from '@react-navigation/native';
import { useSelector } from "react-redux";
import { Button } from 'react-native-elements';

function Buttons(props) {
  const { containerStyle,title, onPress, buttonStyle, disable, buttonTextStyle, imagesource, loading=false,icon=null,iconContainerStyle } = props;
  const styles = useMemo(
    () =>
      StyleSheet.create({
        containerStyle: {
          backgroundColor: Colors.theme_backgound_second,
          // alignItems: 'center',
          borderRadius: SW(5),
          justifyContent: 'center',
          width: '100%',
          paddingHorizontal:0,
          ...containerStyle
        },
        buttonStyle: {
          backgroundColor: Colors.theme_backgound_second,
          alignItems: 'center',
          borderRadius: SW(5),
          justifyContent: 'center',
          width: '100%',
          paddingLeft:0,
          paddingRight:0,
          ...buttonStyle
        },
        buttonTextStyle: {
          color: Colors.white,
          fontSize: SF(20),
          fontFamily:Fonts.Poppins_Regular,
          ...buttonTextStyle,
        },
        buttonViewStyle: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          
        },
        disabledStyle:{
          backgroundColor:Colors.theme_backgound_disabled,
          opacity:0.5
        },
        disabledTitleStyle:{
          color:Colors.white
        },
        iconContainerStyle:{
          marginRight: SW(10),
          ...iconContainerStyle
        }
      }),
    [buttonStyle,buttonTextStyle, Colors],
  );

  var extraProps = {};
  if(icon) {
      extraProps['iconContainerStyle'] = styles.iconContainerStyle,
      extraProps['icon'] = icon

  }
  return (
     <Button
              title={title}
              disabled={disable}
              loading={loading}
              loadingProps={{ size: 'small', color: Colors.white }}
              buttonStyle={styles.buttonStyle}
              titleStyle={styles.buttonTextStyle}
              containerStyle={styles.containerStyle}
              onPress={() => onPress()}
              disabledStyle={styles.disabledStyle}
              disabledTitleStyle={styles.disabledTitleStyle}
              {...extraProps}
            />
  );
}

Buttons.defaultProps = {
  title: '',
  onPress: () => { },
  buttonStyle: {},
  disable: false,
  imagesource: null,
  buttonTextStyle: {},
  spacedImages: false,
};

Buttons.propTypes = {
  title: PropTypes.string,
  onPress: PropTypes.func,
  buttonStyle: PropTypes.shape({}),
  disable: PropTypes.bool,
  imagesource: PropTypes.any,
  buttonTextStyle: PropTypes.shape({}),
  spacedImages: PropTypes.bool
};

export default Buttons;
