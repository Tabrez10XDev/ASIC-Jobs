import React, { useMemo } from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { ApplyJobStyles, Style } from '../../styles';
import { Spacing } from '../../components';
import { useTranslation } from "react-i18next";
import images from '../../index';
import { SH, Colors } from '../../utils';
import Icon from 'react-native-vector-icons/AntDesign';
import IconT from 'react-native-vector-icons/Entypo';
import IconF from 'react-native-vector-icons/FontAwesome';
import { useTheme } from '@react-navigation/native';

const ApplyJobDetails = (props) => {
    const { Colors } = useTheme();
    const ApplyJobStyle = useMemo(() => ApplyJobStyles(Colors), [Colors]);
    const { t } = useTranslation();
    return (
        <View style={ApplyJobStyle.minstyleviewphotograpgy}>
            <ScrollView
                keyboardShouldPersistTaps="handled"
                contentContainerStyle={Style.ScrollViewtestheight}>
                <View style={ApplyJobStyle.PaddingHorizontal}>
                    <View style={ApplyJobStyle.Flexcenteralign}>
                        <View style={ApplyJobStyle.Fleximagetext}>
                            <Image source={images.Codingimage_two} resizeMode="cover" style={ApplyJobStyle.uxdisignersrytyules} />
                            <View style={ApplyJobStyle.Lesftpadding}>
                                <Text style={ApplyJobStyle.Uxdesignertext}>{t("UX_Designer")}</Text>
                                <Text style={ApplyJobStyle.UxdesignertextTWO}>{t("Sportyfy_Text")}</Text>
                            </View>
                        </View>
                        <View style={ApplyJobStyle.Lesftpadding}>
                            <Text style={ApplyJobStyle.Uxdesignertext}>{t("fifty_yearlytext")}</Text>
                            <Text style={ApplyJobStyle.Textleft}>{t("Sportyfy_Text")}</Text>
                        </View>
                    </View>
                    <Spacing space={SH(15)} />
                    <Text style={ApplyJobStyle.Trackapliactiontext}>{t("Track_Aplication")}</Text>
                    <Spacing space={SH(15)} />
                    <View style={ApplyJobStyle.Flextext}>
                        <View style={ApplyJobStyle.widthfile}>
                            <View style={ApplyJobStyle.Fullwidthflewx}>
                                <View style={ApplyJobStyle.Flexcenterlibe}>
                                    <View style={ApplyJobStyle.Setwidtth}>
                                        <View style={ApplyJobStyle.Iconstyle}>
                                            <IconT name="trophy" size={20} color={Colors.gray_text_color} />
                                        </View>
                                        <View style={ApplyJobStyle.Iconstyle}>
                                            <View style={ApplyJobStyle.Dashviewstyles} />
                                        </View>
                                    </View>
                                </View>
                                <View style={ApplyJobStyle.Setheight}>
                                    <Text style={ApplyJobStyle.Offertextstyle}>{t("Offer_Later")}</Text>
                                    <Text style={ApplyJobStyle.Notyettext}>{t("Not_Yet_Text")}</Text>
                                </View>
                            </View>
                            <View style={ApplyJobStyle.Fullwidthflewx}>
                                <View style={ApplyJobStyle.Flexcenterlibe}>
                                    <View style={ApplyJobStyle.Setwidtth}>
                                        <View style={ApplyJobStyle.Iconstyle}>
                                            <IconF name="dot-circle-o" size={20} color={Colors.theme_backgound} />
                                        </View>
                                        <View style={ApplyJobStyle.Iconstyle}>
                                            <View style={ApplyJobStyle.Borderlinevertical} />
                                        </View>
                                    </View>
                                </View>
                                <View style={ApplyJobStyle.Setheight}>
                                    <Text style={ApplyJobStyle.Offertextstyle}>{t("Team_Matching")}</Text>
                                    <Text style={ApplyJobStyle.Notyettext}>{t("date_18")}</Text>
                                </View>
                            </View>
                            <View style={ApplyJobStyle.Fullwidthflewx}>
                                <View style={ApplyJobStyle.Flexcenterlibe}>
                                    <View style={ApplyJobStyle.Setwidtth}>
                                        <View style={ApplyJobStyle.Iconstyle}>
                                            <Icon name="checkcircle" size={20} color={Colors.theme_backgound} />
                                        </View>
                                        <View style={ApplyJobStyle.Iconstyle}>
                                            <View style={ApplyJobStyle.Borderlinevertical} />
                                        </View>
                                    </View>
                                </View>
                                <View style={ApplyJobStyle.Setheight}>
                                    <Text style={ApplyJobStyle.Offertextstyle}>{t("Final_hr_interviews")}</Text>
                                    <Text style={ApplyJobStyle.Notyettext}>{t("date_16")}</Text>
                                </View>
                            </View>
                            <View style={ApplyJobStyle.Fullwidthflewx}>
                                <View style={ApplyJobStyle.Flexcenterlibe}>
                                    <View style={ApplyJobStyle.Setwidtth}>
                                        <View style={ApplyJobStyle.Iconstyle}>
                                            <Icon name="checkcircle" size={20} color={Colors.theme_backgound} />
                                        </View>
                                        <View style={ApplyJobStyle.Iconstyle}>
                                            <View style={ApplyJobStyle.Borderlinevertical} />
                                        </View>
                                    </View>
                                </View>
                                <View style={ApplyJobStyle.Setheight}>
                                    <Text style={ApplyJobStyle.Offertextstyle}>{t("Technical_Interviews")}</Text>
                                    <Text style={ApplyJobStyle.Notyettext}>{t("date_12")}</Text>
                                </View>
                            </View>
                            <View style={ApplyJobStyle.Fullwidthflewx}>
                                <View style={ApplyJobStyle.Flexcenterlibe}>
                                    <View style={ApplyJobStyle.Setwidtth}>
                                        <View style={ApplyJobStyle.Iconstyle}>
                                            <Icon name="checkcircle" size={20} color={Colors.theme_backgound} />
                                        </View>
                                        <View style={ApplyJobStyle.Iconstyle}>
                                            <View style={ApplyJobStyle.Borderlinevertical} />
                                        </View>
                                    </View>
                                </View>
                                <View style={ApplyJobStyle.Setheight}>
                                    <Text style={ApplyJobStyle.Offertextstyle}>{t("Start_Interview")}</Text>
                                    <Text style={ApplyJobStyle.Notyettext}>{t("date_10")}</Text>
                                </View>
                            </View>
                            <View style={ApplyJobStyle.Fullwidthflewx}>
                                <View style={ApplyJobStyle.Flexcenterlibe}>
                                    <View style={ApplyJobStyle.Setwidtth}>
                                        <View style={ApplyJobStyle.Iconstyle}>
                                            <Icon name="checkcircle" size={20} color={Colors.theme_backgound} />
                                        </View>
                                        <View style={ApplyJobStyle.Iconstyle}>
                                            <View style={ApplyJobStyle.Borderlinevertical} />
                                        </View>
                                    </View>
                                </View>
                                <View style={ApplyJobStyle.Setheight}>
                                    <Text style={ApplyJobStyle.Offertextstyle}>{t("Receved_by_team")}</Text>
                                    <Text style={ApplyJobStyle.Notyettext}>{t("date_17")}</Text>
                                </View>
                            </View>
                            <View style={ApplyJobStyle.Fullwidthflewx}>
                                <View style={ApplyJobStyle.Flexcenterlibe}>
                                    <View style={ApplyJobStyle.Setwidtth}>
                                        <View style={ApplyJobStyle.Iconstyle}>
                                            <Icon name="checkcircle" size={20} color={Colors.theme_backgound} />
                                        </View>
                                    </View>
                                </View>
                                <View style={ApplyJobStyle.Setheight}>
                                    <Text style={ApplyJobStyle.Offertextstyle}>{t("Aplication_Submiotted")}</Text>
                                    <Text style={ApplyJobStyle.Notyettext}>{t("date_21")}</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};
export default ApplyJobDetails;
