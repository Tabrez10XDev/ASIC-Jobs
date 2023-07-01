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

const BasicInformation = ({route}) => {

  const data = route.params
  const { Colors } = useTheme();
  const [formattedDate, setFormattedDate] = data.candidates_details.birth_date == "" ? useState(null) : useState(new Date(data.candidates_details.birth_date.substring(0,10)))

  const [date, setDate] = data.candidates_details.birth_date == "" ? useState(new Date()) : useState(new Date(data.candidates_details.birth_date.substring(0,10)))
  const [open, setOpen] = useState(false)


  const [isFocusExperience, setIsFocusExperience] = useState(false);
  const [isFocusEducation, setIsFocusEducation] = useState(false);
  const [experience, setExperience] = useState("")
  const [education, setEducation] = useState("")
  const ProfileTabStyle = useMemo(() => ProfileTabStyles(Colors), [Colors]);
  const ResumeStyle = useMemo(() => ResumeStyles(Colors), [Colors]);

  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState('Successfully Added Documents');

  const ExperienceData = [
    { label: 'Fresher', value: 'Fresher' },
    { label: '1 Year', value: '1 Year' },
    { label: '2 Year', value: '2 Year' },
    { label: '3+ Years', value: '3+ Years' },
    { label: '5+ Years', value: '5+ Years' },
    { label: '8+ Years', value: '8+ Years' },
    { label: '10+ Years', value: '10+ Years' },
    { label: '15+ Years', value: '15+ Years' },
  ]

  const [state, setState] = useState({
    name: data.candidates_details.name,
    tagline: data.candidates_details.tagline,
    website: data.candidates_details.website
  })

  const EducationData = [
    { label: 'High School', value: 'High School' },
    { label: 'Intermediate', value: 'Intermediate' },
    { label: 'Bachelor Degree', value: 'Bachelor Degree' },
    { label: 'Master Degree', value: 'Master Degree' },
    { label: 'Graduated', value: 'Graduated' },
    { label: 'PhD', value: 'PhD' },
    { label: 'Any', value: 'Any' },


  ]
  const img = "https://asicjobs.in/" + data.user_details.image

  useEffect(()=>{
    setExperience(data.candidates_details.experience_level)
    setEducation(data.candidates_details.educational_level)
  },[])

  return (
    <ScrollView>
      <View style={{ backgroundColor: 'white', height: '100%' }}>
        <View style={ProfileTabStyle.ImagCenter}>
          <View>
            <Image style={ProfileTabStyle.ImageStyles} resizeMode='cover' source={{uri: img}} />
            <Text style={ProfileTabStyle.UserName}>{data.user_details.name}</Text>
          </View>
        </View>
        <View style={{ width: '95%', alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}>
          <Input
            value={state.name}
            onChange={(text)=>setState(...state, {name: text})}
            inputprops={{ marginTop: 16 }}
            placeholder="Full Name"
          />

          <Input
            inputprops={{ marginTop: 16 }}
            placeholder="Professional Tagline"
            value={state.tagline}
            onChange={(text)=>setState(...state, {tagline: text})}
          />

          <View style={isFocusExperience ? { ...LanguageStyles.LeadsDropdownbox, marginTop: 16 } : { ...LanguageStyles.LeadsDropdownboxOpen, marginTop: 16 }}>

            <DropDown
              data={ExperienceData}
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

          <View style={isFocusEducation ? { ...LanguageStyles.LeadsDropdownbox, marginTop: 16 } : { ...LanguageStyles.LeadsDropdownboxOpen, marginTop: 16 }}>

            <DropDown
              data={EducationData}
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

          <Input
            inputprops={{ marginTop: 16 }}
            placeholder="Personal Website"
            value={state.website}
            onChange={(text)=>setState(...state, {website: text})}
          />




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
            {formattedDate == "" || formattedDate == null ? <Text style={{ fontWeight: '500' }}>Date of Birth</Text>
              :
              <Text style={{ fontWeight: '500' }}>{formattedDate.getDate()}/{formattedDate.getMonth()}/{formattedDate.getFullYear()}</Text>
            }
          </TouchableOpacity>

          <TouchableOpacity style={{ width: '95%', alignItems: 'center', justifyContent: 'center', backgroundColor: Colors.theme_background_brink_pink, marginTop: 24, borderRadius: 4, paddingVertical: 10 }}>
            <Text style={{ fontSize: 16, color: 'white' }}>
              Save Changes
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{ ...ResumeStyle.BorderView, marginTop: 24, width: '95%', alignSelf: 'center', marginBottom: 12 }}>
          <Text style={ResumeStyle.ParegraphTextStyle}>Upload your Cv or Resume</Text>
          <DocumentPicker UploadViewdoqumnet={true} />
          <Button onPress={() => {
            setAlertVisible(true);
            // Setokbutton(2);
          }} buttonStyle={ResumeStyle.buttonStyle} title="Apply" />
        </View>

        <ConfirmationAlert
          message={alertMessage}
          modalVisible={alertVisible}
          setModalVisible={setAlertVisible}
          onPress={() => { setAlertVisible(!alertVisible) }}
          buttonminview={Style.buttonotp}
          iconVisible={true}
          buttonText="Ok"
        />

        <DatePicker
          modal
          open={open}
          date={date}
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

      </View>
    </ScrollView>
  )
}

export default BasicInformation;