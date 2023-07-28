import React, { useMemo, useState, useEffect } from "react";
import { Text, View, Image, ScrollView, KeyboardAvoidingView, FlatList, TouchableOpacity, } from "react-native";
import { ChatStyles, Style } from '../../../styles';
import { RouteName } from '../../../routes';
import { Messagelistdata, SH } from '../../../utils';
import { useTranslation } from "react-i18next";
import { useTheme } from '@react-navigation/native';
import { Spacing, ConfirmationAlert } from '../../../components';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StackActions } from '@react-navigation/native';
import axios from "axios";
import moment from "moment/moment";

const Messagelist = (props) => {
  const { navigation } = props;
  const { Colors } = useTheme();
  const ChatStyle = useMemo(() => ChatStyles(Colors), [Colors]);
  const { t } = useTranslation();

  const [alertVisible, setAlertVisible] = useState(false);

  const [notifications, setNotifications] = useState([])

  const [id, setID] = useState(null)


  async function getNotifications(stateID){
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: `https://asicjobs.in/api/webapi.php?api_action=notification&user_id=${stateID}`,
    };
    
    axios.request(config)
    .then((response) => {
      setNotifications(response.data.notification_data)
      console.log(JSON.stringify(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
    
  }

  const getData = async () => {
    try {
      const result = await AsyncStorage.getItem('AuthState')
      if (result === "false") {
        setAlertVisible(true)
      }
      else if (result !== null && result != "-1" && result != undefined && result != false) {
        setID(result)
        getNotifications(result)
      }

    } catch (e) {
      console.error(e)
    }
  }

  useEffect(() => {
    navigation.addListener('focus', () => {
        getData()
    });
}, [navigation]);

  const Messagedata = (item) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate(RouteName.CHAT_SCREEN)}>
        <View style={{...ChatStyle.SetWhiteBox, borderWidth:1, marginTop:4, borderRadius: 10, borderColor: Colors.theme_background_brink_pink}}>
          <View style={ChatStyle.FlexRowSetImage}>
            <View style={{...ChatStyle.ImageCenterStyle, width:'100%'}}>
              <Text style={{...ChatStyle.textsetdoctore, fontSize: 16}}>{item.title}</Text>
              <View style={ChatStyle.setflextimeroe}>
                {/* <Text style={ChatStyle.textsetdoctoretwo}>{t(item.texttwoset)}</Text> */}
                <Text style={ChatStyle.textsetdoctoretwo}>{moment(item.created_at.substring(0, 10), "YYYY-MM-DD").fromNow()}</Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
  return (
    <View style={ChatStyle.MinViewScreen}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          width: '100%',
          height: 'auto',
        }}>
        <KeyboardAvoidingView enabled>
          <View style={ChatStyle.MinFlexViewtwo}>
            <View style={ChatStyle.MinViewSecond}>
              <Spacing space={SH(5)} />
              <FlatList
                data={notifications}
                renderItem={({ item, index }) => Messagedata(item, index)}
                keyExtractor={item => item.id}
                showsHorizontalScrollIndicator={false}
              />

              {
                notifications.length === 0 &&
                <Text style={{...ChatStyle.textsetdoctore, fontSize: 16, marginTop:100, alignSelf:'center'}}>No notifications to show</Text>
              }
            </View>
          </View>
          <ConfirmationAlert
            message="Please SignIn to Continue"
            modalVisible={alertVisible}
            setModalVisible={setAlertVisible}
            onPress={() => {
              setAlertVisible(!alertVisible)
              navigation.dispatch(StackActions.popToTop());
            }}
            buttonminview={Style.buttonotp}
            iconVisible={false}
            buttonText="Ok"
            onPressCancel={() => { setAlertVisible(!alertVisible) }}
            cancelButtonText="Cancel"
          />
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};
export default Messagelist;
