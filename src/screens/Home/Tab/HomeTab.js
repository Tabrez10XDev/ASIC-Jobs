import React, { useState, useMemo } from 'react';
import { View, Text, TouchableOpacity, Image, FlatList, ScrollView } from 'react-native';
import { HomeTabStyles } from '../../../styles';
import { Input, Spacing, Button, Lottie, Pie } from '../../../components';
import { SH, Featureddata, Recommendeddata } from '../../../utils';
import Icon from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';
import { useTranslation } from "react-i18next";
import { RouteName } from '../../../routes';
import { useNavigation, useTheme } from '@react-navigation/native';

const HomeTab = () => {
    const { Colors } = useTheme();
    const HomeStyle = useMemo(() => HomeTabStyles(Colors), [Colors]);
    const navigation = useNavigation();
    const [Search, setSearch] = useState('');
    const { t } = useTranslation();

    const Featureddataview = (item) => {
        return (
            <TouchableOpacity onPress={() => navigation.navigate(RouteName.JOB_DETAILS_SCREEN)} style={HomeStyle.Boxviewstylesset}>
                <LinearGradient
                    start={{ x: 0.0, y: 0.25 }}
                    end={{ x: 0.5, y: 1.0 }}
                    locations={[0, 0.5, 0.6]}
                    colors={[Colors.Home_liner_gradiunt_one, Colors.Home_liner_gradiunt_two, Colors.Home_liner_gradiunt_three]}
                    style={HomeStyle.Boxviewstylesset}>
                    <View style={HomeStyle.Flextextsrosewt}>
                        <View style={HomeStyle.Setimagminview}>
                            <Image source={item.image} style={HomeStyle.Imagestyles} />
                        </View>
                        <View style={HomeStyle.Textviewwidth}>
                            <Text style={HomeStyle.Producttextstyle}>{t(item.text)}</Text>
                            <Text style={HomeStyle.Producttextstyletwo}>{t(item.smalltext)}</Text>
                        </View>
                    </View>
                    <Spacing space={SH(30)} />
                    <View style={HomeStyle.Flexthreebutton}>
                        <Button buttonStyle={HomeStyle.buttonstyle} buttonTextStyle={HomeStyle.buttontrxtstylers} title={t("Administration")} />
                        <Button buttonStyle={HomeStyle.buttonstyletwo} buttonTextStyle={HomeStyle.buttontrxtstylers} title={t("Junior_Text")} />
                        <Button buttonStyle={HomeStyle.buttonstyletwo} buttonTextStyle={HomeStyle.buttontrxtstylers} title={t("Designers")} />
                    </View>
                    <Spacing space={SH(25)} />
                    <View style={HomeStyle.Flextextyearly}>
                        <Text style={HomeStyle.YearlyTextset}>{t(item.yearlytext)}</Text>
                        <Text style={HomeStyle.YearlyTextset}>{t(item.yearlytexttwo)}</Text>
                    </View>
                </LinearGradient>
            </TouchableOpacity>
        );
    }
    const Recommendeddataview = (item) => {
        return (
            <TouchableOpacity onPress={() => navigation.navigate(RouteName.JOB_DETAILS_SCREEN)} style={{ ...HomeStyle.Paddingright, backgroundColor: item.backgroundColorone }}>
                <TouchableOpacity onPress={() => navigation.navigate(RouteName.JOB_DETAILS_SCREEN)} style={HomeStyle.RecommndBox}>
                    <View style={HomeStyle.Centericon}>
                        <Lottie source={item.LottieAnimation} Lottiewidthstyle={HomeStyle.LottieStylesset} />
                    </View>
                    <View style={HomeStyle.Postionset}>
                        <Text style={HomeStyle.Textcenter}>{t(item.designerrole)}</Text>
                        <Text style={HomeStyle.Topboxtextstyle}>{t(item.Designer)}</Text>
                        <Text style={HomeStyle.Textcenter}>{t(item.yearlytext)}</Text>
                        <Spacing space={SH(10)} />
                    </View>
                </TouchableOpacity>
            </TouchableOpacity>
        );
    }
    return (
        <View style={HomeStyle.minstyleviewphotograpgy}>
            <ScrollView
                keyboardShouldPersistTaps="handled"
                contentContainerStyle={{
                    width: '100%',
                    height: 'auto',
                }}>
                <View style={HomeStyle.container}>
                    <View style={HomeStyle.minviewallcontent}>
                        <Spacing space={SH(20)} />
                        <View style={HomeStyle.Paddinghorizxontal}>
                            <View style={HomeStyle.changetheamebgcolor}>
                                <TouchableOpacity style={HomeStyle.Setfilechnage}>
                                    <View style={HomeStyle.Inputwidthset}>
                                        <Input
                                            placeholder={t("Search_Text")}
                                            onChangeText={(value) => setSearch(value)}
                                            value={Search}
                                            maxLength={10}
                                            placeholderTextColor={Colors.gray_text_color}
                                            inputStyle={HomeStyle.Inputstyles}
                                        />
                                    </View>
                                    <View style={HomeStyle.Iconstyles}>
                                        <Icon name="search1" size={20} color={Colors.theme_backgound} />
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <Spacing space={SH(20)} />
                            <View style={HomeStyle.Flexttextstyles}>
                                <Text style={HomeStyle.FeaturedTextastylers}>{t("Featured_Text")}</Text>
                                <TouchableOpacity onPress={() => navigation.navigate(RouteName.FEATURED_ALL_JOB)}>
                                    <Text style={HomeStyle.Seealltextstyle}>{t("See_all_text")}</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <FlatList
                            data={Featureddata}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            renderItem={({ item, index }) => Featureddataview(item, index)}
                            keyExtractor={item => item.id}
                            contentContainerStyle={HomeStyle.Flatliststyles}
                        />
                        <Spacing space={SH(10)} />
                        <Text style={HomeStyle.Skillstext}>{t("Skill")}</Text>
                        <Spacing space={SH(10)} />
                        <View style={HomeStyle.Flexrowgraf}>
                            <View>
                                <Pie
                                    sections={[
                                        {
                                            percentage: 80,
                                            color: Colors.Pie_graf_color_one,
                                        },
                                    ]}
                                    backgroundColor={Colors.Pie_graf_color_four}
                                />
                                <Spacing space={SH(10)} />
                                <Text style={HomeStyle.parsantegtext}>80%</Text>
                                <Text style={HomeStyle.phptext}>{t("Php")}</Text>
                            </View>
                            <View>
                                <Pie
                                    sections={[
                                        {
                                            percentage: 40,
                                            color: Colors.Pie_graf_color_two,
                                        },
                                    ]}
                                    backgroundColor={Colors.Pie_graf_color_four}
                                />
                                <Spacing space={SH(10)} />
                                <Text style={HomeStyle.parsantegtext}>40%</Text>
                                <Text style={HomeStyle.phptext}>{t("React")}</Text>
                            </View>
                            <View>
                                <Pie
                                    sections={[
                                        {
                                            percentage: 60,
                                            color: Colors.Pie_graf_color_three,
                                        },
                                    ]}
                                    backgroundColor={Colors.Pie_graf_color_four}
                                />
                                <Spacing space={SH(10)} />
                                <Text style={HomeStyle.parsantegtext}>60%</Text>
                                <Text style={HomeStyle.phptext}>{t("Java")}</Text>
                            </View>
                        </View>
                        <Spacing space={SH(20)} />
                        <View style={HomeStyle.PaddingHorizontal}>
                            <View style={HomeStyle.Flexttextstyles}>
                                <Text style={HomeStyle.FeaturedTextastylers}>{t("Recommended_Text")}</Text>
                                <TouchableOpacity onPress={() => navigation.navigate(RouteName.FEATURED_ALL_JOB)}>
                                    <Text style={HomeStyle.Seealltextstyle}>{t("See_all_text")}</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <Spacing space={SH(20)} />
                        <FlatList
                            data={Recommendeddata}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            renderItem={({ item, index }) => Recommendeddataview(item, index)}
                            keyExtractor={item => item.id}
                            contentContainerStyle={HomeStyle.Recommendedboxleft}
                        />
                        <Spacing space={SH(30)} />
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};
export default HomeTab;
