import React, { useState, useEffect } from 'react';
import RouteName from './RouteName';
import { ColorPicker, CustomSidebarMenu, AppHeader } from '../components';
import { Colors, SF, SW } from '../utils';
import { DefaultTheme } from '@react-navigation/native';
import { createDrawerNavigator } from "@react-navigation/drawer";
const Drawer = createDrawerNavigator();
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import { TabNavigator } from '../routes';
import {
  ResuameAndPortFolio, ApplyJob, ApplyJobDetails, JobDetailsScreen, Chatscreen, SettingsScreen
} from '../screens';

const SideNavigator = (props) => {
  const { t } = useTranslation();
  const { colorrdata } = useSelector(state => state.commonReducer) || {};
  const MyTheme = {
    ...DefaultTheme,
    Colors: Colors
  };
  const [colorValue, setColorValue] = useState(MyTheme)
  useEffect(() => {
    if (Colors.length != 0 && colorrdata != "") {
      Colors.theme_background_brink_pink = colorrdata;
      const MyThemeNew = {
        ...DefaultTheme,
        Colors: Colors
      };
      setColorValue(MyThemeNew)
    }

  }, [colorrdata, Colors])
  return (
    <Drawer.Navigator theme={colorValue} drawerContent={(props) => <CustomSidebarMenu {...props} />} screenOptions={{
      headerShown: false,
      drawerStyle: {
        backgroundColor: Colors.white_text_color,
        width: SW(270),
      }
    }}
    >
      <Stack.Screen name={RouteName.HOME_SCREEN} component={TabNavigator} />
      <Drawer.Screen
        name={RouteName.Resume_And_Portfolio} component={ResuameAndPortFolio}
        options={{
          headerShown: true,
          headerTitle: (props) => <AppHeader {...props} headerTitle={t("Resume_And_Portfolio")} />,
          headerTintColor: Colors.theme_background_brink_pink,
          headerShadowVisible: false,
          headerTitleStyle: {
            color: Colors.theme_background_brink_pink,
            fontSize: SF(20),
            fontWeight: '700'
          },
          headerStyle: {
            backgroundColor: Colors.white_text_color,
          },
          headerRight: (props) => <ColorPicker {...props} />,
        }}
      />
      <Drawer.Screen
        name={RouteName.APPLY_JOB} component={ApplyJob}
        options={{
          headerShown: true,
          headerTitle: (props) => <AppHeader {...props} headerTitle={t("Apply_Job")} />,
          headerTintColor: Colors.theme_background_brink_pink,
          headerShadowVisible: false,
          headerTitleStyle: {
            color: Colors.theme_background_brink_pink,
            fontSize: SF(20),
            fontWeight: '700'
          },
          headerStyle: {
            backgroundColor: Colors.white_text_color,
          },
          headerRight: (props) => <ColorPicker {...props} />,
        }}
      />
      <Drawer.Screen
        name={RouteName.APPLY_JOB_DETAILS} component={ApplyJobDetails}
        options={{
          headerShown: true,
          headerTitle: (props) => <AppHeader {...props} headerTitle={t("Apply_Job_Details")} />,
          headerTintColor: Colors.theme_background_brink_pink,
          headerShadowVisible: false,
          headerTitleStyle: {
            color: Colors.theme_background_brink_pink,
            fontSize: SF(20),
            fontWeight: '700'
          },
          headerStyle: {
            backgroundColor: Colors.white_text_color,
          },
          headerRight: (props) => <ColorPicker {...props} />,
        }}
      />
      <Drawer.Screen
        name={RouteName.JOB_DETAILS_SCREEN} component={JobDetailsScreen}
        options={{
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name={RouteName.CHAT_SCREEN} component={Chatscreen}
        options={{
          headerShown: true,
          headerTitle: (props) => <AppHeader {...props} headerTitle={t("Chat_Text_Start")} />,
          headerTintColor: Colors.theme_background_brink_pink,
          headerShadowVisible: false,
          headerTitleStyle: {
            color: Colors.theme_background_brink_pink,
            fontSize: SF(20),
            fontWeight: '700'
          },
          headerStyle: {
            backgroundColor: Colors.white_text_color,
          },
        }}
      />
      <Drawer.Screen
        name={RouteName.SETTING_SCREEN} component={SettingsScreen}
        options={{
          headerShown: true,
          headerTitle: (props) => <AppHeader {...props} headerTitle={t("Setting_Text")} />,
          headerTintColor: Colors.theme_background_brink_pink,
          headerShadowVisible: false,
          headerTitleStyle: {
            color: Colors.theme_background_brink_pink,
            fontSize: SF(20),
            fontWeight: '700'
          },
          headerStyle: {
            backgroundColor: Colors.white_text_color,
          },
        }}
      />
    </Drawer.Navigator>

  );
}
export default SideNavigator;