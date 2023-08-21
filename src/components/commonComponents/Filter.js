import * as React from "react";
import { useState, useEffect, useRef } from "react";
import Input from "./Input";
import { RangeSlider } from "@sharcoux/slider";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { DropDown } from "../../components";


import {
    Text,
    View,
    Image,
    Dimensions,
    Pressable,
    TouchableOpacity,
    StyleSheet,
    TextInput

} from "react-native";
import axios from "axios";

import RBSheet from "react-native-raw-bottom-sheet";
import { ScrollView } from "react-native-gesture-handler";
import { LanguageStyles, ResumeStyles } from '../../styles';


export default FilterBottomSheet = ({ refRBSheet, setJobs, sliderValue, setSliderValue, filterTypes, setFilterTypes, category, setCategory }) => {


    const [categories, setAllCategories] = useState([{name: "All"}])
    // const [category, setCategory] = useState("All")

    const [isFocusExperience, setIsFocusExperience] = useState(false);


    async function fetchAllCategories() {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'https://asicjobs.in/api/webapi.php?api_action=fetch_all_categories',
        };

        axios.request(config)
            .then((response) => {

                console.log("COME HERE");
                console.log(response.data);
                var arr = [{name: "All"}]
                arr.concat(response.data.categories_list)
                console.log(arr)
                setAllCategories([...[{name: "All"}], ...response.data.categories_list])
            })
            .catch((error) => {
                console.log(error);
            });

    }


    useEffect(() => {
        fetchAllCategories()
    }, []);



    return (


        <RBSheet
            ref={refRBSheet}
            height={Dimensions.get("window").height * 0.90}
            openDuration={5}
            closeOnDragDown={true}
            customStyles={{
                wrapper: {
                    backgroundColor: 'rgba(0, 0, 0, 0.5)'
                },
                container: {
                    borderTopStartRadius: 20,
                    borderTopEndRadius: 20,
                    backgroundColor: 'white',
                }
            }}
        >

            <View style={{
                width: '100%',
                height: 64,
                backgroundColor: 'white',
                alignItems: 'center',
                justifyContent: 'flex-start',
                flexDirection: 'row',
                paddingHorizontal: 16,
                borderTopStartRadius: 20,
                borderTopEndRadius: 20

            }}>


                <Text
                    style={{
                        textAlign: 'center',
                        alignSelf: 'center',
                        fontSize: 20,
                        color: 'black',
                    }}
                >
                    Filters
                </Text>

            </View>
            <View style={{ width: '95%', borderWidth: 1, borderStyle: 'dashed', height: 1, alignSelf: 'center' }} />

            {/* <ScrollView showsVerticalScrollIndicator={false}> */}

            <ScrollView style={{
                flexDirection: 'column', marginTop: 0, width: '100%', paddingHorizontal: 16, paddingBottom: 12
            }}  >

                <Text
                    style={{
                        textAlign: 'center',
                        alignSelf: 'center',
                        fontSize: 16,
                        fontWeight: '600',
                        color: 'black',
                        marginTop: 24,
                        textAlign: 'left',
                        alignSelf: 'flex-start'
                    }}
                >
                    Salary Range
                </Text>

                <View style={{ width: "92%", height: 48, alignSelf: 'center' }}>

                    <RangeSlider
                        range={sliderValue}
                        maximumValue={500000}
                        step={1}
                        crossingAllowed={false}
                        outboundColor='#f8f8f8'
                        inboundColor='grey'               // The track color inside the current range value
                        thumbTintColor='#2290E3'         // The color of the slider's thumb
                        thumbStyle={undefined}            // Override the thumb's style
                        trackStyle={undefined}            // Override the tracks' style
                        minTrackStyle={undefined}         // Override the tracks' style for the minimum range
                        midTrackStyle={undefined}         // Override the tracks' style for the middle range
                        maxTrackStyle={undefined}
                        vertical={false}
                        inverted={false}
                        enabled={true}
                        trackHeight={4}
                        thumbSize={24}
                        thumbImage={undefined}
                        slideOnTap={true}
                        onValueChange={(min, max) => {
                            setSliderValue(min, max)
                        }}
                        onSlidingStart={undefined}
                        onSlidingComplete={(min, max) => {
                            // console.log(min)
                            // console.log(max)
                            // console.log("--")
                        }}     // Called when the press is released. The type is (range: [number, number]) => void
                    />
                </View>


                <View style={{ width: "95%", flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'center' }}>

                    <Text
                        style={{
                            textAlign: 'center',
                            alignSelf: 'center',
                            fontSize: 14,
                            marginTop: 8,
                            textAlign: 'left',
                            alignSelf: 'flex-start'
                        }}
                    >
                        ₹{sliderValue[0]}
                    </Text>


                    <Text
                        style={{
                            textAlign: 'center',
                            alignSelf: 'center',
                            fontSize: 14,
                            marginTop: 8,
                            textAlign: 'left',
                            alignSelf: 'flex-start'
                        }}
                    >
                        ₹{sliderValue[1]}
                    </Text>

                </View>


                <Text
                    style={{
                        textAlign: 'center',
                        alignSelf: 'center',
                        fontSize: 16,
                        fontWeight: '600',
                        color: 'black',
                        marginTop: 24,
                        textAlign: 'left',
                        alignSelf: 'flex-start'
                    }}
                >
                    Job Types
                </Text>

                <View style={{ width: "95%", flexDirection: 'row', alignItems: 'center', marginTop: 12, justifyContent: 'flex-start' }}>
                    <BouncyCheckbox
                        size={25}
                        isChecked={filterTypes['Full Time']}
                        fillColor={"#2290E3"}
                        unfillColor={'white'}
                        iconStyle={{ borderColor: 'black' }}
                        innerIconStyle={{ borderWidth: 2 }}
                        onPress={(isChecked) => {
                            setFilterTypes(current => ({ ...current, 'Full Time': isChecked }))
                            // setChecked(text)
                        }}
                    />

                    <Text
                        style={{
                            textAlign: 'center',
                            alignSelf: 'center',
                            fontSize: 14,
                            color: 'black',
                            marginStart: 0,
                        }}
                    >
                        Full Time
                    </Text>
                </View>


                <View style={{ width: "95%", flexDirection: 'row', alignItems: 'center', marginTop: 12, justifyContent: 'flex-start' }}>
                    <BouncyCheckbox
                        size={25}
                        isChecked={filterTypes['Part Time']}
                        fillColor={"#2290E3"}
                        unfillColor={'white'}
                        iconStyle={{ borderColor: 'black' }}
                        innerIconStyle={{ borderWidth: 2 }}
                        onPress={(isChecked) => {
                            setFilterTypes(current => ({ ...current, 'Part Time': isChecked }))
                        }}
                    />

                    <Text
                        style={{
                            textAlign: 'center',
                            alignSelf: 'center',
                            fontSize: 14,
                            color: 'black',
                            marginStart: 0,
                        }}
                    >
                        Part Time
                    </Text>
                </View>


                <View style={{ width: "95%", flexDirection: 'row', alignItems: 'center', marginTop: 12, justifyContent: 'flex-start' }}>
                    <BouncyCheckbox
                        size={25}
                        isChecked={filterTypes['Contractual']}
                        fillColor={"#2290E3"}
                        unfillColor={'white'}
                        iconStyle={{ borderColor: 'black' }}
                        innerIconStyle={{ borderWidth: 2 }}
                        onPress={(isChecked) => {
                            setFilterTypes(current => ({ ...current, 'Contractual': isChecked }))
                        }}
                    />

                    <Text
                        style={{
                            textAlign: 'center',
                            alignSelf: 'center',
                            fontSize: 14,
                            color: 'black',
                            marginStart: 0,
                        }}
                    >
                        Contractual
                    </Text>
                </View>


                <View style={{ width: "95%", flexDirection: 'row', alignItems: 'center', marginTop: 12, justifyContent: 'flex-start' }}>
                    <BouncyCheckbox
                        size={25}
                        isChecked={filterTypes['Intern']}
                        fillColor={"#2290E3"}
                        unfillColor={'white'}
                        iconStyle={{ borderColor: 'black' }}
                        innerIconStyle={{ borderWidth: 2 }}
                        onPress={(isChecked) => {
                            setFilterTypes(current => ({ ...current, 'Intern': isChecked }))
                        }}
                    />

                    <Text
                        style={{
                            textAlign: 'center',
                            alignSelf: 'center',
                            fontSize: 14,
                            color: 'black',
                            marginStart: 0,
                        }}
                    >
                        Intern
                    </Text>
                </View>


                <View style={{ width: "95%", flexDirection: 'row', alignItems: 'center', marginTop: 12, justifyContent: 'flex-start' }}>
                    <BouncyCheckbox
                        size={25}
                        isChecked={filterTypes['Freelance']}
                        fillColor={"#2290E3"}
                        unfillColor={'white'}
                        iconStyle={{ borderColor: 'black' }}
                        innerIconStyle={{ borderWidth: 2 }}
                        onPress={(isChecked) => {
                            setFilterTypes(current => ({ ...current, 'Freelance': isChecked }))
                        }}
                    />

                    <Text
                        style={{
                            textAlign: 'center',
                            alignSelf: 'center',
                            fontSize: 14,
                            color: 'black',
                            marginStart: 0,
                        }}
                    >
                        Freelance
                    </Text>
                </View>


                <Text
                    style={{
                        textAlign: 'center',
                        alignSelf: 'center',
                        fontSize: 16,
                        fontWeight: '600',
                        color: 'black',
                        marginTop: 24,
                        textAlign: 'left',
                        alignSelf: 'flex-start'
                    }}
                >
                    Categories
                </Text>

                <View style={isFocusExperience ? { ...LanguageStyles.LeadsDropdownbox, marginTop: 16, alignSelf:'center' } : { ...LanguageStyles.LeadsDropdownboxOpen, marginTop: 16, alignSelf:'center' }}>

                    <DropDown
                        data={categories}
                        dropdownStyle={LanguageStyles.LeadDropdown}
                        value={category}
                        onChange={item => {
                            setCategory(item.name)
                        }}
                        width={Dimensions.get('window').width * 0.90}
                        search
                        dropdownPosition={'top'}
                        searchPlaceholder="Search bar"
                        placeholder="Select a category"
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
                {/* 
                <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
                    <View style={{ height: 40, width: 90, backgroundColor: 'blue', borderRadius: 4, marginHorizontal: 0 }}>

                    </View>

                    <View style={{ height: 40, width: 90, backgroundColor: 'blue', borderRadius: 4, marginHorizontal: 10 }}>

                    </View>

                    <View style={{ height: 40, width: 90, backgroundColor: 'blue', borderRadius: 4, marginHorizontal: 10 }}>

                    </View>

                    <View style={{ height: 40, width: 90, backgroundColor: 'blue', borderRadius: 4, marginHorizontal: 10 }}>

                    </View>

                    <View style={{ height: 40, width: 90, backgroundColor: 'blue', borderRadius: 4, marginHorizontal: 10 }}>

                    </View>

                    <View style={{ height: 40, width: 90, backgroundColor: 'blue', borderRadius: 4, marginHorizontal: 10 }}>

                    </View>

                    <View style={{ height: 40, width: 90, backgroundColor: 'blue', borderRadius: 4, marginHorizontal: 10 }}>

                    </View>
                </View> */}

            </ScrollView>

            {/* </ScrollView> */}



        </RBSheet>

    )
}
