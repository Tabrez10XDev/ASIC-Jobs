import React from 'react';
import RouteName from './RouteName';
import {
  SplashScreen, GetstartedSliderscreen,
  AboutSelfScreen, AgeScreen, WeightScreen, GoalScreen, WeHelpScreen, LoginScreen, SignUpScreen, OtpVerifyScreen, HomeScreen, WorkoutDetailScreen, ReadyToGoScreen, StartScreen, TakeRestScreen, ExerciseVideo, ReportScreen, StepCounterScreen, EditProfileScreen, AppSettingsScreen, HelpScreen
} from '../screens';
import { AppHeader, ColorPicker } from '../components';
import { colorsset, Fonts, SF } from '../utils';
import { createDrawerNavigator } from "@react-navigation/drawer";
const Drawer = createDrawerNavigator();
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import { View,Text } from 'react-native';



const SideNavigator = props => {
  return (
      <Drawer.Navigator screenOptions={{ headerShown: false,
      
        drawerStyle: {
          backgroundColor: colorsset.theme_backgound,
          width: 240,
        }
      }}
    
      >
        <Drawer.Screen
          name={RouteName.HOME_SCREEN} component={HomeScreen}
          options={{
            title:"Home",
            headerStyle: {
              backgroundColor: colorsset.theme_backgound_second,
            },
            headerShown: true, 
            headerRight: (props) => <ColorPicker {...props} />,
            headerTitle: (props) => <AppHeader {...props} headerTitle="Women Workout" />,
            drawerActiveTintColor: colorsset.theme_backgound_second,
            drawerInactiveTintColor: colorsset.white,
            drawerLabelStyle:{color:colorsset.white,fontSize:SF(18),fontFamily:Fonts.RobotoCondensed_Regular},
            drawerActiveBackgroundColor:colorsset.theme_backgound_second,
            drawerIcon:({focused})=>
                        <Icon
                           name={"home"}
                           size={24}
                           color={focused ? colorsset.theme_backgound : colorsset.white}
                       />
          }}
         
        />
        <Drawer.Screen
          name={RouteName.EXERCISE_VIDEO_SCREEN} component={ExerciseVideo}
          options={{
            title:"Video",
            headerStyle: {
              backgroundColor: colorsset.theme_backgound_second,
            },
            headerShown: true, headerTitle: (props) => <AppHeader {...props} headerTitle="Exercise Video" />,
            drawerActiveTintColor: colorsset.theme_backgound_second,
            drawerInactiveTintColor: colorsset.white,
            drawerLabelStyle:{color:colorsset.white,fontSize:SF(18),fontFamily:Fonts.RobotoCondensed_Regular},
            drawerActiveBackgroundColor:colorsset.theme_backgound_second,
            drawerIcon:({focused})=>
                        <Icon
                           name={"video"}
                           size={24}
                           color={focused ? colorsset.theme_backgound : colorsset.white}
                       />
          }}
        />
        <Drawer.Screen
          name={RouteName.REPORT_SCREEN} component={ReportScreen}
          options={{
            title:"Report",
            headerStyle: {
              backgroundColor: colorsset.theme_backgound_second,
            },
            headerShown: true, headerTitle: (props) => <AppHeader {...props} headerTitle="Report" />,
            drawerActiveTintColor: colorsset.theme_backgound_second,
            drawerInactiveTintColor: colorsset.white,
            drawerLabelStyle:{color:colorsset.white,fontSize:SF(18),fontFamily:Fonts.RobotoCondensed_Regular},
            drawerActiveBackgroundColor:colorsset.theme_backgound_second,
            drawerIcon:({focused})=>
                        <Icon
                           name={"poll"}
                           size={24}
                           color={focused ? colorsset.theme_backgound : colorsset.white}
                       />
          }}
        />
        <Drawer.Screen
          name={RouteName.STEP_COUNTER_SCREEN} component={StepCounterScreen}
          options={{
            title:"Steps",
            headerStyle: {
              backgroundColor: colorsset.theme_backgound_second,
            },
            headerShown: true, headerTitle: (props) => <AppHeader {...props} headerTitle="Steps" />,
            drawerActiveTintColor: colorsset.theme_backgound_second,
            drawerInactiveTintColor: colorsset.white,
            drawerLabelStyle:{color:colorsset.white,fontSize:SF(18),fontFamily:Fonts.RobotoCondensed_Regular},
            drawerActiveBackgroundColor:colorsset.theme_backgound_second,
            drawerIcon:({focused})=>
                        <Icon
                           name={"atlassian"}
                           size={24}
                           color={focused ? colorsset.theme_backgound : colorsset.white}
                       />
          }}
        />
        <Drawer.Screen
          name={RouteName.EDIT_PROFILE_SCREEN} component={EditProfileScreen}
          options={{
            title:"Profile",
            headerStyle: {
              backgroundColor: colorsset.theme_backgound_second,
            },
            headerShown: true, headerTitle: (props) => <AppHeader {...props} headerTitle="Profile" />,
            drawerActiveTintColor: colorsset.theme_backgound_second,
            drawerInactiveTintColor: colorsset.white,
            drawerLabelStyle:{color:colorsset.white,fontSize:SF(18),fontFamily:Fonts.RobotoCondensed_Regular},
            drawerActiveBackgroundColor:colorsset.theme_backgound_second,
            drawerIcon:({focused})=>
                        <Icon
                           name={"account"}
                           size={24}
                           color={focused ? colorsset.theme_backgound : colorsset.white}
                       />
          }}
        />
        <Drawer.Screen
          name={RouteName.APP_SETTINGS_SCREEN} component={AppSettingsScreen}
          options={{
            title:"Settings",
            headerStyle: {
              backgroundColor: colorsset.theme_backgound_second,
            },
            headerShown: true, headerTitle: (props) => <AppHeader {...props} headerTitle="Settings" />,
            drawerActiveTintColor: colorsset.theme_backgound_second,
            drawerInactiveTintColor: colorsset.white,
            drawerLabelStyle:{color:colorsset.white,fontSize:SF(18),fontFamily:Fonts.RobotoCondensed_Regular},
            drawerActiveBackgroundColor:colorsset.theme_backgound_second,
            drawerIcon:({focused})=>
                        <Icon
                           name={"cog"}
                           size={24}
                           color={focused ? colorsset.theme_backgound : colorsset.white}
                       />
          }}
        />
        <Drawer.Screen
          name={RouteName.HELP_SCREEN} component={HelpScreen}
          options={{
            title:"Help",
            headerStyle: {
              backgroundColor: colorsset.theme_backgound_second,
            },
            headerShown: true, headerTitle: (props) => <AppHeader {...props} headerTitle="Help" />,
            drawerActiveTintColor: colorsset.theme_backgound_second,
            drawerInactiveTintColor: colorsset.white,
            drawerLabelStyle:{color:colorsset.white,fontSize:SF(18),fontFamily:Fonts.RobotoCondensed_Regular},
            drawerActiveBackgroundColor:colorsset.theme_backgound_second,
            drawerIcon:({focused})=>
                        <Icon
                           name={"help-box"}
                           size={24}
                           color={focused ? colorsset.theme_backgound : colorsset.white}
                       />
          }}
        />
      </Drawer.Navigator>
  );
}
export default SideNavigator;