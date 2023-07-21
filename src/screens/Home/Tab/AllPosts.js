import React, { useMemo, useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, FlatList, ScrollView } from 'react-native';
import { HomeTabStyles } from '../../../styles';
import { Spacing, Button, } from '../../../components';
import { SH } from '../../../utils';
import LinearGradient from 'react-native-linear-gradient';
import { useTranslation } from "react-i18next";
import { RouteName } from '../../../routes';
import { useTheme } from '@react-navigation/native';
import axios from 'axios';
import images from '../../../images';
import moment from 'moment/moment';


const AllPosts = (props) => {
    const { navigation } = props;
    const { t } = useTranslation();
    const { Colors } = useTheme();
    const HomeStyle = useMemo(() => HomeTabStyles(Colors), [Colors]);

    const [posts, setAllPosts] = useState([])

    
    async function fetchJobDetails(id) {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `https://asicjobs.in/api/webapi.php?api_action=job_details&job_id=${id}`,
        };

        axios.request(config)
            .then((response) => {
                if (response.data.job_details != null && response.data.job_details != undefined) {
                    navigation.navigate(RouteName.JOB_DETAILS_SCREEN, response.data.job_details)
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }



    async function fetchAllCategories() {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'https://asicjobs.in/api/webapi.php?api_action=all_posts',
          };
          
          axios.request(config)
          .then((response) => {
            setAllPosts(response.data.all_posts)
            console.log(JSON.stringify(response.data.all_posts));
          })
          .catch((error) => {
            console.log(error);
          });

    }

    useEffect(() => {
        navigation.addListener('focus', () => {
            fetchAllCategories()
        });
    }, [navigation]);

    function fetchBlogDetails(id) {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `https://asicjobs.in/api/webapi.php?api_action=blog_details&id=${id}`,
        };

        axios.request(config)
            .then((response) => {
                navigation.navigate(RouteName.BLOG_DETAILS, response.data.blog_data)
            })
            .catch((error) => {
                console.log(error);
            });
    }


    const LatestPostDataView = (item, index) => {
        const img = item.image
        return (
            <TouchableOpacity style={{ backgroundColor: Colors.alice_blue_color, paddingHorizontal: 0, paddingTop: 0, marginTop:8, marginBottom:10, width:'80%', alignSelf:'center' }}>
                <TouchableOpacity onPress={() => { fetchBlogDetails(item.id) }} style={HomeStyle.RecommndBox}>
                    <Image source={{ uri: img }} style={{ width: '100%', height: 150, resizeMode: 'cover', borderRadius: 6, borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }} />
                    <View style={HomeStyle.Postionset}>
                        <Text style={{ ...HomeStyle.Textcenter, marginTop: 8 }}>{item.title}</Text>
                        <Spacing space={SH(5)} />
                        <Text style={HomeStyle.Topboxtextstyle}>{item.short_description}</Text>
                        <Spacing space={SH(10)} />
                    </View>

                </TouchableOpacity>
                <Spacing space={SH(30)} />

                <Text style={{ ...HomeStyle.Textcenter, position: 'absolute', bottom: 4, right: 4 }}>{item.updated_at ? moment(item.updated_at.substring(0, 10), "YYYY-MM-DD").fromNow() : ""}</Text>

            </TouchableOpacity>
        );
    }




    return (
        <View style={HomeStyle.MinViewScreen}>
            <ScrollView
                keyboardShouldPersistTaps="handled"
                contentContainerStyle={{
                    width: '100%',
                    height: 'auto',
                }}>
                <View style={HomeStyle.widthview}>
                    <View style={{...HomeStyle.widthview, width:'100%', alignItems:'center'}}>
                        <FlatList
                            data={posts}
                            numColumns={1}
                            showsHorizontalScrollIndicator={false}
                            renderItem={({ item, index }) => LatestPostDataView(item, index)}
                            keyExtractor={item => item.id}
                        />
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};
export default AllPosts;
