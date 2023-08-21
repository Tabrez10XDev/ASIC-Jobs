import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, ScrollView, Dimensions } from "react-native";
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
import AsyncStorage from '@react-native-async-storage/async-storage';

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
  const [showBtn, setShowBtn] = useState(true)

  var alertdata = {
    'logout': t("Are_You_Sure_Logout"),
  }

  const onoknutton = async () => {
    try {
      await AsyncStorage.setItem('AuthState', "-1")
      navigation.replace(RouteName.LOGIN_SCREEN);
      okbutton;
    } catch (err) {
      alert(err)
    }
  }


  const getData = async () => {
    try {
      const result = await AsyncStorage.getItem('AuthState')
      console.log("-=-=-=-=")
      console.log(result)
      if (result !== null && result != "-1" && result != undefined && result != "false") {
        setShowBtn(true)
      } else {
        setShowBtn(false)
      }
    } catch (e) {
      console.error(e)
    }
  }


  useEffect(() => {
    getData()
  }, [])


  const Onpressfunction = (e) => {
    navigation.toggleDrawer();
    navigation.navigate(e)
  };
  return (
    <ScrollView>
      <View style={{...Sidemenu.customslidebarmenu, height:Dimensions.get('window').height}}>
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
          () => Onpressfunction(RouteName.APPLIED_JOB_LIST)
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



    

        <TouchableOpacity style={Sidemenu.flexrowset} onPress={
          () => Onpressfunction(RouteName.PROFILE_TAB)
        }>
          <IconU size={SF(19)} name="user-circle" style={Sidemenu.logoimage} color={Colors.theme_background_brink_pink} />
          <Text style={Sidemenu.hometextstyle}>{t("Profile")}</Text>
        </TouchableOpacity>

        {showBtn ?
          <View style={{...Sidemenu.settingandlogout, position:'absolute', bottom:24, left:24}}>
            <TouchableOpacity style={Sidemenu.flexrowset} onPress={() => {
              setAlertVisible(true);
              setAlertMessage(alertdata.logout);
              Setokbutton('');
            }}>
              <IconL name="log-out" color={Colors.theme_background_brink_pink} size={SF(23)} />
              <Text style={Sidemenu.hometextstyle}>{t("Log_Out")}</Text>
            </TouchableOpacity>
          </View> :
          <View style={{...Sidemenu.settingandlogout, position:'absolute', bottom:24, left:24}}>
          <TouchableOpacity style={Sidemenu.flexrowset} onPress={() => {
              navigation.replace(RouteName.LOGIN_SCREEN)
            }}>
              <IconL name="log-out" color={Colors.theme_background_brink_pink} size={SF(23)} />
              <Text style={Sidemenu.hometextstyle}>Log In</Text>
            </TouchableOpacity>
          </View>
        }
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

