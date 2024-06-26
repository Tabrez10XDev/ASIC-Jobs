import React from 'react';
import { TouchableOpacity, View, } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';
import { HomeTab, Messagelist, SavedJobsList, Profile, AppliedJobsList } from '../screens';
import IconF from 'react-native-vector-icons/FontAwesome';
import IconE from 'react-native-vector-icons/EvilIcons';
import IconZ from 'react-native-vector-icons/MaterialIcons';
import IconG from 'react-native-vector-icons/Entypo';
import IconO from 'react-native-vector-icons/Octicons'
import IconM from 'react-native-vector-icons/MaterialCommunityIcons'

import { BasicInformation, EditProfile, SocialMedia, Experience, AccountSetting } from '../screens/Profile';

import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer';
import { Style } from '../styles';
import { ColorPicker, CustomSidebarMenu } from '../components';
import RouteName from '../routes/RouteName';
import { Colors, SH, SF } from '../utils';
import { useTranslation } from "react-i18next";
import { JobDetailsScreen } from '../screens';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerSidebarScreen(props) {
  return (
    <DrawerContentScrollView {...props} contentContainerStyle={{ paddingTop: 0 }}>
      <CustomSidebarMenu {...props} />
    </DrawerContentScrollView>
  );
}
function MyDrawer() {
  return (
    <Drawer.Navigator initialRouteName="HomeScsreenTabAll" drawerContent={props => <DrawerSidebarScreen {...props} />}>
      <Drawer.Screen name="HomeScsreenTabAll"
        options={{ headerShown: false }}
        component={HomeScsreenTabAll} />
    </Drawer.Navigator>
  );
}
function Root() {
  return (
    <Stack.Navigator headerMode="screen">
      <Stack.Screen
        name="Drawer"
        component={MyDrawer}
        options={{
          title: '',
          headerShown: false,
        }}
      />
      <Stack.Screen name="Homese" component={HomeScsreenTabAll}
        options={{
          title: '',
          headerShown: false
        }}
      />
    </Stack.Navigator>
  );
}
export default Root;


function HomeTabScreenStack({ navigation }) {
  const { t } = useTranslation();
  return (
    <Stack.Navigator initialRouteName="HomeTab">
      <Stack.Screen
        name="HomeTab"
        component={HomeTab}
        options={{
          title: t("Home_Text"), headerShown: true,
          headerShadowVisible: false,
          headerTitleStyle: {
            fontWeight: "700",
            fontSize: 20,
            color: Colors.theme_background_brink_pink,
          },
          headerStyle: {
            backgroundColor: Colors.white_text_color,
          },
          headerLeft: () => (
            <View style={Style.flexrowsetaddresh}>
              <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                <IconE style={Style.setbariconMarginright} name="navicon" color={Colors.theme_background_brink_pink} size={35} />
              </TouchableOpacity>

            </View>
          ),
          headerRight: () => (
            <View style={{...Style.flexrowsetaddresh, marginRight:8}}>
              <TouchableOpacity onPress={() => navigation.navigate(RouteName.MESSAGE_TAB)}>
              <IconM name="bell-ring" style={{ color: Colors.theme_background_brink_pink }} size={28} />
              </TouchableOpacity>

            </View>
          ),
          // headerRight: () => (
          //   <ColorPicker />
          // ),
        }}
      />
       {/* <Stack.Screen name={RouteName.JOB_DETAILS_SCREEN} component={JobDetailsScreen}
       options={{
        title: "Job Detail", headerShown: true,
        headerShadowVisible: false,
      
      }} /> */}
    </Stack.Navigator>
  );
}


