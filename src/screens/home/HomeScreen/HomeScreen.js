import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Style } from '../../../styles';
import { Container, Spacing, } from '../../../components';
import { RouteName } from '../../../routes';
import { SF, Colors, SH, Strings, permissionCheck } from '../../../utils';
import IconEA from 'react-native-vector-icons/Entypo';
import { useDispatch,useSelector } from "react-redux";

const HomeScreen = (props) => {
  const { navigation } = props;
const { userPermissionData } = useSelector((state) => state.commonReducer);

  var listArray = [
    { id: "1", title: Strings.common.sellInvoicelabel,permissionId :'1' }, 
  { id: "2", title: Strings.common.paymentlabel,permissionId :'2' }, 
  { id: "3", title: Strings.common.purchaselabel,permissionId :'3' }, 
   { id: "4", title: Strings.common.exportlabel,permissionId :'4' }, 
   { id: "5", title: Strings.common.expenselabel,permissionId :'6' }]
  const handleNavigate = (id) => {
    id == '1' && navigation.navigate(RouteName.PI_CREATION_SCREEN);
    id == '2' && navigation.navigate(RouteName.INWARD_PAYMENT_SCREEN);
    id == '3' && navigation.navigate(RouteName.PURCHASE_SCREEN);
    id == '4' && navigation.navigate(RouteName.EXPPORT_SALES_SCREEN);
    id == '5' && navigation.navigate(RouteName.EXPENSE_SCREEN);

  }
  return (
    <Container>
      <ScrollView>
        <View style={Style.themeMainViewContainer}>
          <Spacing space={SH(30)} />
          {listArray.map((item) => {
            var checkper = item.permissionId == "4" ? permissionCheck(userPermissionData,'4') || permissionCheck(userPermissionData,'5') :  permissionCheck(userPermissionData,item.permissionId);
            return (
              checkper && 
              <View key={item.id} style={Style.homeListButtonMainView}>
                <TouchableOpacity style={Style.homeListButtonMain} onPress={() => handleNavigate(item.id)}>
                  <View style={Style.homeListButtonMainLeft}>
                    <IconEA
                      color={Colors.theme_backgound_second} size={SF(30)}
                      name="help-with-circle"
                    />
                    <Text style={Style.homeListButtonText}>{item.title}</Text>
                  </View>
                  <View style={Style.homeListButtonRight}>
                    <IconEA
                      color={Colors.gray} size={SF(25)}
                      name="chevron-thin-right"
                    />
                  </View>
                </TouchableOpacity>
                <Spacing space={SH(20)} />

              </View>
            
            )
          })}

        </View>
      </ScrollView>
    </Container>
  );
};
export default HomeScreen;
