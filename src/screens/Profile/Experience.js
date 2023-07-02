import React, { useState, useEffect, useMemo, useRef } from "react";
import { View, Text, TouchableOpacity, Image, TextInput, Modal } from "react-native";
import { ProfileTabStyles } from "../../styles";
import { useNavigation, useTheme } from '@react-navigation/native';
import images from "../../index";
import { Input, DropDown, DocumentPicker, Button, ConfirmationAlert, Spacing } from "../../components";
import { ScrollView } from "react-native";
import { SettingStyle, Style, LanguageStyles, ResumeStyles, HomeTabStyles, SaveJobListStyles } from '../../styles';
import { Dimensions } from "react-native";
import DatePicker from 'react-native-date-picker'
import { SF, SH } from "../../utils";
import LinearGradient from 'react-native-linear-gradient';
import { width } from "react-native-bottom-tab/src/AnimatedTabBar/utils";
import AddExperience from "../../components/commonComponents/AddExperience";
import AddEducation from "../../components/commonComponents/AddEducation";



const Experience = ({route}) => {

    const data = route.params

    const [educationList, setEducationList] = useState(route.params.candidate_education)
    const [experienceList, setExperienceList] = useState(route.params.candidates_experience) 

    const Experiencedataview = (_item, index) => {
        const SaveJobListStyle = useMemo(() => SaveJobListStyles(Colors), [Colors]);
        const item = _item.item
        const img = "https://asicjobs.in/" + item.logo
        let appliedDate = item.applied_on
        // appliedDate = appliedDate.substring(0,11)
        let state = item.status == "active" ? 1 : 0

        console.log("===============")
        console.log(item)
        let stateText = item.status == "active" ? "Active" : "Expired"
        return (
            <View style={{
                color: Colors.gray_text_color,
                borderWidth: 2,
                borderColor: 'white',
                backgroundColor: 'white',
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: Platform.OS === 'ios' ? 2 : 25,
                },
                shadowOpacity: 0.58,
                shadowRadius: Platform.OS === 'ios' ? 2 : 25,
                elevation: Platform.OS === 'ios' ? 1 : 2,
                width: '95%', borderRadius: 10, padding: 16, alignItems: 'center', justifyContent: 'center',
                marginTop:12
            }}>
                <View style={{ flexDirection: 'row', width: '100%' }}>


                    <View style={{ width: '50%' }}>
                        <Text numberOfLines={1} style={{ ...SaveJobListStyle.Normalsmalltext, textAlign: 'left', marginTop: 8 }}>Company</Text>
                        <Text numberOfLines={1} style={{ fontWeight: '600', fontSize: 16, maxWidth: '80%', color: 'black', textAlign: 'left', marginTop: 2 }}>{item.company}</Text>

                        <Text numberOfLines={1} style={{ ...SaveJobListStyle.Normalsmalltext, textAlign: 'left', marginTop: 16 }}>Department</Text>

                        <Text numberOfLines={1} style={{ ...SaveJobListStyle.Normalsmalltext, color: 'black', textAlign: 'left' }}>{item.department}</Text>
                    </View>

                    <View style={{ width: '50%' }}>
                        <Text numberOfLines={1} style={{ ...SaveJobListStyle.Normalsmalltext, textAlign: 'right', marginTop: 8 }}>Desgination</Text>
                        <Text numberOfLines={1} style={{ fontWeight: '600', fontSize: 16, color: 'black', textAlign: 'right', marginTop: 2 }}>{item.designation}</Text>
                        <Text numberOfLines={1} style={{ ...SaveJobListStyle.Normalsmalltext, textAlign: 'right', marginTop: 16 }}>Currently Working</Text>

                        <Text numberOfLines={1} style={{ ...SaveJobListStyle.Normalsmalltext, color: 'black', textAlign: 'right', marginTop: 2 }}>{item.currently_working ?? "NA"}</Text>
                    </View>
                </View>
                <TouchableOpacity style={{ width: '60%', alignItems: 'center', justifyContent: 'center', borderColor: Colors.theme_background_brink_pink, borderWidth: 1, borderStyle: 'dashed', marginTop: 24, borderRadius: 4, paddingVertical: 10 }}>
                    <Text style={{ fontSize: 16, color: Colors.theme_background_brink_pink }}>
                        Delete
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }

    const Educationdataview = (_item, index) => {

        const item = _item.item
        const SaveJobListStyle = useMemo(() => SaveJobListStyles(Colors), [Colors]);

        const img = "https://asicjobs.in/" + item.logo
        let appliedDate = item.applied_on
        // appliedDate = appliedDate.substring(0,11)
        let state = item.status == "active" ? 1 : 0


        let stateText = item.status == "active" ? "Active" : "Expired"
        return (
            <View style={{
                color: Colors.gray_text_color,
                borderWidth: 2,
                borderColor: 'white',
                backgroundColor: 'white',
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: Platform.OS === 'ios' ? 2 : 25,
                },
                shadowOpacity: 0.58,
                shadowRadius: Platform.OS === 'ios' ? 2 : 25,
                elevation: Platform.OS === 'ios' ? 1 : 2,
                width: '95%', borderRadius: 10, padding: 16, alignItems: 'center', justifyContent: 'center',
                marginTop:12
            }}>
                <View style={{ flexDirection: 'row', width: '100%' }}>


                    <View style={{ width: '50%' }}>
                        <Text numberOfLines={1} style={{ ...SaveJobListStyle.Normalsmalltext, textAlign: 'left', marginTop: 8 }}>Education level</Text>
                        <Text numberOfLines={1} style={{ fontWeight: '600', fontSize: 16, maxWidth: '80%', color: 'black', textAlign: 'left', marginTop: 2 }}>{item.level}</Text>

                        <Text numberOfLines={1} style={{ ...SaveJobListStyle.Normalsmalltext, textAlign: 'left', marginTop: 16 }}>Degree</Text>

                        <Text numberOfLines={1} style={{ ...SaveJobListStyle.Normalsmalltext, color: 'black', textAlign: 'left' }}>{item.degree}</Text>
                    </View>

                    <View style={{ width: '50%' }}>
                        <Text numberOfLines={1} style={{ ...SaveJobListStyle.Normalsmalltext, textAlign: 'right', marginTop: 8 }}>Year</Text>
                        <Text numberOfLines={1} style={{ fontWeight: '600', fontSize: 16, color: 'black', textAlign: 'right', marginTop: 2 }}>{item.year}</Text>
                        <Text numberOfLines={1} style={{ ...SaveJobListStyle.Normalsmalltext, textAlign: 'right', marginTop: 16 }}>Notes</Text>

                        <Text numberOfLines={1} style={{ ...SaveJobListStyle.Normalsmalltext, color: 'black', textAlign: 'right', marginTop: 2 }}>{item.notes}</Text>
                    </View>
                </View>
                <TouchableOpacity style={{ width: '60%', alignItems: 'center', justifyContent: 'center', borderColor: Colors.theme_background_brink_pink, borderWidth: 1, borderStyle: 'dashed', marginTop: 24, borderRadius: 4, paddingVertical: 10 }}>
                    <Text style={{ fontSize: 16, color: Colors.theme_background_brink_pink }}>
                        Delete
                    </Text>
                </TouchableOpacity>

                {/* <Spacing space={SH(5)} />
                <View style={SaveJobListStyle.Twobuttonflexview}>
                    {state == 1 ?
                        <TouchableOpacity onPress={() => {}} style={{ ...SaveJobListStyle.Statusbutton}}>
                            <Text style={SaveJobListStyle.Openbuttontextstyles}>{stateText}</Text>
                        </TouchableOpacity>
                        :
                        <TouchableOpacity onPress={() => {}} style={{ ...SaveJobListStyle.Statusbuttontwo, backgroundColor: item.backgroundwhite }}>
                            <Text style={SaveJobListStyle.Applytextstyles}>{stateText}</Text>
                        </TouchableOpacity>}
                    <View>
                        <Text style={SaveJobListStyle.Fulltimetextstyle}>{appliedDate}</Text>
                    </View>
                </View> */}
            </View>
        )
    }

    const { Colors } = useTheme();

    const refRBSheet = useRef();
    const refRBSheet2 = useRef();


    return (
        <ScrollView>
            <View style={{ backgroundColor: 'white', height: '100%', alignItems: 'center' }}>
                <Text style={{ color: 'black', fontSize: 22, fontWeight: '500', textAlign: 'left', width: '95%', marginTop: 24 }}>
                    Experience
                </Text>
                {experienceList.map((ele,index)=>{
                    return(
                        <Experiencedataview item={ele} />
                    )
                })}
                <TouchableOpacity
                    onPress={() => { refRBSheet.current.open() }}
                    style={{ width: '95%', alignItems: 'center', justifyContent: 'center', backgroundColor: Colors.theme_background_brink_pink, marginTop: 24, borderRadius: 4, paddingVertical: 10 }}>
                    <Text style={{ fontSize: 16, color: 'white' }}>
                        Add Experience
                    </Text>
                </TouchableOpacity>
                <Text style={{ color: 'black', fontSize: 22, fontWeight: '500', textAlign: 'left', width: '95%', marginTop: 48 }}>
                    Education
                </Text>
                {educationList.map((ele,index)=>{
                    return(
                        <Educationdataview item={ele} />
                    )
                })}                
                <TouchableOpacity
                    onPress={() => { refRBSheet2.current.open() }}
                    style={{ width: '95%', alignItems: 'center', justifyContent: 'center', backgroundColor: Colors.theme_background_brink_pink, marginTop: 24, borderRadius: 4, paddingVertical: 10 }}>
                    <Text style={{ fontSize: 16, color: 'white' }}>
                        Add Education
                    </Text>
                </TouchableOpacity>

            </View>
            <AddExperience refRBSheet={refRBSheet} />
            <AddEducation refRBSheet={refRBSheet2} />

        </ScrollView>
    )
}

export default Experience;