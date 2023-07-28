import React, { useState, useEffect, useMemo } from "react";
import { View, Text, TouchableOpacity, Image, TextInput, Modal } from "react-native";
import { ProfileTabStyles } from "../../styles";
import { useNavigation, useTheme } from '@react-navigation/native';
import images from "../../index";
import { Input, DropDown, DocumentPicker, Button, ConfirmationAlert, Spacing, ImagePicker } from "../../components";
import { ScrollView } from "react-native";
import { SettingStyle, Style, LanguageStyles, ResumeStyles } from '../../styles';
import { Dimensions } from "react-native";
import DatePicker from 'react-native-date-picker'
import { Linking } from "react-native";
import IconG from 'react-native-vector-icons/Entypo';
import axios from "axios";
import Toast from 'react-native-toast-message';




const BasicInformation = ({ route }) => {


  const data = route.params.data
  const { Colors } = useTheme();
  const [formattedDate, setFormattedDate] = data.candidates_details.birth_date == "" ? useState(null) : useState(new Date(data.candidates_details.birth_date.substring(0, 10)))

  const [date, setDate] = data.candidates_details.birth_date == "" ? useState(new Date()) : useState(new Date(data.candidates_details.birth_date.substring(0, 10)))
  const [open, setOpen] = useState(false)


  const [isFocusExperience, setIsFocusExperience] = useState(false);
  const [isFocusEducation, setIsFocusEducation] = useState(false);
  const [experience, setExperience] = useState("")
  const [education, setEducation] = useState("")
  const ProfileTabStyle = useMemo(() => ProfileTabStyles(Colors), [Colors]);
  const ResumeStyle = useMemo(() => ResumeStyles(Colors), [Colors]);

  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState('Successfully Added Documents');

  const [response, setFileResponse] = useState([{}])
  const [response2, setFileResponse2] = useState([{ status: true }])



  const id = data.user_details.id

  async function getUserData() {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: `https://asicjobs.in/api/webapi.php?api_action=userdetails&id=${id}`,
      headers: {}
    };

    axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data))
        setState({ ...state, resumes: response.data.candidate_resumes })
      })
      .catch((error) => {
        console.log(error);
      });

  }


  const [state, setState] = useState({
    name: data.user_details.name,
    tagline: data.candidates_details.tagline,
    website: data.candidates_details.website,
    resumes: data.candidate_resumes
  })

  async function deleteResume(resume_id) {
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: `https://asicjobs.in/api/webapi.php?api_action=candidate_resume_delete&user_id=${id}&resume_id=${resume_id}`,
      headers: {}
    };

    axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        const newResumes = state.resumes.filter((ele) => ele.id !== resume_id);

        setState({ ...state, resumes: newResumes })
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const ExperienceData = route.params.experience
  const EducationData = route.params.education
  // setExperience(data.candidates_details.experience_level)
  // setEducation(data.candidates_details.educational_level)


  console.log(route.params.experience)




  const [img, setImage] = useState(data.user_details.image ?? "")

  async function uploadResume(type, filename, docUri) {
    let data = new FormData();
    const _fileName = docUri.split('/').pop();

    data.append('resume_file', { type: type, uri: docUri, name: _fileName });
    data.append('user_id', id);
    data.append('name', filename);

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      headers: { "Content-Type": "multipart/form-data" },
      url: 'https://asicjobs.in/api/webapi.php?api_action=candidate_resume_add',
      data: data
    };

    axios.request(config)
      .then((response) => {
        // console.log(JSON.stringify(response.data));
        if (response.data.status == true) {
          getUserData()
          setAlertVisible(true);
        }

      })
      .catch((error) => {
        console.log(error);
      });
  }

  async function uploadProfile(type, filename, docUri) {
    let data = new FormData();
    const _fileName = docUri.split('/').pop();

    data.append('profile_image', { type: type, uri: docUri, name: _fileName });
    data.append('user_id', id);

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      headers: { "Content-Type": "multipart/form-data" },
      url: 'https://asicjobs.in/api/webapi.php?api_action=upload_profile_pic',
      data: data
    };

    axios.request(config)
      .then((response) => {
        // updateProfile()
        console.log(response.data)
      })
      .catch((error) => {
        Toast.show({
          type: 'error',
          text1: "Profile picture upload failed"
      });
        console.log(error);
      });
  }

  async function updateProfile() {
    const _exp = ExperienceData.filter((ele) => ele.name === experience)[0].id
    const _edu = EducationData.filter((ele) => ele.value === education)[0].label
    const date =  `${formattedDate.getFullYear()}-${formattedDate.getMonth()}-${formattedDate.getDate()}`
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: `https://asicjobs.in/api/webapi.php?api_action=update_users_basic&name=${state.name}&title=${state.tagline}&experience=${_exp}&education=${_edu}&website=${state.website}&birth_date=${date}&user_id=${id}`,
    };

    console.log(`https://asicjobs.in/api/webapi.php?api_action=update_users_basic&name=${state.name}&title=${state.tagline}&experience=${_exp}&education=${_edu}&website=${state.website}&birth_date=${date}&user_id=${id}`)

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


  useEffect(() => {
    setExperience(data.candidates_details.experience_level)
    setEducation(data.candidates_details.educational_level)
  }, [])

  return (
    <ScrollView>
      <View style={{ backgroundColor: 'white', height: '100%' }}>
        <View style={ProfileTabStyle.ImagCenter}>
          <View>
            <Image style={ProfileTabStyle.ImageStyles} resizeMode='cover' source={{ uri: img }} />
            <ImagePicker UploadViewdoqumnet={true} setImage={setImage} setFileResponse={setFileResponse2} />

            {/* <Text onPress={chooseFile} style={{...ProfileTabStyle.UserName, color:'blue'}}>Edit</Text> */}
            <Text style={ProfileTabStyle.UserName}>{data.user_details.name}</Text>
          </View>
        </View>
        <View style={{ width: '95%', alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}>
          <Input
            value={state.name}
            onChange={(text) => setState(...state, { name: text })}
            inputprops={{ marginTop: 16 }}
            placeholder="Full Name"
          />

          <Input
            inputprops={{ marginTop: 16 }}
            placeholder="Professional Tagline"
            value={state.tagline}
            onChange={(text) => setState(...state, { tagline: text })}
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
              labelField="name"
              valueField="name"
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
              labelField="value"
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
            onChange={(text) => setState(...state, { website: text })}
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




          <TouchableOpacity onPress={async () => {
            if (response2.status === undefined) {
              await uploadProfile(response2[0].type, response2[0].name, response2[0].uri)
            }
            updateProfile()
          }} style={{ width: '95%', alignItems: 'center', justifyContent: 'center', backgroundColor: Colors.theme_background_brink_pink, marginTop: 24, borderRadius: 4, paddingVertical: 10 }}>
            <Text style={{ fontSize: 16, color: 'white' }}>
              Save Changes
            </Text>
          </TouchableOpacity>
        </View>


        {
          state.resumes.map((ele, index) => {
            return (
              <View key={ele.id} style={{ ...ResumeStyle.BorderView, marginTop: 24, width: '95%', alignSelf: 'center', flexDirection: 'column', alignItems: 'center', flexDirection: 'row', height: 60, justifyContent: 'flex-start', padding: 16 }}>
                <Text style={{ fontWeight: '600', color: 'black' }}>{ele.name}</Text>
                <TouchableOpacity
                  onPress={() => {
                    Linking.openURL(ele.file);
                  }}
                  style={{ width: 25, height: 25, backgroundColor: Colors.alice_blue_color, alignItems: 'center', justifyContent: 'center', borderRadius: 4, position: 'absolute', right: 60 }}>
                  <IconG
                    size={18}
                    name="link"
                    style={{ color: Colors.theme_background_brink_pink }}
                  />
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => {
                    deleteResume(ele.id)
                  }}
                  style={{ width: 25, height: 25, backgroundColor: Colors.alice_blue_color, alignItems: 'center', justifyContent: 'center', borderRadius: 4, position: 'absolute', right: 16 }}>
                  <IconG
                    size={18}
                    name="trash"
                    style={{ color: 'red' }}
                  />
                </TouchableOpacity>

              </View>
            )
          })
        }

        {state.resumes.length <= 5 ? (
          <View style={{ ...ResumeStyle.BorderView, marginTop: 24, width: '95%', alignSelf: 'center', marginBottom: 12 }}>
            <Text style={ResumeStyle.ParegraphTextStyle}>Upload your Cv or Resume</Text>
            <DocumentPicker UploadViewdoqumnet={true} id={id} setFileResponse={setFileResponse} />
            <Button onPress={() => {
              console.log(response[0])
              uploadResume(response[0].type, response[0].name, response[0].uri,)

              // Setokbutton(2);
            }} buttonStyle={ResumeStyle.buttonStyle} title="Apply" />
          </View>) : null}

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
      <Toast
        position='bottom'
        bottomOffset={20}
      />
    </ScrollView>
  )
}

export default BasicInformation;