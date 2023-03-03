import React,{useMemo} from "react";
import { Text, View, Image, ScrollView, KeyboardAvoidingView, FlatList, TouchableOpacity, } from "react-native";
import { ChatStyles } from '../../../styles';
import { RouteName } from '../../../routes';
import { Messagelistdata,SH } from '../../../utils';
import { useTranslation } from "react-i18next";
import { useTheme } from '@react-navigation/native';
import {Spacing} from '../../../components';

const Messagelist = (props) => {
  const { navigation } = props;
  const { Colors } = useTheme();
  const ChatStyle = useMemo(() => ChatStyles(Colors), [Colors]);
  const { t } = useTranslation();

  const Messagedata = (item) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate(RouteName.CHAT_SCREEN)}>
        <View style={ChatStyle.SetWhiteBox}>
          <View style={ChatStyle.FlexRowSetImage}>
            <View style={ChatStyle.ImageCenterStyleTop}>
              <Image style={ChatStyle.imagsetstyle} resizeMode="cover" source={item.image} />
            </View>
            <View style={ChatStyle.ListDotViewStyle}>
              {item.icon}
            </View>
            <View style={ChatStyle.ImageCenterStyle}>
              <Text style={ChatStyle.textsetdoctore}>{t(item.text)}</Text>
              <View style={ChatStyle.setflextimeroe}>
                <Text style={ChatStyle.textsetdoctoretwo}>{t(item.texttwoset)}</Text>
                <Text style={ChatStyle.textsetdoctoretwo}>{t(item.settime)}</Text>
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
                data={Messagelistdata}
                renderItem={({ item, index }) => Messagedata(item, index)}
                keyExtractor={item => item.id}
                showsHorizontalScrollIndicator={false}
              />
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};
export default Messagelist;
