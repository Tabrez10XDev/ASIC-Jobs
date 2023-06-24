import React, { useState, useMemo } from 'react';
import { View, Text, TouchableOpacity, Image, FlatList, ScrollView } from 'react-native';
import { HomeTabStyles } from '../../../styles';
import { Input, Spacing, Button, Lottie, Pie } from '../../../components';
import { SH, Featureddata, Recommendeddata } from '../../../utils';
import Icon from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';
import { useTranslation } from "react-i18next";
import { RouteName } from '../../../routes';
import { TextInput } from 'react-native';
import { useNavigation, useTheme } from '@react-navigation/native';
import { Colors,  SF } from '../../../utils';
import IconF from 'react-native-vector-icons/FontAwesome';
import IconE from 'react-native-vector-icons/EvilIcons';
import IconZ from 'react-native-vector-icons/MaterialIcons';
import IconG from 'react-native-vector-icons/Entypo';
import IconO from 'react-native-vector-icons/Octicons'
import IconM from 'react-native-vector-icons/MaterialCommunityIcons'

const HomeTab = () => {
    const { Colors } = useTheme();
    const HomeStyle = useMemo(() => HomeTabStyles(Colors), [Colors]);
    const navigation = useNavigation();
    const [Search, setSearch] = useState('');
    const { t } = useTranslation();
    const Featureddataview = (item) => {
        return (
            <TouchableOpacity onPress={() => navigation.navigate(RouteName.JOB_DETAILS_SCREEN)} style={HomeStyle.BoxViewStyle}>
                <LinearGradient
                    start={{ x: 0.0, y: 0.25 }}
                    end={{ x: 0.5, y: 1.0 }}
                    locations={[0, 0.5, 0.6]}
                    colors={[Colors.theme_background_brink_pink, Colors.theme_background_brink_pink, Colors.theme_background_brink_pink]}
                    style={HomeStyle.BoxViewStyle}>
                    <View style={HomeStyle.FlexTextsrosewt}>
                        <View style={HomeStyle.SetImagMinView}>
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
                    <View style={HomeStyle.CenterIcon}>
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
        <View style={HomeStyle.MinViewScreen}>
            <ScrollView
                keyboardShouldPersistTaps="handled"
                contentContainerStyle={{
                    width: '100%',
                    height: 'auto',
                }}>
                <View style={HomeStyle.container}>
                    <View style={HomeStyle.MinViewContent}>
                        <Spacing space={SH(10)} />
                        <View style={HomeStyle.PaddingHorizontal}>
                            <View style={{alignItems:'center', justifyContent:'center', paddingHorizontal:4, borderWidth:2, borderColor:'#dbebc4', borderRadius:16, paddingVertical:8}}>
                                    <View style={{width:'95%', alignItems:'center', justifyContent:'center'}}>
                                        <TextInput
                                            placeholder="Job Title, Keyword"
                                            onChangeText={(value) => setSearch(value)}
                                            value={Search}
                                            maxLength={10}
                                            inputprops={{borderWidth:0, borderColor:0}}
                                            style={{width:'100%', borderWidth:0, borderColor:'white'}}
                                        />
                                         <View style={{...HomeStyle.IconStyles, position:'absolute', right: 0, alignSelf:'center'}}>
                                        <Icon name="search1" size={20} color={Colors.theme_background_brink_pink} />
                                    </View>
                                    </View>

                                    <View style={{width:'95%', alignItems:'center', justifyContent:'center'}}>
                                        <TextInput
                                            placeholder="Enter Location"
                                            onChangeText={(value) => setSearch(value)}
                                            value={Search}
                                            maxLength={10}
                                            inputprops={{borderWidth:0, borderColor:0}}
                                            style={{width:'100%', borderWidth:0, borderColor:'white'}}
                                        />
                                         <View style={{...HomeStyle.IconStyles, position:'absolute', right: 0, alignSelf:'center'}}>
                                         <IconE name="location" size={28} color={Colors.theme_background_brink_pink} />
                                    </View>
                                    </View>
                                    <TouchableOpacity style={{width:'95%', alignItems:'center', justifyContent:'center', backgroundColor:Colors.theme_background_brink_pink, marginTop:6, borderRadius:4, paddingVertical:10}}>
                                        <Text style={{fontSize:16, color:'white'}}>
                                            Find Jobs
                                        </Text>
                                    </TouchableOpacity>
                                   
                            </View>
                            <Spacing space={SH(20)} />
                            <View style={HomeStyle.FlextTextStyles}>
                                <Text style={HomeStyle.FeaturedTextaStylers}>{t("Featured_Text")}</Text>
                                <TouchableOpacity onPress={() => navigation.navigate(RouteName.FEATURED_ALL_JOB)}>
                                    <Text style={HomeStyle.Seealltextstyle}>{t("See_All_Text")}</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <FlatList
                            data={Featureddata}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            renderItem={({ item, index }) => Featureddataview(item, index)}
                            keyExtractor={item => item.id}
                            contentContainerStyle={HomeStyle.FlatListStyles}
                        />
                        {/* <Spacing space={SH(10)} /> */}
                        {/* <Text style={HomeStyle.Skillstext}>{t("Skill")}</Text>
                        <Spacing space={SH(10)} />
                        <View style={HomeStyle.Flexrowgraf}>
                            <View>
                                <Pie
                                    sections={[
                                        {
                                            percentage: 80,
                                            color: Colors.royal_orange_color,
                                        },
                                    ]}
                                    backgroundColor={Colors.lavender_color}
                                />
                                <Spacing space={SH(10)} />
                                <Text style={HomeStyle.ParsanTegText}>80%</Text>
                                <Text style={HomeStyle.PhpText}>{t("Php")}</Text>
                            </View>
                            <View>
                                <Pie
                                    sections={[
                                        {
                                            percentage: 40,
                                            color: Colors.medium_sea_green,
                                        },
                                    ]}
                                    backgroundColor={Colors.lavender_color}
                                />
                                <Spacing space={SH(10)} />
                                <Text style={HomeStyle.ParsanTegText}>40%</Text>
                                <Text style={HomeStyle.PhpText}>{t("React")}</Text>
                            </View>
                            <View>
                                <Pie
                                    sections={[
                                        {
                                            percentage: 60,
                                            color: Colors.cyan_blue_azure,
                                        },
                                    ]}
                                    backgroundColor={Colors.lavender_color}
                                />
                                <Spacing space={SH(10)} />
                                <Text style={HomeStyle.ParsanTegText}>60%</Text>
                                <Text style={HomeStyle.PhpText}>{t("Java")}</Text>
                            </View>
                        </View> */}
                        <Spacing space={SH(20)} />
                        <View style={HomeStyle.PaddingHorizontal}>
                            <View style={HomeStyle.FlextTextStyles}>
                                <Text style={HomeStyle.FeaturedTextaStylers}>{t("Recommended_Text")}</Text>
                                <TouchableOpacity onPress={() => navigation.navigate(RouteName.FEATURED_ALL_JOB)}>
                                    <Text style={HomeStyle.Seealltextstyle}>{t("See_All_Text")}</Text>
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
                        <View style={{ width: '95%', heigh: 70, backgroundColor: "#f0f7fb", borderRadius: 4, alignSelf:'center', marginTop:16, paddingVertical:24 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 16 }}>
                                <View>
                                    <Text style={{fontSize:24, fontWeight:'600'}}>
                                        4
                                    </Text>
                                    <Text style={{fontSize:16, fontWeight:'500'}}>
                                        Job Applied
                                    </Text>
                                </View>
                                <View style={{ backgroundColor: 'white', borderRadius: 4, alignItems: 'center', justifyContent: 'center', padding:12 }}>
                                    <IconZ
                                        size={SF(45)}
                                        name="work"
                                        style={{ color: Colors.theme_background_brink_pink }}
                                    />
                                </View>
                            </View>
                        </View>
                        <View style={{ width: '95%', heigh: 70, backgroundColor: "#FFF7E6", borderRadius: 4, alignSelf:'center', marginTop:16, paddingVertical:24 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 16 }}>
                                <View>
                                    <Text style={{fontSize:24, fontWeight:'600'}}>
                                        2
                                    </Text>
                                    <Text style={{fontSize:16, fontWeight:'500'}}>
                                        Favourite Jobs
                                    </Text>
                                </View>
                                <View style={{ backgroundColor: 'white', borderRadius: 4, alignItems: 'center', justifyContent: 'center', padding:12 }}>
                                    <IconG
                                        size={SF(45)}
                                        name="bookmark"
                                        style={{ color: Colors.theme_background_brink_pink }}
                                    />
                                </View>
                            </View>
                        </View>
                        <View style={{ width: '95%', heigh: 70, backgroundColor: "#EDF9EB", borderRadius: 4, alignSelf:'center', marginTop:16, paddingVertical:24 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 16 }}>
                                <View>
                                    <Text style={{fontSize:24, fontWeight:'600'}}>
                                        4
                                    </Text>
                                    <Text style={{fontSize:16, fontWeight:'500'}}>
                                        Job Alert
                                    </Text>
                                </View>
                                <View style={{ backgroundColor: 'white', borderRadius: 4, alignItems: 'center', justifyContent: 'center', padding:12 }}>
                                    <IconM
                                        size={SF(45)}
                                        name="bell-ring"
                                        style={{ color: Colors.theme_background_brink_pink }}
                                    />
                                </View>
                            </View>
                        </View>
                        <Spacing space={SH(30)} />
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};
export default HomeTab;
