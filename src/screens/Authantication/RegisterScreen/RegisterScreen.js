import React, { useState,useMemo } from 'react';
import { View, Text, ScrollView, TextInput, Pressable, TouchableOpacity, Linking } from 'react-native';
import { Input, Button, CheckBox, Spacing } from '../../../components';
import {  Strings, SH } from '../../../utils';
import RouteName from '../../../routes/RouteName';
import { Login, Style } from '../../../styles';
import { useTogglePasswordVisibility } from '../../../utils/Passwordviseble';
import IconG from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { Countrycode } from '../../../screens';
import IconA from 'react-native-vector-icons/FontAwesome';
import { useTranslation } from "react-i18next";
import { useTheme } from '@react-navigation/native';

const Register = () => {
    const navigation = useNavigation();
    const { Colors } = useTheme();
    const Logins = useMemo(() => Login(Colors), [Colors]);
    const [username, setUsername] = useState('');
    const [emailId, setEmailId] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [toggleCheckBox, setToggleCheckBox] = useState(false);
    const { t } = useTranslation();

    const onChangeText = (text, type) => {
        if (type === 'user_name') setUsername(text);
        if (type === 'emaiId') setEmailId(text);
        if (type === 'mobile') setMobileNumber(text);
        if (type === 'password') setPassword(text);
        if (type === 'city') setCity(text);
        if (type === 'pincode') setPincode(text);
    };

    const { passwordVisibility, rightIcon, handlePasswordVisibility } =
        useTogglePasswordVisibility();
    const [password, setPassword] = useState('');

    return (
        <View style={Logins.minviewbgcolor}>
            <ScrollView
                contentContainerStyle={Style.sacroowviewstyletwor}>
                <View style={Logins.container}>
                    <View style={Style.minviewallcontent}>
                        <View style={Logins.settopspaceregister}>
                            <Text style={Logins.setregistertext}>{t("Sign_up_text")}</Text>
                        </View>
                        <View style={Logins.settopspaceregistertwo}>
                            <Text style={Logins.firstnametextstyle}>{t("fullnametext")}</Text>
                        </View>
                        <Input
                            placeholder={t("Enter_your_name")}
                            onChangeText={(text) => onChangeText(text, 'user_name')}
                            value={username}
                        />
                        <Spacing space={SH(20)} />
                        <View style={Logins.settopspaceregistertwo}>
                            <Text style={Logins.firstnametextstyle}>{t("Mobile_number")}</Text>
                        </View>
                        <View style={Logins.setminviecountry}>
                            <View style={Logins.dropdowniconflex}>
                                <Countrycode />
                                <IconA name={"angle-down"} style={Logins.dropdowniconright} size={20} color={Colors.theme_backgound} />
                            </View>
                            <Input
                                placeholder={t("Mobile_Number")}
                                onChangeText={(text) => onChangeText(text, 'mobile')}
                                value={mobileNumber}
                                maxLength={10}
                                inputType="numeric"
                                placeholderTextColor={Colors.gray_text_color}
                                inputStyle={Logins.inputstyle}
                            />
                        </View>
                        <Spacing space={SH(20)} />
                        <View style={Logins.settopspaceregistertwo}>
                            <Text style={Logins.firstnametextstyle}>{t("Emailtext")}</Text>
                        </View>
                        <Input
                            placeholder={t("Enter_your_Email")}
                            onChangeText={(text) => onChangeText(text, 'emaiId')}
                            value={emailId}
                            placeholderTextColor={Colors.gray_text_color}
                        />
                        <Spacing space={SH(20)} />
                        <View style={Logins.settopspaceregistertwo}>
                            <Text style={Logins.firstnametextstyle}>{t("Passwodtext")}</Text>
                        </View>
                        <View style={Style.flexrowpassword}>
                            <TextInput
                                style={Style.setinputpassword}
                                name="password"
                                placeholderTextColor={Colors.gray_text_color}
                                placeholder={t("Password_text")}
                                autoCapitalize="none"
                                autoCorrect={false}
                                textContentType="newPassword"
                                secureTextEntry={passwordVisibility}
                                value={password}
                                enablesReturnKeyAutomatically
                                onChangeText={text => setPassword(text)}
                            />
                            <Pressable onPress={handlePasswordVisibility}>
                                <IconG name={rightIcon} size={25} style={Logins.eyeiconset} />
                            </Pressable>
                        </View>
                        <Spacing space={SH(10)} />
                        <View style={Logins.flexrowchekbox}>
                            <View>
                                <CheckBox disabled={false}
                                    value={toggleCheckBox}
                                    tintColors={{ true: Colors.theme_backgound, false: Colors.theme_backgound }}
                                    onValueChange={(newValue) => setToggleCheckBox(newValue)} />
                            </View>
                            <Text  style={Logins.simpletextstyle}>{t("I_Agree_Text")} <Text style={Logins.borderbottomTwo}><Text style={Logins.bluecolor} onPress={() => Linking.openURL('https://myaccount.google.com/')}> {t("Terms_Of_Service")}  </Text></Text>{t("And_text")}  <Text  onPress={() => Linking.openURL('https://myaccount.google.com/')} style={Logins.bluecolor}>{t("Privacy_Policy")}</Text></Text>
                        </View>
                        <Spacing space={SH(20)} />
                        <View style={Logins.setbuttonview}>
                            <Button
                                title={t("Sign_up_text")}
                                onPress={() => navigation.navigate(RouteName.REGIATRAION_SUCCESSFULL)}
                                style={Logins.button} />
                        </View>
                        <Spacing space={SH(20)} />
                        <View style={Logins.settopspace}>
                            <View style={Logins.AlredyandloginBox}>
                                <Text style={Logins.membertextstyle}>{t("Already_member")}</Text>
                                <TouchableOpacity onPress={() => navigation.navigate(RouteName.LOGIN_SCREEN)}>
                                    <Text style={Logins.LoginScreenText}>{t("Login_text")}</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};
export default Register;
