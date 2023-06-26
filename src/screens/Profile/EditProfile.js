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

const EditProfile = () => {

    const [selectedSkills, setSelectedSkills] = useState([])
    const [selectedLanguages, setSelectedLanguages] = useState([])

    function onMultiChange() {
        return (item) => setSelectedSkills(xorBy(selectedSkills, [item], 'id'))
    }

    function onMultiChange2() {
        return (item) => setSelectedLanguages(xorBy(selectedLanguages, [item], 'id'))
    }

    const K_OPTIONS = [
        {
            item: 'Juventus',
            id: 'JUVE',
        },
        {
            item: 'Real Madrid',
            id: 'RM',
        },
        {
            item: 'Barcelona',
            id: 'BR',
        },
        {
            item: 'PSG',
            id: 'PSG',
        },
        {
            item: 'FC Bayern Munich',
            id: 'FBM',
        },
        {
            item: 'Manchester United FC',
            id: 'MUN',
        },
        {
            item: 'Manchester City FC',
            id: 'MCI',
        },
        {
            item: 'Everton FC',
            id: 'EVE',
        },
        {
            item: 'Tottenham Hotspur FC',
            id: 'TOT',
        },
        {
            item: 'Chelsea FC',
            id: 'CHE',
        },
        {
            item: 'Liverpool FC',
            id: 'LIV',
        },
        {
            item: 'Arsenal FC',
            id: 'ARS',
        },

        {
            item: 'Leicester City FC',
            id: 'LEI',
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



    const DataofDropdown = [
        { label: 'English', value: 'en' },
        { label: 'Arabic', value: 'ara' },
        { label: 'Spanish', value: 'Spa' },
        { label: 'French', value: 'Fr' },
    ];

    return (
        <ScrollView>
            <View style={{ backgroundColor: 'white', height: '100%' }}>

                <View style={{ width: '95%', alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}>

                    <View style={isFocusGender ? { ...LanguageStyles.LeadsDropdownbox, marginTop: 48 } : { ...LanguageStyles.LeadsDropdownboxOpen, marginTop: 16 }}>

                        <DropDown
                            data={DataofDropdown}
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



                    <View style={isFocusProfession ? { ...LanguageStyles.LeadsDropdownbox, marginTop: 16 } : { ...LanguageStyles.LeadsDropdownboxOpen, marginTop: 16 }}>
                        <DropDown
                            data={DataofDropdown}
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

                    <View style={isFocusMarital ? { ...LanguageStyles.LeadsDropdownbox, marginTop: 16 } : { ...LanguageStyles.LeadsDropdownboxOpen, marginTop: 16 }}>
                        <DropDown
                            data={DataofDropdown}
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

                    <View style={isFocusAvailability ? { ...LanguageStyles.LeadsDropdownbox, marginTop: 16 } : { ...LanguageStyles.LeadsDropdownboxOpen, marginTop: 16 }}>
                        <DropDown
                            data={DataofDropdown}
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
                        options={K_OPTIONS}
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
                        inputprops={{ marginTop: 16, textAlign: 'left', textAlignVertical: 'top' }}
                        placeholder="Write your Biography..."
                        numberOfLines={5}
                        inputStyle={{ height: 300 }}
                    />


                    <TouchableOpacity style={{ width: '95%', alignItems: 'center', justifyContent: 'center', backgroundColor: Colors.theme_background_brink_pink, marginTop: 24, borderRadius: 4, paddingVertical: 10 }}>
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