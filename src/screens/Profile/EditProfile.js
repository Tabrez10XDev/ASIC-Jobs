import React, { useState, useEffect, useMemo } from "react";
import { View, Text, TouchableOpacity, Image, TextInput, Modal } from "react-native";
import { ProfileTabStyles } from "../../styles";
import { useNavigation, useTheme } from '@react-navigation/native';
import images from "../../index";
import { Input, DropDown, DocumentPicker, Button, ConfirmationAlert, Spacing } from "../../components";
import { ScrollView } from "react-native";
import { SettingStyle, Style, LanguageStyles, ResumeStyles } from '../../styles';
import { Dimensions } from "react-native";
import DatePicker from 'react-native-date-picker'
import SelectBox from 'react-native-multi-selectbox'
import { xorBy } from 'lodash'
import axios from "axios";
import Toast from 'react-native-toast-message';

const EditProfile = ({ route }) => {

    const [selectedSkills, setSelectedSkills] = useState([])
    const [selectedLanguages, setSelectedLanguages] = useState([])
    const [availableIn, setAvailableIn] = useState("")
    const data = route.params

    const [formattedDate, setFormattedDate] = data.candidates_details.available_in == "" ? useState(null) : useState(new Date(data.candidates_details.available_in))

    const [date, setDate] = data.candidates_details.available_in == "" || data.candidates_details.available_in == "0000-00-00" ? useState(new Date()) : useState(new Date(data.candidates_details.available_in))
    const [open, setOpen] = useState(false)
    function onMultiChange() {
        return (item) => setSelectedSkills(xorBy(selectedSkills, [item], 'id'))
    }

    function onMultiChange2() {
        return (item) => setSelectedLanguages(xorBy(selectedLanguages, [item], 'id'))
    }


    async function updateProfile() {

        let skills = ""
        let langs = ""
        selectedSkills.forEach((ele, index) => {
            skills = skills + ele.id + ","
        })

        selectedLanguages.forEach((ele, index) => {
            langs = langs + ele.id + ","
        })

        skills = skills.slice(0, -1)
        langs = langs.slice(0, -1)

        console.log(langs)

        const _date = formattedDate ? `${formattedDate.getUTCMonth()}` : "asd"
        console.log(_date)

        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `https://asicjobs.in/api/webapi.php?api_action=update_users_profile&gender=%27${gender.toLowerCase()}%27&marital_status=%27${maritalStatus.toLowerCase()}%27&profession_id=5&available_status=%27${availability.toLowerCase().replace(" ","_")}%27&bio=%27${encodeURIComponent(bio)}%27&skills=${skills}&languages=${langs}&user_id=${data.user_details.id}&available_in=${formattedDate ? `${formattedDate.getFullYear()}-${formattedDate.getMonth() + 1}-${formattedDate.getDate()}`: "0000-00-00"}`,
        };

        console.log(
            `https://asicjobs.in/api/webapi.php?api_action=update_users_profile&gender=%27${gender.toLowerCase()}%27&marital_status=%27${maritalStatus.toLowerCase()}%27&profession_id=5&available_status=%27${availability.toLowerCase()}%27&bio=%27${encodeURIComponent(bio)}%27&skills=${skills}&languages=${langs}&user_id=${data.user_details.id}`,

        )

        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
                Toast.show({
                    type: 'success',
                    text1: "Success"
                });
            })
            .catch((error) => {
                console.log(error);
                Toast.show({
                    type: 'error',
                    text1: "Unknown error occured"
                });
            });

    }


    async function getMapping() {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'https://asicjobs.in/api/webapi.php?api_action=all_master_data',
        };

        axios.request(config)
            .then((response) => {
                const formattedItems = response.data.skill_data.map(item => ({
                    id: item.id,
                    item: item.name,
                }));


                const formattedItems2 = response.data.lang_data.map(item => ({
                    id: item.id,
                    item: item.name,
                }));

                setSkillsMap(formattedItems)
                setLangMap(formattedItems2)
                setProfessionMap(response.data.professions_data)

                let skillsTemp = []
                data.candidates_skill.map((ele) => {
                    let temp = { id: ele.id, item: ele.candidate_id }
                    skillsTemp.push(temp)
                })

                let languagesTemp = []
                data.candidates_language.map((ele) => {
                    let temp = { id: ele.id, item: ele.language_name }
                    languagesTemp.push(temp)
                })


                setSelectedSkills(skillsTemp)
                setSelectedLanguages(languagesTemp)


            })
            .catch((error) => {
                console.log(error);
            });
    }

    const [skillsMap, setSkillsMap] = useState([])
    const [langMap, setLangMap] = useState([])
    const [professionMap, setProfessionMap] = useState([])







    const { Colors } = useTheme();


    const [isFocusGender, setIsFocusGender] = useState(false);
    const [isFocusProfession, setIsFocusProfession] = useState(false);
    const [isFocusMarital, setIsFocusMarital] = useState(false);
    const [isFocusAvailability, setIsFocusAvailability] = useState(false);

    const [gender, setGender] = useState("")
    const [profession, setProfession] = useState("")
    const [maritalStatus, setMaritalStatus] = useState("")
    const [availability, setAvailability] = useState("")
    const [bio, setBio] = useState("")

    useEffect(() => {

        getMapping()

        setGender(data.candidates_details.gender.charAt(0).toUpperCase() + data.candidates_details.gender.slice(1))
        setMaritalStatus(data.candidates_details.marital_status.charAt(0).toUpperCase() + data.candidates_details.marital_status.slice(1))
        setProfession(data.candidates_details.profession)
        if(data.candidates_details.status == "available") setAvailability(AvailabilityData[0].value)
        else if(data.candidates_details.status == "not_available") setAvailability(AvailabilityData[1].value)
        else if(data.candidates_details.status == "available_in") setAvailability(AvailabilityData[2].value)

        setBio(data.candidates_details.bio)
        setAvailableIn(data.candidates_details.available_in)
    }, [])


    const GenderData = [
        { label: 'Male', value: 'Male' },
        { label: 'Female', value: 'Female' },
        { label: 'Other', value: 'Other' },
    ];

    const MaritalData = [
        { label: 'Married', value: 'Married' },
        { label: 'Single', value: 'Single' },
    ];


    const AvailabilityData = [
        { label: 'Available', value: 'Available' },
        { label: 'Not Available', value: 'Not Available' },
        { label: 'Available In', value: 'Available In' },
    ];



    return (
        <>
            <ScrollView nestedScrollEnabled={true}>
                <View style={{ backgroundColor: 'white', height: '100%' }}>

                    <View style={{ width: '95%', alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}>

                        <View style={isFocusGender ? { ...LanguageStyles.LeadsDropdownbox, marginTop: 48 } : { ...LanguageStyles.LeadsDropdownboxOpen, marginTop: 16 }}>

                            <DropDown
                                data={GenderData}
                                dropdownStyle={LanguageStyles.LeadDropdown}
                                value={gender}
                                onChange={item => {
                                    setGender(item.value)
                                }}
                                width={Dimensions.get('window').width * 0.95}
                                search
                                searchPlaceholder="Search bar"
                                placeholder="Gender"
                                selectedTextStyle={LanguageStyles.selectedTextStyleLead}
                                IconStyle={LanguageStyles.IconStyle}
                                onFocus={() => setIsFocusGender(true)}
                                onBlur={() => setIsFocusGender(false)}
                                labelField="label"
                                valueField="value"
                                renderLeftIcon={() => (
                                    <Icon color="black" name={isFocusGender ? 'arrowup' : 'arrowdown'} size={SF(20)} />
                                )}
                            />
                        </View>

                        <View style={isFocusMarital ? { ...LanguageStyles.LeadsDropdownbox, marginTop: 16 } : { ...LanguageStyles.LeadsDropdownboxOpen, marginTop: 16 }}>
                            <DropDown
                                data={MaritalData}
                                dropdownStyle={LanguageStyles.LeadDropdown}
                                value={maritalStatus}
                                onChange={item => {
                                    setMaritalStatus(item.value)
                                }}
                                width={Dimensions.get('window').width * 0.95}
                                search
                                searchPlaceholder="Search bar"
                                placeholder="Marital Status"
                                selectedTextStyle={LanguageStyles.selectedTextStyleLead}
                                IconStyle={LanguageStyles.IconStyle}
                                onFocus={() => setIsFocusMarital(true)}
                                onBlur={() => setIsFocusMarital(false)}
                                labelField="label"
                                valueField="value"
                                renderLeftIcon={() => (
                                    <Icon color="black" name={isFocusMarital ? 'arrowup' : 'arrowdown'} size={SF(20)} />
                                )}
                            />
                        </View>

                        <View style={isFocusProfession ? { ...LanguageStyles.LeadsDropdownbox, marginTop: 16 } : { ...LanguageStyles.LeadsDropdownboxOpen, marginTop: 16 }}>
                            <DropDown
                                data={professionMap}
                                dropdownStyle={LanguageStyles.LeadDropdown}
                                value={profession}
                                onChange={item => {
                                    setProfession(item.value)
                                    if (item.value == AvailabilityData[2].value) setFormattedDate(null)
                                }}
                                width={Dimensions.get('window').width * 0.95}
                                search
                                searchPlaceholder="Search bar"
                                placeholder="Profession"
                                selectedTextStyle={LanguageStyles.selectedTextStyleLead}
                                IconStyle={LanguageStyles.IconStyle}
                                onFocus={() => setIsFocusProfession(true)}
                                onBlur={() => setIsFocusProfession(false)}
                                labelField="name"
                                valueField="name"
                                renderLeftIcon={() => (
                                    <Icon color="black" name={isFocusProfession ? 'arrowup' : 'arrowdown'} size={SF(20)} />
                                )}
                            />
                        </View>



                        <View style={isFocusAvailability ? { ...LanguageStyles.LeadsDropdownbox, marginTop: 16 } : { ...LanguageStyles.LeadsDropdownboxOpen, marginTop: 16 }}>
                            <DropDown
                                data={AvailabilityData}
                                dropdownStyle={LanguageStyles.LeadDropdown}
                                value={availability}
                                onChange={item => {
                                    setAvailability(item.value)
                                    const _date = data.candidates_details.available_in == "" ? null : new Date(data.candidates_details.available_in)
                                    
                                    if (item.value != AvailabilityData[2].value) {
                                        setFormattedDate(null)
                                    }
                                    else setFormattedDate(_date)
                                }}
                                width={Dimensions.get('window').width * 0.95}
                                search
                                searchPlaceholder="Search bar"
                                placeholder="Availability"
                                selectedTextStyle={LanguageStyles.selectedTextStyleLead}
                                IconStyle={LanguageStyles.IconStyle}
                                onFocus={() => setIsFocusAvailability(true)}
                                onBlur={() => setIsFocusAvailability(false)}
                                labelField="label"
                                valueField="value"
                                renderLeftIcon={() => (
                                    <Icon color="black" name={availability ? 'arrowup' : 'arrowdown'} size={SF(20)} />
                                )}
                            />
                        </View>
                        {
                            availability == AvailabilityData[2].value &&


                            <TouchableOpacity
                                onPress={() => setOpen(true)}
                                style={{
                                    width: '100%', height: 40, justifyContent: 'center', paddingHorizontal: 12, marginTop: 16,
                                    borderRadius: 7,
                                    borderWidth: 0,
                                    borderColor: 'white',
                                    backgroundColor: 'white',
                                    shadowColor: "#000",
                                    shadowOffset: {
                                        width: 0,
                                        height: Platform.OS === 'ios' ? 2 : 25,
                                    },
                                    height: 47,
                                    color: Colors.gray_text_color,
                                    shadowOpacity: 0.58,
                                    shadowRadius: Platform.OS === 'ios' ? 2 : 25,
                                    elevation: Platform.OS === 'ios' ? 1 : 2,
                                }}>
                                {formattedDate == "" || formattedDate == null ? <Text style={{ fontWeight: '500' }}>Available In</Text>
                                    :
                                    <Text style={{ fontWeight: '500' }}>{formattedDate.getDate()}/{formattedDate.getMonth() + 1}/{formattedDate.getFullYear()}</Text>
                                }
                            </TouchableOpacity>


                        }
                        <SelectBox
                            listOptionProps={{ nestedScrollEnabled: true }}
                            options={skillsMap}
                            selectedValues={selectedSkills}
                            onMultiSelect={onMultiChange()}
                            onTapClose={onMultiChange()}
                            isMulti
                            label="Skills you have"
                            labelStyle={{ fontWeight: '500', fontSize: 14, marginTop: 16 }}
                            selectedItemStyle={{ color: 'black', backgroundColor: 'black' }}
                        />


                        <SelectBox
                            listOptionProps={{ nestedScrollEnabled: true }}
                            options={langMap}
                            selectedValues={selectedLanguages}
                            onMultiSelect={onMultiChange2()}
                            onTapClose={onMultiChange2()}
                            isMulti
                            label="Languages you know"
                            onFocus={() => { console.log("ho") }}
                            labelStyle={{ fontWeight: '500', fontSize: 14, marginTop: 16 }}
                            selectedItemStyle={{ color: 'black', backgroundColor: 'black' }}
                        />


                        <Input
                            value={bio}
                            onChangeText={(text) => { setBio(text) }}
                            inputprops={{ marginTop: 16, textAlign: 'left', textAlignVertical: 'top' }}
                            placeholder="Write your Biography..."
                            numberOfLines={5}
                            inputStyle={{ height: 300 }}
                        />


                        <TouchableOpacity onPress={() => updateProfile()} style={{ width: '95%', alignItems: 'center', justifyContent: 'center', backgroundColor: Colors.theme_background_brink_pink, marginTop: 24, borderRadius: 4, paddingVertical: 10 }}>
                            <Text style={{ fontSize: 16, color: 'white' }}>
                                Save Changes
                            </Text>
                        </TouchableOpacity>
                    </View>




                </View>
            </ScrollView>
            <DatePicker
                modal
                open={open}
                date={date}
                minimumDate={new Date()}
                mode="date"
                onConfirm={(date) => {
                    setOpen(false)
                    setDate(date)
                    setFormattedDate(date)
                }}
                onCancel={() => {
                    setOpen(false)
                }}
            />
            <Toast
                position='bottom'
                bottomOffset={40}
            />
        </>
    )
}

export default EditProfile;