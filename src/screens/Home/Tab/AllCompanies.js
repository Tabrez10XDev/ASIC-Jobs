import React, { useMemo, useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, FlatList, ScrollView } from 'react-native';
import { HomeTabStyles } from '../../../styles';
import { Spacing, Button, } from '../../../components';
import { SH } from '../../../utils';
import LinearGradient from 'react-native-linear-gradient';
import { useTranslation } from "react-i18next";
import { RouteName } from '../../../routes';
import { useTheme } from '@react-navigation/native';
import axios from 'axios';
import images from '../../../images';
import AsyncStorage from '@react-native-async-storage/async-storage';


const AllCompanies = (props) => {
    const { navigation } = props;
    const { t } = useTranslation();
    const { Colors } = useTheme();
    const HomeStyle = useMemo(() => HomeTabStyles(Colors), [Colors]);

    const [companies, setCompanies] = useState([])
    const [userID, setUserID] = useState("-1")

    const getData = async () => {
        try {
            const result = await AsyncStorage.getItem('AuthState')
            if (result !== null && result != "-1" && result != undefined && result != "false") {
                setUserID(result)
            }

        } catch (e) {
            console.error(e)
        }
    }


    async function fetchAllCompanies() {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'https://asicjobs.in/api/webapi.php?api_action=fetch_all_companies',
        };

        axios.request(config)
            .then((response) => {
                setCompanies(response.data.top_companies)
                console.log(JSON.stringify(response.data));
            })
            .catch((error) => {
                console.log(error);
            });


    }

    useEffect(() => {
        navigation.addListener('focus', () => {
            fetchAllCompanies()
            getData()
        });
    }, [navigation]);

    function fetchCompanyDetails(id) {
        console.log(id)
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `https://asicjobs.in/api/webapi.php?api_action=fetch_company_details&company_id=${id}`,
        };

        axios.request(config)
            .then((response) => {
                if(response.data == null) return
                navigation.navigate(RouteName.COMPANY_DETAILS, { ...response.data, userID: userID })
            })
            .catch((error) => {
                console.log(error);
            });
    }



    const Recommendeddataview = (item, index) => {
        return (
            <TouchableOpacity
                onPress={() =>  fetchCompanyDetails(item.company_id)}
                style={{ backgroundColor: index % 2 == 1 ? Colors.alice_blue_color : Colors.lavender_blush_color, width: '90%', marginVertical: 16, alignSelf: 'center', borderRadius: 12, paddingVertical: 4 }}>
                <View style={{ ...HomeStyle.RecommndBox, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '90%', alignSelf: 'center' }}>
                    <Image source={{uri: item.logo}} style={{...HomeStyle.Imagestyles, resizeMode:'contain'}} />
                    <View>
                    <Text numberOfLines={1} style={{ ...HomeStyle.Textcenter }}>{item.name}</Text>
                    <Text numberOfLines={1} style={{ ...HomeStyle.Textcentertewo }}>Open Positions: {item.OpenPosition}</Text>

                    </View>
                </View>
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
                <View style={HomeStyle.widthview}>
                    <View style={HomeStyle.widthview}>
                        <FlatList
                            data={companies}
                            numColumns={1}
                            showsHorizontalScrollIndicator={false}
                            renderItem={({ item, index }) => Recommendeddataview(item, index)}
                            keyExtractor={item => item.id}
                        />
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};
export default AllCompanies;
