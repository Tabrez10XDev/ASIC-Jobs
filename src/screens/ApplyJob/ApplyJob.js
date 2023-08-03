import React, { useState, useMemo, useEffect } from 'react';
import { View, Text, ScrollView, FlatList, Image } from 'react-native';
import { ApplyJobStyles } from '../../styles';
import { Spacing, Button, Input, CheckBox, DocumentPicker } from '../../components';
import { useTranslation } from "react-i18next";
import images from '../../index';
import { SH, ApplyJobstwo, } from '../../utils';
import { RouteName } from '../../routes';
import { useTheme } from '@react-navigation/native';
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

const ApplyJob = (props) => {
    const { t } = useTranslation();
    const { Colors } = useTheme();
    const ApplyJobStyle = useMemo(() => ApplyJobStyles(Colors), [Colors]);
    const { navigation } = props;

    const data = props.route.params
    const [userData, setUserData] = useState({
        resumes: []
    })

    const [id, setID] = useState(null)

    const getData = async () => {
        try {
            const result = await AsyncStorage.getItem('AuthState')
            if (result === "false") {
                return
            }
            else if (result !== null && result != "-1" && result != undefined) {
                setID(result)
                getUserData(result)
            }

        } catch (e) {
            console.error(e)
        }
    }

    const [Textinputaeira, setTextinputaeira] = useState('');
    const [Checkboxs, SetCheckboxs] = useState(ApplyJobstwo);
    const [resumes, setResumes] = useState({});
    const [Resumetwo, SetResumetwo] = useState(false);
    const Checkboxfunction = (value, indexs) => {
        var datas = Checkboxs.filter((item, index) => {
            if (index === indexs) {
                item['CheckBoxitem'] = value;
                return item;
            } else {
                return item;
            }
        });
        SetCheckboxs(datas);
    }

    useEffect(() => {
        navigation.addListener('focus', () => {
            getData()
        });
    }, [navigation]);


    function getUserData(id) {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `https://asicjobs.in/api/webapi.php?api_action=userdetails&id=${id}`,
            headers: {}
        };

        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data.candidate_resumes));
                console.log("===")
                setUserData({ ...userData, resumes: response.data.candidate_resumes })
                // response.data.candidate_resumes.forEach((ele,index)=>{
                //     setResumes(current => ({...current, [ele.id] : false}))
                // })
            })
            .catch((error) => {
                console.log(error);
            });

    }


    async function applyJob() {

        console.log(data)

        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'https://asicjobs.in/api/webapi.php?api_action=apply_job&job_id=28&user_id=56&candidate_resume_id=2&cover_letter=hello',
            headers: {}
        };

        // axios.request(config)
        //     .then((response) => {
        //         console.log(JSON.stringify(response.data));
        //     })
        //     .catch((error) => {
        //         console.log(error);
        //     });
    }


    return (
        <View style={ApplyJobStyle.MinViewScreen}>
            <ScrollView
                keyboardShouldPersistTaps="handled"
                contentContainerStyle={{
                    width: '100%',
                    height: 'auto',
                }}>
                <View style={ApplyJobStyle.PaddingHorizontal}>
                    <View style={ApplyJobStyle.FlexCenterAlign}>
                        <View style={ApplyJobStyle.FlexImageText}>
                            <Image source={{ uri: data.logo }} resizeMode="contain" style={{ ...ApplyJobStyle.UxDisignerStyless, borderRadius: 2 }} />
                            <View style={ApplyJobStyle.LeftPadding}>
                                <Text numberOfLines={2} style={{ maxWidth: '80%', color: 'black' }}>{data.title}</Text>
                                <Text style={{ ...ApplyJobStyle.UxDesignerTextTWO }}>{data.company_name}</Text>
                            </View>
                        </View>
                        <View style={{}}>
                            <Text style={ApplyJobStyle.Uxdesignertext}>{data.name}</Text>
                            <Text style={ApplyJobStyle.TextLeft}>{data.is_remote == "1" ? "Remote" : "In-Person"}</Text>
                        </View>
                    </View>
                    <Spacing space={SH(12)} />


                    <Spacing space={SH(5)} />
                    <Text style={ApplyJobStyle.SelectProfileText}>{t("Select_Resume")}</Text>
                    <Spacing space={SH(12)} />
                    <View>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{ justifyContent: 'flex-start', alignItems: 'center' }}>
                            {
                                userData.resumes.map((ele, index) => {
                                    return (
                                        <View style={{ marginHorizontal: 10, borderWidth: 1, borderColor: '#f5f5f5', borderRadius: 8, padding: 8, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', paddingRight: 12 }}>
                                            <Button buttonStyle={{ ...ApplyJobStyle.buttonbgcolorview, marginHorizontal: 4, backgroundColor: Colors.theme_background_brink_pink }} buttonTextStyle={ApplyJobStyle.buttontextstyle} title={t("Frontend_Button")} />

                                            <CheckBox
                                                disabled={false}
                                                value={resumes[ele.id] ?? false}
                                                onValueChange={(newValue) => setResumes(current => ({ [ele.id]: newValue }))} />
                                        </View>
                                    )
                                })
                            }
                        </ScrollView>
                        <Spacing space={SH(20)} />
                        <Text style={ApplyJobStyle.SelectProfileTextBlack}>{t("Cover_Later_Optional")}</Text>
                        <Spacing space={SH(10)} />
                        <View style={ApplyJobStyle.Flexcedntyer}>
                            <Input
                                value=""
                                onChangeText={(text) => { }}
                                inputprops={{ marginTop: 16, textAlign: 'left', textAlignVertical: 'top' }}
                                placeholder="Type here..."
                                numberOfLines={5}
                                inputStyle={{ height: 300 }}
                            />
                        </View>
                        <Spacing space={SH(100)} />
                    </View>
                </View>
            </ScrollView >
            <View style={ApplyJobStyle.ButtonHorizontal}>
                <Button onPress={() => applyJob()} title={t("Apply_text")} />
            </View>
        </View >
    );
};
export default ApplyJob;
