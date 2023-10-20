import React, { useState, useMemo } from "react";
import { Text, View, ScrollView, ImageBackground, KeyboardAvoidingView, TouchableOpacity, } from "react-native";
import Styles from '../../../styles/LoginRegiesterStyle/OtpScreenStyle';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import images from '../../../index';
import RouteName from '../../../routes/RouteName';
import { useNavigation } from '@react-navigation/native';
import { Button, ConfirmationAlert } from '../../../components';
import { useTranslation } from "react-i18next";
import { useTheme } from '@react-navigation/native';
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';

const OtpScreenset = ({ route }) => {
    const { t } = useTranslation();
    const { Colors } = useTheme();
    const Style = useMemo(() => Styles(Colors), [Colors]);
    const navigation = useNavigation();
    const [alertVisible, setAlertVisible] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [okbutton, Setokbutton] = useState('');
    var alertdata = {
        'logout': t("Resand_Otp_Text_Modal"),
        'loginSuccess': "Registration Successful",
    }

    const state = route.params

    const saveLogin = async (id) => {
        try {
            await AsyncStorage.setItem('AuthState', id)
        } catch (err) {
            alert(err)
        }
    }

    function authenticate(code) {

        if (state.toggleCheckBox === false) {
            return
        }

        console.log("in")

        // navigation.navigate(RouteName.OTP_VERYFY_SCREEN, state)

        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `https://asicjobs.in/api/webapi.php?api_action=verify_otp&otp=${code}&userid=${state.id}`,
        };

        // let config = {
        //     method: 'get',
        //     maxBodyLength: Infinity,
        //     url: `https://asicjobs.in/api/webapi.php?api_action=signup&name=${state.name}&username=${state.username}&email=${state.emailId}&password=${state.textInputPassword}&role=employee`,
        // };

        axios.request(config)
            .then((response) => {
                if (response.data.status == true) {
                    saveLogin(state.id.toString())
                    console.log(JSON.stringify(response.data));
                    navigation.navigate(RouteName.REGIATRAION_SUCCESSFULL);
                } else {
                    Toast.show({
                        type: 'error',
                        text1: response.data.msg
                    });
                }
            })
            .catch((error) => {
                console.log(error);
            });

    }

    const onoknutton = () => {
        if (okbutton === 1) okbutton;
        if (okbutton === 2) authenticate()
    }
    return (
        <ImageBackground source={images.full_bg_img_hospital} resizeMode='cover'>
            <View style={Style.MinViewScreen}>
                <ScrollView
                    keyboardShouldPersistTaps="handled"
                    contentContainerStyle={{
                        width: '100%',
                        height: 'auto',
                    }}>
                    <KeyboardAvoidingView enabled>
                        <View style={Style.MinFlexView}>
                            <View style={Style.MinViewSecond}>
                                <Text style={Style.EnterSixDigitText}>Enter 4 Digit OTP</Text>
                                <Text style={Style.paregraph}>{t("Enter_The_Otp_Title")}</Text>
                                <OTPInputView
                                    style={Style.OtpViewStyles}
                                    pinCount={4}
                                    autoFocusOnLoad={false}
                                    codeInputFieldStyle={Style.CodeInputStyles}
                                    codeInputHighlightStyle={Style.CodeInputStyles}
                                    onCodeFilled={(code) => {
                                        console.log(`Code is ${code}, you are good to go!`)
                                        authenticate(code)
                                    }}
                                />
                                <View style={Style.FlexRowText}>
                                    <Text style={Style.ParegraPhotpBottom}>{t("Didnt_Recevip_Otp")}</Text>
                                    <TouchableOpacity onPress={() => {
                                        setAlertVisible(true);
                                        setAlertMessage(alertdata.logout);
                                        Setokbutton(1);
                                    }}>
                                        <Text style={Style.ResendTextBold}>{t("Resend")}</Text>
                                    </TouchableOpacity>
                                </View>
                                {/* <View>
                                    <Button onPress={() => {
                                        setAlertVisible(true);
                                        setAlertMessage(alertdata.loginSuccess);
                                        Setokbutton(2);
                                    }} title={t("Verify_Text")} />
                                </View> */}
                            </View>
                        </View>
                    </KeyboardAvoidingView>
                </ScrollView>
                <Toast
                    position='bottom'
                    bottomOffset={20}
                />
                <ConfirmationAlert
                    message={alertMessage}
                    modalVisible={alertVisible}
                    setModalVisible={setAlertVisible}
                    onPress={() => { setAlertVisible(!alertVisible), onoknutton() }}
                    buttonminview={Style.buttonotp}
                    iconVisible={true}
                    buttonText={t("Ok")}
                />
            </View>
        </ImageBackground>
    );
};
export default OtpScreenset;
