import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Style} from '../styles';
import { Colors, permissionCheck, SF, Strings } from '../utils';
import {HomeScreen, InwardPaymentScreen, PICreationManageScreen, PICreationScreen,InwardPaymentManageScreen, PurchaseScreen, PurchaseManageScreen, ExpenseScreen, ExpenseManageScreen, ExportSalesScreen, ExportSalesManageScreen} from '../screens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IconEA from 'react-native-vector-icons/Entypo';
import IconM from 'react-native-vector-icons/MaterialIcons';
import { HeaderLeftMenuIcon } from '../components';
import RouteName from './RouteName';
import { useDispatch,useSelector } from "react-redux";

const Tab = createBottomTabNavigator();
const TabBarIcon = (props) => {
  const {icon="",name} = props
  return (
    icon == "MaterialIcons" ?
   <IconM name={name} color={Colors.white} size={SF(35)} />
   :
   <IconEA name={name} color={Colors.white} size={SF(35)} />
  
  )
}
const Stack = createNativeStackNavigator();
const headerArray = {   
  headerShown: true,
  headerTitleAlign:"center",
  headerTitleStyle: Style.headerTitleStyle,
  headerTintColor: Colors.theme_backgound_second,
  headerStyle: Style.headerStyle
};
function HomeTabScreenStack(props) {
  return (
    <Stack.Navigator initialRouteName={RouteName.HOME_SCREEN_STACK}>
      <Stack.Screen
        name={RouteName.HOME_SCREEN_STACK}
        component={HomeScreen}
        options={{
          title: Strings.common.homelabel, 
          ...headerArray,
          headerLeft: () => (
             <HeaderLeftMenuIcon {...props} />
          )
        }}
      />
    </Stack.Navigator>
  );
}

function PICretionTabScreenStack(props) {
  return (
    <Stack.Navigator initialRouteName={RouteName.PI_CREATION_SCREEN_STACK}>
      <Stack.Screen
        name={RouteName.PI_CREATION_SCREEN_STACK}
        component={PICreationScreen}
        options={{
          title: Strings.common.sellInvoicelabel, 
          ...headerArray,
          headerLeft: () => (
            <HeaderLeftMenuIcon {...props} />
          )
        }}
      />
    </Stack.Navigator>
  );
}

function PurchaseScreenStack(props) {
  return (
    <Stack.Navigator initialRouteName={RouteName.PURCHASE_SCREEN_STACK}>
      <Stack.Screen
        name={RouteName.PURCHASE_SCREEN_STACK}
        component={PurchaseScreen}
        options={{
          title: Strings.common.purchaselabel, 
          ...headerArray,
          headerLeft: () => (
            <HeaderLeftMenuIcon {...props} />
          )
        }}
      />
    </Stack.Navigator>
  );
}
const TabNavigator =() => {
const { userPermissionData } = useSelector((state) => state.commonReducer);

  return (
    <Tab.Navigator initialRouteName={RouteName.HOME_SCREEN}
    screenOptions={{
      tabBarHideOnKeyboard: true,
      tabBarStyle: Style.bottomTabMain,
      tabBarActiveTintColor: Colors.white,
        tabBarInactiveTintColor: Colors.theme_backgound,
    }}
    >
      <Tab.Screen
        name={RouteName.HOME_SCREEN}
        component={HomeTabScreenStack}
        options={{
          tabBarLabel:Strings.common.homelabel,
          headerShown: false,
          tabBarLabelStyle:Style.tabBarLabelStyle,
          tabBarIcon: ({ focused, color }) => (
            <TabBarIcon
              focused={focused}
              tintColor={color}
              name="home"
            />
          ),
        }}
      />
      {permissionCheck(userPermissionData,'1') && 
       <Tab.Screen
        name={RouteName.PI_CREATION_SCREEN}
        component={PICretionTabScreenStack}
        options={{
          tabBarLabel:Strings.common.sellInvoicelabel,
          headerShown: false,
          tabBarLabelStyle:Style.tabBarLabelStyle,
          tabBarIcon: ({ focused, color }) => (
            <TabBarIcon
              focused={focused}
              tintColor={color}
              name="circle-with-plus"
            />
          ),
        }}
      />
      }

{permissionCheck(userPermissionData,'3') && 
<Tab.Screen
        name={RouteName.PURCHASE_SCREEN}
        component={PurchaseScreenStack}
        options={{
          tabBarLabel:Strings.common.purchaselabel,
          headerShown: false,
          tabBarLabelStyle:Style.tabBarLabelStyle,
          tabBarIcon: ({ focused, color }) => (
            <TabBarIcon
              focused={focused}
              tintColor={color}
              name="payment"
              icon="MaterialIcons"
            />
          ),
        }}
      />
}
    </Tab.Navigator>
  )
}
export default TabNavigator;

