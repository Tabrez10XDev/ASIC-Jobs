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

const OtpScreenset = () => {
    const { t } = useTranslation();
    const { Colors } = useTheme();
    const Style = useMemo(() => Styles(Colors), [Colors]);
    const navigation = useNavigation();
    const [alertVisible, setAlertVisible] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [okbutton, Setokbutton] = useState('');
    var alertdata = {
        'logout': t("Resand_Otp_Text_Modal"),
        'loginSuccess': t("Login_Successfull"),
    }
    const onoknutton = () => {
        if (okbutton === 1) okbutton;
        if (okbutton === 2) navigation.navigate(RouteName.JOB_TYPES_SCREEN)
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
                                <Text style={Style.EnterSixDigitText}>{t("Enter_Six_Digit_OTP")}</Text>
                                <Text style={Style.paregraph}>{t("Enter_The_Otp_Title")}</Text>
                                <OTPInputView
                                    style={Style.OtpViewStyles}
                                    pinCount={6}
                                    autoFocusOnLoad={false}
                                    codeInputFieldStyle={Style.CodeInputStyles}
                                    codeInputHighlightStyle={Style.CodeInputStyles}
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
                                <View>
                                    <Button onPress={() => {
                                        setAlertVisible(true);
                                        setAlertMessage(alertdata.loginSuccess);
                                        Setokbutton(2);
                                    }} title={t("Verify_Text")} />
                                </View>
                            </View>
                        </View>
                    </KeyboardAvoidingView>
                </ScrollView>
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
