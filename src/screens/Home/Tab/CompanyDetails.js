import React, { useState, useMemo } from 'react';
import { View, Text, ScrollView, FlatList, Image, TouchableOpacity } from 'react-native';
import { ApplyJobStyles, Style } from '../../../styles';
import { Spacing, Button } from '../../../components';
import { useTranslation } from "react-i18next";
import images from '../../../index';
import { SH, Descrptiontext, Requiremnetsdata, Aboutdata, ReviewsText } from '../../../utils';
import Icon from 'react-native-vector-icons/Octicons';
import IconA from 'react-native-vector-icons/Entypo';
import { RouteName } from '../../../routes';
import { useTheme } from '@react-navigation/native';
import { StackActions } from '@react-navigation/native';

const CompanyDetails = (props) => {
    const { Colors } = useTheme();
    const ApplyJobStyle = useMemo(() => ApplyJobStyles(Colors), [Colors]);
    const { t } = useTranslation();
    const { navigation } = props;
    const [tabshow, settabshow] = useState(1);
    const data = props.route.params.company_data
    const openJobs = props.route.params.open_positions
    const userID = props.route.params.userID
    const img = data.logo

    
    function fetchJobDetails(id) {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `https://asicjobs.in/api/webapi.php?api_action=fetch_job_details&job_id=${id}`,
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

    
    const TabshowFunction = (item) => {
        settabshow(item)
    }

    const Descrptiontextview = (item) => {
        return (
            <View>
                <Spacing space={SH(20)} />
                <View style={{ ...ApplyJobStyle.Flexrowdescription, alignItems: 'center', justifyContent: 'center' }}>

                    <View style={{ ...ApplyJobStyle.parehraphview, alignSelf: 'center' }}>
                        <Text style={{ ...ApplyJobStyle.ParegraphTextStyles, textAlign: 'justify' }}>{item}</Text>
                    </View>
                </View>
            </View>
        );
    }



    const Recommendeddataview = (item, index) => {
        return (
            <TouchableOpacity 
            onPress={()=>fetchJobDetails(item.id)}
            style={{ backgroundColor: index % 2 == 1 ? Colors.alice_blue_color : Colors.lavender_blush_color, width: '90%', marginVertical: 16, alignSelf: 'center', borderRadius: 12 }}>
                <TouchableOpacity style={HomeStyle.RecommndBox}>
                    <View style={HomeStyle.CenterIcon}>
                        <Image source={images.Codingimage_one} style={HomeStyle.Imagestyles} />
                    </View>
                    <View style={HomeStyle.Postionset}>
                        <Text style={HomeStyle.Textcenter}>{item.name}</Text>
                        <Text style={HomeStyle.Textcenter}>{"Open Positions: " + item.OpenPosition}</Text>
                        <Text style={HomeStyle.Textcenter}>{"Deadline: " + item.deadline}</Text>
                        <Spacing space={SH(10)} />
                    </View>
                </TouchableOpacity>
            </TouchableOpacity>
        );
    }





    return (
        <View style={ApplyJobStyle.MinViewScreen}>
            <TouchableOpacity onPress={() => navigation.dispatch(StackActions.pop(1))} style={ApplyJobStyle.centerlottw}>
                <IconA name="chevron-left" color={Colors.white_text_color} size={30} />
            </TouchableOpacity>
            <ScrollView
                keyboardShouldPersistTaps="handled"
                contentContainerStyle={Style.ScrollViewTestHeight}>
                <View>
                    <View style={ApplyJobStyle.Backgroundcolorview}>
                        <Spacing space={SH(30)} />
                        <View style={ApplyJobStyle.Centerimage}>
                            <Image source={{ uri: img }} resizeMode="cover" style={ApplyJobStyle.Imagestyles} />
                        </View>
                        <Spacing space={SH(10)} />
                        <Text style={ApplyJobStyle.ProductDesigner}>{data.title}</Text>
                        <Text style={ApplyJobStyle.Googleteam}>{data.company_name}</Text>
                        <Spacing space={SH(10)} />
                        <View style={{ ...ApplyJobStyle.Flexrowcenter }}>
                            <Button buttonStyle={ApplyJobStyle.buttonwidthg25} buttonTextStyle={ApplyJobStyle.textstyles} title={"Total Views: " + data.total_views} />
                            <Button buttonStyle={ApplyJobStyle.buttonwidthg33} buttonTextStyle={ApplyJobStyle.textstyles} title={"Since " + data.establishment_date} />
                            <Button buttonStyle={ApplyJobStyle.buttonwidthg25} buttonTextStyle={ApplyJobStyle.textstyles} title={data.organization_type_name} />
                        </View>
                        <Spacing space={SH(20)} />
                        <View style={ApplyJobStyle.Flexrowcenter}>
                            <Text style={ApplyJobStyle.ProductDesignertwo}>{data.industry_types_name}</Text>
                            <Text style={ApplyJobStyle.ProductDesignertwo}>{data.district}/{data.country}</Text>
                        </View>
                    </View>
                    <Spacing space={SH(10)} />
                    <View style={{ ...ApplyJobStyle.FlexRowText, justifyContent: 'space-evenly' }}>
                        <TouchableOpacity onPress={() => TabshowFunction(1)} style={tabshow == 1 ? ApplyJobStyle.Centerviesecond : ApplyJobStyle.Centerviesecondtwo}>
                            <Text style={tabshow == 1 ? ApplyJobStyle.Tabtextstyles : ApplyJobStyle.TabtextstylesActive}>About</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => TabshowFunction(2)} style={tabshow == 2 ? ApplyJobStyle.Centerviesecond : ApplyJobStyle.Centerviesecondtwo}>
                            <Text style={tabshow == 2 ? ApplyJobStyle.Tabtextstyles : ApplyJobStyle.TabtextstylesActive}>Vision</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => TabshowFunction(3)} style={tabshow == 3 ? ApplyJobStyle.Centerviesecond : ApplyJobStyle.Centerviesecondtwo}>
                            <Text style={tabshow == 3 ? ApplyJobStyle.Tabtextstyles : ApplyJobStyle.TabtextstylesActive}>Open Jobs</Text>
                        </TouchableOpacity>

                    </View>
                    {tabshow === 1 &&
                        <View>
                            <FlatList
                                data={[data.bio]}
                                numColumns={1}
                                showsHorizontalScrollIndicator={false}
                                renderItem={({ item, index }) => Descrptiontextview(item, index)}
                                keyExtractor={item => item.id}
                                contentContainerStyle={ApplyJobStyle.FlatListStylestwo}
                            />
                        </View>
                    }
                    {tabshow === 2 &&
                        <View>
                            <FlatList
                                data={[data.vision]}
                                numColumns={1}
                                showsHorizontalScrollIndicator={false}
                                renderItem={({ item, index }) => Descrptiontextview(item, index)}
                                keyExtractor={item => item.id}
                                contentContainerStyle={ApplyJobStyle.FlatListStylestwo}
                            />
                        </View>
                    }
                    {tabshow === 3 &&
                        <View>
                            <FlatList
                                data={openJobs}
                                numColumns={1}
                                showsHorizontalScrollIndicator={false}
                                renderItem={({ item, index }) => Recommendeddataview(item, index)}
                                keyExtractor={item => item.id}
                                contentContainerStyle={ApplyJobStyle.FlatListStylestwo}
                            />
                        </View>
                    }
                    {/* {tabshow === 3 &&
                        <View>
                            <Text style={{ ...ApplyJobStyle.ParegraphTextStyles, textAlign: 'justify' }}>Deadline: {data.deadline}</Text>

                        </View>
                    } */}

                    <Spacing space={SH(87)} />
                </View>
            </ScrollView>
            {/* <View style={ApplyJobStyle.Paddinghorizontal}>
                    <Button onPress={() => navigation.navigate(RouteName.Resume_And_Portfolio)} title={t("Apply_text")} />
                </View> */}
        </View >
    );
};
export default CompanyDetails;
