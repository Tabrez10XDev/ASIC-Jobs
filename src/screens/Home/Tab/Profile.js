import React, { useState, useEffect, useMemo } from "react";
import { View, Text, TouchableOpacity, Image, TextInput, Modal } from "react-native";
import Icon from 'react-native-vector-icons/EvilIcons';
import IconF from 'react-native-vector-icons/AntDesign';
import IconG from 'react-native-vector-icons/Ionicons';
import { ProfileTabStyles, Style } from '../../../styles';
import { Button, Spacing, ConfirmationAlert } from '../../../components';
import { SH } from '../../../utils';
import images from "../../../index";
import RouteName from "../../../routes/RouteName";
import { useTranslation } from "react-i18next";
import { useNavigation, useTheme } from '@react-navigation/native';
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StackActions } from '@react-navigation/native';

const ProfileTab = (props) => {
  const { Colors } = useTheme();
  const ProfileTabStyle = useMemo(() => ProfileTabStyles(Colors), [Colors]);
  const navigation = useNavigation();
  const { t } = useTranslation();
  const [modalVisible, setModalVisible] = useState(false);
  const [modalcontent, setmodalcontent] = useState(0);
  const [passwordVisibilityold, setpasswordVisibilityold] = useState(true);
  const [passwordVisibilitynew, setpasswordVisibilitynew] = useState(true);
  const [passwordVisibilityconfirm, setPasswordVisibilityconfirm] = useState(true);

  const stateArray = {
    Oldpassword: "",
    Newpassword: "",
    email: "",
    Confirmpassword: "",
    number: null,
  };
  const stateErrorArray = {
    Oldpassword: "",
    Newpassword: "",
    email: "",
    Confirmpassword: "",
    number: null,
  };
  const [state, setState] = useState(stateArray);
  const [stateError, setStateError] = useState(stateErrorArray);
  const [userData, setUserData] = useState({
    user_details: [],
    candidates_details: []
  })

  const [alertVisible, setAlertVisible] = useState(false);

  const [id, setID] = useState(null)

  const getData = async() => {
    try {
      const result = await AsyncStorage.getItem('AuthState')
      if (result === "false") {
        setAlertVisible(true)
      }
      else if (result !== null && result != "-1" && result != undefined) {
        setID(result)
        getUserData(result)
      }

    } catch (e) {
      console.error(e)
    }
  }


  const logout = async () => {
    try {
      await AsyncStorage.setItem('AuthState', '-1')
      navigation.dispatch(StackActions.popToTop());
    } catch (err) {
      alert(err)
    }
  }

  function getUserData(id) {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: `https://asicjobs.in/api/webapi.php?api_action=userdetails&id=${id}`,
      headers: {}
    };

    axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        setUserData(response.data)
      })
      .catch((error) => {
        console.log(error);
      });

  }

  useEffect(() => {
    navigation.addListener('focus', () => {
      setModalVisible(false);
      getData()
      setmodalcontent(0);
    });
  }, [navigation]);
  const img = "https://asicjobs.in/" + userData.user_details.image

  return (

    <>
      <View style={ProfileTabStyle.BackgroundWhite}>
        <View style={ProfileTabStyle.whilistminbody}>
          <View style={ProfileTabStyle.ImagCenter}>
            <View>
              <Image style={ProfileTabStyle.ImageStyles} resizeMode='cover' source={{uri: img}} />
              <Text style={ProfileTabStyle.UserName}>{userData.user_details.name}</Text>
            </View>
          </View>
          <View style={ProfileTabStyle.ProfileDetailesMinview}>

            <Spacing space={SH(20)} />
            <TouchableOpacity
              onPress={() => navigation.navigate(RouteName.BASIC_PROFILE, userData)}
            >
              <View style={ProfileTabStyle.iconandtextflexset}>
                <View>
                  <Text style={ProfileTabStyle.logoutdivset}>Basic</Text>
                </View>
                <View>
                  <IconF
                    size={27}
                    name="arrowright"
                    color={Colors.black_text_color}
                  />
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate(RouteName.EDIT_PROFILE)}
            >
              <View style={ProfileTabStyle.iconandtextflexset}>
                <View>
                  <Text style={ProfileTabStyle.logoutdivset}>Profile</Text>
                </View>
                <View>
                  <IconF
                    size={27}
                    name="arrowright"
                    color={Colors.black_text_color}
                  />
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate(RouteName.EXPERIENCE)}
            >
              <View style={ProfileTabStyle.iconandtextflexset}>
                <View>
                  <Text style={ProfileTabStyle.logoutdivset}>Experience & Education</Text>
                </View>
                <View>
                  <IconF
                    size={27}
                    name="arrowright"
                    color={Colors.black_text_color}
                  />
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate(RouteName.SOCIAL_MEDIA)}
            >
              <View style={ProfileTabStyle.iconandtextflexset}>
                <View>
                  <Text style={ProfileTabStyle.logoutdivset}>Social Media</Text>
                </View>
                <View>
                  <IconF
                    size={27}
                    name="arrowright"
                    color={Colors.black_text_color}
                  />
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate(RouteName.SETTING_SCREEN)}
            >
              <View style={ProfileTabStyle.iconandtextflexset}>
                <View>
                  <Text style={ProfileTabStyle.logoutdivset}>Account Settings</Text>
                </View>
                <View>
                  <IconF
                    size={27}
                    name="arrowright"
                    color={Colors.black_text_color}
                  />
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => { logout() }}
            >
              <View style={ProfileTabStyle.iconandtextflexset}>
                <View>
                  <Text style={ProfileTabStyle.logoutdivset}>{t("Log_Out")}</Text>
                </View>
                <View>
                  <IconF
                    size={27}
                    name="arrowright"
                    color={Colors.black_text_color}
                  />
                </View>
              </View>
            </TouchableOpacity>
            {/* <TouchableOpacity
              onPress={() => navigation.navigate(RouteName.SETTING_SCREEN)}
            >
              <View style={ProfileTabStyle.iconandtextflexset}>
                <View>
                  <Text style={ProfileTabStyle.logoutdivset}>{t("Setting_Text")}</Text>
                </View>
                <View>
                  <IconF
                    size={27}
                    name="arrowright"
                    color={Colors.black_text_color}
                  />
                </View>
              </View>
            </TouchableOpacity> */}
          </View>
        </View>
        <ConfirmationAlert
          message="Please SignIn to Continue"
          modalVisible={alertVisible}
          setModalVisible={setAlertVisible}
          onPress={() => {
            navigation.dispatch(StackActions.popToTop());
            navigation.replace(RouteName.LOGIN_SCREEN)
          
            setAlertVisible(!alertVisible)
          }}
          buttonminview={Style.buttonotp}
          iconVisible={false}
          buttonText="Ok"
          onPressCancel={() => { setAlertVisible(!alertVisible) }}
          cancelButtonText="Cancel"
        />
      </View>
    </>
  );
};
export default ProfileTab;
