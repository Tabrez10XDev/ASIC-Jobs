import * as React from "react";
import { useState, useEffect, useRef } from "react";
import Input from "./Input";
import DatePicker from "react-native-date-picker";
import axios from "axios";

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


export default AddExperience = ({ refRBSheet, setExperienceList, id }) => {


    const [formattedDate, setFormattedDate] = useState(null)
    const [date, setDate] = useState(new Date())

    const [open, setOpen] = useState(false)

    const [formattedDate2, setFormattedDate2] = useState(null)
    const [date2, setDate2] = useState(new Date())
    const [open2, setOpen2] = useState(false)
    const [state, setState] = useState({
        company: "",
        dept: "",
        designation: "",
        responsibilities: ""
    })



    async function createExperience(){

        if(formattedDate === null || state.company.trim() === "" || state.dept.trim() === "" || state.designation.trim() === ""){
            return
        }

        const start = formattedDate.getDate() + "/" + formattedDate.getMonth() + "/" + formattedDate.getFullYear()
        const end = formattedDate2.getDate() + "/" + formattedDate2.getMonth() + "/" + formattedDate2.getFullYear()

        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `https://asicjobs.in/api/webapi.php?api_action=update_user_experience&user_id=${id}&company=%27${encodeURIComponent(state.company)}%27&department=%27${encodeURIComponent(state.dept)}%27&designation=%27${encodeURIComponent(state.designation)}%27&start=%27${start}%27&end=%27${end}%27&responsibilities=%27${encodeURIComponent(state.responsibilities)}%27&currently_working=1`,
          };

          axios.request(config)
          .then((response) => {
            refRBSheet.current.close()
            setExperienceList((current)=>[...current, {
                id: response.data.id ?? (Math.random() + 1).toString(36).substring(2),
                company: state.company,
                department: state.dept,
                designation: state.designation,
                currently_working: "Yes"
            } ])
          })
          .catch((error) => {
            console.log(error.response.data);
          });
    }


    return (


        <RBSheet
            ref={refRBSheet}
            height={Dimensions.get("window").height * 0.70}
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
                        fontSize: 16,
                        color: 'black',
                    }}
                >
                    Add Experience
                </Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>

                <View style={{
                    flexDirection: 'column', marginTop: 0, width: '100%', paddingHorizontal: 16, paddingBottom: 12
                }}>


                    <Input
                        value={state.company}
                        onChangeText={(text) => setState({ ...state, company: text })}
                        inputStyle={{ marginTop: 16 }}
                        placeholder="Company" />

                    <Input
                        value={state.dept}
                        onChangeText={(text) => setState({ ...state, dept: text })}
                        inputStyle={{ marginTop: 16 }}
                        placeholder="Department" />

                    <Input
                        value={state.designation}
                        onChangeText={(text) => setState({ ...state, designation: text })}
                        inputStyle={{ marginTop: 16 }}
                        placeholder="Designation" />

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
                            color: "#737272",
                            shadowOpacity: 0.58,
                            shadowRadius: Platform.OS === 'ios' ? 2 : 25,
                            elevation: Platform.OS === 'ios' ? 1 : 2,
                        }}>
                        {formattedDate == null ? <Text style={{ fontWeight: '500' }}>Start Date</Text>
                            :
                            <Text style={{ fontWeight: '500' }}>{formattedDate.getDate()}/{formattedDate.getMonth()}/{formattedDate.getFullYear()}</Text>
                        }
                    </TouchableOpacity>


                    <TouchableOpacity
                        onPress={() => setOpen2(true)}
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
                            color: "#737272",
                            shadowOpacity: 0.58,
                            shadowRadius: Platform.OS === 'ios' ? 2 : 25,
                            elevation: Platform.OS === 'ios' ? 1 : 2,
                        }}>
                        {formattedDate2 == null ? <Text style={{ fontWeight: '500' }}>End Date</Text>
                            :
                            <Text style={{ fontWeight: '500' }}>{formattedDate2.getDate()}/{formattedDate2.getMonth()}/{formattedDate2.getFullYear()}</Text>
                        }
                    </TouchableOpacity>

                    <Input
                        value={state.responsibilities}
                        onChangeText={(text) => setState({ ...state, responsibilities: text })}
                        inputprops={{ marginTop: 16, textAlign: 'left', textAlignVertical: 'top' }}
                        placeholder="Responsibilities"
                        numberOfLines={5}
                        inputStyle={{ height: 300 }}
                    />

                    <TouchableOpacity 
                    onPress={()=>createExperience()}
                    style={{ width: '95%', alignItems: 'center', justifyContent: 'center', backgroundColor: "#2290E3", marginTop: 24, borderRadius: 4, paddingVertical: 10, alignSelf: 'center' }}>
                        <Text style={{ fontSize: 16, color: 'white' }}>
                            Save Changes
                        </Text>
                    </TouchableOpacity>


                </View>

            </ScrollView>

            <DatePicker
                modal
                open={open}
                date={date}
                onConfirm={(date) => {
                    setOpen(false)
                    setDate(date)
                    setFormattedDate(date)
                }}
                onCancel={() => {
                    setOpen(false)
                }}
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

            <DatePicker
                modal
                open={open2}
                date={date2}
                mode="date"
                onConfirm={(date) => {
                    setOpen2(false)
                    setDate2(date)
                    setFormattedDate2(date)
                }}
                onCancel={() => {
                    setOpen2(false)
                }}
            />

        </RBSheet>

    )
}
