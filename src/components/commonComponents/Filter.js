import * as React from "react";
import { useState, useEffect, useRef } from "react";
import Input from "./Input";
import { RangeSlider } from "@sharcoux/slider";
import BouncyCheckbox from "react-native-bouncy-checkbox";


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

import RBSheet from "react-native-raw-bottom-sheet";
import { ScrollView } from "react-native-gesture-handler";


export default FilterBottomSheet = ({ refRBSheet, setExperienceList, id }) => {


    const [formattedDate, setFormattedDate] = useState(null)
    const [date, setDate] = useState(new Date())

    const [open, setOpen] = useState(false)


    const [sliderValue, setSliderValue] = useState([0, 100]);




    return (


        <RBSheet
            ref={refRBSheet}
            height={Dimensions.get("window").height * 0.60}
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

            <View style={{
                flexDirection: 'column', marginTop: 0, width: '100%', paddingHorizontal: 16, paddingBottom: 12
            }}>

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

                <View style={{ width: "95%", height: 48, alignSelf: 'center' }}>

                    <RangeSlider
                        range={sliderValue}
                        maximumValue={100}
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
                        onSlidingComplete={() => {
                            console.log(sliderValue)
                        }}     // Called when the press is released. The type is (range: [number, number]) => void
                    />
                </View>


                <View style={{ width: "95%", flexDirection: 'row', justifyContent: 'space-between', alignSelf:'center' }}>

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
                        isChecked={true}
                        fillColor={"#2290E3"}
                        unfillColor={'white'}
                        iconStyle={{ borderColor: 'black' }}
                        innerIconStyle={{ borderWidth: 2 }}
                        onPress={(isChecked) => {
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
                        isChecked={true}
                        fillColor={"#2290E3"}
                        unfillColor={'white'}
                        iconStyle={{ borderColor: 'black' }}
                        innerIconStyle={{ borderWidth: 2 }}
                        onPress={(isChecked) => {
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
                        Part Time
                    </Text>
                </View>


                <View style={{ width: "95%", flexDirection: 'row', alignItems: 'center', marginTop: 12, justifyContent: 'flex-start' }}>
                    <BouncyCheckbox
                        size={25}
                        isChecked={true}
                        fillColor={"#2290E3"}
                        unfillColor={'white'}
                        iconStyle={{ borderColor: 'black' }}
                        innerIconStyle={{ borderWidth: 2 }}
                        onPress={(isChecked) => {
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
                        Contractual
                    </Text>
                </View>


                <View style={{ width: "95%", flexDirection: 'row', alignItems: 'center', marginTop: 12, justifyContent: 'flex-start' }}>
                    <BouncyCheckbox
                        size={25}
                        isChecked={true}
                        fillColor={"#2290E3"}
                        unfillColor={'white'}
                        iconStyle={{ borderColor: 'black' }}
                        innerIconStyle={{ borderWidth: 2 }}
                        onPress={(isChecked) => {
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
                        Intern
                    </Text>
                </View>


                <View style={{ width: "95%", flexDirection: 'row', alignItems: 'center', marginTop: 12, justifyContent: 'flex-start' }}>
                    <BouncyCheckbox
                        size={25}
                        isChecked={true}
                        fillColor={"#2290E3"}
                        unfillColor={'white'}
                        iconStyle={{ borderColor: 'black' }}
                        innerIconStyle={{ borderWidth: 2 }}
                        onPress={(isChecked) => {
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
                        Freelance
                    </Text>
                </View>

            </View>

            {/* </ScrollView> */}



        </RBSheet>

    )
}
