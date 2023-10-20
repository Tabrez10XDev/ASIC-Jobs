import React, { useState, useMemo } from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity, Linking } from 'react-native';
import { Input, Button, CheckBox, Spacing, Countrycode } from '../../../components';
import { SH } from '../../../utils';
import RouteName from '../../../routes/RouteName';
import { Login, Style } from '../../../styles';
import IconG from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from "react-i18next";
import { useTheme } from '@react-navigation/native';
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';

const Register = () => {
    const navigation = useNavigation();
    const { Colors } = useTheme();
    const Logins = useMemo(() => Login(Colors), [Colors]);
    const stateArray = {
        name: "",
        username: "",
        emailId: "",
        mobileNumber: "",
        textInputPassword: "",
        toggleCheckBox: false,
        toggleCheckBox2: false
    };

    const [state, setState] = useState(stateArray);
    const [passwordVisibility, setpasswordVisibility] = useState(true);
    const { t } = useTranslation();
    const onChangeText = (text, type) => {
        if (text === 'TextInputPassword') setpasswordVisibility(!passwordVisibility);
    };


    function authenticate() {

        if (state.toggleCheckBox === false) {
            Toast.show({
                type: 'error',
                text1: "Agree to terms and conditions"
            });
            return
        }


        if (state.name.trim() === "" ||
            state.username.trim() === "" ||
            state.emailId.trim() === "" ||
            state.mobileNumber.trim() === "" ||
            state.textInputPassword.trim() === ""
        ) {
            Toast.show({
                type: 'error',
                text1: "Invalid Entries"
            });
            return
        }

        // navigation.navigate(RouteName.OTP_VERYFY_SCREEN, state)


        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `https://asicjobs.in/api/webapi.php?api_action=signup&name=${state.name}&username=${state.username}&email=${state.emailId}&mobile=${state.mobileNumber.trim()}&password=${state.textInputPassword}&role=employee`,
        };

        axios.request(config)
            .then((response) => {
                if (response.data.status == true) {
                    // saveLogin(response.data.id.toString())
                    console.log(JSON.stringify(response.data));
                    navigation.navigate(RouteName.OTP_VERYFY_SCREEN, {...state, id: response.data.id})
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

    const saveLogin = async (id) => {
        try {
            await AsyncStorage.setItem('AuthState', id)
        } catch (err) {
            alert(err)
        }
    }

    return (
        <View style={Logins.MinViewBgColor}>
            <ScrollView
                contentContainerStyle={Style.ScrollviewStyles}>
                <View style={Logins.container}>
                    <View style={Style.MinViewContent}>
                        <View style={Logins.TopSpaceRegister}>
                            <Text style={Logins.setregistertext}>{t("Sign_Up_Text")}</Text>
                        </View>
                        <View style={Logins.TopSpaceRegisterTwo}>
                            <Text style={Logins.FirstNameTextStyle}>{t("Full_Name_Text")}</Text>
                        </View>
                        <Input
                            placeholder={t("Enter_Your_Name")}
                            onChangeText={(text) => setState({ ...state, name: text })}
                            value={state.name}
                        />
                        <Spacing space={SH(20)} />


                        <View style={Logins.TopSpaceRegisterTwo}>
                            <Text style={Logins.FirstNameTextStyle}>Username</Text>
                        </View>
                        <Input
                            placeholder="Enter Username"
                            onChangeText={(text) => setState({ ...state, username: text })}
                            value={state.username}
                        />
                        <Spacing space={SH(20)} />

                        <View style={Logins.TopSpaceRegisterTwo}>
                            <Text style={Logins.FirstNameTextStyle}>{t("Mobile_number")}</Text>
                        </View>
                        <View style={Logins.MinVieCountry}>
                            <View style={Logins.DropDownIconFlex}>
                                <Countrycode />
                            </View>
                            <Input
                                placeholder={t("Mobile_Number")}
                                onChangeText={(text) => setState({ ...state, mobileNumber: text })}
                                value={state.mobileNumber}
                                maxLength={10}
                                inputType="numeric"
                                placeholderTextColor={Colors.gray_text_color}
                                inputStyle={Logins.inputstyle}
                            />
                        </View>
                        <Spacing space={SH(20)} />
                        <View style={Logins.TopSpaceRegisterTwo}>
                            <Text style={Logins.FirstNameTextStyle}>{t("Email_Text")}</Text>
                        </View>
                        <Input
                            placeholder={t("Enter_Your_Email")}
                            onChangeText={(text) => setState({ ...state, emailId: text })}
                            value={state.emailId}
                            placeholderTextColor={Colors.gray_text_color}
                        />
                        <Spacing space={SH(20)} />
                        <View style={Logins.TopSpaceRegisterTwo}>
                            <Text style={Logins.FirstNameTextStyle}>{t("Password_Text")}</Text>
                        </View>
                        <View style={Style.FlexRowPassword}>
                            <TextInput
                                style={Style.InputPassword}
                                name="password"
                                value={state.textInputPassword}
                                placeholder={t("Password_Text")}
                                autoCapitalize="none"
                                autoCorrect={false}
                                placeholderTextColor={Colors.gray_text_color}
                                textContentType="newPassword"
                                secureTextEntry={passwordVisibility}
                                enablesReturnKeyAutomatically
                                onChangeText={(text) => setState({ ...state, textInputPassword: text })}
                            />
                            <TouchableOpacity onPress={() => { onChangeText("TextInputPassword") }}>
                                <IconG name={passwordVisibility ? 'eye-off' : 'eye'} size={25} style={Logins.eyeiconset} />
                            </TouchableOpacity>
                        </View>
                        <Spacing space={SH(10)} />
                        <View style={Logins.FlexRowChekBox}>
                            <View>
                                <CheckBox disabled={false}
                                    value={state.toggleCheckBox}
                                    tintColors={{ true: Colors.theme_background_brink_pink, false: Colors.theme_background_brink_pink }}
                                    onValueChange={(text) => setState({ ...state, toggleCheckBox: text })} />
                            </View>
                            <Text style={Logins.SimpleTextStyle}>{t("I_Agree_Text")} <Text style={Logins.borderbottomTwo}><Text style={Logins.bluecolor} onPress={() => Linking.openURL('https://myaccount.google.com/')}> {t("Terms_Of_Service")}  </Text></Text>{t("And_Text")}  <Text onPress={() => Linking.openURL('https://myaccount.google.com/')} style={Logins.bluecolor}>{t("Privacy_Policy")}</Text></Text>
                        </View>
                        <Spacing space={SH(10)} />
                        <View style={Logins.FlexRowChekBox}>
                            <View>
                                <CheckBox disabled={false}
                                    value={state.toggleCheckBox2}
                                    tintColors={{ true: Colors.theme_background_brink_pink, false: Colors.theme_background_brink_pink }}
                                    onValueChange={(text) => setState({ ...state, toggleCheckBox2: text })} />
                            </View>
                            <Text style={Logins.SimpleTextStyle}>I am looking for career guidance<Text style={Logins.borderbottomTwo}><Text style={Logins.bluecolor} onPress={() => Linking.openURL('https://myaccount.google.com/')}> {t("Terms_Of_Service")}  </Text></Text>{t("And_Text")}  <Text onPress={() => Linking.openURL('https://myaccount.google.com/')} style={Logins.bluecolor}>{t("Privacy_Policy")}</Text></Text>
                        </View>
                        <Spacing space={SH(20)} />
                        <View style={Logins.ButtonView}>
                            <Button
                                title={t("Sign_Up_Text")}
                                onPress={() =>
                                    authenticate()
                                }
                                style={Logins.button} />
                        </View>
                        <Spacing space={SH(20)} />
                        <View style={Logins.TopSpace}>
                            <View style={Logins.AlredyAndLoginBox}>
                                <Text style={Logins.MemberTextStyle}>{t("Already_Member")}</Text>
                                <TouchableOpacity onPress={() => navigation.navigate(RouteName.LOGIN_SCREEN)}>
                                    <Text style={Logins.LoginScreenText}>{t("Login_Text")}</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
            <Toast
                position='bottom'
                bottomOffset={20}
            />
        </View>
    );
};
export default Register;
