import React, { useState, useMemo } from 'react';
import { View, Text, ScrollView, Image, TextInput, Pressable, TouchableOpacity, } from 'react-native';
import { Button, Container, Input, Spacing } from '../../../components';
import { RouteName } from '../../../routes';
import { Style, Login } from '../../../styles';
import { useTogglePasswordVisibility, Colors, SH } from '../../../utils';
import IconG from 'react-native-vector-icons/Ionicons';
import { useNavigation, useTheme } from '@react-navigation/native';
import images from '../../../index';
import { useTranslation } from "react-i18next";

const LoginScreen = () => {
    const { Colors } = useTheme();
    const Logins = useMemo(() => Login(Colors), [Colors]);
    const navigation = useNavigation();
    const [mobileNumber, setMobileNumber] = useState('');
    const [textInputpassword, setTextInputPassword] = useState('');
    const { t } = useTranslation();

    const OnRegisterPress = () => {
        navigation.navigate(RouteName.REGISTER_SCREEN);
    }
    const { passwordVisibility, rightIcon, handlePasswordVisibility } =
        useTogglePasswordVisibility();

    return (
        <Container>
            <View style={Logins.minstyleviewphotograpgy}>

                <ScrollView
                    keyboardShouldPersistTaps="handled"
                    contentContainerStyle={{
                        width: '100%',
                        height: 'auto',
                    }}>
                    <View style={Logins.container}>
                        <View style={Style.minviewallcontent}>
                            <View style={Logins.setimagviewLogins}>
                                <Image style={Logins.imagesetus} resizeMode='cover' source={images.App_logo} />
                            </View>
                            <Text style={Logins.setpatintlogin}>{t("Login_text")}</Text>
                            <Spacing space={SH(20)} />
                            <View style={Logins.setbottomspasce}>
                                <Input
                                    placeholder={t("Mobile_Number")}
                                    onChangeText={(value) => setMobileNumber(value)}
                                    value={mobileNumber}
                                    inputType="numeric"
                                    maxLength={10}
                                    placeholderTextColor={Colors.gray_text_color}
                                />
                            </View>
                            <Spacing space={SH(20)} />
                            <View style={Style.flexrowpassword}>
                                <TextInput
                                    style={Style.setinputpassword}
                                    name="password"
                                    onPress={handlePasswordVisibility}
                                    placeholder={t("Password_text")}
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    placeholderTextColor={'gray'}
                                    textContentType="newPassword"
                                    secureTextEntry={passwordVisibility}
                                    enablesReturnKeyAutomatically
                                    onChangeText={(value) => setTextInputPassword(value)}
                                />
                                <Pressable onPress={handlePasswordVisibility}>
                                    <IconG name={rightIcon} size={25} style={Logins.eyeiconset} />
                                </Pressable>
                            </View>
                            <Spacing space={SH(10)} />
                            <View style={Logins.viewtextStyle}>
                                <Text style={Logins.textStyle}>{t("Dont_have_account")} <Text style={Logins.registerTextStyle} onPress={() => OnRegisterPress()}> {t("Register_Text")}</Text></Text>
                            </View>
                            <Spacing space={SH(20)} />
                            <View style={Logins.buttonviewsettopspace}>
                                <Button
                                    title={t("Login_text")}
                                    onPress={() => navigation.navigate(RouteName.OTP_VERYFY_SCREEN)}
                                />
                            </View>
                            <Spacing space={SH(10)} />
                            <TouchableOpacity onPress={() => navigation.navigate(RouteName.FORGET_PASSWORD)}>
                                <Text style={Logins.Forgetpasswordstyles}>{t("Forgot_Password")}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </Container>
    );
}
export default LoginScreen;
