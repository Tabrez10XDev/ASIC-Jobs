import React, { useState, useMemo } from 'react';
import { View, Text, ScrollView, FlatList, Image, TouchableOpacity } from 'react-native';
import { ApplyJobStyles, Style } from '../../styles';
import { Spacing, Button } from '../../components';
import { useTranslation } from "react-i18next";
import images from '../../index';
import { SH, Descrptiontext, Requiremnetsdata, Aboutdata, ReviewsText } from '../../utils';
import Icon from 'react-native-vector-icons/Octicons';
import IconA from 'react-native-vector-icons/Entypo';
import { RouteName } from '../../routes';
import { useTheme } from '@react-navigation/native';

const JobDetailsScreen = (props) => {
    const { Colors } = useTheme();
    const ApplyJobStyle = useMemo(() => ApplyJobStyles(Colors), [Colors]);
    const { t } = useTranslation();
    const { navigation } = props;
    const [tabshow, settabshow] = useState(1);
    const TabshowFunction = (item) => {
        settabshow(item)
    }
    const Descrptiontextview = (item) => {
        return (
            <View>
                <Spacing space={SH(20)} />
                <View style={ApplyJobStyle.Flexrowdescription}>
                    <View style={ApplyJobStyle.Discriptiontextview}>
                        <Icon name="dot-fill" size={20} color={Colors.black_text_color} />
                    </View>
                    <View style={ApplyJobStyle.parehraphview}>
                        <Text style={ApplyJobStyle.ParegraphTextStyles}>{t(item.description)}</Text>
                    </View>
                </View>
            </View>
        );
    }
    const ReviewsFunction = (item) => {
        return (
            <View>
                <Spacing space={SH(20)} />
                <View style={ApplyJobStyle.Ratingview}>
                    {item.Rating}
                </View>
                <View style={ApplyJobStyle.whiteboxwhishlist}>
                    <View style={ApplyJobStyle.flexDirectiwhilist}>
                        <View style={ApplyJobStyle.reviewflex}>
                            <Image style={ApplyJobStyle.setreviesstyleimage} resizeMode='cover'
                                source={item.imagesone} />
                            <View style={ApplyJobStyle.textviewsetwhishlist}>
                                <View style={ApplyJobStyle.flexratingandtext}>
                                    <Text style={ApplyJobStyle.Datetextstyle}>{t(item.datetext)}</Text>
                                </View>
                                <Text style={ApplyJobStyle.Datetextstyle}>{t(item.username)}</Text>
                            </View>
                        </View>
                    </View>
                    <Spacing space={SH(10)} />
                    <Text style={ApplyJobStyle.setdollardtextset}>{t("FDescriptiontwo")}</Text>
                    <Spacing space={SH(10)} />
                </View>
            </View>
        );
    }
    return (
        <View style={ApplyJobStyle.MinViewScreen}>
            <TouchableOpacity onPress={() => navigation.navigate(RouteName.HOME_TAB)} style={ApplyJobStyle.centerlottw}>
                <IconA name="chevron-left" color={Colors.white_text_color} size={30} />
            </TouchableOpacity>
            <ScrollView
                keyboardShouldPersistTaps="handled"
                contentContainerStyle={Style.ScrollViewTestHeight}>
                <View>
                    <View style={ApplyJobStyle.Backgroundcolorview}>
                        <Spacing space={SH(30)} />
                        <View style={ApplyJobStyle.Centerimage}>
                            <Image source={images.Google_image} resizeMode="cover" style={ApplyJobStyle.Imagestyles} />
                        </View>
                        <Spacing space={SH(10)} />
                        <Text style={ApplyJobStyle.ProductDesigner}>{t("Product_Designer")}</Text>
                        <Text style={ApplyJobStyle.Googleteam}>{t("Google_Text")}</Text>
                        <Spacing space={SH(10)} />
                        <View style={ApplyJobStyle.Flexrowcenter}>
                            <Button buttonStyle={ApplyJobStyle.buttonwidthg33} buttonTextStyle={ApplyJobStyle.textstyles} title={t("Administration")} />
                            <Button buttonStyle={ApplyJobStyle.buttonwidthg25} buttonTextStyle={ApplyJobStyle.textstyles} title={t("Designers")} />
                            <Button buttonStyle={ApplyJobStyle.buttonwidthg25} buttonTextStyle={ApplyJobStyle.textstyles} title={t("Junior_Text")} />
                        </View>
                        <Spacing space={SH(20)} />
                        <View style={ApplyJobStyle.Flexrowcenter}>
                            <Text style={ApplyJobStyle.ProductDesignertwo}>{t("Price_Yearly")}</Text>
                            <Text style={ApplyJobStyle.ProductDesignertwo}>{t("Countryname")}</Text>
                        </View>
                    </View>
                    <Spacing space={SH(10)} />
                    <View style={ApplyJobStyle.FlexRowText}>
                        <TouchableOpacity onPress={() => TabshowFunction(1)} style={tabshow == 1 ? ApplyJobStyle.Centerviesecond : ApplyJobStyle.Centerviesecondtwo}>
                            <Text style={tabshow == 1 ? ApplyJobStyle.Tabtextstyles : ApplyJobStyle.TabtextstylesActive}>{t("Discription_Text")}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => TabshowFunction(2)} style={tabshow == 2 ? ApplyJobStyle.Centerviesecond : ApplyJobStyle.Centerviesecondtwo}>
                            <Text style={tabshow == 2 ? ApplyJobStyle.Tabtextstyles : ApplyJobStyle.TabtextstylesActive}>{t("RequermentText")}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => TabshowFunction(3)} style={tabshow == 3 ? ApplyJobStyle.Centerviesecond : ApplyJobStyle.Centerviesecondtwo}>
                            <Text style={tabshow == 3 ? ApplyJobStyle.Tabtextstyles : ApplyJobStyle.TabtextstylesActive}>{t("About")}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => TabshowFunction(4)} style={tabshow == 4 ? ApplyJobStyle.Centerviesecond : ApplyJobStyle.Centerviesecondtwo}>
                            <Text style={tabshow == 4 ? ApplyJobStyle.Tabtextstyles : ApplyJobStyle.TabtextstylesActive}>{t("Reviews")}</Text>
                        </TouchableOpacity>
                    </View>
                    {tabshow === 1 &&
                        <View>
                            <FlatList
                                data={Descrptiontext}
                                numColumns={1}
                                showsHorizontalScrollIndicator={false}
                                renderItem={({ item, index }) => Descrptiontextview(item, index)}
                                keyExtractor={item => item.id}
                                contentContainerStyle={ApplyJobStyle.FlatListStylestwo}
                            />
                        </View>
                    }
                    {tabshow === 2 &&
                        <View>
                            <FlatList
                                data={Requiremnetsdata}
                                numColumns={1}
                                showsHorizontalScrollIndicator={false}
                                renderItem={({ item, index }) => Descrptiontextview(item, index)}
                                keyExtractor={item => item.id}
                                contentContainerStyle={ApplyJobStyle.FlatListStylestwo}
                            />
                        </View>
                    }
                    {tabshow === 3 &&
                        <View>
                            <FlatList
                                data={Aboutdata}
                                numColumns={1}
                                showsHorizontalScrollIndicator={false}
                                renderItem={({ item, index }) => Descrptiontextview(item, index)}
                                keyExtractor={item => item.id}
                                contentContainerStyle={ApplyJobStyle.FlatListStylestwo}
                            />
                        </View>
                    }
                    {tabshow === 4 &&
                        <View>
                            <FlatList
                                data={ReviewsText}
                                numColumns={1}
                                showsHorizontalScrollIndicator={false}
                                renderItem={({ item, index }) => ReviewsFunction(item, index)}
                                keyExtractor={item => item.id}
                                contentContainerStyle={ApplyJobStyle.FlatListStylestwo}
                            />
                        </View>
                    }
                    <Spacing space={SH(87)} />
                </View>
            </ScrollView>
            <View style={ApplyJobStyle.Paddinghorizontal}>
                <Button onPress={() => navigation.navigate(RouteName.Resume_And_Portfolio)} title={t("Apply_text")} />
            </View>
        </View >
    );
};
export default JobDetailsScreen;
