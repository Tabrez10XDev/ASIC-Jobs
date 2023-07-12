import * as React from "react";
import { useState, useEffect, useRef } from "react";
import Input from "./Input";
import DatePicker from "react-native-date-picker";


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


export default AddEducation = ({ refRBSheet, setEducationList, id }) => {


    async function createEducation(){

        if(formattedDate === null || state.degree.trim() === "" || state.level.trim() === "" || state.notes.trim() === ""){
            return
        }

        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `https://asicjobs.in/api/webapi.php?api_action=update_user_education&user_id=${id}&level=%27${state.level}%27&degree=%27${state.degree}%27&year=${formattedDate.getFullYear()}&notes=%27${encodeURIComponent(state.notes)}%27`,
          };
          
          axios.request(config)
          .then((response) => {
            refRBSheet.current.close()
            setEducationList((current)=>[...current, {
                id: response.data.id ?? (Math.random() + 1).toString(36).substring(2),
                level: state.level,
                degree: state.degree,
                notes: state.notes,
                year: formattedDate.getFullYear()
            } ])
          })
          .catch((error) => {
            console.log(error.response.data);
            console.log(`https://asicjobs.in/api/webapi.php?api_action=update_user_education&user_id=${id}&level=%27${state.level}%27&degree=%27${state.degree}%27&year=${formattedDate.getFullYear()}&notes=%27${encodeURIComponent(state.notes)}%27`)
          });
    }


    const [formattedDate, setFormattedDate] = useState(null)
    const [date, setDate] = useState(new Date())

    const [open, setOpen] = useState(false)
    const [state,setState] = useState({
        level: "",
        degree: "",
        notes: ""
    })  




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
                    Add Education
                </Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>

                <View style={{
                    flexDirection: 'column', marginTop: 0, width: '100%', paddingHorizontal: 16, paddingBottom: 12
                }}>


                    <Input
                        value={state.level}
                        onChangeText={(text)=>setState({...state, level: text})}
                        inputStyle={{ marginTop: 16 }}
                        placeholder="Education Level" />

                    <Input
                        value={state.degree}
                        onChangeText={(text)=>setState({...state, degree: text})}
                        inputStyle={{ marginTop: 16 }}
                        placeholder="Degree" />


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
                        {formattedDate == null ? <Text style={{ fontWeight: '500' }}>Year</Text>
                            :
                            <Text style={{ fontWeight: '500' }}>{formattedDate.getDate()}/{formattedDate.getMonth()}/{formattedDate.getFullYear()}</Text>
                        }
                    </TouchableOpacity>



                    <Input
                        value={state.notes}
                        onChangeText={(text)=>setState({...state, notes: text})}
                        inputprops={{ marginTop: 16, textAlign: 'left', textAlignVertical: 'top' }}
                        placeholder="Notes"
                        numberOfLines={5}
                        inputStyle={{ height: 300 }}
                    />

                    <TouchableOpacity 
                    onPress={()=>createEducation()}
                    style={{ width: '95%', alignItems: 'center', justifyContent: 'center', backgroundColor: "#2290E3", marginTop: 24, borderRadius: 4, paddingVertical: 10, alignSelf:'center' }}>
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

           

        </RBSheet>

    )
}
