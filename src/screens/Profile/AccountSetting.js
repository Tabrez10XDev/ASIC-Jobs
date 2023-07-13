import React, { useState, useMemo } from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity, Linking } from 'react-native';
import { Input, Button, CheckBox, Spacing, Countrycode, ConfirmationAlert } from '../../components';
import { SH } from '../../utils';
import { Login, Style } from '../../styles';
import IconG from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from "react-i18next";
import { useTheme } from '@react-navigation/native';
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';

const AccountSetting = ({route}) => {

    const data = route.params
    const [state, setState] = useState({ pass: '', confirmPass: '' })
    const [passwordVisibility, setpasswordVisibility] = useState(true);
    const [passwordVisibility2, setpasswordVisibility2] = useState(true);
    const [alertVisible, setAlertVisible] = useState(false);

    const { Colors } = useTheme();
    const Logins = useMemo(() => Login(Colors), [Colors]);
    const onChangeText = (text, type) => {
        if (text === 'TextInputPassword') setpasswordVisibility(!passwordVisibility);
        if (text === 'TextInputPassword2') setpasswordVisibility2(!passwordVisibility2);

    };


    async function changePassword() {

        if(state.pass !== state.confirmPass || state.pass.trim() == "") return

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: `https://asicjobs.in/api/webapi.php?api_action=change_password&user_id=${data.user_details.id}&password=${state.pass}`,
        };

        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
                setAlertVisible(true)
            })
            .catch((error) => {
                console.log(error);
            });

    }

    return (
        <ScrollView
            contentContainerStyle={{ width: '95%', alignSelf: 'center' }}
            showsVerticalScrollIndicator={false}>
            <View style={Style.FlexRowPassword}>
                <TextInput
                    style={Style.InputPassword}
                    name="password"
                    value={state.pass}
                    placeholder="Enter Password"
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholderTextColor={Colors.gray_text_color}
                    textContentType="newPassword"
                    secureTextEntry={passwordVisibility}
                    enablesReturnKeyAutomatically
                    onChangeText={(text) => setState({ ...state, pass: text })}
                />
                <TouchableOpacity onPress={() => { onChangeText("TextInputPassword") }}>
                    <IconG name={passwordVisibility ? 'eye-off' : 'eye'} size={25} style={Logins.eyeiconset} />
                </TouchableOpacity>
            </View>
            <Spacing space={SH(20)} />
            <View style={Style.FlexRowPassword}>
                <TextInput
                    style={Style.InputPassword}
                    name="password"
                    value={state.confirmPass}
                    placeholder="Confirm Password"
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholderTextColor={Colors.gray_text_color}
                    textContentType="newPassword"
                    secureTextEntry={passwordVisibility2}
                    enablesReturnKeyAutomatically
                    onChangeText={(text) => setState({ ...state, confirmPass: text })}
                />
                <TouchableOpacity onPress={() => { onChangeText("TextInputPassword2") }}>
                    <IconG name={passwordVisibility2 ? 'eye-off' : 'eye'} size={25} style={Logins.eyeiconset} />
                </TouchableOpacity>
            </View>
            <Spacing space={SH(20)} />
            <View style={Logins.ButtonView}>
                <Button
                    title="Change Password"
                    onPress={() => {changePassword()}
                    }
                    style={Logins.button} />
            </View>

            <ConfirmationAlert
                    message="Password Changed"
                    modalVisible={alertVisible}
                    setModalVisible={setAlertVisible}
                    buttonminview={Style.buttonotp}
                    iconVisible={false}
                    buttonText="Ok"
                    onPress={() => { 
                        setAlertVisible(!alertVisible)
                        setState({...state, pass: '', confirmPass: ''}) 
                    }}
                />
        </ScrollView>
    )
}

export default AccountSetting;