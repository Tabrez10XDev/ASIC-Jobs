import React, { useState,useMemo } from "react";
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { Login } from '../../../styles';
import { Modal, Input } from '../../../components';
import { Countrydata } from '../../../utils';
import { useTranslation } from "react-i18next";
import { useTheme } from '@react-navigation/native';

const Countrycode = () => {
  const [sleact, setsleact] = useState('');
  const [searchdata, setsearchdata] = useState("");
  const { Colors } = useTheme();
  const Logins = useMemo(() => Login(Colors), [Colors]);
  const [modalVisible, setModalVisible] = useState(false);
  const { t } = useTranslation();

  return (
    <View>
      <TouchableOpacity style={Logins.flexiconset} onPress={() => setModalVisible(true)}>
        {sleact === '' ?
          <Text style={Logins.addplacestextset}>+ 91</Text>
          :
          <Text style={Logins.addplacestextset}>{sleact}</Text>
        }
      </TouchableOpacity>
      <Modal
        modalViewStyle={Logins.Setheightmodal}
        modalVisible={modalVisible}
        setModalVisible={() => {
          setModalVisible(!modalVisible);
        }}
        close={() => setModalVisible(!modalVisible)}
      >
        <View style={Logins.setserachbgcolorview}>
          <Input
            placeholder={t("Search_Text")}
            onChangeText={(text) => setsearchdata(text)}
            value={searchdata}
            placeholderTextColor={Colors.gray_text_color}
          />
        </View>
        <View>
          <FlatList
            data={Countrydata}
            renderItem={({ item }) => {
              if (searchdata === "") {
                return (
                  <TouchableOpacity style={Logins.minviewtext} onPress={() => { setsleact(item.digit); setModalVisible(!modalVisible); }}>
                    <Text style={Logins.simplestatetext}>{item.digit}</Text>
                    <Text style={Logins.simplestatetexttwoset}>{t(item.textsimple)}</Text>
                  </TouchableOpacity>
                )
              } else {
                <View style={Logins.setwhiteboxnodatafound}>
                  <Text style={Logins.pleseentername}>{t("No_data_found")}</Text>
                </View>
              }
              if (item.textsimple.toLowerCase().includes(searchdata.toLowerCase()) === true) {
                return (
                  <TouchableOpacity style={Logins.minviewtext} onPress={() => { setsleact(item.digit); setModalVisible(!modalVisible); }}>
                    <Text style={Logins.simplestatetext}>{item.digit}</Text>
                    <Text style={Logins.simplestatetexttwoset}>{t(item.textsimple)}</Text>
                  </TouchableOpacity>
                )
              }
              else {
                <View style={Logins.setwhiteboxnodatafound}>
                  <Text style={Logins.pleseentername}>{t("No_data_found")}</Text>
                </View>
              }
            }}
            keyExtractor={item => item.id}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </Modal>
    </View>
  )
}
export default Countrycode;