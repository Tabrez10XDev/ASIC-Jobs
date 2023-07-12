import React, { useState, useMemo } from 'react';
import { View, Text, ScrollView, FlatList, Image, TouchableOpacity } from 'react-native';
import { ApplyJobStyles, Style } from '../../../styles';
import { Spacing, Button } from '../../../components';
import { useTranslation } from "react-i18next";
import images from '../../../index';
import { SH, Descrptiontext, Requiremnetsdata, Aboutdata, ReviewsText } from '../../../utils';
import Icon from 'react-native-vector-icons/Octicons';
import IconA from 'react-native-vector-icons/Entypo';
import { RouteName } from '../../../routes';
import { useTheme } from '@react-navigation/native';
import { StackActions } from '@react-navigation/native';

const BlogDetails = (props) => {
    const { Colors } = useTheme();
    const ApplyJobStyle = useMemo(() => ApplyJobStyles(Colors), [Colors]);
    const { t } = useTranslation();
    const { navigation } = props;
    const [tabshow, settabshow] = useState(1);
    const data = props.route.params
    const img = data.logo

    
   
    
    const TabshowFunction = (item) => {
        settabshow(item)
    }

    const Descrptiontextview = (item) => {
        return (
            <View>
                <Spacing space={SH(20)} />
                <View style={{ ...ApplyJobStyle.Flexrowdescription, alignItems: 'center', justifyContent: 'center' }}>

                    <View style={{ ...ApplyJobStyle.parehraphview, alignSelf: 'center' }}>
                        <Text style={{ ...ApplyJobStyle.ParegraphTextStyles, textAlign: 'justify' }}>{item}</Text>
                    </View>
                </View>
            </View>
        );
    }









    return (
        <View style={ApplyJobStyle.MinViewScreen}>
            <TouchableOpacity onPress={() => navigation.dispatch(StackActions.pop(1))} style={ApplyJobStyle.centerlottw}>
                <IconA name="chevron-left" color={Colors.white_text_color} size={30} />
            </TouchableOpacity>
            <ScrollView
                keyboardShouldPersistTaps="handled"
                contentContainerStyle={Style.ScrollViewTestHeight}>
                <View>
                    <View style={ApplyJobStyle.Backgroundcolorview}>
                        <Spacing space={SH(30)} />
                        <View style={ApplyJobStyle.Centerimage}>
                            <Image source={{ uri: img }} resizeMode="cover" style={ApplyJobStyle.Imagestyles} />
                        </View>
                        <Spacing space={SH(10)} />
                        <Text style={ApplyJobStyle.ProductDesigner}>{data.title}</Text>
                        <Text style={ApplyJobStyle.Googleteam}>{data.company_name}</Text>
                        <Spacing space={SH(10)} />
                        <View style={{ ...ApplyJobStyle.Flexrowcenter }}>
                            <Button buttonStyle={ApplyJobStyle.buttonwidthg25} buttonTextStyle={ApplyJobStyle.textstyles} title={"Total Views: " + data.total_views} />
                            <Button buttonStyle={ApplyJobStyle.buttonwidthg33} buttonTextStyle={ApplyJobStyle.textstyles} title={"Since " + data.establishment_date} />
                            <Button buttonStyle={ApplyJobStyle.buttonwidthg25} buttonTextStyle={ApplyJobStyle.textstyles} title={data.organization_type_name} />
                        </View>
                        <Spacing space={SH(20)} />
                        <View style={ApplyJobStyle.Flexrowcenter}>
                            <Text style={ApplyJobStyle.ProductDesignertwo}>{data.industry_types_name}</Text>
                            <Text style={ApplyJobStyle.ProductDesignertwo}>{data.district}/{data.country}</Text>
                        </View>
                    </View>
                    <Spacing space={SH(10)} />
                    <View style={{ ...ApplyJobStyle.FlexRowText, justifyContent: 'space-evenly' }}>
                        <TouchableOpacity onPress={() => TabshowFunction(1)} style={tabshow == 1 ? ApplyJobStyle.Centerviesecond : ApplyJobStyle.Centerviesecondtwo}>
                            <Text style={tabshow == 1 ? ApplyJobStyle.Tabtextstyles : ApplyJobStyle.TabtextstylesActive}>About</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => TabshowFunction(2)} style={tabshow == 2 ? ApplyJobStyle.Centerviesecond : ApplyJobStyle.Centerviesecondtwo}>
                            <Text style={tabshow == 2 ? ApplyJobStyle.Tabtextstyles : ApplyJobStyle.TabtextstylesActive}>Vision</Text>
                        </TouchableOpacity>

                    </View>
                    {/* {tabshow === 1 &&
                        <View>
                            <FlatList
                                data={[data.bio]}
                                numColumns={1}
                                showsHorizontalScrollIndicator={false}
                                renderItem={({ item, index }) => Descrptiontextview(item, index)}
                                keyExtractor={item => item.id}
                                contentContainerStyle={ApplyJobStyle.FlatListStylestwo}
                            />
                        </View>
                    }
                    {tabshow === 2 &&
                        <View>
                            <FlatList
                                data={[data.vision]}
                                numColumns={1}
                                showsHorizontalScrollIndicator={false}
                                renderItem={({ item, index }) => Descrptiontextview(item, index)}
                                keyExtractor={item => item.id}
                                contentContainerStyle={ApplyJobStyle.FlatListStylestwo}
                            />
                        </View>
                    } */}
                 

                    <Spacing space={SH(87)} />
                </View>
            </ScrollView>
        </View >
    );
};
export default BlogDetails;
