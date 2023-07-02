import React, { useState, useEffect, useMemo } from "react";
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
import { Dropdown } from 'react-native-element-dropdown';
import IconF from 'react-native-vector-icons/Entypo';

import Icon from 'react-native-vector-icons/AntDesign';



const SocialMedia = ({ route }) => {



    const _mediaData = [
        { label: 'twitter', value: 'twitter' },
        { label: 'facebook', value: 'facebook' },
        { label: 'instagram', value: 'instagram' },
        { label: 'youtube', value: 'youtube' },
        { label: 'linkedin', value: 'linkedin' },
        { label: 'pinterest', value: 'pinterest' },
        { label: 'reddit', value: 'reddit' },
        { label: 'github', value: 'github' },
        { label: 'others', value: 'others' },


    ];




    const { Colors } = useTheme();
    const [formattedDate, setFormattedDate] = useState(null)
    const [date, setDate] = useState(new Date())

    const [mediaList, setMediaList] = useState(route.params.social_links)
    const [value, setValue] = useState()

 

    const SocialMediaView = (_item, index) => {
        const item = _item.item
        return (
            <View style={{ alignItems: 'center', justifyContent: 'center', paddingHorizontal: 4, borderWidth: 2, borderColor: '#dbebc4', borderRadius: 16, paddingVertical: 8, width: '95%', marginVertical: 12 }}>

                <View style={{ width: '95%' }}>

                    <Dropdown
                        placeholderStyle={{ fontSize: 12 }}
                        style={{}}
                        data={_mediaData}
                        searchPlaceholder="Search"
                        renderRightIcon={() => (
                            <IconF
                                color="black"
                                name="chevron-down"
                                size={20}
                            />
                        )}
                        labelField="label"
                        valueField="value"
                        placeholder="Select"
                        value={item.social_media}
                        onChange={item => {
                            setValue(item.value);
                        }}
                        itemTextStyle={{ color: '#000' }}
                    />
                </View>
              
                <View style={{ width: '95%', alignItems: 'center', justifyContent: 'center' }}>
                    <TextInput
                    editable={item.new ? true : false}
                        placeholder="Link"
                        onChangeText={(value) => {
                            setSearch(value)
                            let currentVal = item
                            const currentList = mediaList
                            currentVal["url"] = value
                            currentList[index] = currentVal

                            // setMediaList(currentList)
                        }}
                        value={item.url}

                        inputprops={{ borderWidth: 0, borderColor: 0 }}
                        style={{ width: '100%', borderWidth: 0, borderColor: 'white' }}
                    />

                </View>


                <TouchableOpacity onPress={()=>{
                    setMediaList(current=>current.filter((ele)=>ele.id != item.id))
                }} style={{ width: '95%', alignItems: 'center', justifyContent: 'center', backgroundColor: Colors.theme_background_brink_pink, marginTop: 6, borderRadius: 4, paddingVertical: 10 }}>
                    <Text style={{ fontSize: 16, color: 'white' }}>
                        Delete
                    </Text>
                </TouchableOpacity>

            </View>
        )
    }

    const [search, setSearch] = useState("")

    return (
        <ScrollView contentContainerStyle={{ backgroundColor: 'white' }} showsVerticalScrollIndicator={false}>
            <View style={{ backgroundColor: 'white', height: Dimensions.get('window').height * 1, alignItems: 'center' }}>
                {
                    mediaList.map((ele, index) => {
                        return (
                            <SocialMediaView item={ele} index={index} />
                        )
                    })
                }


                <TouchableOpacity
                    onPress={() => {
                        setMediaList(prevState => [...prevState, {id: (Math.random() + 1).toString(36).substring(7).toString(), new: true}])
                    }}
                    style={{ width: '80%', alignItems: 'center', justifyContent: 'center', borderColor: Colors.theme_background_brink_pink, marginTop: 24, borderRadius: 8, paddingVertical: 10, borderWidth: 1, borderStyle: 'dashed' }}>
                    <Text style={{ fontSize: 16, color: Colors.theme_background_brink_pink }}>
                        Add Experience
                    </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default SocialMedia;