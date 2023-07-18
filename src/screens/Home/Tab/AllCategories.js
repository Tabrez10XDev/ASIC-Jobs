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


const AllCategories = (props) => {
    const { navigation } = props;
    const { t } = useTranslation();
    const { Colors } = useTheme();
    const HomeStyle = useMemo(() => HomeTabStyles(Colors), [Colors]);

    const [categories, setAllCategories] = useState([])

    
    async function fetchJobDetails(id) {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `https://asicjobs.in/api/webapi.php?api_action=job_details&job_id=${id}`,
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

    useEffect(() => {
        navigation.addListener('focus', () => {
            fetchAllCategories()
        });
    }, [navigation]);


    const Recommendeddataview = (item, index) => {
        return (
            <TouchableOpacity 
            onPress={()=>fetchJobDetails(item.id)}
            style={{ backgroundColor: index % 2 == 1 ? Colors.alice_blue_color : Colors.lavender_blush_color, width:'90%', marginVertical:16, alignSelf:'center', borderRadius:12 }}>
                <View  style={HomeStyle.RecommndBox}>
                    <View style={HomeStyle.CenterIcon}>
                        <Image source={images.Codingimage_one} style={HomeStyle.Imagestyles} />
                    </View>
                    <View style={HomeStyle.Postionset}>
                        <Text style={HomeStyle.Textcenter}>{item.name}</Text>
                        {/* <Text style={HomeStyle.Topboxtextstyle}>{t(item.Designer)}</Text> */}
                        <Text style={HomeStyle.Textcenter}>{"Open Positions: " + item.OpenPosition}</Text>
                        <Spacing space={SH(10)} />
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
export default AllCategories;
