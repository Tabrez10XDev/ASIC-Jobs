import React, { useState,useMemo } from 'react';
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { SaveJobListStyles } from '../../styles';
import { Spacing } from '../../components';
import { SH, Savejobdata } from '../../utils';
import { useTranslation } from "react-i18next";
import { useTheme } from '@react-navigation/native';

const OnlineAllJob = () => {
    const [slectdate, setslectdate] = useState('Designers');
    const { Colors } = useTheme();
    const SaveJobListStyle = useMemo(() => SaveJobListStyles(Colors), [Colors]);
    const { t } = useTranslation();
    const selectedcolortwo = (item) => {
        setslectdate(item);
    }
    const Trendingdataview = (item) => {
        return (
            <TouchableOpacity onPress={() => selectedcolortwo(item.text)} style={slectdate === item.text ? SaveJobListStyle.TrendingDataMinView : SaveJobListStyle.TrendingDataMinViewTwo}>
                <Text style={slectdate === item.text ? SaveJobListStyle.ColorTextStyles : SaveJobListStyle.ColorTextStylesTwo}>{t(item.text)}</Text>
            </TouchableOpacity>
        )
    }
    return (
        <View>
            <FlatList
                data={Savejobdata}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item, index }) => Trendingdataview(item, index)}
                keyExtractor={item => item.id}
                contentContainerStyle={SaveJobListStyle.FlatListStyles}
            />
            <Spacing space={SH(20)} />
        </View>
    );
};
export default OnlineAllJob;
