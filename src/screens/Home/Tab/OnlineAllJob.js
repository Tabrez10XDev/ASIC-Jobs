import React, { useState,useMemo } from 'react';
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { HomeTabStyles } from '../../../styles';
import { Spacing } from '../../../components';
import { SH, Trendingdata, } from '../../../utils';
import { useTranslation } from "react-i18next";
import { useTheme } from '@react-navigation/native';

const EventsAll = () => {
    const { t } = useTranslation();
    const { Colors } = useTheme();
    const HomeStyle = useMemo(() => HomeTabStyles(Colors), [Colors]);
    const [slectdate, setslectdate] = useState('Art');
    const selectedcolortwo = (item) => {
        setslectdate(item);
    }
    const Trendingdataview = (item) => {
        return (
            <TouchableOpacity onPress={() => selectedcolortwo(item.text)} style={slectdate === item.text ? HomeStyle.TrendingDataMinView : HomeStyle.TrendingDataMinViewTwo}>
                <Text style={slectdate === item.text ? HomeStyle.ColorTextStyles : HomeStyle.ColorTextStylesTwo}>{t(item.text)}</Text>
            </TouchableOpacity>
        )
    }
    return (
        <View>
            <Spacing space={SH(10)} />
            <FlatList
                data={Trendingdata}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item, index }) => Trendingdataview(item, index)}
                keyExtractor={item => item.id}
                contentContainerStyle={HomeStyle.FlatListStyles}
            />
            <Spacing space={SH(20)} />
        </View>
    );
};
export default EventsAll;