function MessagesTabScreenStack({ navigation }) {
  const { t } = useTranslation();
  return (
    <Stack.Navigator initialRouteName="Messages">
      <Stack.Screen
        name="Messages"
        component={Messagelist}
        options={{
          title: t("Messages_Text"), headerShown: true,
          headerShadowVisible: false,
          headerTitleStyle: {
            fontWeight: "700",
            fontSize: 20,
            color: Colors.theme_background_brink_pink,
          },
          headerStyle: {
            backgroundColor: Colors.white_text_color,
          },
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
              <IconE style={Style.setbariconMarginright} name="navicon" color={Colors.theme_background_brink_pink} size={35} />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
}
function SavedJobsListTabStack({ navigation }) {
  const { t } = useTranslation();
  return (
    <Stack.Navigator initialRouteName="SavedJobsList">
      <Stack.Screen
        name="SavedJobsList"
        component={SavedJobsList}
        options={{
          title: "Favourite Jobs", headerShown: true,
          headerShadowVisible: false,
          headerTitleStyle: {
            fontWeight: "700",
            fontSize: 20,
            color: Colors.theme_background_brink_pink,
          },
          headerStyle: {
            backgroundColor: Colors.white_text_color,
          },
          headerLeft: () => (
            <View style={Style.flexrowsetaddresh}>
              <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                <IconE style={Style.setbariconMarginright} name="navicon" color={Colors.theme_background_brink_pink} size={35} />
              </TouchableOpacity>

            </View>
          ),
          headerRight: () => (
            <View style={{...Style.flexrowsetaddresh, marginRight:8}}>
              <TouchableOpacity onPress={() => navigation.navigate(RouteName.MESSAGE_TAB)}>
              <IconM name="bell-ring" style={{ color: Colors.theme_background_brink_pink }} size={28} />
              </TouchableOpacity>

            </View>
          ),
          // headerRight: () => (
          //   <ColorPicker />
          // ),
        }}
      />
      <Stack.Screen name={RouteName.JOB_DETAILS_SCREEN} component={JobDetailsScreen}
       options={{
        title: "Job Detail", headerShown: false,
        headerShadowVisible: false,
      
      }} />

    </Stack.Navigator>
  );
}


function AppliedJobsListTabStack({ navigation }) {
  const { t } = useTranslation();
  return (
    <Stack.Navigator initialRouteName="AppliedJobsList">
      <Stack.Screen
        name="AppliedJobsList"
        component={AppliedJobsList}
        options={{
          title: "Applied Jobs", headerShown: true,
          headerShadowVisible: false,
          headerTitleStyle: {
            fontWeight: "700",
            fontSize: 20,
            color: Colors.theme_background_brink_pink,
          },
          headerStyle: {
            backgroundColor: Colors.white_text_color,
          },
          headerLeft: () => (
            <View style={Style.flexrowsetaddresh}>
              <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                <IconE style={Style.setbariconMarginright} name="navicon" color={Colors.theme_background_brink_pink} size={35} />
              </TouchableOpacity>
            </View>
          ),
          headerRight: () => (
            <View style={{...Style.flexrowsetaddresh, marginRight:8}}>
              <TouchableOpacity onPress={() => navigation.navigate(RouteName.MESSAGE_TAB)}>
              <IconM name="bell-ring" style={{ color: Colors.theme_background_brink_pink }} size={28} />
              </TouchableOpacity>

            </View>
          ),
      

        }}
      />
      <Stack.Screen name={RouteName.JOB_DETAILS_SCREEN} component={JobDetailsScreen}
        options={{
          title: "Job Detail", headerShown: false,
          headerShadowVisible: false,
        
        }}
      />

    </Stack.Navigator>
  );
}


function ProfileScreenStack({ navigation }) {
  const { t } = useTranslation();
  return (
    <Stack.Navigator initialRouteName="Profile">
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          title: t("Profile"), headerShown: true,
          headerShadowVisible: false,
          headerTitleStyle: {
            fontWeight: "700",
            fontSize: 20,
            color: Colors.theme_background_brink_pink,
          },
          headerStyle: {
            backgroundColor: Colors.white_text_color,
          },
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
              <IconE style={Style.setbariconMarginright} name="navicon" color={Colors.theme_background_brink_pink} size={SF(35)} />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <View style={{...Style.flexrowsetaddresh, marginRight:8}}>
              <TouchableOpacity onPress={() => navigation.navigate(RouteName.MESSAGE_TAB)}>
              <IconM name="bell-ring" style={{ color: Colors.theme_background_brink_pink }} size={28} />
              </TouchableOpacity>

            </View>
          ),
        }}
      />
      <Stack.Screen name={RouteName.BASIC_PROFILE} component={BasicInformation} />

      <Stack.Screen name={RouteName.EDIT_PROFILE} component={EditProfile} />
      <Stack.Screen name={RouteName.EXPERIENCE} component={Experience} />
      <Stack.Screen name={RouteName.SOCIAL_MEDIA} component={SocialMedia} />
      <Stack.Screen name={RouteName.ACCOUNT_SETTING} component={AccountSetting} />
    </Stack.Navigator>
  );
}


export function HomeScsreenTabAll() {
  const { t } = useTranslation();
  return (
    <Tab.Navigator initialRouteName="Homes"
      screenOptions={{ headerShown: false }}
      tabBarOptions={{
        activeTintColor: Colors.theme_background_brink_pink,
        inactiveTintColor: Colors.gray_text_color,
        activeBackgroundColor: Colors.white_text_color,
        labeled: true,
        labelStyle: {
        },
        tabStyle: {
          height: SH(49),
          backgroundColor: Colors.white_text_color,
          paddingTop: 0,
        },
      }}
    >
      <Tab.Screen
        name={RouteName.HOME_TAB}
        component={HomeTabScreenStack}
        options={{
          tabBarLabel: t("Home_Text"),
          tabBarIcon: ({ focused }) => (
            <IconO
              size={SF(19)}
              name="stack"
              style={{ color: focused ? Colors.theme_background_brink_pink : Colors.gray_text_color }}
            />
          ),
        }}
      />

      <Tab.Screen
        name={RouteName.APPLIED_JOB_LIST}
        component={AppliedJobsListTabStack}
        options={{
          tabBarLabel: "Applied",
          tabBarIcon: ({ focused }) => (
            <IconZ
              size={SF(19)}
              name="work"
              style={{ color: focused ? Colors.theme_background_brink_pink : Colors.gray_text_color }}
            />
          ),
        }}
      />
      <Tab.Screen
        name={RouteName.SAVE_JOB_LIST}
        component={SavedJobsListTabStack}
        options={{
          tabBarLabel: "Favourite",
          tabBarIcon: ({ focused }) => (
            <IconG
              size={SF(19)}
              name="bookmark"
              style={{ color: focused ? Colors.theme_background_brink_pink : Colors.gray_text_color }}
            />
          ),
        }}
      />

      <Tab.Screen
        name={RouteName.PROFILE_TAB}
        component={ProfileScreenStack}
        options={{
          tabBarLabel: t("Profile"),
          tabBarIcon: ({ focused }) => (
            <IconF
              size={SF(19)}
              name="user-circle"
              style={{ color: focused ? Colors.theme_background_brink_pink : Colors.gray_text_color }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  )
}
