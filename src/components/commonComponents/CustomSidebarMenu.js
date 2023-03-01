import React, { useState,useEffect } from "react";
import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import { Sidemenu } from '../../styles';
import RouteName from '../../routes/RouteName';
import { useDispatch,useSelector } from "react-redux";
import IconE from 'react-native-vector-icons/Entypo';
import IconM from 'react-native-vector-icons/MaterialIcons';

import { SweetAlertModal } from ".";
import { Colors, permissionCheck, Strings } from "../../utils";
import {auth_reset_initial_state_reduser} from "../../redux/action";

const CustomSidebarMenu = (props) => {
  const dispatch = useDispatch();
const { navigation } = props;
const { userDetails } = useSelector(state => state.authReducer) || {};
const [modalVisible, setModalVisible] = useState(false)
const { userPermissionData } = useSelector((state) => state.commonReducer);
useEffect(() => {
      if(userDetails.length == 0){
        navigation.replace(RouteName.LOGIN_SCREEN)
      }
}, [userDetails]);

  const Onpressfunction = (e) => {
    navigation.toggleDrawer();
    navigation.navigate(e)
  };

  const logOutonpress = (e) => {
    setModalVisible(false)
    navigation.toggleDrawer();
    e == "yes" && dispatch(auth_reset_initial_state_reduser());
  };

  return (
    <ScrollView>
      <View style={Sidemenu.customslidebarmenu}>
        {permissionCheck(userPermissionData,'1') && 
        <TouchableOpacity style={Sidemenu.flexrowset} onPress={
          () => Onpressfunction(RouteName.HOME_SCREEN)
        }>
          <IconE
            size={19}
            name="home"
            color={Colors.theme_backgound}
          />
          <Text style={Sidemenu.hometextstyle}>{Strings.common.homelabel}</Text>
        </TouchableOpacity>
        }
         {permissionCheck(userPermissionData,'1') && 
        <TouchableOpacity style={Sidemenu.flexrowset} onPress={
          () => Onpressfunction(RouteName.PI_CREATION_SCREEN)
        }>
          <IconE
            size={19}
            name="circle-with-plus"
            color={Colors.theme_backgound}
          />
          <Text style={Sidemenu.hometextstyle}>{Strings.common.sellInvoicelabel}</Text>
        </TouchableOpacity>
  }
   {permissionCheck(userPermissionData,'2') && 
        <TouchableOpacity style={Sidemenu.flexrowset} onPress={
          () => Onpressfunction(RouteName.INWARD_PAYMENT_SCREEN)
        }>
          <IconE
            size={19}
            name="help-with-circle"
            color={Colors.theme_backgound}
          />
          <Text style={Sidemenu.hometextstyle}>{Strings.common.paymentlabel}</Text>
        </TouchableOpacity>
}

{permissionCheck(userPermissionData,'3') && 
        <TouchableOpacity style={Sidemenu.flexrowset}
        onPress={
          () => Onpressfunction(RouteName.PURCHASE_SCREEN)
        }
        >
          <IconM
            size={19}
            name="payment"
            color={Colors.theme_backgound}
          />
          <Text style={Sidemenu.hometextstyle}>{Strings.common.purchaselabel}</Text>
        </TouchableOpacity>
}
        
{(permissionCheck(userPermissionData,'4') || permissionCheck(userPermissionData,'5')) && 
        <TouchableOpacity style={Sidemenu.flexrowset}
         onPress={
          () => Onpressfunction(RouteName.EXPPORT_SALES_SCREEN)
        }
        >
          <IconE
            size={19}
            name="help-with-circle"
            color={Colors.theme_backgound}
          />
          <Text style={Sidemenu.hometextstyle}>{Strings.common.exportlabel}</Text>
        </TouchableOpacity>
}
{permissionCheck(userPermissionData,'6') && 
        <TouchableOpacity style={Sidemenu.flexrowset}
         onPress={
          () => Onpressfunction(RouteName.EXPENSE_SCREEN)
        }>
          <IconE
            size={19}
            name="help-with-circle"
            color={Colors.theme_backgound}
          />
          <Text style={Sidemenu.hometextstyle}>{Strings.common.expenselabel}</Text>
        </TouchableOpacity>
}

        <View style={Sidemenu.settingandlogout}>
          <TouchableOpacity style={Sidemenu.flexrowset} onPress={()=>setModalVisible(true)}>
            <IconE name="log-out" color={Colors.theme_backgound} size={23} />
            <Text style={Sidemenu.hometextstyle}>Logout</Text>
          </TouchableOpacity>
        </View>

      </View>
      <SweetAlertModal modalVisible={modalVisible} buttonText="Yes" onPress={()=>logOutonpress("yes")} cancelButtonText="No" onPressCancel={()=>logOutonpress("no")}  message={Strings.common.logoutMessage} />

    </ScrollView>
  );
};
export default CustomSidebarMenu;

