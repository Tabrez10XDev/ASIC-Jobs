import React, { useState } from "react";
import { Text, StyleSheet, View } from "react-native";
import CheckBox from '@react-native-community/checkbox';
import {Colors} from '../../utils';

function CheckBoxset(props) {
   
    const { value, onValueChange, disabled, status,tintColors } = props;
    return (
        <CheckBox
            status={status}
            disabled={disabled}
            style={{ height: 20, width: 20, }}
            value={value}
            onValueChange={onValueChange}
            tintColors={{ true: Colors.theme_backgound, false: Colors.theme_backgound }}
        />
    );
};
export default CheckBoxset;