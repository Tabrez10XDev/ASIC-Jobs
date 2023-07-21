import React, { useState, useMemo } from 'react';
import { View, Text, ScrollView, Image, TextInput, TouchableOpacity, } from 'react-native';
import { Button, Container, Input, Spacing } from '../../../components';
import { RouteName } from '../../../routes';
import { Style, Login } from '../../../styles';
import { SH } from '../../../utils';
import IconG from 'react-native-vector-icons/Ionicons';
import { useNavigation, useTheme } from '@react-navigation/native';
import images from '../../../index';
import { useTranslation } from "react-i18next";
import axios from 'axios';
import SvgUri from 'react-native-svg-uri';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';

const LoginScreen = () => {




    const { Colors } = useTheme();
    const Logins = useMemo(() => Login(Colors), [Colors]);
    const navigation = useNavigation();
    // const [mobileNumber, setMobileNumber] = useState('');
    const [email, setEmail] = useState('')
    const [passwordVisibility, setpasswordVisibility] = useState(true);
    const [TextInputPassword, setTextInputPassword] = useState('');

    const onChangeText = (text) => {
        if (text === 'TextInputPassword') setpasswordVisibility(!passwordVisibility);
    };
    const { t } = useTranslation();

    const OnRegisterPress = () => {
        navigation.navigate(RouteName.REGISTER_SCREEN);
    }

    const saveLogin = async (id) => {
        try {
            await AsyncStorage.setItem('AuthState', id)
        } catch (err) {
            alert(err)
        }
    }

    function authenticate() {

        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `https://asicjobs.in/api/webapi.php?api_action=login&email=${email}&password=${TextInputPassword}`,
        };

        axios.request(config)
            .then((response) => {
                if (response.data.status == true) {
                    saveLogin(response.data.id)
                    console.log(JSON.stringify(response.data));
                    navigation.navigate(RouteName.HOME_SCREEN)
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

    return (
        <Container>
            <View style={{ ...Logins.MinViewScreen, height: '100%' }}>
                <ScrollView
                    keyboardShouldPersistTaps="handled"
                    contentContainerStyle={{
                        width: '100%',
                        height: '100%',
                    }}>
                    <View style={{ ...Logins.container, height: '100%' }}>
                        <View style={Style.MinViewContent}>
                            <View style={Logins.ManViewLogins}>

                                <Image style={{ ...Logins.imagesetus, width: 250 }} resizeMode='contain' source={images.App_logo} />
                            </View>
                            <Text style={Logins.LoginText}>{t("Login_Text")}</Text>
                            <Spacing space={SH(20)} />
                            <View style={Logins.InputSpaceView}>
                                <Input
                                    placeholder="Email"
                                    onChangeText={(value) => setEmail(value)}
                                    value={email}
                                    placeholderTextColor={Colors.gray_text_color}
                                />
                            </View>
                            <Spacing space={SH(20)} />
                            <View style={Style.FlexRowPassword}>
                                <TextInput
                                    style={Style.InputPassword}
                                    name="password"
                                    value={TextInputPassword}
                                    placeholder={t("Password_Text")}
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    placeholderTextColor={Colors.gray_text_color}
                                    textContentType="newPassword"
                                    secureTextEntry={passwordVisibility}
                                    enablesReturnKeyAutomatically
                                    onChangeText={(text) => setTextInputPassword(text)}
                                />
                                <TouchableOpacity onPress={() => { onChangeText("TextInputPassword") }}>
                                    <IconG name={passwordVisibility ? 'eye-off' : 'eye'} size={25} style={Logins.eyeiconset} />
                                </TouchableOpacity>
                            </View>
                            <Spacing space={SH(10)} />
                            <View style={Logins.ViewTextStyle}>
                                <Text style={Logins.textStyle}>{t("Dont_Have_Account")} <Text style={Logins.registerTextStyle} onPress={() => OnRegisterPress()}> {t("Register_Text")}</Text></Text>
                            </View>
                            <Spacing space={SH(20)} />
                            <View style={Logins.LoginButton}>
                                <Button
                                    title={t("Login_Text")}
                                    onPress={() => authenticate()}
                                />
                            </View>
                            <Spacing space={SH(10)} />
                            <TouchableOpacity onPress={() => navigation.navigate(RouteName.Forget_Password)}>
                                <Text style={Logins.Forgetpasswordstyles}>{t("Forgot_Password")}</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={{ position: 'absolute', bottom: 36, right: 12 }} onPress={() => {
                                saveLogin("false")
                                navigation.navigate(RouteName.HOME_SCREEN)
                            }}>
                                <Text style={Logins.Forgetpasswordstyles}>Skip</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </View>
            <Toast
                position='bottom'
                bottomOffset={20}
            />
        </Container>
    );
}
export default LoginScreen;
