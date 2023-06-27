import React, { useEffect } from 'react';
import { View, StatusBar } from 'react-native';
import images from '../../index';
import { Style } from '../../styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import { color_picker_set_action } from "../../redux/action/CommonAction";
import { RouteName } from '../../routes';
import { Lottie } from '../../components';
import { Colors } from '../../utils';
import { useSelector } from "react-redux";
import { useState } from 'react';

const SplashScreen = ({ navigation }) => {
    const { colorrdata } = useSelector(state => state.commonReducer) || {};
    StatusBar.setBackgroundColor(Colors.theme_background_brink_pink);
    const dispatch = useDispatch();
    // const [authState, setAuthState] = useState(true)

    const getData = async () => {
        try {
            const result = await AsyncStorage.getItem('BoardingState')
            if (result === "true") {
                const result = await AsyncStorage.getItem('AuthState')
                if(result !== null && result != "-1" && result != undefined){
                    navigation.replace(RouteName.HOME_SCREEN)
                }else{
                    navigation.replace(RouteName.LOGIN_SCREEN)
                }
            } else {
                navigation.replace(RouteName.SWIPER_SCREEN)
            }
        } catch (e) {
            console.error(e)
        }
    }


    useEffect(() => {
        setTimeout(() => {
            getData()
        }, 2500);
        {
            colorrdata != '' ?
                dispatch(color_picker_set_action(colorrdata))
                :
                dispatch(color_picker_set_action(Colors.theme_background_brink_pink))
        }
    }, []);
    return (
        <View style={Style.Splashminview}>
            <View style={Style.setminviewstylesplasg}>
                <Lottie source={images.Splash_Swiper} />
            </View>
        </View>
    );
};
export default SplashScreen;
