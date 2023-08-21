import React, { useMemo, useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, Image, FlatList, ScrollView, TextInput, Dimensions } from 'react-native';
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
import IconG from 'react-native-vector-icons/Entypo';
import { AutocompleteDropdown } from 'react-native-autocomplete-dropdown';
import SearchableDropdown from 'react-native-searchable-dropdown';
import IconI from "react-native-vector-icons/Ionicons"
import FilterBottomSheet from '../../../components/commonComponents/Filter';

const SearchResults = (props) => {
    const { navigation, route } = props;
    const { t } = useTranslation();
    const { Colors } = useTheme();
    const HomeStyle = useMemo(() => HomeTabStyles(Colors), [Colors]);
    const SaveJobListStyle = useMemo(() => SaveJobListStyles(Colors), [Colors]);

    const [Search, setSearch] = useState('');
    const [state, setState] = useState({})

    const [jobs, setJobs] = useState([])
    const [_jobs, _setJobs] = useState([])
    const [category, setCategory] = useState("All")


    const [sliderValue, setSliderValue] = useState([0, 500000]);

    const id = route.params


    const refRBSheet = useRef();


    const [geoData, setGeoData] = useState([])

    async function getGeoData() {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'https://asicjobs.in/api/webapi.php?api_action=geo_location',
        };

        axios.request(config)
            .then((response) => {
                console.log("-----")
                console.log(JSON.stringify(response.data));
                setGeoData(response.data.geo_data)
            })
            .catch((error) => {
                console.log("-----")
                console.log(error);
            });

    }

    useEffect(() => {
        getGeoData()
    }, [])

    const [filterTypes, setFilterTypes] = useState({
        'Full Time': true,
        'Part Time': true,
        'Contractual': true,
        'Intern': true,
        'Freelance': true
    })


    async function toggleBookmark(job_id) {
        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: `https://asicjobs.in/api/webapi.php?api_action=update_favourite_job&job_id=${job_id}&user_id=${id}`,
        };

        axios.request(config)
            .then((response) => {
                setState(current => ({ ...current, [job_id]: !state[job_id] }))
            })
            .catch((error) => {
                console.error(`https://asicjobs.in/api/webapi.php?api_action=update_favourite_job&job_id=${job_id}&user_id=${id}`)
                console.log(error);
            });
    }

    async function fetchJobDetails(job_id) {

        console.log(id)

        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `https://asicjobs.in/api/webapi.php?api_action=job_details&job_id=${job_id}&user_id=${id}`,
        };

        axios.request(config)
            .then((response) => {

                navigation.navigate(RouteName.JOB_DETAILS_SCREEN, { ...response.data.job_details })
            })
            .catch((error) => {
                console.error(error);
            });

    }

    async function fetchAllJobs(title) {

        setState({})
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `https://asicjobs.in/api/webapi.php?api_action=search_all_jobs&category_id=0&title_string=${title}&user_id=${id}&lattitude=${selectedItems.latitude ?? 0}&longitude=${selectedItems.longitude ?? 0}&is_remote=&price_min=&price_max=`,
        };

        console.log(`https://asicjobs.in/api/webapi.php?api_action=search_all_jobs&category_id=0&title_string=${title}&user_id=${id}&lattitude=${selectedItems.latitude ?? 0}&longitude=${selectedItems.longitude ?? 0}`)
        axios.request(config)
            .then((response) => {
                response.data.search_jobs.map((ele, index) => {
                    if (ele.bokkmarked == 1) {
                        setState(current => ({ ...current, [ele.id]: true }))
                    } else {
                        setState(current => ({ ...current, [ele.id]: false }))
                    }
                })
                _setJobs(response.data.search_jobs)
                const _jobList = response.data.search_jobs.filter((current) => current.min_salary >= sliderValue[0] && current.max_salary <= sliderValue[1])

                setJobs(_jobList)
            })
            .catch((error) => {
                setJobs([])
                _setJobs([])
                console.log(error);
            });

    }




    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            if (Search != '') {
                fetchAllJobs(Search)
            }else{
                setJobs([])
                _setJobs([])
            }
        }, 500)
        return () => clearTimeout(delayDebounceFn)
    }, [Search])

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {


            const keysWithTrueValues = [];

            for (const key in filterTypes) {
              if (filterTypes.hasOwnProperty(key) && filterTypes[key] === true) {
                keysWithTrueValues.push(key);
              }
            }

            let _jobList = _jobs.filter((current) => current.min_salary >= sliderValue[0] && current.max_salary <= sliderValue[1])
            // const job_type = ["Full Time", "Part Time", "Contractual", "Intern", "Freelance"]
            if(category != "All"){
                _jobList = _jobList.filter((current)=>current.categoryname.includes(category))
            }
            const filteredObjects = _jobList.filter(obj => keysWithTrueValues.includes(obj.jobtype));
            console.log(filterTypes)
            setJobs(filteredObjects)
        }, 500)
        return () => clearTimeout(delayDebounceFn)
    }, [sliderValue, filterTypes, category])






    const [selectedItems, setSelectedItems] = useState([])


    const SearchDataView = (item, index) => {

        return (

            <TouchableOpacity onPress={() => fetchJobDetails(item.id)} style={{ ...SaveJobListStyle.MinBgColorWhite, width: '90%', alignSelf: 'center' }}>
                <View style={SaveJobListStyle.FlexRow}>
                    <View style={SaveJobListStyle.DevelperStyles}>
                        <View style={SaveJobListStyle.ImagWidthTextFlex}>
                            <View style={SaveJobListStyle.ImageViewStyles}>
                                <Image source={{ uri: item.logo }} style={{ height: 60, width: 60, resizeMode: 'contain', borderRadius: 8 }} />
                            </View>
                            <View>
                                <Text maxLength={10} numberOfLines={1} style={{ ...SaveJobListStyle.DevelperText }}>{item.title}</Text>
                                <Text numberOfLines={1} style={SaveJobListStyle.Normalsmalltext}>{item.name}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={SaveJobListStyle.Widthfifty}>
                        <Text style={SaveJobListStyle.DevelperTexttwo}>$ {item.min_salary} - {item.max_salary}</Text>
                        <Text style={SaveJobListStyle.Normalsmalltexttwo}>{item.country}</Text>
                    </View>
                </View>
                <TouchableOpacity
                    onPress={() => {
                        console.log(id)
                        toggleBookmark(item.id)

                    }}
                    style={{ width: 25, height: 25, backgroundColor: Colors.alice_blue_color, alignSelf: 'flex-end', alignItems: 'center', justifyContent: 'center', borderRadius: 4 }}>
                    <IconG
                        size={18}
                        name="bookmark"
                        style={{ color: state[item.id] ? Colors.theme_background_brink_pink : 'grey' }}
                    />
                </TouchableOpacity>

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
                    <View style={{ alignItems: 'center', justifyContent: 'center', paddingHorizontal: 4, borderWidth: 0, borderColor: '#dbebc4', borderRadius: 16, paddingVertical: 8 }}>
                        <View style={{ width: '95%', alignItems: 'center', justifyContent: 'center' }}>


                            <TextInput
                                placeholder="Job Title, Keyword"
                                onChangeText={(value) => setSearch(value)}
                                value={Search}
                                onPressIn={() => { }}
                                maxLength={30}
                                inputprops={{ borderWidth: 0, borderColor: 0 }}
                                style={{
                                    width: '100%', borderWidth: 0, borderColor: 'white',
                                    paddingHorizontal: 10,
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
                                    borderRadius: 8
                                }} />
                            <TouchableOpacity
                                onPress={() => { refRBSheet.current.open() }}
                                style={{ ...HomeStyle.IconStyles, position: 'absolute', right: 0, alignSelf: 'center' }}>
                                <IconI name="filter-sharp" size={20} color={Colors.theme_background_brink_pink} />
                            </TouchableOpacity>
                        </View>

                        <View style={{ width: '100%', alignItems: 'center', justifyContent: 'center', marginTop: 10 }}>



                            <SearchableDropdown

                                containerStyle={{ padding: 5, width: '100%' }}

                                itemStyle={{
                                    padding: 10,
                                    marginTop: 2,
                                    backgroundColor: 'white',

                                }}
                                selectedItems={selectedItems}
                                // multi={true}
                                itemTextStyle={{ color: '#222' }}
                                onItemSelect={(item) => {
                                    // const items = selectedItems
                                    // items.push(item)
                                    setSelectedItems(item);
                                }}
                                onRemoveItem={(item, index) => {
                                    const items = selectedItems.filter((sitem) => sitem.id !== item.id);
                                    setSelectedItems({ selectedItems: items });
                                }}
                                itemsContainerStyle={{ maxHeight: 140 }}
                                items={geoData}
                                defaultIndex={2}
                                resetValue={false}
                                textInputProps={
                                    {
                                        placeholder: "Location",
                                        underlineColorAndroid: "transparent",
                                        style: {
                                            padding: 12,
                                            borderWidth: 1,
                                            borderColor: '#ccc',
                                            borderRadius: 5,
                                        },
                                        // onTextChange: text => alert(text)
                                    }
                                }
                                listProps={
                                    {
                                        nestedScrollEnabled: true,
                                    }
                                }
                            />

                            <View style={{ ...HomeStyle.IconStyles, position: 'absolute', right: 10, alignSelf: 'center', top: 22 }}>
                                <IconE name="location" size={28} color={Colors.theme_background_brink_pink} />
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

                        {
                            jobs.length === 0 &&
                            <View style={{ height: Dimensions.get('window').height }}>
                                <Image source={images.waiting} style={{ resizeMode: 'contain', width: '100%', alignSelf: 'center', height: '40%' }} />
                                <Text style={{ ...SaveJobListStyle.DevelperTexttwo, alignSelf: 'center' }}>Use our search to find the right job for you</Text>

                            </View>
                        }

                    </View>
                </View>
                <FilterBottomSheet refRBSheet={refRBSheet} setJobs={setJobs} sliderValue={sliderValue} setSliderValue={setSliderValue} filterTypes={filterTypes} setFilterTypes={setFilterTypes} category={category} setCategory={setCategory} />


            </ScrollView>


        </View>
    );
};
export default SearchResults;
