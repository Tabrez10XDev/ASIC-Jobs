import React, { useState, useMemo, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, FlatList, ScrollView } from 'react-native';
import { HomeTabStyles } from '../../../styles';
import { Input, Spacing, Button, Lottie, Pie } from '../../../components';
import { SH, Featureddata, Recommendeddata } from '../../../utils';
import Icon from 'react-native-vector-icons/AntDesign';
import IconE from 'react-native-vector-icons/EvilIcons';
import IconFont from 'react-native-vector-icons/FontAwesome';

import FontAwesome, { SolidIcons, RegularIcons, BrandIcons, parseIconFromClassName } from 'react-native-fontawesome';
import LinearGradient from 'react-native-linear-gradient';
import { useTranslation } from "react-i18next";
import { RouteName } from '../../../routes';
import { TextInput } from 'react-native';
import { useNavigation, useTheme } from '@react-navigation/native';
import { Colors, SF } from '../../../utils';
import IconF from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';
import images from '../../../images';
import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from 'moment/moment';

const HomeTab = () => {
    const { Colors } = useTheme();
    const HomeStyle = useMemo(() => HomeTabStyles(Colors), [Colors]);
    const navigation = useNavigation();
    const [Search, setSearch] = useState('');
    const [Search2, setSearch2] = useState('');
    const [latestPosts, setLatestPosts] = useState([])
    const [latestVacancies, setLatestVacancies] = useState([])
    const [popularCategories, setPopularCategories] = useState([])
    const [topCompanies, setTopCompanies] = useState([])

    const { t } = useTranslation();


    const [id, setID] = useState(null)
    const [userID, setUserID] = useState(null)

    const getData = async () => {
        try {
            const result = await AsyncStorage.getItem('AuthState')
            if (result !== null && result != "-1" && result != undefined) {
                setID(result)
                setUserID(result)
            }

        } catch (e) {
            console.error(e)
        }
    }

    async function fetchLatestVacancies() {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'https://asicjobs.in/api/webapi.php?api_action=fetch_latest_vacancies',
            headers: {}
        };

        axios.request(config)
            .then((response) => {
                setLatestVacancies(response.data.latest_vacancies)
            })
            .catch((error) => {
                console.log(error);
            });

    }

    async function fetchPopularCategories() {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'https://asicjobs.in/api/webapi.php?api_action=fetch_popular_categories',
            headers: {}
        };

        axios.request(config)
            .then((response) => {
                setPopularCategories(response.data.popular_categories)
            })
            .catch((error) => {
                console.log(error);
            });

    }


    function fetchJobDetails(id) {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `https://asicjobs.in/api/webapi.php?api_action=fetch_job_details&job_id=${id}`,
        };

        axios.request(config)
            .then((response) => {
                navigation.navigate(RouteName.JOB_DETAILS_SCREEN, response.data.job_details)
            })
            .catch((error) => {
                console.log(error);
            });

    }


    function fetchCompanyDetails(id) {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `https://asicjobs.in/api/webapi.php?api_action=fetch_company_details&company_id=${id}`,
        };

        axios.request(config)
            .then((response) => {
                navigation.navigate(RouteName.COMPANY_DETAILS, { ...response.data, userID: userID })
            })
            .catch((error) => {
                console.log(error);
            });
    }


    function fetchBlogDetails(id) {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `https://asicjobs.in/api/webapi.php?api_action=blog_details&id=${id}`,
        };

        axios.request(config)
            .then((response) => {
                navigation.navigate(RouteName.BLOG_DETAILS, response.data.blog_data)
            })
            .catch((error) => {
                console.log(error);
            });
    }

  


    async function fetchTopCompanies() {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'https://asicjobs.in/api/webapi.php?api_action=fetch_top_companies',
            headers: {}
        };

        axios.request(config)
            .then((response) => {
                setTopCompanies(response.data.top_companies)
            })
            .catch((error) => {
                console.log(error);
            });

    }


    async function fetchLatestPosts() {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'https://asicjobs.in/api/webapi.php?api_action=fetch_latest_post',
            headers: {}
        };

        axios.request(config)
            .then((response) => {
                setLatestPosts(response.data.all_posts)
            })
            .catch((error) => {
                console.log(error);
            });

    }

    useEffect(() => {
        navigation.addListener('focus', () => {
            getData()
            fetchLatestVacancies()
            fetchLatestPosts()
            fetchPopularCategories()
            fetchTopCompanies()
        });
    }, [navigation]);

    const Featureddataview = (item) => {
        return (
            <TouchableOpacity style={{ ...HomeStyle.Paddingright, backgroundColor: Colors.alice_blue_color, paddingVertical: 10 }}>
                <TouchableOpacity onPress={() => { navigation.navigate(RouteName.ALL_VACANCIES, item.role_id) }} style={HomeStyle.RecommndBox}>

                    <View style={HomeStyle.Postionset}>
                        <Text style={HomeStyle.Textcenter}>{item.name}</Text>
                        <Text style={HomeStyle.Textcenter}>{"Open Positions: " + item.OpenPosition}</Text>
                    </View>
                </TouchableOpacity>
            </TouchableOpacity>
        );
    }

    const CompaniesDataView = (item) => {

        const img = item.logo

        return (
            <TouchableOpacity style={{ ...HomeStyle.Paddingright, backgroundColor: Colors.alice_blue_color, paddingVertical: 10 }}>
                <TouchableOpacity onPress={() => { fetchCompanyDetails(item.company_id) }} style={HomeStyle.RecommndBox}>
                    <View style={{ ...HomeStyle.CenterIcon, height: 60, width: 60, alignSelf: 'center', justifyContent: 'center', alignItems: 'center' }}>
                        <Image source={{ uri: img }} style={{ ...HomeStyle.Imagestyles, resizeMode: 'contain' }} />
                    </View>
                    <View style={HomeStyle.Postionset}>
                        <Text style={HomeStyle.Textcenter}>{item.name}</Text>
                        <Text style={HomeStyle.Textcenter}>{"Open Positions: " + item.OpenPosition}</Text>
                    </View>
                </TouchableOpacity>
            </TouchableOpacity>
        );

    }

    const PopularCategories = (item, index) => {
        return (
            <TouchableOpacity style={{ ...HomeStyle.Paddingright, backgroundColor: index % 2 == 1 ? Colors.alice_blue_color : Colors.lavender_blush_color }}>
                <TouchableOpacity onPress={() => { navigation.navigate(RouteName.CATEGORIES_SEARCH, item.category_id) }} style={HomeStyle.RecommndBox}>
                    <View style={{ ...HomeStyle.CenterIcon, height: 60, width: 60, alignSelf: 'center', justifyContent: 'center', alignItems: 'center' }}>

                        <IconFont name="image" size={28} color={Colors.theme_background_brink_pink} />
                    </View>
                    <View style={HomeStyle.Postionset}>
                        <Text style={HomeStyle.Textcenter}>{item.name}</Text>
                        <Text style={HomeStyle.Textcenter}>{"Open Positions: " + item.OpenPosition}</Text>
                    </View>
                </TouchableOpacity>
            </TouchableOpacity>
        );
    }

    const LatestPostDataView = (item, index) => {
        const img = item.image
        return (
            <TouchableOpacity style={{ ...HomeStyle.Paddingright, backgroundColor: Colors.alice_blue_color, paddingHorizontal: 0, paddingTop: 0 }}>
                <TouchableOpacity onPress={() => { fetchBlogDetails(item.id) }} style={HomeStyle.RecommndBox}>
                    <Image source={{ uri: img }} style={{ width: '100%', height: 120, resizeMode: 'cover', borderRadius: 6, borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }} />
                    <View style={HomeStyle.Postionset}>
                        <Text style={{ ...HomeStyle.Textcenter, marginTop: 4 }}>{item.title}</Text>
                        <Text style={HomeStyle.Topboxtextstyle}>{item.short_description}</Text>
                        <Spacing space={SH(10)} />
                    </View>

                </TouchableOpacity>
                <Spacing space={SH(10)} />

                <Text style={{ ...HomeStyle.Textcenter, position: 'absolute', bottom: 4, right: 4 }}>{item.updated_at ? moment(item.updated_at.substring(0, 10), "YYYY-MM-DD").fromNow() : ""}</Text>

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
                            <View style={{ alignItems: 'center', justifyContent: 'center', paddingHorizontal: 4, borderWidth: 0, borderColor: '#dbebc4', borderRadius: 16, paddingVertical: 8 }}>
                                <View style={{ width: '95%', alignItems: 'center', justifyContent: 'center' }}>
                                    <TextInput
                                        placeholder="Job Title, Keyword"
                                        onChangeText={(value) => setSearch(value)}
                                        value={Search}
                                        onPressIn={() => { navigation.navigate(RouteName.SEARCH_RESULTS, userID) }}
                                        maxLength={30}
                                        inputprops={{ borderWidth: 0, borderColor: 0 }}
                                        style={{
                                            width: '100%', borderWidth: 0, borderColor: 'white',
                                            backgroundColor: Colors.white_text_color,
                                            color: Colors.gray_text_color,
                                            shadowColor: "#000",
                                            shadowOffset: {
                                                width: 0,
                                                height: Platform.OS === 'ios' ? 2 : 8,
                                            },
                                            shadowOpacity: 0.7,
                                            shadowRadius: Platform.OS === 'ios' ? 2 : 8,
                                            elevation: Platform.OS === 'ios' ? 1 : 8,
                                            borderRadius:8
                                        }}
                                    />
                                    <View style={{ ...HomeStyle.IconStyles, position: 'absolute', right: 0, alignSelf: 'center' }}>
                                        <Icon name="search1" size={20} color={Colors.theme_background_brink_pink} />
                                    </View>
                                </View>

                            

                            </View>
                            <View style={{ paddingHorizontal: 0, alignSelf: 'center', marginTop: 8 }}>
                                <Text>
                                    Suggestions:
                                    <Text onPress={() => setSearch("Physical Design")} style={{ color: 'black' }}>   Physical Design,</Text>
                                    <Text onPress={() => setSearch("Analog Layout")} style={{ color: 'black' }}>  Analog Layout,</Text>
                                    <Text onPress={() => setSearch("Analog Circuit")} style={{ color: 'black' }}>  Analog Circuit,</Text>
                                    <Text onPress={() => setSearch("STA")} style={{ color: 'black' }}>  STA</Text>

                                </Text>
                            </View>

                            <Spacing space={SH(40)} />
                            <View style={HomeStyle.FlextTextStyles}>
                                <Text style={HomeStyle.FeaturedTextaStylers}>Popular Vacancies</Text>
                            </View>
                        </View>
                        <Spacing space={SH(20)} />

                        <FlatList
                            data={latestVacancies}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            renderItem={({ item, index }) => Featureddataview(item, index)}
                            keyExtractor={item => item.id}
                            contentContainerStyle={HomeStyle.Recommendedboxleft}
                        />

                        <Spacing space={SH(20)} />
                        <View style={HomeStyle.PaddingHorizontal}>
                            <View style={HomeStyle.FlextTextStyles}>
                                <Text style={HomeStyle.FeaturedTextaStylers}>Popular Categories</Text>
                                <TouchableOpacity onPress={() => navigation.navigate(RouteName.ALL_CATEGORIES)}>
                                    <Text style={HomeStyle.Seealltextstyle}>{t("See_All_Text")}</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <Spacing space={SH(20)} />
                        <FlatList
                            data={popularCategories}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            renderItem={({ item, index }) => PopularCategories(item, index)}
                            keyExtractor={item => item.id}
                            contentContainerStyle={HomeStyle.Recommendedboxleft}
                        />

                        <Spacing space={SH(20)} />
                        <View style={HomeStyle.PaddingHorizontal}>
                            <View style={HomeStyle.FlextTextStyles}>
                                <Text style={HomeStyle.FeaturedTextaStylers}>Top Companies</Text>
                                <TouchableOpacity onPress={() => navigation.navigate(RouteName.ALL_COMPANIES)}>
                                    <Text style={HomeStyle.Seealltextstyle}>{t("See_All_Text")}</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <Spacing space={SH(20)} />
                        <FlatList
                            data={topCompanies}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            renderItem={({ item, index }) => CompaniesDataView(item, index)}
                            keyExtractor={item => item.id}
                            contentContainerStyle={HomeStyle.Recommendedboxleft}
                        />

                        <Spacing space={SH(20)} />
                        <View style={HomeStyle.PaddingHorizontal}>
                            <View style={HomeStyle.FlextTextStyles}>
                                <Text style={HomeStyle.FeaturedTextaStylers}>Latest Posts</Text>
                                <TouchableOpacity onPress={() => navigation.navigate(RouteName.ALL_POSTS)}>
                                    <Text style={HomeStyle.Seealltextstyle}>{t("See_All_Text")}</Text>
                                </TouchableOpacity>

                            </View>
                        </View>
                        <Spacing space={SH(20)} />
                        <FlatList
                            data={latestPosts}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            renderItem={({ item, index }) => LatestPostDataView(item, index)}
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
