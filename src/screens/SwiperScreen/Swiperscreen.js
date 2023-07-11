import React, { useMemo } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { SwiperStyle } from '../../styles';
import { Button, Spacing } from '../../components';
import RouteName from '../../routes/RouteName';
import { Swiperdata, SH } from '../../utils';
import { useTranslation } from "react-i18next";
import { useTheme } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = ({ navigation }) => {
  const { t } = useTranslation();
  const { Colors } = useTheme();
  const SwiperStyles = useMemo(() => SwiperStyle(Colors), [Colors]);

  const saveBoarding = async (id) => {
    try {
      await AsyncStorage.setItem('BoardingState', id)
    } catch (err) {
      alert(err)
    }
  }

  const RenderItem = ({ item }) => {
    return (
      <View>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={SwiperStyles.scrollviewstyle}>
          <View>
            <View style={SwiperStyles.Animationviewstyle}>
              {item.animation}
            </View>
          </View>
        </ScrollView>
        {/* <Text style={SwiperStyles.titleStyle}>
          {t(item.title)}
        </Text> */}
        <Text style={SwiperStyles.textstyle}>
          {item.text}
        </Text>
      </View>
    );
  };
  const _renderDoneButton = () => {
    return (
      <View style={SwiperStyles.setbgbuttondiv}>
        <View style={SwiperStyles.buttonCircle}>
          <Button
            title={t("Get_Started")}
            onPress={
              () => {
                saveBoarding("true")
                navigation.navigate(RouteName.LOGIN_SCREEN)
              }
            }
          />
        </View>
      </View>
    );
  };
  const _renderNextButton = () => {
    return (
      <View style={SwiperStyles.setbgbuttondiv}>
        <Spacing space={SH(12)} />
        <Text style={SwiperStyles.Nexttextstyle}>{t("Next_Text")}</Text>
      </View>
    );
  };
  const _renderSkipButton = () => {
    return (
      <View style={SwiperStyles.setbgbuttondiv}>
        <TouchableOpacity onPress={() => {
          saveBoarding("true")
          navigation.navigate(RouteName.LOGIN_SCREEN)
        }}>
          <Spacing space={SH(12)} />
          <Text style={SwiperStyles.Nexttextstyle}>{t("Skip_Text")}</Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <>
      <AppIntroSlider
        data={Swiperdata}
        renderItem={RenderItem}
        renderNextButton={_renderNextButton}
        renderSkipButton={_renderSkipButton}
        renderDoneButton={_renderDoneButton}
        showSkipButton={true}
        activeDotStyle={SwiperStyles.activedotstyle}
        dotStyle={SwiperStyles.dotSwiperStyleset}
      />
    </>
  );
};
export default App;

