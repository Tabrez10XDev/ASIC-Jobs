import React, { useMemo, useState } from 'react';
import { View, Text, ScrollView, FlatList, Image } from 'react-native';
import { SaveJobListStyles, Style } from '../../../styles';
import { Spacing, Lottie, ConfirmationAlert } from '../../../components';
import { useTranslation } from "react-i18next";
import images from '../../../index';
import { OnlineAllJob } from '../..';
import { SH, Savejobdata } from '../../../utils';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { RouteName } from '../../../routes';
import { useTheme } from '@react-navigation/native';
import axios from 'axios';
import { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StackActions } from '@react-navigation/native';

const AppliedJobsList = (props) => {
    const { t } = useTranslation();
    const { Colors } = useTheme();
    const SaveJobListStyle = useMemo(() => SaveJobListStyles(Colors), [Colors]);
    const { navigation } = props;
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
                getAppliedList(result)

            }

        } catch (e) {
            console.error(e)
        }

    }

    function fetchJobDetails(id) {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `https://asicjobs.in/api/webapi.php?api_action=fetch_job_details&job_id=${id}`,
            headers: {}
        };

        axios.request(config)
            .then((response) => {
                if (response.data.job_details != null && response.data.job_details != undefined) {
                    navigation.navigate(RouteName.JOB_DETAILS_SCREEN, response.data.job_details)
                }
            })
            .catch((error) => {
                console.log(error);
            });

    }


    const Trendingdataview = (item, index) => {
        const img = "https://asicjobs.in/" + item.logo
        let appliedDate = item.applied_on ?? ""
        appliedDate = appliedDate.substring(0, 11)
        let state = item.status == "active" ? 1 : 0


        let stateText = item.status == "active" ? "Active" : "Expired"
        return (
            <TouchableOpacity onPress={() => fetchJobDetails(item.id)} style={SaveJobListStyle.MinBgColorWhite}>
                <View style={SaveJobListStyle.FlexRow}>
                    <View style={SaveJobListStyle.DevelperStyles}>
                        <View style={SaveJobListStyle.ImagWidthTextFlex}>
                            <View style={SaveJobListStyle.ImageViewStyles}>
                                <Image source={{ uri: img }} style={{ height: 60, width: 60, resizeMode: 'contain', borderRadius: 8 }} />
                            </View>
                            <View>
                                <Text numberOfLines={2} style={{...SaveJobListStyle.DevelperText, maxWidth:180}}>{item.title}</Text>
                                <Text numberOfLines={1} style={SaveJobListStyle.Normalsmalltext}>{item.year}</Text>
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
                        <TouchableOpacity onPress={() => { }} style={{ ...SaveJobListStyle.Statusbutton }}>
                            <Text style={SaveJobListStyle.Openbuttontextstyles}>{stateText}</Text>
                        </TouchableOpacity>
                        :
                        <TouchableOpacity onPress={() => { }} style={{ ...SaveJobListStyle.Statusbuttontwo, backgroundColor: item.backgroundwhite }}>
                            <Text style={SaveJobListStyle.Applytextstyles}>{stateText}</Text>
                        </TouchableOpacity>}
                    <View>
                        <Text style={SaveJobListStyle.Fulltimetextstyle}>{appliedDate}</Text>
                    </View>
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

    function getAppliedList(id) {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `https://asicjobs.in/api/webapi.php?api_action=fetch_applied_job&user_id=${id}`,
        };

        axios.request(config)
            .then((response) => {
                setJobList(response.data.applied_job)
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
export default AppliedJobsList;
