import React from "react";
import CheckBox from '@react-native-community/checkbox';
import {Colors} from '../../utils';

function CheckBoxset(props) {
    const { value, onValueChange, disabled, status, } = props;
    return (
        <CheckBox
            status={status}
            disabled={disabled}
            style={{ height: 20, width: 20, }}
            value={value}
            onValueChange={onValueChange}
            tintColors={{ true: Colors.theme_background_brink_pink, false: Colors.theme_background_brink_pink }}
        />
    );
};
export default CheckBoxset;