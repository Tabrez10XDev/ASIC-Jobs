import React, { useMemo } from 'react';
import { View, Text, ScrollView, FlatList, Image } from 'react-native';
import { SaveJobListStyles, Style } from '../../../styles';
import { Spacing, ConfirmationAlert } from '../../../components';
import { useTranslation } from "react-i18next";
import images from '../../../index';
import { OnlineAllJob } from '../..';
import { SH, SF } from '../../../utils';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { RouteName } from '../../../routes';
import { useTheme } from '@react-navigation/native';
import axios from 'axios';
import { useState, useEffect } from 'react';
import IconG from 'react-native-vector-icons/Entypo';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StackActions } from '@react-navigation/native';

const SavedJobsList = (props) => {
    const { t } = useTranslation();
    const { Colors } = useTheme();
    const SaveJobListStyle = useMemo(() => SaveJobListStyles(Colors), [Colors]);
    const { navigation } = props;
    const [savedState, setSavedState] = useState(true)
    const [alertVisible, setAlertVisible] = useState(false);
    const [_state, setState] = useState({})


    const [id, setID] = useState(null)


    async function toggleBookmark(job_id){
        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: `https://asicjobs.in/api/webapi.php?api_action=update_favourite_job&job_id=${job_id}&user_id=${id}`,
          };

          console.log(job_id)
          
        //   axios.request(config)
        //   .then((response) => {
        //     console.log(response.data)
        //     setState(current => ({ ...current, [job_id]: !_state[job_id] }))
        //   })
        //   .catch((error) => {
        //     console.log(error);
        //   });
    }


    const getData = async () => {
        try {
            const result = await AsyncStorage.getItem('AuthState')
            if (result === "false") {
                setAlertVisible(true)
            }
            else if (result !== null && result != "-1" && result != undefined) {
                setID(result)
                getFavouriteList(result)

            }

        } catch (e) {
            console.error(e)
        }
    }

    function fetchJobDetails(id) {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `https://asicjobs.in/api/webapi.php?api_action=job_details&job_id=${id}`,
            headers: {}
        };

        axios.request(config)
            .then((response) => {
                if (response.data.job_details != null && response.data.job_details != undefined) {
                    navigation.navigate(RouteName.JOB_DETAILS_SCREEN, response.data.job_details)
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }

    const Trendingdataview = (item, index) => {
        const img = "https://asicjobs.in/" + item.logo
        let appliedDate = item.deadline
        let state = item.status == "active" ? 1 : 0


        let stateText = item.status == "active" ? "Active" : "Expired"
        return (
            <TouchableOpacity onPress={() => fetchJobDetails(item.job_id)} style={SaveJobListStyle.MinBgColorWhite}>
                <View style={SaveJobListStyle.FlexRow}>
                    <View style={SaveJobListStyle.DevelperStyles}>
                        <View style={SaveJobListStyle.ImagWidthTextFlex}>
                            <View style={SaveJobListStyle.ImageViewStyles}>
                                <Image source={{ uri: img }} style={{ height: 60, width: 60, resizeMode: 'contain', borderRadius: 8 }} />
                            </View>
                            <View>
                                <Text style={SaveJobListStyle.DevelperText}>{item.title}</Text>
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
                <View style={SaveJobListStyle.Twobuttonflexview}>
                    {state == 1 ?
                        <TouchableOpacity onPress={() => { }} style={{ ...SaveJobListStyle.Statusbutton, flex: 1 }}>
                            <Text style={SaveJobListStyle.Openbuttontextstyles}>{stateText}</Text>
                        </TouchableOpacity>
                        :
                        <TouchableOpacity onPress={() => { }} style={{ ...SaveJobListStyle.Statusbuttontwo, backgroundColor: item.backgroundwhite, flex: 1 }}>
                            <Text style={SaveJobListStyle.Applytextstyles}>{stateText}</Text>
                        </TouchableOpacity>}
                    <View>
                        <Text style={{ ...SaveJobListStyle.Fulltimetextstyle, flex: 1 }}>Till {appliedDate}</Text>
                    </View>
                    <TouchableOpacity
                        onPress={() => {

                            // console.log(item.job_id)
                          toggleBookmark(item.job_id)

                        }}
                        style={{ width: 25, height: 25, backgroundColor: Colors.alice_blue_color, alignSelf: 'flex-end', alignItems: 'center', justifyContent: 'center', borderRadius: 4 }}>
                        <IconG
                            size={20}
                            name="bookmark"
                           style={{ color: _state[item.job_id] ? Colors.theme_background_brink_pink : 'grey' }}
                        />
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>
        )
    }
    const [jobList, setJobList] = useState([])

    useEffect(() => {
        navigation.addListener('focus', () => {
            getData()
        });
    }, [navigation]);

    function getFavouriteList(id) {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `https://asicjobs.in/api/webapi.php?api_action=fetch_favourite_job&user_id=${id}`,
        };

        axios.request(config)
            .then((response) => {
                response.data.favourite_job.map((ele,index)=>{
                    setState(current=>({...current, [ele.job_id]: true}))
                })

                setJobList(response.data.favourite_job)
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <View style={SaveJobListStyle.MinViewScreen}>
            <ScrollView
                keyboardShouldPersistTaps="handled"
                contentContainerStyle={{
                    width: '100%',
                    height: 'auto',
                }}>
                <View style={{ marginTop: 16 }}>

                    <FlatList
                        data={jobList}
                        numColumns={1}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item, index }) => Trendingdataview(item, index)}
                        keyExtractor={item => item.id}
                        contentContainerStyle={SaveJobListStyle.FlatListStylestwo}
                    />
                </View>

                <ConfirmationAlert
                    message="Please SignIn to Continue"
                    modalVisible={alertVisible}
                    setModalVisible={setAlertVisible}
                    onPress={() => {
                        setAlertVisible(!alertVisible)
                        navigation.dispatch(StackActions.popToTop());
                    }}
                    buttonminview={Style.buttonotp}
                    iconVisible={false}
                    buttonText="Ok"
                    onPressCancel={() => { setAlertVisible(!alertVisible) }}
                    cancelButtonText="Cancel"
                />
            </ScrollView>
        </View>
    );
};
export default SavedJobsList;
