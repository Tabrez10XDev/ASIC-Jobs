import React, { useMemo } from 'react';
import { View, Text, TouchableOpacity, Image, FlatList, ScrollView } from 'react-native';
import { HomeTabStyles } from '../../../styles';
import { Spacing, Button, } from '../../../components';
import { SH, Seeallsata } from '../../../utils';
import LinearGradient from 'react-native-linear-gradient';
import { useTranslation } from "react-i18next";
import { RouteName } from '../../../routes';
import { useTheme } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import axios from 'axios';

const AllJobs = (props) => {
    const { navigation } = props;
    const { t } = useTranslation();
    const { Colors } = useTheme();
    const HomeStyle = useMemo(() => HomeTabStyles(Colors), [Colors]);

    const [jobs, setJobs] = useState([])

    async function fetchJobDetails(id) {
        
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `https://asicjobs.in/api/webapi.php?api_action=fetch_job_details&job_id=${id}`,
        };

        axios.request(config)
            .then((response) => {
                console.log("hey")
                console(response.data)
                if (response.data.job_details != null && response.data.job_details != undefined) {
                    navigation.navigate(RouteName.JOB_DETAILS_SCREEN, response.data.job_details)
                }
            })
            .catch((error) => {
                console.log("err")

                console.error(error);
            });
    }

    async function fetchAllJobs() {
        console.log("----------")
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `https://asicjobs.in/api/webapi.php?api_action=fetch_job_based_on_categories&category_id=${props.route.params}`,
            headers: {}
        };

        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
                setJobs(response.data.categories_job)
            })
            .catch((error) => {
                console.log(error);
            });

    }

    useEffect(() => {
        navigation.addListener('focus', () => {
            fetchAllJobs()
        });
    }, [navigation]);


    const Featureddataview = (item) => (
        <TouchableOpacity onPress={() => { fetchJobDetails(item.id); }} style={{ ...HomeStyle.BoxViewStyle, width: '100%' }}>
            <LinearGradient
                start={{ x: 0.0, y: 0.25 }}
                end={{ x: 0.5, y: 1.0 }}
                locations={[0, 0.5, 0.6]}
                colors={[Colors.theme_background_brink_pink, Colors.theme_background_brink_pink, Colors.theme_background_brink_pink]}
                style={{ ...HomeStyle.BoxViewStyle, width: '100%' }}>
                <View style={HomeStyle.FlexTextsrosewt}>
                    <View style={HomeStyle.SetImagMinView}>
                        <Image source={{ uri: item.logo }} style={HomeStyle.Imagestyles} />
                    </View>
                    <View style={HomeStyle.Textviewwidth}>
                        <Text style={HomeStyle.Producttextstyle}>{item.CompanyName}</Text>

                        <Text style={HomeStyle.Producttextstyle}>{item.title}</Text>
                        {/* <Text style={HomeStyle.Producttextstyletwo}>{item.name}</Text> */}
                    </View>
                </View>
                <Spacing space={SH(30)} />
                <View style={{...HomeStyle.Flexthreebutton, justifyContent:'space-evenly'}}>
                    <Button buttonStyle={{...HomeStyle.buttonstyle}} buttonTextStyle={HomeStyle.buttontrxtstylers} title={item.country} />
                    <Button buttonStyle={HomeStyle.buttonstyle} buttonTextStyle={HomeStyle.buttontrxtstylers} title={item.name} />

                   
                </View>
                <Spacing space={SH(25)} />
                <View style={HomeStyle.Flextextyearly}>
                    <Text style={HomeStyle.YearlyTextset}>Salary:</Text>
                    <Text style={HomeStyle.YearlyTextset}>{"$" + item.min_salary + "-" + item.max_salary}</Text>
                </View>
            </LinearGradient>
        </TouchableOpacity>
    )
    return (
        <View style={HomeStyle.MinViewScreen}>
            <ScrollView
                keyboardShouldPersistTaps="handled"
                contentContainerStyle={{
                    width: '100%',
                    height: 'auto',
                }}>
                <View style={{ ...HomeStyle.widthview }}>
                    <FlatList
                        data={jobs}
                        numColumns={1}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item, index }) => Featureddataview(item, index)}
                        keyExtractor={item => item.id}
                    />
                </View>
            </ScrollView>
        </View>
    );
};
export default AllJobs;
