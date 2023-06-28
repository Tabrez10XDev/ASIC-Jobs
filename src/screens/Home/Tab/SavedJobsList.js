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

    const [id, setID] = useState(null)

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

    function fetchJobDetails(id){
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
            navigation.navigate(RouteName.JOB_DETAILS_SCREEN, response.data.job_details[0])
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
                        <TouchableOpacity onPress={() => { }} style={{ ...SaveJobListStyle.Statusbutton, flex:1 }}>
                            <Text style={SaveJobListStyle.Openbuttontextstyles}>{stateText}</Text>
                        </TouchableOpacity>
                        :
                        <TouchableOpacity onPress={() => { }} style={{ ...SaveJobListStyle.Statusbuttontwo, backgroundColor: item.backgroundwhite, flex:1 }}>
                            <Text style={SaveJobListStyle.Applytextstyles}>{stateText}</Text>
                        </TouchableOpacity>}
                    <View>
                        <Text style={{...SaveJobListStyle.Fulltimetextstyle, flex:1}}>Till {appliedDate}</Text>
                    </View>
                    <TouchableOpacity
                    // onPress={()=>{setSavedState(!savedState)}}
                    style={{width:30, height:30, borderRadius:4, backgroundColor:'white', justifyContent:'center',  alignItems:'center'}}>
                        <IconG
                            size={SF(23)}
                            name="bookmark"
                            style={{ color: savedState ? Colors.theme_background_brink_pink : 'white'}}
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
                <View style={{marginTop:16}}>
            
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
