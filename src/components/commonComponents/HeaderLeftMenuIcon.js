import React from 'react';
import {TouchableOpacity} from 'react-native';
import IconE from 'react-native-vector-icons/EvilIcons';
import {Style} from '../../styles';
import { Colors, SF } from '../../utils';

function HeaderLeftMenuIcon(props) {
  const {navigation} = props;
  return(
    <TouchableOpacity onPress={() => navigation.toggleDrawer()} style={Style.headerLetStyle}>
    <IconE style={Style.setbariconmarginright} name="navicon" color={Colors.white} size={SF(35)} />
  </TouchableOpacity>
  );
};

export default HeaderLeftMenuIcon;
