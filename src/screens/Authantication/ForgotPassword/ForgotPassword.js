import React, { useState, useMemo } from "react";
import { Text, View, TextInput, ScrollView } from "react-native";
import { Login, Style } from '../../../styles';
import IconM from 'react-native-vector-icons/MaterialIcons';
import { Button, ConfirmationAlert, Spacing, AppHeader } from '../../../components';
import { SH } from '../../../utils';
import { useTranslation } from "react-i18next";
import { useTheme } from '@react-navigation/native';
import { RouteName } from "../../../routes";

const ForgotPassword = (props) => {
  const { t } = useTranslation();
  const { Colors } = useTheme();
  const { navigation } = props;
  const Logins = useMemo(() => Login(Colors), [Colors]);
  const [email, setEmailValidError] = useState('');
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [okbutton, Setokbutton] = useState('');

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
        <AppHeader onPress={() => navigation.navigate(RouteName.LOGIN_SCREEN)} Iconname={true} headerTitle={t("Forget_password")} />
        <View style={Logins.tabminview}>
          <View>
            <View style={Logins.tabminviewchild}>
              <View style={Logins.inputUnderLine}>
                <View>
                  <IconM style={Logins.marginright} name="email" size={25} color="#828282" />
                </View>
                <TextInput
                  placeholder={t("Enter_Email")}
                  placeholderTextColor={'#676767'}
                  style={Logins.inputtextstyle}
                  onChangeText={(e) => setEmailValidError(e)}
                  keyboardType={'email-address'}
                  value={email}
                />
              </View>
              <Spacing space={SH(20)} />
              <Text style={Logins.settextstyleforget}><Text style={Logins.starcolor}> * </Text> {t("We_well_sand_message")}</Text>
              <Spacing space={SH(20)} />
              <Button onPress={() => {
                setAlertVisible(true);
                setAlertMessage(alertdata.logout);
                Setokbutton('');
              }} title={t("Submitbutton")} />
              <ConfirmationAlert
                message={alertMessage}
                buttonminview={Logins.Centeralert}
                modalVisible={alertVisible}
                setModalVisible={setAlertVisible}
                onPressCancel={() => setAlertVisible(!alertVisible)}
                onPress={() => { setAlertVisible(!alertVisible), onoknutton() }}
                iconVisible={true}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
export default ForgotPassword;
