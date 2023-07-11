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

const EditProfile = ({ route }) => {

    const [selectedSkills, setSelectedSkills] = useState([])
    const [selectedLanguages, setSelectedLanguages] = useState([])
    const data = route.params
    function onMultiChange() {
        return (item) => setSelectedSkills(xorBy(selectedSkills, [item], 'id'))
    }

    function onMultiChange2() {
        return (item) => setSelectedLanguages(xorBy(selectedLanguages, [item], 'id'))
    }

    const K_OPTIONS = [
        {
            item: 'html',
            id: 'html',
        },
        {
            item: 'css',
            id: 'css',
        },
        {
            item: 'js',
            id: 'js',
        },
        {
            item: 'php',
            id: 'php',
        },
        {
            item: 'laravel',
            id: 'laravel',
        }, {
            item: 'mysql',
            id: 'mysql',
        },
        {
            item: 'vuejs',
            id: 'vuejs',
        }, {
            item: 'reactjs',
            id: 'reactjs',
        },
        {
            item: 'nodejs',
            id: 'nodejs',
        },
        {
            item: 'expressjs',
            id: 'expressjs',
        }, {
            item: 'python',
            id: 'python',
        }, {
            item: 'Django',
            id: 'Django',
        },
    ]

    const SkillsData = [
        {
            item: 'html',
            id: 'html',
        },
        {
            item: 'css',
            id: 'css',
        },
        {
            item: 'js',
            id: 'js',
        },
        {
            item: 'php',
            id: 'php',
        },
        {
            item: 'laravel',
            id: 'laravel',
        }, {
            item: 'mysql',
            id: 'mysql',
        },
        {
            item: 'vuejs',
            id: 'vuejs',
        }, {
            item: 'reactjs',
            id: 'reactjs',
        },
        {
            item: 'nodejs',
            id: 'nodejs',
        },
        {
            item: 'expressjs',
            id: 'expressjs',
        }, {
            item: 'python',
            id: 'python',
        }, {
            item: 'Django',
            id: 'Django',
        },
    ]




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
        setGender(data.candidates_details.gender.charAt(0).toUpperCase() + data.candidates_details.gender.slice(1))
        setMaritalStatus(data.candidates_details.marital_status.charAt(0).toUpperCase() + data.candidates_details.marital_status.slice(1))
        setProfession(data.candidates_details.profession)
        setAvailability(data.candidates_details.status.charAt(0).toUpperCase() + data.candidates_details.status.slice(1))
        let skillsTemp = []
        data.candidates_skill.map((ele) => {
            let temp = { id: ele.candidate_id, item: ele.candidate_id }
            skillsTemp.push(temp)
        })

        let languagesTemp = []
        data.candidates_language.map((ele) => {
            let temp = { id: ele.language_name, item: ele.language_name }
            languagesTemp.push(temp)
        })

    
        // setSelectedSkills(skillsTemp)
        setBio(data.candidates_details.bio)
        // setSelectedLanguages(languagesTemp)

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



    const ProfessionData = [
        { label: 'Physician', value: 'Physician' },
        { label: 'Engineer', value: 'Engineer' },
        { label: 'Chef', value: 'Chef' },
        { label: 'Lawyer', value: 'Lawyer' },
        { label: 'Designer', value: 'Designer' },
        { label: 'Labourer', value: 'Labourer' },
        { label: 'Dentist', value: 'Dentist' },
        { label: 'Accountant', value: 'Accountant' },
        { label: 'Dental Hygienist', value: 'Dental Hygienist' },
        { label: 'Actor', value: 'Actor' },
        { label: 'Electrician', value: 'Electrician' },
        { label: 'Software Developer', value: 'Software Developer' },
        { label: 'Pharmacist', value: 'Pharmacist' },
        { label: 'Technician', value: 'Technician' },
        { label: 'Artist', value: 'Artist' },
        { label: 'Teacher', value: 'Teacher' },
        { label: 'Jounralist', value: 'Jounralist' },
        { label: 'Cashier', value: 'Cashier' },
        { label: 'Secretary', value: 'Secretary' },
        { label: 'Scientist', value: 'Scientist' },
        { label: 'Soldier', value: 'Soldier' },
        { label: 'Gardener', value: 'Gardener' },
        { label: 'Farmer', value: 'Farmer' },
        { label: 'Librarian', value: 'Librarian' },
        { label: 'Driver', value: 'Driver' },
        { label: 'Fishermen', value: 'Fishermen' },
        { label: 'Police Officer', value: 'Police Officer' },
        { label: 'Tailor', value: 'Tailor' },



    ]

    return (
        <ScrollView>
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
                            data={ProfessionData}
                            dropdownStyle={LanguageStyles.LeadDropdown}
                            value={profession}
                            onChange={item => {
                                setProfession(item.value)
                            }}
                            width={Dimensions.get('window').width * 0.95}
                            search
                            searchPlaceholder="Search bar"
                            placeholder="Profession"
                            selectedTextStyle={LanguageStyles.selectedTextStyleLead}
                            IconStyle={LanguageStyles.IconStyle}
                            onFocus={() => setIsFocusProfession(true)}
                            onBlur={() => setIsFocusProfession(false)}
                            labelField="label"
                            valueField="value"
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



                    <SelectBox
                        options={SkillsData}
                        selectedValues={selectedSkills}
                        onMultiSelect={onMultiChange()}
                        onTapClose={onMultiChange()}
                        isMulti
                        label="Skills you have"
                        labelStyle={{ fontWeight: '500', fontSize: 14, marginTop: 16 }}
                        selectedItemStyle={{ color: 'black', backgroundColor: 'black' }}
                    />


                    <SelectBox
                        options={K_OPTIONS}
                        selectedValues={selectedLanguages}
                        onMultiSelect={onMultiChange2()}
                        onTapClose={onMultiChange2()}
                        isMulti
                        label="Languages you know"
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


                    <TouchableOpacity onPress={onMultiChange} style={{ width: '95%', alignItems: 'center', justifyContent: 'center', backgroundColor: Colors.theme_background_brink_pink, marginTop: 24, borderRadius: 4, paddingVertical: 10 }}>
                        <Text style={{ fontSize: 16, color: 'white' }}>
                            Save Changes
                        </Text>
                    </TouchableOpacity>
                </View>




            </View>
        </ScrollView>
    )
}

export default EditProfile;