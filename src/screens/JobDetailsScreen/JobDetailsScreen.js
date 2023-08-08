import React, { useState, useMemo } from 'react';
import { View, Text, ScrollView, FlatList, Image, TouchableOpacity } from 'react-native';
import { ApplyJobStyles, Style } from '../../styles';
import { Spacing, Button } from '../../components';
import { useTranslation } from "react-i18next";
import images from '../../index';
import { SH, Descrptiontext, Requiremnetsdata, Aboutdata, ReviewsText } from '../../utils';
import Icon from 'react-native-vector-icons/Octicons';
import IconA from 'react-native-vector-icons/Entypo';
import { RouteName } from '../../routes';
import { useTheme } from '@react-navigation/native';
import { StackActions } from '@react-navigation/native';
import IconG from 'react-native-vector-icons/Entypo';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { useEffect } from 'react';
import Toast from 'react-native-toast-message';
import dateFormat from 'dateformat';

const JobDetailsScreen = (props) => {
    const { Colors } = useTheme();
    const ApplyJobStyle = useMemo(() => ApplyJobStyles(Colors), [Colors]);
    const { t } = useTranslation();
    const { navigation } = props;


    const [tabshow, settabshow] = useState(1);
    const TabshowFunction = (item) => {
        settabshow(item)
    }

    const [userID, setUserID] = useState(null)

    const getData = async () => {
        try {
            const result = await AsyncStorage.getItem('AuthState')
            if (result !== null && result != "-1" && result != undefined) {
                setUserID(result)
            }

        } catch (e) {
            console.error(e)
        }
    }


    const regex = /(<([^>]+)>)/ig;

    const Descrptiontextview = (item) => {
        let result = item.replace(regex, '')
        result = result.replace("&nbsp;", "")
        result = result.replace(/<[^>]+>/g, '');
        result = result.replace(/&nbsp;/g, '')
        result = result.replace(/\s{2,}/g, ' ');
        return (
            <View>
                <Spacing space={SH(20)} />
                <View style={{ ...ApplyJobStyle.Flexrowdescription, alignItems: 'center', justifyContent: 'center' }}>
                    <View style={{ ...ApplyJobStyle.parehraphview, alignSelf: 'center' }}>
                        <Text style={{ ...ApplyJobStyle.ParegraphTextStyles, textAlign: 'justify' }}>{result}</Text>
                    </View>
                </View>
            </View>
        );
    }


    useEffect(() => {
        getData()
    }, [])

    const Requiremnetview = (item) => {
        return (
            <View>
                <Spacing space={SH(10)} />
                <View style={{ ...ApplyJobStyle.Flexrowdescription, alignItems: 'center', justifyContent: 'center', borderRadius: 8, backgroundColor: Colors.alice_blue_color, width: '90%', paddingVertical: 10, alignSelf: 'center', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Text style={{ ...ApplyJobStyle.ParegraphTextStyles, textAlign: 'justify' }}>Deadline:</Text>
                    <Text style={{ ...ApplyJobStyle.ParegraphTextStyles, textAlign: 'justify' }}>{dateFormat(item.deadline, "mmmm dS, yyyy")}</Text>

                </View>

                <Spacing space={SH(10)} />
                <View style={{ ...ApplyJobStyle.Flexrowdescription, alignItems: 'center', justifyContent: 'center', borderRadius: 8, backgroundColor: Colors.alice_blue_color, width: '90%', paddingVertical: 10, alignSelf: 'center', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Text style={{ ...ApplyJobStyle.ParegraphTextStyles, textAlign: 'justify' }}>Posted on: </Text>
                    <Text style={{ ...ApplyJobStyle.ParegraphTextStyles, textAlign: 'justify' }}>{dateFormat(item.job_posted.substring(0, 10), "mmmm dS, yyyy")}</Text>

                </View>

              
                <Spacing space={SH(10)} />
                <View style={{ ...ApplyJobStyle.Flexrowdescription, alignItems: 'center', justifyContent: 'center', borderRadius: 8, backgroundColor: Colors.alice_blue_color, width: '90%', paddingVertical: 10, alignSelf: 'center', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Text style={{ ...ApplyJobStyle.ParegraphTextStyles, textAlign: 'justify' }}>Education: </Text>
                    <Text style={{ ...ApplyJobStyle.ParegraphTextStyles, textAlign: 'justify' }}>{item.education}</Text>

                </View>

            
                <Spacing space={SH(10)} />
                <View style={{ ...ApplyJobStyle.Flexrowdescription, alignItems: 'center', justifyContent: 'center', borderRadius: 8, backgroundColor: Colors.alice_blue_color, width: '90%', paddingVertical: 10, alignSelf: 'center', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Text style={{ ...ApplyJobStyle.ParegraphTextStyles, textAlign: 'justify' }}>Experience: </Text>
                    <Text style={{ ...ApplyJobStyle.ParegraphTextStyles, textAlign: 'justify' }}>{item.experience}</Text>

                </View>

                <Spacing space={SH(10)} />
                <View style={{ ...ApplyJobStyle.Flexrowdescription, alignItems: 'center', justifyContent: 'center', borderRadius: 8, backgroundColor: Colors.alice_blue_color, width: '90%', paddingVertical: 10, alignSelf: 'center', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Text style={{ ...ApplyJobStyle.ParegraphTextStyles, textAlign: 'justify' }}>Address: </Text>
                    <Text style={{ ...ApplyJobStyle.ParegraphTextStyles, textAlign: 'justify' }}>{item.address}</Text>

                </View>


                <Spacing space={SH(10)} />
                <View style={{ ...ApplyJobStyle.Flexrowdescription, alignItems: 'center', justifyContent: 'center', borderRadius: 8, backgroundColor: Colors.alice_blue_color, width: '90%', paddingVertical: 10, alignSelf: 'center', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Text style={{ ...ApplyJobStyle.ParegraphTextStyles, textAlign: 'justify' }}>Locality: </Text>
                    <Text style={{ ...ApplyJobStyle.ParegraphTextStyles, textAlign: 'justify' }}>{item.locality}</Text>

                </View>


                <Spacing space={SH(10)} />
                <View style={{ ...ApplyJobStyle.Flexrowdescription, alignItems: 'center', justifyContent: 'center', borderRadius: 8, backgroundColor: Colors.alice_blue_color, width: '90%', paddingVertical: 10, alignSelf: 'center', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Text style={{ ...ApplyJobStyle.ParegraphTextStyles, textAlign: 'justify' }}>Region: </Text>
                    <Text style={{ ...ApplyJobStyle.ParegraphTextStyles, textAlign: 'justify' }}>{item.region}</Text>
                </View>


                <Spacing space={SH(10)} />
                <View style={{ ...ApplyJobStyle.Flexrowdescription, alignItems: 'center', justifyContent: 'center', borderRadius: 8, backgroundColor: Colors.alice_blue_color, width: '90%', paddingVertical: 10, alignSelf: 'center', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Text style={{ ...ApplyJobStyle.ParegraphTextStyles, textAlign: 'justify' }}>Postcode: </Text>
                    <Text style={{ ...ApplyJobStyle.ParegraphTextStyles, textAlign: 'justify' }}>{item.postcode}</Text>
                </View>

            </View>

        );
    }

    async function toggleBookmark() {

        if (userID == null) {
            Toast.show({
                type: 'error',
                text1: "Login to continue"
            });
            return
        }


        console.log(userID)

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: `https://asicjobs.in/api/webapi.php?api_action=update_favourite_job&job_id=${data.job_id}&user_id=${userID}`,
        };

        axios.request(config)
            .then((response) => {
                if (isSaved == 1) setSaved(0)
                else setSaved(1)
            })
            .catch((error) => {
                console.error(`https://asicjobs.in/api/webapi.php?api_action=update_favourite_job&job_id=${data.job_id}&user_id=${userID}`)
                console.log(error);
            });
    }

    const data = props.route.params
    const img = data.logo

    const [isSaved, setSaved] = useState(data.bokkmarked ?? 0)


    return (
        <View style={ApplyJobStyle.MinViewScreen}>
            <TouchableOpacity onPress={() => navigation.dispatch(StackActions.pop())} style={{
                ...ApplyJobStyle.centerlottw,
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: Platform.OS === 'ios' ? 2 : 2,
                },
                shadowOpacity: 0.45,
                shadowRadius: Platform.OS === 'ios' ? 2 : 4,
                elevation: Platform.OS === 'ios' ? 1 : 8,
            }}>
                <IconA name="chevron-left" color={Colors.white_text_color} size={30} />
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => {
                    toggleBookmark()
                }}
                style={{
                    position: 'absolute',
                    top: SH(20),
                    right: SH(10),
                    zIndex: 3,
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: Platform.OS === 'ios' ? 2 : 2,
                    },
                    shadowOpacity: 0.45,
                    shadowRadius: Platform.OS === 'ios' ? 2 : 4,
                    elevation: Platform.OS === 'ios' ? 1 : 8,
                    width: 25, height: 25, backgroundColor: Colors.alice_blue_color, alignItems: 'center', justifyContent: 'center', borderRadius: 4
                }}>
                <IconG
                    size={18}
                    name="bookmark"
                    style={{ color: isSaved == 1 ? Colors.theme_background_brink_pink : 'grey' }}
                />
            </TouchableOpacity>

            <ScrollView
                keyboardShouldPersistTaps="handled"
                contentContainerStyle={Style.ScrollViewTestHeight}>
                <View>
                    <View style={ApplyJobStyle.Backgroundcolorview}>
                        <Spacing space={SH(30)} />
                        <View style={ApplyJobStyle.Centerimage}>
                            <Image source={{ uri: img }} resizeMode="contain" style={{ ...ApplyJobStyle.Imagestyles, width: '100%' }} />
                        </View>
                        <Spacing space={SH(10)} />
                        <Text style={ApplyJobStyle.ProductDesigner}>{data.title}</Text>
                        <Text style={ApplyJobStyle.Googleteam}>{data.company_name}</Text>
                        <Spacing space={SH(10)} />
                        <View style={{ ...ApplyJobStyle.Flexrowcenter }}>
                            <Button buttonStyle={ApplyJobStyle.buttonwidthg33} buttonTextStyle={ApplyJobStyle.textstyles} title={"Deadline: " + data.deadline} />
                            <Button buttonStyle={ApplyJobStyle.buttonwidthg25} buttonTextStyle={ApplyJobStyle.textstyles} title={data.name} />
                            <Button buttonStyle={ApplyJobStyle.buttonwidthg25} buttonTextStyle={ApplyJobStyle.textstyles} title={data.is_remote == "1" ? "Remote" : "In-Person"} />
                        </View>
                        <Spacing space={SH(20)} />
                        <View style={ApplyJobStyle.Flexrowcenter}>
                            <Text numberOfLines={1} style={{ ...ApplyJobStyle.ProductDesignertwo, maxWidth: '45%' }}>$ {data.min_salary}-{data.max_salary}/{data.Salary_Type}</Text>
                            <Text style={{ ...ApplyJobStyle.ProductDesignertwo, maxWidth: '55%' }}>{data.district}/{data.country}</Text>
                        </View>


                    </View>
                    <Spacing space={SH(10)} />
                    <View style={{ ...ApplyJobStyle.FlexRowText, justifyContent: 'space-evenly' }}>
                        <TouchableOpacity onPress={() => TabshowFunction(1)} style={tabshow == 1 ? ApplyJobStyle.Centerviesecond : ApplyJobStyle.Centerviesecondtwo}>
                            <Text style={tabshow == 1 ? ApplyJobStyle.Tabtextstyles : ApplyJobStyle.TabtextstylesActive}>Description</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => TabshowFunction(2)} style={tabshow == 2 ? ApplyJobStyle.Centerviesecond : ApplyJobStyle.Centerviesecondtwo}>
                            <Text style={tabshow == 2 ? ApplyJobStyle.Tabtextstyles : ApplyJobStyle.TabtextstylesActive}>{t("RequermentText")}</Text>
                        </TouchableOpacity>


                    </View>
                    {tabshow === 1 &&
                        <View>
                            <FlatList
                                data={[data.description]}
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
                                data={[data]}
                                numColumns={1}
                                showsHorizontalScrollIndicator={false}
                                renderItem={({ item, index }) => Requiremnetview(item, index)}
                                keyExtractor={item => item.id}
                                contentContainerStyle={ApplyJobStyle.FlatListStylestwo}
                            />
                        </View>
                    }
                    {tabshow === 3 &&
                        <View>
                            <Text style={{ ...ApplyJobStyle.ParegraphTextStyles, textAlign: 'justify' }}>Deadline: {data.deadline}</Text>

                        </View>
                    }

                    <Spacing space={SH(87)} />
                </View>
            </ScrollView>
            {
                data.is_applied == 1 || userID == null ?
                    <View style={ApplyJobStyle.ButtonHorizontal}>
                        <Button disable={true} title="Applied" />
                    </View>
                    : <View style={ApplyJobStyle.ButtonHorizontal}>
                        <Button onPress={() => navigation.navigate(RouteName.APPLY_JOB, data)} title={t("Apply_text")} />
                    </View>
            }


            <Toast
                position='bottom'
                bottomOffset={20}
            />

        </View >
    );
};
export default JobDetailsScreen;
