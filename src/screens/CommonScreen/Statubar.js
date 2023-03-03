import React, { useState,useMemo } from 'react';
import { View,StatusBar} from "react-native";


const StatusBarset = (props) => {
   const {hidden,backgroundColor,barStyle} = props;
    return (
        <View>
           <StatusBar hidden={hidden}
               backgroundColor = {backgroundColor}  
               barStyle = {barStyle}    />  
        </View>
    );
};
export default StatusBarset;
