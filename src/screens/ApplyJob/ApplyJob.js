import React, { useState, useMemo } from 'react';
import { View, Text, ScrollView, FlatList, Image } from 'react-native';
import { ApplyJobStyles } from '../../styles';
import { Spacing, Button, Input, CheckBox, DocumentPicker } from '../../components';
import { useTranslation } from "react-i18next";
import images from '../../index';
import { SH, ApplyJobstwo, } from '../../utils';
import { RouteName } from '../../routes';
import { useTheme } from '@react-navigation/native';

const ApplyJob = (props) => {
    const { t } = useTranslation();
    const { Colors } = useTheme();
    const ApplyJobStyle = useMemo(() => ApplyJobStyles(Colors), [Colors]);
    const { navigation } = props;
    const [Textinputaeira, setTextinputaeira] = useState('');
    const [Checkboxs, SetCheckboxs] = useState(ApplyJobstwo);
    const [Resume, SetResume] = useState(false);
    const [Resumetwo, SetResumetwo] = useState(false);
    const Checkboxfunction = (value, indexs) => {
        var datas = Checkboxs.filter((item, index) => {
            if (index === indexs) {
                item['CheckBoxitem'] = value;
                return item;
            } else {
                return item;
            }
        });
        SetCheckboxs(datas);
    }
    const ApplyJobDetailsView = (item, index) => {
        return (
            <View style={ApplyJobStyle.MinBgColorWhite}>
                <View style={ApplyJobStyle.CenterImages}>
                    <Image source={item.devloperimage} resizeMode="cover" style={ApplyJobStyle.UxDisignerStyless} />
                </View>
                <Spacing space={SH(15)} />
                <Text style={ApplyJobStyle.UxDesigneText}>{t(item.Uxtext)}</Text>
                <Text style={ApplyJobStyle.UxDesigneTextSmall}>{t(item.Uxdesigner)}</Text>
                <View style={ApplyJobStyle.CheckBoxStyles}>
                    <CheckBox disabled={false}
                        value={item.CheckBoxitem}
                        onValueChange={(newValue) => Checkboxfunction(newValue, index)} />
                </View>
            </View>
        )
    }
    return (
        <View style={ApplyJobStyle.MinViewScreen}>
            <ScrollView
                keyboardShouldPersistTaps="handled"
                contentContainerStyle={{
                    width: '100%',
                    height: 'auto',
                }}>
                <View style={ApplyJobStyle.PaddingHorizontal}>
                    <View style={ApplyJobStyle.FlexCenterAlign}>
                        <View style={ApplyJobStyle.FlexImageText}>
                            <Image source={images.Codingimage_two} resizeMode="cover" style={ApplyJobStyle.UxDisignerStyless} />
                            <View style={ApplyJobStyle.LeftPadding}>
                                <Text style={ApplyJobStyle.Uxdesignertext}>{t("UX_Designer")}</Text>
                                <Text style={ApplyJobStyle.UxDesignerTextTWO}>{t("Sportyfy_Text")}</Text>
                            </View>
                        </View>
                        <View style={ApplyJobStyle.LeftPadding}>
                            <Text style={ApplyJobStyle.Uxdesignertext}>{t("Fifty_Yearly_Text")}</Text>
                            <Text style={ApplyJobStyle.TextLeft}>{t("Sportyfy_Text")}</Text>
                        </View>
                    </View>
                    <Spacing space={SH(15)} />
                    <Text style={ApplyJobStyle.SelectProfileText}>{t("Select_Profile")}</Text>
                    <Spacing space={SH(12)} />
                    <FlatList
                        data={Checkboxs}
                        numColumns={2}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item, index }) => ApplyJobDetailsView(item, index)}
                        keyExtractor={item => item.id}
                        contentContainerStyle={ApplyJobStyle.FlatListStylestwo}
                    />
                    <Spacing space={SH(5)} />
                    <Text style={ApplyJobStyle.SelectProfileText}>{t("Select_Resume")}</Text>
                    <Spacing space={SH(12)} />
                    <View>
                        <View style={ApplyJobStyle.Minviewtwoflex}>
                            <View style={ApplyJobStyle.FlexRowChekBox}>
                                <CheckBox disabled={false}
                                    value={Resume}
                                    onValueChange={(newValue) => SetResume(newValue)} />
                                <View style={ApplyJobStyle.TextViewStyles}>
                                    <Button buttonStyle={ApplyJobStyle.Applybuttonstyles} buttonTextStyle={ApplyJobStyle.buttontextstyle} title={t("Designer_Button")} />
                                    <Spacing space={SH(10)} />
                                    <Text style={ApplyJobStyle.ResumeTextStyles}>{t("UX_Designer")}</Text>
                                </View>
                            </View>
                            <View style={ApplyJobStyle.FlexRowChekBox}>
                                <CheckBox disabled={false}
                                    value={Resumetwo}
                                    onValueChange={(newValue) => SetResumetwo(newValue)} />
                                <View style={ApplyJobStyle.TextViewStyles}>
                                    <Button buttonStyle={ApplyJobStyle.buttonbgcolorview} buttonTextStyle={ApplyJobStyle.buttontextstyle} title={t("Frontend_Button")} />
                                    <Spacing space={SH(10)} />
                                    <Text style={ApplyJobStyle.ResumeTextStyles}>{t("Frontend_Button")}</Text>
                                </View>
                            </View>
                        </View>
                        <Spacing space={SH(20)} />
                        <Text style={ApplyJobStyle.SelectProfileTextBlack}>{t("Cover_Later_Optional")}</Text>
                        <Spacing space={SH(10)} />
                        <View style={ApplyJobStyle.Flexcedntyer}>
                            <View style={ApplyJobStyle.TextAreaView}>
                                <Input
                                    placeholder={t("Write_Cover_Photo")}
                                    onChangeText={(value) => setTextinputaeira(value)}
                                    value={Textinputaeira}
                                    numberOfLines={10}
                                    placeholderTextColor={Colors.gray_text_color}
                                    inputStyle={ApplyJobStyle.Inputstyles} />
                            </View>
                            <View style={ApplyJobStyle.Uploadview}>
                                <DocumentPicker Graybackgeoundpdfview={ApplyJobStyle.Textwidthset} UploadView={true} />
                            </View>
                        </View>
                        <Spacing space={SH(100)} />
                    </View>
                </View>
            </ScrollView >
            <View style={ApplyJobStyle.ButtonHorizontal}>
                <Button onPress={() => navigation.navigate(RouteName.APPLY_JOB_DETAILS)} title={t("Apply_text")} />
            </View>
        </View >
    );
};
export default ApplyJob;
