import React, { useState } from "react";
import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import IconE from 'react-native-vector-icons/Feather';
import IconL from 'react-native-vector-icons/Entypo';
import IconZ from 'react-native-vector-icons/FontAwesome5';
import IconF from 'react-native-vector-icons/Foundation';
import { Sidemenu } from '../../styles';
import IconU from 'react-native-vector-icons/FontAwesome';
import { RouteName } from '../../routes';
import IconP from 'react-native-vector-icons/AntDesign';
import { ConfirmationAlert } from '../../components';
import { Colors, SF } from '../../utils';
import { useTranslation } from "react-i18next";

// import IconF from 'react-native-vector-icons/FontAwesome';
// import IconE from 'react-native-vector-icons/EvilIcons';
import IconMI from 'react-native-vector-icons/MaterialIcons';
import IconG from 'react-native-vector-icons/Entypo';
import IconO from 'react-native-vector-icons/Octicons'
import IconMC from 'react-native-vector-icons/MaterialCommunityIcons'

const CustomSidebarMenu = (props) => {
  const { t } = useTranslation();
  const { navigation } = props;
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [okbutton, Setokbutton] = useState('');
  const [cancelbutton, SetCancelbutton] = useState(t("Cancel_Button"));

  var alertdata = {
    'logout': t("Are_You_Sure_Logout"),
  }

  const onoknutton = () => {
    navigation.navigate(RouteName.LOGIN_SCREEN);
    okbutton;
  }
  const Onpressfunction = (e) => {
    navigation.toggleDrawer();
    navigation.navigate(e)
  };
  return (
    <ScrollView>
      <View style={Sidemenu.customslidebarmenu}>
        <TouchableOpacity style={Sidemenu.flexrowset} onPress={
          () => Onpressfunction(RouteName.HOME_TAB)
        }>
          <IconO
            size={SF(19)}
            name="stack"
            color={Colors.theme_background_brink_pink}
          />
          <Text style={Sidemenu.hometextstyle}>{t("Home_Text")}</Text>
        </TouchableOpacity>


         <TouchableOpacity style={Sidemenu.flexrowset} onPress={
          () => Onpressfunction(RouteName.SAVE_JOB_LIST)
        }>
          <IconMI name="work" style={Sidemenu.logoimage} color={Colors.theme_background_brink_pink} size={SF(20)} />
          <Text style={Sidemenu.hometextstyle}>Applied Jobs</Text>
        </TouchableOpacity>

        <TouchableOpacity style={Sidemenu.flexrowset} onPress={
          () => Onpressfunction(RouteName.SAVE_JOB_LIST)
        }>
          <IconG name="bookmark" style={Sidemenu.logoimage} color={Colors.theme_background_brink_pink} size={SF(20)} />
          <Text style={Sidemenu.hometextstyle}>Favourite Jobs</Text>
        </TouchableOpacity>

        <TouchableOpacity style={Sidemenu.flexrowset} onPress={
          () => Onpressfunction(RouteName.MESSAGE_TAB)
        }>
          <IconMC name="bell-ring" style={Sidemenu.logoimage} color={Colors.theme_background_brink_pink} size={SF(20)} />
          <Text style={Sidemenu.hometextstyle}>Job Alerts</Text>
        </TouchableOpacity>
   

       
        {/* <TouchableOpacity style={Sidemenu.flexrowset} onPress={
          () => Onpressfunction(RouteName.Resume_And_Portfolio)
        }>
          <IconF name="results" style={Sidemenu.logoimage} color={Colors.theme_background_brink_pink} size={SF(20)} />
          <Text style={Sidemenu.hometextstyle}>{t("Resume_Prortfolio")}</Text>
        </TouchableOpacity> */}
        {/* <TouchableOpacity style={Sidemenu.flexrowset} onPress={
          () => Onpressfunction(RouteName.APPLY_JOB)
        }>
          <IconP name="addfile" style={Sidemenu.logoimage} color={Colors.theme_background_brink_pink} size={SF(20)} />
          <Text style={Sidemenu.hometextstyle}>{t("Apply_Job")}</Text>
        </TouchableOpacity> */}
        {/* <TouchableOpacity style={Sidemenu.flexrowset} onPress={
          () => Onpressfunction(RouteName.APPLY_JOB_DETAILS)
        }>
          <IconP name="addfile" style={Sidemenu.logoimage} color={Colors.theme_background_brink_pink} size={SF(20)} />
          <Text style={Sidemenu.hometextstyle}>{t("Apply_Job_Details")}</Text>
        </TouchableOpacity> */}
        <TouchableOpacity style={Sidemenu.flexrowset} onPress={
          () => Onpressfunction(RouteName.JOB_DETAILS_SCREEN)
        }>
          <IconP name="wordfile1" style={Sidemenu.logoimage} color={Colors.theme_background_brink_pink} size={SF(20)} />
          <Text style={Sidemenu.hometextstyle}>{t("Job_Description")}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={Sidemenu.flexrowset} onPress={
          () => Onpressfunction(RouteName.PROFILE_TAB)
        }>
          <IconU size={SF(19)} name="user-circle" style={Sidemenu.logoimage} color={Colors.theme_background_brink_pink} />
          <Text style={Sidemenu.hometextstyle}>{t("Profile")}</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity style={Sidemenu.flexrowset} onPress={
          () => Onpressfunction(RouteName.SETTING_SCREEN)
        }>
          <IconP size={SF(19)} name="setting" style={Sidemenu.logoimage} color={Colors.theme_background_brink_pink} />
          <Text style={Sidemenu.hometextstyle}>{t("Setting_Text")}</Text>
        </TouchableOpacity> */}
        <View style={Sidemenu.settingandlogout}>
          <TouchableOpacity style={Sidemenu.flexrowset} onPress={() => {
            setAlertVisible(true);
            setAlertMessage(alertdata.logout);
            Setokbutton('');
          }}>
            <IconL name="log-out" color={Colors.theme_background_brink_pink} size={SF(23)} />
            <Text style={Sidemenu.hometextstyle}>{t("Log_Out")}</Text>
          </TouchableOpacity>
        </View>
        <ConfirmationAlert
          message={alertMessage}
          modalVisible={alertVisible}
          setModalVisible={setAlertVisible}
          onPressCancel={() => setAlertVisible(!alertVisible)}
          onPress={() => { setAlertVisible(!alertVisible), onoknutton() }}
          cancelButtonText={cancelbutton}
          buttonText={t("Ok")}
        />
      </View>
    </ScrollView>
  );
};
export default CustomSidebarMenu;