export function PICretionManageScreenStack(props) {
  return (
    <Stack.Navigator initialRouteName={RouteName.PI_CREATION_MANAGE_SCREEN_STACK}>
      <Stack.Screen
        name={RouteName.PI_CREATION_MANAGE_SCREEN_STACK}
        component={PICreationManageScreen}
        options={{
          title: Strings.common.sellInvoicelabel, 
          ...headerArray,
          headerLeft: () => (
            <HeaderLeftMenuIcon {...props} />
          )
        }}
      >
</Stack.Screen>
    </Stack.Navigator>
  );
}

export function InwardPaymentManageScreenStack(props) {
  return (
    <Stack.Navigator initialRouteName={RouteName.INWARD_PAYMENT_MANAGE_SCREEN_STACK}>
      <Stack.Screen
        name={RouteName.INWARD_PAYMENT_MANAGE_SCREEN_STACK}
        component={InwardPaymentManageScreen}
        options={{
          title: Strings.common.paymentlabel, 
          ...headerArray,
          headerLeft: () => (
            <HeaderLeftMenuIcon {...props} />
          )
        }}
      />
    </Stack.Navigator>
  );
}

export function InwardPaymentScreenStack(props) {
  return (
    <Stack.Navigator initialRouteName={RouteName.INWARD_PAYMENT_SCREEN_STACK}>
      <Stack.Screen
        name={RouteName.INWARD_PAYMENT_SCREEN_STACK}
        component={InwardPaymentScreen}
        options={{
          title:  Strings.common.paymentlabel, 
          ...headerArray,
          headerLeft: () => (
            <HeaderLeftMenuIcon {...props} />
          )
        }}
      />
    </Stack.Navigator>
  );
}

export function PurchaseManageScreenStack(props) {
  return (
    <Stack.Navigator initialRouteName={RouteName.PURCHASE_MANAGE_SCREEN_STACK}>
      <Stack.Screen
        name={RouteName.PURCHASE_MANAGE_SCREEN_STACK}
        component={PurchaseManageScreen}
        options={{
          title:  Strings.common.purchaselabel, 
          ...headerArray,
          headerLeft: () => (
            <HeaderLeftMenuIcon {...props} />
          )
        }}
      />
    </Stack.Navigator>
  );
}

export function ExpenseScreenStack(props) {
  return (
    <Stack.Navigator initialRouteName={RouteName.EXPENSE_SCREEN_STACK}>
      <Stack.Screen
        name={RouteName.EXPENSE_SCREEN_STACK}
        component={ExpenseScreen}
        options={{
          title:  Strings.common.expenselabel, 
          ...headerArray,
          headerLeft: () => (
            <HeaderLeftMenuIcon {...props} />
          )
        }}
      />
    </Stack.Navigator>
  );
}
export function ExpenseManageScreenStack(props) {
  return (
    <Stack.Navigator initialRouteName={RouteName.EXPENSE_MANAGE_SCREEN_STACK}>
      <Stack.Screen
        name={RouteName.EXPENSE_MANAGE_SCREEN_STACK}
        component={ExpenseManageScreen}
        options={{
          title:  Strings.common.expenselabel, 
          ...headerArray,
          headerLeft: () => (
            <HeaderLeftMenuIcon {...props} />
          )
        }}
      />
    </Stack.Navigator>
  );
}
export function ExportSalesScreenStack(props) {
  return (
    <Stack.Navigator initialRouteName={RouteName.EXPPORT_SALES_SCREEN_STACK}>
      <Stack.Screen
        name={RouteName.EXPPORT_SALES_SCREEN_STACK}
        component={ExportSalesScreen}
        options={{
          title: Strings.common.exportlabel, 
          ...headerArray,
          headerLeft: () => (
            <HeaderLeftMenuIcon {...props} />
          )
        }}
      />
    </Stack.Navigator>
  );
}
export function ExportSalesManageScreenStack(props) {
  return (
    <Stack.Navigator initialRouteName={RouteName.EXPPORT_SALES_MANAGE_SCREEN_STACK}>
      <Stack.Screen
        name={RouteName.EXPPORT_SALES_MANAGE_SCREEN_STACK}
        component={ExportSalesManageScreen}
        options={{
          title: Strings.common.exportlabel, 
          ...headerArray,
          headerLeft: () => (
            <HeaderLeftMenuIcon {...props} />
          )
        }}
      />
    </Stack.Navigator>
  );
}

