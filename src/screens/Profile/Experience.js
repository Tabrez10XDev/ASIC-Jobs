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



const Experience = () => {

    const Experiencedataview = (item, index) => {
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
                width: '95%', borderRadius: 10, padding: 16, alignItems: 'center', justifyContent: 'center'
            }}>
                <View style={{ flexDirection: 'row', width: '100%' }}>


                    <View style={{ width: '50%' }}>
                        <Text numberOfLines={1} style={{ ...SaveJobListStyle.Normalsmalltext, textAlign: 'left', marginTop: 8 }}>Company</Text>
                        <Text numberOfLines={1} style={{ fontWeight: '600', fontSize: 16, maxWidth: '80%', color: 'black', textAlign: 'left', marginTop: 2 }}>Millennial Technology services</Text>

                        <Text numberOfLines={1} style={{ ...SaveJobListStyle.Normalsmalltext, textAlign: 'left', marginTop: 16 }}>Department</Text>

                        <Text numberOfLines={1} style={{ ...SaveJobListStyle.Normalsmalltext, color: 'black', textAlign: 'left' }}>Web</Text>
                    </View>

                    <View style={{ width: '50%' }}>
                        <Text numberOfLines={1} style={{ ...SaveJobListStyle.Normalsmalltext, textAlign: 'right', marginTop: 8 }}>Position</Text>
                        <Text numberOfLines={1} style={{ fontWeight: '600', fontSize: 16, color: 'black', textAlign: 'right', marginTop: 2 }}>Sr Designer</Text>
                        <Text numberOfLines={1} style={{ ...SaveJobListStyle.Normalsmalltext, textAlign: 'right', marginTop: 16 }}>Period</Text>

                        <Text numberOfLines={1} style={{ ...SaveJobListStyle.Normalsmalltext, color: 'black', textAlign: 'right', marginTop: 2 }}>Currently Working</Text>
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

    const Educationdataview = (item, index) => {
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
                width: '95%', borderRadius: 10, padding: 16, alignItems: 'center', justifyContent: 'center'
            }}>
                <View style={{ flexDirection: 'row', width: '100%' }}>


                    <View style={{ width: '50%' }}>
                        <Text numberOfLines={1} style={{ ...SaveJobListStyle.Normalsmalltext, textAlign: 'left', marginTop: 8 }}>Education level</Text>
                        <Text numberOfLines={1} style={{ fontWeight: '600', fontSize: 16, maxWidth: '80%', color: 'black', textAlign: 'left', marginTop: 2 }}>Graduate</Text>

                        <Text numberOfLines={1} style={{ ...SaveJobListStyle.Normalsmalltext, textAlign: 'left', marginTop: 16 }}>Degree</Text>

                        <Text numberOfLines={1} style={{ ...SaveJobListStyle.Normalsmalltext, color: 'black', textAlign: 'left' }}>B.Tech</Text>
                    </View>

                    <View style={{ width: '50%' }}>
                        <Text numberOfLines={1} style={{ ...SaveJobListStyle.Normalsmalltext, textAlign: 'right', marginTop: 8 }}>Year</Text>
                        <Text numberOfLines={1} style={{ fontWeight: '600', fontSize: 16, color: 'black', textAlign: 'right', marginTop: 2 }}>2022</Text>
                        <Text numberOfLines={1} style={{ ...SaveJobListStyle.Normalsmalltext, textAlign: 'right', marginTop: 16 }}>Action</Text>

                        <Text numberOfLines={1} style={{ ...SaveJobListStyle.Normalsmalltext, color: 'black', textAlign: 'right', marginTop: 2 }}>None</Text>
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
                <Text style={{ color: 'black', fontSize: 18, fontWeight: '500', textAlign: 'left', width: '95%', marginTop: 24 }}>
                    Experience
                </Text>
                <Experiencedataview />
                <TouchableOpacity
                    onPress={() => { refRBSheet.current.open() }}
                    style={{ width: '95%', alignItems: 'center', justifyContent: 'center', backgroundColor: Colors.theme_background_brink_pink, marginTop: 24, borderRadius: 4, paddingVertical: 10 }}>
                    <Text style={{ fontSize: 16, color: 'white' }}>
                        Add Experience
                    </Text>
                </TouchableOpacity>
                <Text style={{ color: 'black', fontSize: 18, fontWeight: '500', textAlign: 'left', width: '95%', marginTop: 24 }}>
                    Education
                </Text>
                <Educationdataview />
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