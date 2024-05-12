import React, { useState, useMemo } from "react";
import { Text, View, ScrollView } from "react-native";
import { Login } from '../../styles';
import IconM from 'react-native-vector-icons/MaterialIcons';
import { Button, ConfirmationAlert, Spacing, AppHeader, Input } from '../../components';
import { SH } from '../../utils';
import { useTranslation } from "react-i18next";
import { useTheme } from '@react-navigation/native';
import { RouteName } from "../../routes";
import axios from "axios";

const ChangePassword = (props) => {

  const { t } = useTranslation();
  const { Colors } = useTheme();
  const { navigation, route } = props;
  const Logins = useMemo(() => Login(Colors), [Colors]);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [okbutton, Setokbutton] = useState('');


  async function changePassword() {

    if (password !== confirmPassword || password.trim() == "") return

    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: `https://asicjobs.in/api/webapi.php?api_action=change_password&user_id=${route.params.id}&password=${password}`,
    };

    axios.request(config)
        .then((response) => {
            console.log(JSON.stringify(response.data));
            setAlertVisible(true)
        })
        .catch((error) => {
            console.log(error.response.data, " - " + route.params.id);
        });

}

  var alertdata = {
    'logout': t("Email_Successfull"),
  }
  const onoknutton = () => {
    okbutton;
    
  }
  return (
    <View style={{ width: '100%' }}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          width: '100%',
          height: 'auto',
        }}>
        <AppHeader onPress={() => navigation.navigate(RouteName.LOGIN_SCREEN)} Iconname={true} headerTitle={t("Forget_Password")} />
        <View style={Logins.TabMinview}>
          <View>
            <View style={Logins.TabMinviewchild}>
              <View style={Logins.InputUnderLine}>
                
                <Input

                  placeholder={'Enter Password'}
                  secureTextEntry={true}
                  placeholderTextColor={'#676767'}
                  inputStyle={Logins.InputTextStyle}
                  onChangeText={(e) => setPassword(e)}
                  keyboardType={'email-address'}
                  value={password}
                />
             
              </View>

              <View style={{...Logins.InputUnderLine, marginTop:16}}>
                
                <Input

                  placeholder={'Confirm Password'}
                  secureTextEntry={true}
                  placeholderTextColor={'#676767'}
                  inputStyle={Logins.InputTextStyle}
                  onChangeText={(e) => setConfirmPassword(e)}
                  keyboardType={'email-address'}
                  value={confirmPassword}
                />
             
              </View>

              <Spacing space={SH(20)} />
              <Text style={Logins.SeTextStyleForget}><Text style={Logins.StarColor}> * </Text> {"Login After this"}</Text>
              <Spacing space={SH(20)} />
              <Button onPress={() => {
                changePassword()
               
              }} title={t("Submitbutton")} />
              <ConfirmationAlert
                message={alertMessage}
                buttonminview={Logins.CenterButton}
                modalVisible={alertVisible}
                setModalVisible={setAlertVisible}
                onPressCancel={() => setAlertVisible(!alertVisible)}
                onPress={() => { setAlertVisible(!alertVisible), onoknutton() }}
                iconVisible={true}
                buttonText={t("Ok")}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
export default ChangePassword;