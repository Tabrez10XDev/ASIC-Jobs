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



const SocialMedia = () => {

    const data = [
        { label: 'Item 1', value: '1' },
        { label: 'Item 2', value: '2' },
        { label: 'Item 3', value: '3' },
        { label: 'Item 4', value: '4' },
        { label: 'Item 5', value: '5' },
        { label: 'Item 6', value: '6' },
        { label: 'Item 7', value: '7' },
        { label: 'Item 8', value: '8' },
    ];



    const { Colors } = useTheme();
    const [formattedDate, setFormattedDate] = useState(null)
    const [date, setDate] = useState(new Date())

    const [mediaList, setMediaList] = useState([""])
    const [value, setValue] = useState()

    const DataofDropdown = [
        { label: 'English', value: 'en' },
        { label: 'Arabic', value: 'ara' },
        { label: 'Spanish', value: 'Spa' },
        { label: 'French', value: 'Fr' },
    ];

    const SocialMediaView = (item) => {
        return (
            <View style={{ alignItems: 'center', justifyContent: 'center', paddingHorizontal: 4, borderWidth: 2, borderColor: '#dbebc4', borderRadius: 16, paddingVertical: 8, width: '95%', marginVertical:12 }}>
                {/* <View style={{width:'95%', alignItems:'center', justifyContent:'center'}}>
                                        <TextInput
                                            placeholder="Job Title, Keyword"
                                            onChangeText={(value) => setSearch(value)}
                                            value={search}
                                            maxLength={10}
                                            inputprops={{borderWidth:0, borderColor:0}}
                                            style={{width:'100%', borderWidth:0, borderColor:'white'}}
                                        />
                                         <View style={{...HomeStyle.IconStyles, position:'absolute', right: 0, alignSelf:'center'}}>
                                        <Icon name="search1" size={20} color={Colors.theme_background_brink_pink} />
                                    </View>
                                    </View> */}

                <View style={{ width: '95%' }}>

                    <Dropdown
                        placeholderStyle={{ fontSize: 12 }}
                        style={{}}
                        data={data}
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
                        value={value}
                        onChange={item => {
                            setValue(item.value);
                        }}
                        itemTextStyle={{ color: '#000' }}
                    />
                </View>

                <View style={{ width: '95%', alignItems: 'center', justifyContent: 'center' }}>
                    <TextInput
                        placeholder="Link"
                        onChangeText={(value) => setSearch(value)}
                        value={search}
                        maxLength={10}
                        inputprops={{ borderWidth: 0, borderColor: 0 }}
                        style={{ width: '100%', borderWidth: 0, borderColor: 'white' }}
                    />

                </View>
                <TouchableOpacity style={{ width: '95%', alignItems: 'center', justifyContent: 'center', backgroundColor: Colors.theme_background_brink_pink, marginTop: 6, borderRadius: 4, paddingVertical: 10 }}>
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
                mediaList.map((ele,index)=>{
                    return(
                        <SocialMediaView />
                    )
                })
            }


                <TouchableOpacity 
                onPress={()=>{
                    setMediaList(prevState => [...prevState, ""])
                }}
                style={{ width: '80%', alignItems: 'center', justifyContent: 'center', borderColor: Colors.theme_background_brink_pink, marginTop: 24, borderRadius: 8, paddingVertical: 10, borderWidth:1, borderStyle:'dashed' }}>
                    <Text style={{ fontSize: 16, color: Colors.theme_background_brink_pink }}>
                        Add Experience
                    </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default SocialMedia;