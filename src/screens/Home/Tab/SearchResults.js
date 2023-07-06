import React, { useMemo, useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, FlatList, ScrollView, TextInput } from 'react-native';
import { HomeTabStyles, SaveJobListStyles } from '../../../styles';
import { Spacing, Button, } from '../../../components';
import { SH } from '../../../utils';
import LinearGradient from 'react-native-linear-gradient';
import { useTranslation } from "react-i18next";
import { RouteName } from '../../../routes';
import { useTheme } from '@react-navigation/native';
import axios from 'axios';
import images from '../../../images';
import Icon from 'react-native-vector-icons/AntDesign';
import IconE from 'react-native-vector-icons/EvilIcons';
import { search } from 'react-native-country-picker-modal/lib/CountryService';


const SearchResults = (props) => {
    const { navigation } = props;
    const { t } = useTranslation();
    const { Colors } = useTheme();
    const HomeStyle = useMemo(() => HomeTabStyles(Colors), [Colors]);
    const SaveJobListStyle = useMemo(() => SaveJobListStyles(Colors), [Colors]);

    const [Search, setSearch] = useState('');
    const [Search2, setSearch2] = useState('');

    const [categories, setAllCategories] = useState([])
    const [jobs, setJobs] = useState([])

    async function fetchAllCategories() {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'https://asicjobs.in/api/webapi.php?api_action=fetch_all_categories',
            headers: {}
        };

        axios.request(config)
            .then((response) => {

                console.log("COME HERE");
                console.log(response.data);
                setAllCategories(response.data.categories_list)
            })
            .catch((error) => {
                console.log(error);
            });

    }

    
    async function fetchJobDetails(id){
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `https://asicjobs.in/api/webapi.php?api_action=fetch_job_details&job_id=${id}`,
            headers: { }
          };
          
          axios.request(config)
          .then((response) => {
            console.log("----------------------------");
            console.log(id);
            console.log(JSON.stringify(response.data));
            navigation.navigate(RouteName.JOB_DETAILS_SCREEN, response.data.job_details)
          })
          .catch((error) => {
            console.error(error);
          });
          
    }

    async function fetchAllJobs(title) {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `https://asicjobs.in/api/webapi.php?api_action=search_all_jobs&category_id=0&title_string=${title}`,
            headers: {}
        };

        axios.request(config)
            .then((response) => {

                console.log("COME HERE");
                console.log(response.data);
                setJobs(response.data.search_jobs)
            })
            .catch((error) => {
                console.log(error);
            });

    }

    useEffect(() => {
        navigation.addListener('focus', () => {
            fetchAllCategories()
        });
    }, [navigation]);


    const SearchDataView = (item, index) => {

        return (
            <TouchableOpacity onPress={() => fetchJobDetails(item.id)} style={{...SaveJobListStyle.MinBgColorWhite, width:'90%', alignSelf:'center'}}>
                <View style={SaveJobListStyle.FlexRow}>
                    <View style={SaveJobListStyle.DevelperStyles}>
                        <View style={SaveJobListStyle.ImagWidthTextFlex}>
                            <View style={SaveJobListStyle.ImageViewStyles}>
                                <Image source={{ uri: "" }} style={{ height: 60, width: 60, resizeMode: 'contain', borderRadius: 8 }} />
                            </View>
                            <View>
                                <Text maxLength={10} numberOfLines={1} style={{...SaveJobListStyle.DevelperText}}>{item.title}</Text>
                                <Text numberOfLines={1} style={SaveJobListStyle.Normalsmalltext}>{item.name}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={SaveJobListStyle.Widthfifty}>
                        <Text style={SaveJobListStyle.DevelperTexttwo}>$ {item.min_salary} - {item.max_salary}</Text>
                        <Text style={SaveJobListStyle.Normalsmalltexttwo}>{item.country}</Text>
                    </View>
                </View>
                <Spacing space={SH(5)} />
          
            </TouchableOpacity>
        )
    }


    return (
        <View style={HomeStyle.MinViewScreen}>
            <ScrollView
                keyboardShouldPersistTaps="handled"
                contentContainerStyle={{
                    width: '100%',
                    height: 'auto',
                }}>
                <View style={HomeStyle.PaddingHorizontal}>
                    <View style={{ alignItems: 'center', justifyContent: 'center', paddingHorizontal: 4, borderWidth: 2, borderColor: '#dbebc4', borderRadius: 16, paddingVertical: 8 }}>
                        <View style={{ width: '95%', alignItems: 'center', justifyContent: 'center' }}>
                            <TextInput
                                placeholder="Job Title, Keyword"
                                onChangeText={(value) => setSearch(value)}
                                value={Search}
                                onPressIn={() => { }}
                                maxLength={30}
                                inputprops={{ borderWidth: 0, borderColor: 0 }}
                                style={{ width: '100%', borderWidth: 0, borderColor: 'white' }}
                            />
                            <View style={{ ...HomeStyle.IconStyles, position: 'absolute', right: 0, alignSelf: 'center' }}>
                                <Icon name="search1" size={20} color={Colors.theme_background_brink_pink} />
                            </View>
                        </View>

                        <View style={{ width: '95%', alignItems: 'center', justifyContent: 'center' }}>
                            <TextInput
                                placeholder="Enter Location"
                                onChangeText={(value) => setSearch2(value)}
                                value={Search2}
                                maxLength={30}
                                inputprops={{ borderWidth: 0, borderColor: 0 }}
                                style={{ width: '100%', borderWidth: 0, borderColor: 'white' }}
                            />
                            <View style={{ ...HomeStyle.IconStyles, position: 'absolute', right: 0, alignSelf: 'center' }}>
                                <IconE name="location" size={28} color={Colors.theme_background_brink_pink} />
                            </View>
                        </View>
                        <TouchableOpacity onPress={()=>{fetchAllJobs(Search)}} style={{ width: '95%', alignItems: 'center', justifyContent: 'center', backgroundColor: Colors.theme_background_brink_pink, marginTop: 6, borderRadius: 4, paddingVertical: 10 }}>
                            <Text style={{ fontSize: 16, color: 'white' }}>
                                Find Jobs
                            </Text>
                        </TouchableOpacity>

                    </View>
                    <View style={{ paddingHorizontal: 28, alignSelf: 'center', marginTop: 8 }}>
                        <Text>
                            Suggestions:
                            <Text onPress={() => setSearch("Physical Design")} style={{ color: 'black' }}>   Physical Design,</Text>
                            <Text onPress={() => setSearch("Analog Layout")} style={{ color: 'black' }}>  Analog Layout,</Text>
                            <Text onPress={() => setSearch("Analog Circuit")} style={{ color: 'black' }}>  Analog Circuit,</Text>
                            <Text onPress={() => setSearch("STA")} style={{ color: 'black' }}>  STA</Text>

                        </Text>
                    </View>

                    <Spacing space={SH(20)} />
                    <View style={HomeStyle.FlextTextStyles}>
                        {/* <TouchableOpacity onPress={() => navigation.navigate(RouteName.FEATURED_ALL_JOB)}>
                                    <Text style={HomeStyle.Seealltextstyle}>{t("See_All_Text")}</Text>
                                </TouchableOpacity> */}
                    </View>
                </View>
                <View style={HomeStyle.widthview}>
                    <View style={HomeStyle.widthview}>
                        <FlatList
                            data={jobs}
                            numColumns={1}
                            showsHorizontalScrollIndicator={false}
                            renderItem={({ item, index }) => SearchDataView(item, index)}
                            keyExtractor={item => item.id}
                        />
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};
export default SearchResults;
