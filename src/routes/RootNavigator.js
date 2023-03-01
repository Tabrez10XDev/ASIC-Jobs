import React,{useEffect} from 'react';
import { NavigationContainer, } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {SplashScreen,LoginScreen} from '../screens';
import RouteName from './RouteName';
import TabNavigator,{ExpenseManageScreenStack, ExpenseScreenStack, ExportSalesManageScreenStack, ExportSalesScreenStack, InwardPaymentManageScreenStack, PICretionManageScreenStack, PurchaseManageScreenStack, InwardPaymentScreenStack} from './TabNavigator';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { CustomSidebarMenu, HandlingError } from '../components';
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
import { getSetting_Action, getUserPermission_Action } from '../redux/action';
import { useDispatch, useSelector } from 'react-redux';

function DrawerNavigator() {
  return (
    <Drawer.Navigator
    initialRouteName={RouteName.TAB_NAVIGATOR}
    drawerContent={(props) => <CustomSidebarMenu {...props} />}>
    <Drawer.Screen
      name={RouteName.TAB_NAVIGATOR}
      options={{ headerShown: false }}
      component={TabNavigator}
    />
      <Drawer.Screen
      name={RouteName.PI_CREATION_MANAGE_SCREEN}
      options={{ headerShown: false }}
      component={PICretionManageScreenStack}
    />
      <Drawer.Screen
      name={RouteName.INWARD_PAYMENT_MANAGE_SCREEN}
      options={{ headerShown: false }}
      component={InwardPaymentManageScreenStack}
    />
      <Drawer.Screen
      name={RouteName.INWARD_PAYMENT_SCREEN}
      options={{ headerShown: false }}
      component={InwardPaymentScreenStack}
    />
      <Drawer.Screen
      name={RouteName.PURCHASE_MANAGE_SCREEN}
      options={{ headerShown: false }}
      component={PurchaseManageScreenStack}
    />
      <Drawer.Screen
      name={RouteName.EXPENSE_SCREEN}
      options={{ headerShown: false }}
      component={ExpenseScreenStack}
    />
        <Drawer.Screen
      name={RouteName.EXPENSE_MANAGE_SCREEN}
      options={{ headerShown: false }}
      component={ExpenseManageScreenStack}
    />
        <Drawer.Screen
      name={RouteName.EXPPORT_SALES_SCREEN}
      options={{ headerShown: false }}
      component={ExportSalesScreenStack}
    />
       <Drawer.Screen
      name={RouteName.EXPPORT_SALES_MANAGE_SCREEN}
      options={{ headerShown: false }}
      component={ExportSalesManageScreenStack}
    />
  </Drawer.Navigator>
  );
}

const RootNavigator = props => {
  const dispatch = useDispatch();
  const { userDetails } = useSelector((state) => state.authReducer);

  useEffect(() => {
      dispatch(getSetting_Action())
  }, [])

  useEffect(() => {
    if(userDetails.length != 0){
       dispatch(getUserPermission_Action(userDetails.id))
    }
}, [userDetails])
  return (
    <>
    <HandlingError />
    <NavigationContainer >
        <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={RouteName.SPLASH_SCREEN} component={SplashScreen} />
        <Stack.Screen name={RouteName.LOGIN_SCREEN} component={LoginScreen} />
        <Stack.Screen name={RouteName.DRAWER_NAVIGATOR} component={DrawerNavigator} />
     </Stack.Navigator>
  </NavigationContainer>
  </>
  );
}
export default RootNavigator;