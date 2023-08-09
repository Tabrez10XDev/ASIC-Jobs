import React, { useEffect, useState } from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from "react-redux";
import { Colors } from '../utils';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SearchResults from '../screens/Home/Tab/SearchResults';
import AllVacancies from '../screens/Home/Tab/AllVacancies';
import CompanyDetails from '../screens/Home/Tab/CompanyDetails';
import BlogDetails from '../screens/Home/Tab/BlogDetails';
import JobDetailsScreen from '../screens/JobDetailsScreen/JobDetailsScreen';

const Stack = createNativeStackNavigator();

import { RouteName, SideNavigator } from '../routes';

import {
  LoginScreen, RegisterScreen, OtpVeryfiveScreen,
  SplashScreen, RegistrationSuccessful,
  Swiperscreen, JobTypeScreen, JobTimesScreen, SelectJobandLocation,
  TranslationScreen, ForgotPassword, FeaturedAllJob,
} from '../screens';

import {Messagelist} from '../screens';;
import AllCategories from '../screens/Home/Tab/AllCategories';
import AllJobs from '../screens/Home/Tab/AllJobs';
import CategoriesSearch from '../screens/Home/Tab/CategoriesSearch';
import AllPosts from '../screens/Home/Tab/AllPosts';
import AllCompanies from '../screens/Home/Tab/AllCompanies';

const RootNavigator = props => {

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
    <NavigationContainer theme={colorValue}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={'SplashScreen'} component={SplashScreen} />
        <Stack.Screen name={RouteName.LOGIN_SCREEN} component={LoginScreen} />
        <Stack.Screen name={RouteName.REGISTER_SCREEN} component={RegisterScreen} />
        <Stack.Screen name={RouteName.HOME_SCREEN} component={SideNavigator} />
        <Stack.Screen name={RouteName.REGIATRAION_SUCCESSFULL} component={RegistrationSuccessful} />
        <Stack.Screen name={RouteName.OTP_VERYFY_SCREEN} component={OtpVeryfiveScreen} />
        <Stack.Screen name={RouteName.SWIPER_SCREEN} component={Swiperscreen} />
        <Stack.Screen name={RouteName.JOB_TYPES_SCREEN} component={JobTypeScreen} />
        <Stack.Screen name={RouteName.JOB_TIMES_SCREEN} component={JobTimesScreen} />
        <Stack.Screen name={RouteName.SERLECT_JOB_AND_LOCATION} component={SelectJobandLocation} />
        <Stack.Screen name={RouteName.SELECT_LANGUAGE} component={TranslationScreen} />
        <Stack.Screen name={RouteName.Forget_Password} options={{ headerShown: false, headerShadowVisible: false }} component={ForgotPassword} />
        <Stack.Screen name={RouteName.ALL_CATEGORIES} options={{ headerShown: true, headerShadowVisible: false, title: 'All Categories' }} component={AllCategories} />
        <Stack.Screen name={RouteName.ALL_JOBS} options={{ headerShown: true, headerShadowVisible: false, title: '' }} component={AllJobs} />
        <Stack.Screen name={RouteName.SEARCH_RESULTS} options={{ headerShown: true, headerShadowVisible: false, title: 'Search' }} component={SearchResults} />
        <Stack.Screen name={RouteName.ALL_VACANCIES} options={{ headerShown: true, headerShadowVisible: false, title: 'All Vacancies' }} component={AllVacancies} />
        <Stack.Screen name={RouteName.CATEGORIES_SEARCH} options={{ headerShown: true, headerShadowVisible: false, title: 'Categories Search' }} component={CategoriesSearch} />
        <Stack.Screen name={RouteName.COMPANY_DETAILS} options={{ headerShown: false, headerShadowVisible: false, title: '' }} component={CompanyDetails} />
        <Stack.Screen name={RouteName.BLOG_DETAILS} options={{ headerShown: false, headerShadowVisible: false, title: '' }} component={BlogDetails} />
        <Stack.Screen name={RouteName.JOB_DETAILS_SCREEN} component={JobDetailsScreen} options={{title: "Job Detail", headerShown: false,headerShadowVisible: false}} />
        <Stack.Screen name={RouteName.ALL_POSTS} options={{ headerShown: true, headerShadowVisible: false, title: 'All Blogs' }} component={AllPosts} />
        <Stack.Screen name={RouteName.ALL_COMPANIES} options={{ headerShown: true, headerShadowVisible: false, title: 'All Companies' }} component={AllCompanies} />
        <Stack.Screen name={RouteName.MESSAGE_TAB} options={{ headerShown: false, headerShadowVisible: false }} component={Messagelist} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default RootNavigator;