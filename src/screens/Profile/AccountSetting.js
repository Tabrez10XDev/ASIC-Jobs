import React, { useState, useMemo, useEffect } from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity, Linking, Dimensions, Switch } from 'react-native';
import { Input, Button, CheckBox, Spacing, Countrycode, ConfirmationAlert, DropDown } from '../../components';
import { SH } from '../../utils';
import { Login, Style, LanguageStyles } from '../../styles';
import IconG from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from "react-i18next";
import { useTheme } from '@react-navigation/native';
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';

const AccountSetting = ({ route }) => {

    const data = route.params.data
    const JOB_ROLES = route.params.jobRoles
    const [state, setState] = useState({ pass: '', confirmPass: '', number: data.contact_infos.phone, number2: data.contact_infos.secondary_phone, email: data.contact_infos.email })
    const [passwordVisibility, setpasswordVisibility] = useState(true);
    const [passwordVisibility2, setpasswordVisibility2] = useState(true);
    const [alertVisible, setAlertVisible] = useState(false);
    const [isFocusExperience, setIsFocusExperience] = useState(false);
    const [jobRole, setJobRole] = useState("")


    useEffect(()=>{

        JOB_ROLES.forEach((ele)=>{
            if(ele.id == data.candidates_details.role_id){
                setJobRole(ele.name)
            }
        })
    },[])

    const { Colors } = useTheme();
    const Logins = useMemo(() => Login(Colors), [Colors]);
    const onChangeText = (text, type) => {
        if (text === 'TextInputPassword') setpasswordVisibility(!passwordVisibility);
        if (text === 'TextInputPassword2') setpasswordVisibility2(!passwordVisibility2);

    };

    const [isEnabled, setIsEnabled] = useState(data.candidates_details.received_job_alert == 1 ? true : false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    
    const [isEnabled2, setIsEnabled2] = useState(data.candidates_details.visibility == 1 ? true : false);
    const toggleSwitch2 = () => setIsEnabled2(previousState => !previousState);

    
    const [isEnabled3, setIsEnabled3] = useState(data.candidates_details.cv_visibility == 1 ? true : false);
    const toggleSwitch3 = () => setIsEnabled3(previousState => !previousState);

    async function changePassword() {

        if (state.pass !== state.confirmPass || state.pass.trim() == "") return

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
            contentContainerStyle={{ width: '100%', alignSelf: 'center', backgroundColor: 'white', paddingHorizontal: 10 }}
            showsVerticalScrollIndicator={false}>

            <Spacing space={SH(20)} />


            <View style={Style.FlexRowPassword}>
                <TextInput
                    style={Style.InputPassword}
                    value={state.number}
                    placeholder="Phone"
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholderTextColor={Colors.gray_text_color}
                    enablesReturnKeyAutomatically
                    onChangeText={(text) => setState({ ...state, number: text })}
                />
                <IconG name={passwordVisibility ? 'eye-off' : 'eye'} size={25} style={Logins.eyeiconset} />
            </View>
            <Spacing space={SH(20)} />


            <View style={Style.FlexRowPassword}>
                <TextInput
                    style={Style.InputPassword}
                    value={state.number2}
                    placeholder="Secondary phone"
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholderTextColor={Colors.gray_text_color}
                    enablesReturnKeyAutomatically
                    onChangeText={(text) => setState({ ...state, number2: text })}
                />
                <IconG name={passwordVisibility ? 'eye-off' : 'eye'} size={25} style={Logins.eyeiconset} />
            </View>
            <Spacing space={SH(20)} />



            <View style={Style.FlexRowPassword}>
                <TextInput
                    style={Style.InputPassword}
                    value={state.email}
                    placeholder="Email"
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholderTextColor={Colors.gray_text_color}
                    enablesReturnKeyAutomatically
                    onChangeText={(text) => setState({ ...state, email: text })}
                />
                <IconG name={passwordVisibility ? 'eye-off' : 'eye'} size={25} style={Logins.eyeiconset} />
            </View>
            <Spacing space={SH(20)} />

            <View style={{flexDirection:'row', justifyContent:'space-between', width:'95%', alignSelf:'center'}}>
            <Text style={{color:'black'}}>Job Alert</Text>

            <Switch
                trackColor={{ false: '#767577', true: '#81b0ff' }}
                thumbColor={isEnabled ? '#f4f3f4' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
            />
            </View>

            <Spacing space={SH(20)} />


{
    isEnabled ?
    <>
     <DropDown
                data={JOB_ROLES}
                dropdownStyle={LanguageStyles.LeadDropdown}
                value={jobRole}
                onChange={item => {
                    setJobRole(item.value)
                }}
                width={Dimensions.get('window').width * 0.95}
                search
                searchPlaceholder="Search bar"
                placeholder="Job Role"
                selectedTextStyle={LanguageStyles.selectedTextStyleLead}
                IconStyle={LanguageStyles.IconStyle}
                onFocus={() => setIsFocusExperience(true)}
                onBlur={() => setIsFocusExperience(false)}
                labelField="name"
                valueField="name"
                renderLeftIcon={() => (
                    <Icon color="black" name={isFocusExperience ? 'arrowup' : 'arrowdown'} size={SF(20)} />
                )}
            />

            <Spacing space={SH(20)} /></>
    : null
}



           


            <View style={{flexDirection:'row', justifyContent:'space-between', width:'95%', alignSelf:'center'}}>
            <Text style={{color:'black'}}>Profile Privacy</Text>

            <Switch
                trackColor={{ false: '#767577', true: '#81b0ff' }}
                thumbColor={isEnabled2 ? '#f4f3f4' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch2}
                value={isEnabled2}
            />
            </View>

            <Spacing space={SH(20)} />

            <View style={{flexDirection:'row', justifyContent:'space-between', width:'95%', alignSelf:'center'}}>
            <Text style={{color:'black'}}>Resume Privacy</Text>

            <Switch
                trackColor={{ false: '#767577', true: '#81b0ff' }}
                thumbColor={isEnabled3 ? '#f4f3f4' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch3}
                value={isEnabled3}
            />
            </View>

            <Spacing space={SH(20)} />

            <View style={Logins.ButtonView}>
                <Button
                    title="Save Changes"
                   
                    style={Logins.button} />
            </View>


            <Spacing space={SH(20)} />


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
                    onPress={() => { changePassword() }
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
                    setState({ ...state, pass: '', confirmPass: '' })
                }}
            />
        </ScrollView>
    )
}

export default AccountSetting;