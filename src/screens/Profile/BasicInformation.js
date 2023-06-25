import React, { useState, useEffect, useMemo } from "react";
import { View, Text, TouchableOpacity, Image, TextInput, Modal } from "react-native";
import { ProfileTabStyles } from "../../styles";
import { useNavigation, useTheme } from '@react-navigation/native';
import images from "../../index";
import { Input, DropDown } from "../../components";
import { ScrollView } from "react-native";
import { SettingStyle, Style, LanguageStyles } from '../../styles';
import { Dimensions } from "react-native";

const BasicInformation = () => {

  const { Colors } = useTheme();
  const [isFocusExperience, setIsFocusExperience] = useState(false);
  const [isFocusEducation, setIsFocusEducation] = useState(false);
  const [experience, setExperience] = useState("")
  const [education, setEducation] = useState("")
  const ProfileTabStyle = useMemo(() => ProfileTabStyles(Colors), [Colors]);

  const DataofDropdown = [
    { label: 'English', value: 'en' },
    { label: 'Arabic', value: 'ara' },
    { label: 'Spanish', value: 'Spa' },
    { label: 'French', value: 'Fr' },
  ];

  return (
    <View style={{ backgroundColor: 'white', height: '100%' }}>
      <View style={ProfileTabStyle.ImagCenter}>
        <View>
          <Image style={ProfileTabStyle.ImageStyles} resizeMode='cover' source={images.logo} />
          <Text style={ProfileTabStyle.UserName}>Allison Jerry</Text>
        </View>
      </View>
      <View style={{ width: '95%', alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}>
        <Input
          inputprops={{ marginTop: 16 }}
          placeholder="Full Name"
        />
        <View style={isFocusExperience ? { ...LanguageStyles.LeadsDropdownbox, marginTop: 16 } : { ...LanguageStyles.LeadsDropdownboxOpen, marginTop: 16 }}>

          <DropDown
            data={DataofDropdown}
            dropdownStyle={LanguageStyles.LeadDropdown}
            value={experience}
            onChange={item => {
              setExperience(item.value)
            }}
            width={Dimensions.get('window').width * 0.95}
            search
            searchPlaceholder="Search bar"
            placeholder="Experience Level"
            selectedTextStyle={LanguageStyles.selectedTextStyleLead}
            IconStyle={LanguageStyles.IconStyle}
            onFocus={() => setIsFocusExperience(true)}
            onBlur={() => setIsFocusExperience(false)}
            labelField="label"
            valueField="value"
            renderLeftIcon={() => (
              <Icon color="black" name={isFocusExperience ? 'arrowup' : 'arrowdown'} size={SF(20)} />
            )}
          />
        </View>

        <Input
          inputprops={{ marginTop: 16 }}
          placeholder="Personal Website"
        />
        <Input
          inputprops={{ marginTop: 16 }}
          placeholder="Professional Tagline"
        />

        <View style={isFocusEducation ? { ...LanguageStyles.LeadsDropdownbox, marginTop: 16 } : { ...LanguageStyles.LeadsDropdownboxOpen, marginTop: 16 }}>

          <DropDown
            data={DataofDropdown}
            dropdownStyle={LanguageStyles.LeadDropdown}
            value={education}
            onChange={item => {
              setEducation(item.value)
            }}
            width={Dimensions.get('window').width * 0.95}
            search
            searchPlaceholder="Search bar"
            placeholder="Education Level"
            selectedTextStyle={LanguageStyles.selectedTextStyleLead}
            IconStyle={LanguageStyles.IconStyle}
            onFocus={() => setIsFocusEducation(true)}
            onBlur={() => setIsFocusEducation(false)}
            labelField="label"
            valueField="value"
            renderLeftIcon={() => (
              <Icon color="black" name={isFocusEducation ? 'arrowup' : 'arrowdown'} size={SF(20)} />
            )}
          />
        </View>
      </View>




    </View>
  )
}

export default BasicInformation;