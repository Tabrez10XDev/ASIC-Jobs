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


const CategoriesSearch = (props) => {
    const { navigation, route } = props;
    const { t } = useTranslation();
    const { Colors } = useTheme();
    const HomeStyle = useMemo(() => HomeTabStyles(Colors), [Colors]);

    const [categories, setAllCategories] = useState([])



    async function fetchJobDetails(id) {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `https://asicjobs.in/api/webapi.php?api_action=fetch_job_details&job_id=${id}`,
        };

        axios.request(config)
            .then((response) => {
                console.log(response.data)
                if (response.data.job_details != null && response.data.job_details != undefined) {
                    navigation.navigate(RouteName.JOB_DETAILS_SCREEN, response.data.job_details)
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }


    async function fetchAllRoles() {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `https://asicjobs.in/api/webapi.php?api_action=fetch_job_based_on_categories&category_id=${route.params}`,
            headers: {}
        };


        axios.request(config)
            .then((response) => {
                // console.log(response.data);
                setAllCategories(response.data.categories_job)
            })
            .catch((error) => {
                console.log(error);
            });

    }

    useEffect(() => {
        navigation.addListener('focus', () => {
            fetchAllRoles()
        });
    }, [navigation]);


    const Recommendeddataview = (item, index) => {
        return (
            <TouchableOpacity  
            onPress={()=>{
                fetchJobDetails(item.id)
            }}
            style={{ backgroundColor: index % 2 == 1 ? '#ebf1fe' : '#fdebf3', width:'90%', marginVertical:16, alignSelf:'center', borderRadius:12 }}>
                <View  style={HomeStyle.RecommndBox}>
                    <View style={HomeStyle.CenterIcon}>
                        <Image source={{uri: item.logo}} style={{...HomeStyle.Imagestyles, resizeMode:'contain'}} />
                    </View>
                    <View style={HomeStyle.Postionset}>
                        <Text style={HomeStyle.Textcenter}>{item.CompanyName}</Text>
                        <Text style={HomeStyle.Topboxtextstyle}>{item.title}</Text>
                        <Text style={HomeStyle.Topboxtextstyle}>{item.name}</Text>
                        <Text style={HomeStyle.Topboxtextstyle}>${item.min_salary}-{item.max_salary}</Text>
                        {/* <Text style={HomeStyle.Topboxtextstyle}>{item.id}</Text> */}

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
                            data={categories}
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
export default CategoriesSearch;
