import React, { useState } from 'react';
import { View, Text } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

function DatePicker(props) {
    const {value=new Date(), show=false, mode="date",dateOnChange} = props;
    return (
        <View>
            {show && (
                <DateTimePicker
                    testID="dateTimePicker"
                    timeZoneOffsetInMinutes={0}
                    value={value}
                    mode={mode}
                    is24Hour={true}
                    display="default"
                    onChange={dateOnChange}
                />
            )}
        </View>
    )
}
export default DatePicker;