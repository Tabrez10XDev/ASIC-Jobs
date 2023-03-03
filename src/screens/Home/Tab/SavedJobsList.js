import React, { useMemo } from 'react';
import { View, Text, ScrollView, FlatList, Image } from 'react-native';
import { SaveJobListStyles } from '../../../styles';
import { Spacing, Lottie } from '../../../components';
import { useTranslation } from "react-i18next";
import images from '../../../index';
import { OnlineAllJob } from '../../../screens';
import { SH, Savejobdata } from '../../../utils';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { RouteName } from '../../../routes';
import { useTheme } from '@react-navigation/native';

const SavedJobsList = (props) => {
    const { t } = useTranslation();
    const { Colors } = useTheme();
    const SaveJobListStyle = useMemo(() => SaveJobListStyles(Colors), [Colors]);
    const { navigation } = props;
    const Trendingdataview = (item, index) => {
        return (
            <TouchableOpacity onPress={() => navigation.navigate(RouteName.JOB_DETAILS_SCREEN)} style={SaveJobListStyle.MinBgColorWhite}>
                <View style={SaveJobListStyle.FlexRow}>
                    <View style={SaveJobListStyle.DevelperStyles}>
                        <View style={SaveJobListStyle.ImagWidthTextFlex}>
                            <View style={SaveJobListStyle.ImageViewStyles}>
                                <Image source={item.devloperimage} style={SaveJobListStyle.Imagestyles} />
                            </View>
                            <View>
                                <Text style={SaveJobListStyle.DevelperText}>{t(item.text)}</Text>
                                <Text style={SaveJobListStyle.Normalsmalltext}>{t(item.Sponce)}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={SaveJobListStyle.Widthfifty}>
                        <Text style={SaveJobListStyle.DevelperTexttwo}>{t(item.salerytext)}</Text>
                        <Text style={SaveJobListStyle.Normalsmalltexttwo}>{t(item.countryname)}</Text>
                    </View>
                </View>
                <Spacing space={SH(5)} />
                <View style={SaveJobListStyle.Twobuttonflexview}>
                    {index === 0 || index === 1 || index === 3 || index === 4 ?
                        <TouchableOpacity onPress={() => navigation.navigate(item.url)} style={{ ...SaveJobListStyle.Statusbutton}}>
                            <Text style={SaveJobListStyle.Openbuttontextstyles}>{t(item.buttontext)}</Text>
                        </TouchableOpacity>
                        :
                        <TouchableOpacity onPress={() => navigation.navigate(item.url)} style={{ ...SaveJobListStyle.Statusbuttontwo, backgroundColor: item.backgroundwhite }}>
                            <Text style={SaveJobListStyle.Applytextstyles}>{t(item.buttontext)}</Text>
                        </TouchableOpacity>}
                    <View>
                        <Text style={SaveJobListStyle.Fulltimetextstyle}>{t(item.fulltimetext)}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
    return (
        <View style={SaveJobListStyle.MinViewScreen}>
            <ScrollView
                keyboardShouldPersistTaps="handled"
                contentContainerStyle={{
                    width: '100%',
                    height: 'auto',
                }}>
                <View>
                    <View style={SaveJobListStyle.FlexViewStylers}>
                        <View>
                            <Text style={SaveJobListStyle.SavedTitleStylers}>{t("Saved_Job")}</Text>
                        </View>
                        <View style={SaveJobListStyle.Likestyles}>
                            <Lottie Lottiewidthstyle={SaveJobListStyle.Likestyles} source={images.Likeanimation} />
                        </View>
                    </View>
                    <OnlineAllJob />
                    <FlatList
                        data={Savejobdata}
                        numColumns={1}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item, index }) => Trendingdataview(item, index)}
                        keyExtractor={item => item.id}
                        contentContainerStyle={SaveJobListStyle.FlatListStylestwo}
                    />
                </View>
            </ScrollView>
        </View>
    );
};
export default SavedJobsList;
