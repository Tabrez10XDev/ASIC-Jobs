import * as React from "react";
import { useState, useEffect, useRef } from "react";
import Input from "./Input";
import IconF from 'react-native-vector-icons/Entypo';



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
import { Dropdown } from 'react-native-element-dropdown';


export const AddMedia = ({ refRBSheet, setMediaList, id }) => {


    async function createMedia(){

        if(state.media.trim() === "" || state.url.trim() === ""){
            return
        }

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: `https://asicjobs.in/api/webapi.php?api_action=social_links_add&user_id=${id}&social_media=${state.media}&url=${state.url}`,
          };

          axios.request(config)
          .then((response) => {
            refRBSheet.current.close()
            setMediaList((current)=>[...current, {
                id: response.data.id,
                url: state.url,
                social_media: state.media,
            } ])
          })
          .catch((error) => {
            console.log(error.response.data);
          });
    }



    const [state, setState] = useState({
        media: "",
        url: "",
    })


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



    return (


        <RBSheet
            ref={refRBSheet}
            height={Dimensions.get("window").height * 0.50}
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
                        value={state.media}
                        onChange={item => {
                            setState(current => ({ ...current, media: item.value }))
                        }}
                        itemTextStyle={{ color: '#000' }}
                    />

                    <Input
                        value={state.url}
                        onChangeText={(text) => setState({ ...state, url: text })}
                        inputStyle={{ marginTop: 16 }}
                        placeholder="Media Link" />




                    <TouchableOpacity
                        onPress={() => createMedia()}
                        style={{ width: '95%', alignItems: 'center', justifyContent: 'center', backgroundColor: "#2290E3", marginTop: 24, borderRadius: 4, paddingVertical: 10, alignSelf: 'center' }}>
                        <Text style={{ fontSize: 16, color: 'white' }}>
                            Save Changes
                        </Text>
                    </TouchableOpacity>


                </View>

            </ScrollView>





        </RBSheet>

    )
}
