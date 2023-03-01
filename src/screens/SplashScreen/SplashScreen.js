import React, { useEffect } from 'react';
import { View, Image, Text, StatusBar} from 'react-native';
import images from '../../index';
import { Style } from '../../styles';
import { useDispatch,useSelector } from 'react-redux';
import { color_picker_set_action } from "../../redux/action/CommonAction";
import {Colors} from '../../utils'
import RouteName from '../../routes/RouteName';
const SplashScreen = ({ navigation }) => {
    const { userDetails } = useSelector(state => state.authReducer) || {};
    useEffect(() => {
        StatusBar.setBackgroundColor(Colors.theme_backgound_second);
        setTimeout(() => {
            if(userDetails.length != 0){
                navigation.replace(RouteName.DRAWER_NAVIGATOR)
            }else{
                navigation.replace(RouteName.LOGIN_SCREEN)
            }
        }, 2100);
    }, [userDetails]);
    return (
            <View style={Style.setminviewstylesplasg}>
                <Image resizeMode='contain' source={images.logo_white} style={Style.setsplashscreehhieight} />
            </View>
    );
};
export default SplashScreen;
