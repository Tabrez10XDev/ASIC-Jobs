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
        <View style={ApplyJobStyle.MinViewScreen}>
            <ScrollView
                keyboardShouldPersistTaps="handled"
                contentContainerStyle={Style.ScrollViewTestHeight}>
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
                    <Text style={ApplyJobStyle.Trackapliactiontext}>{t("Track_Aplication")}</Text>
                    <Spacing space={SH(15)} />
                    <View style={ApplyJobStyle.Flextext}>
                        <View style={ApplyJobStyle.WidthFile}>
                            <View style={ApplyJobStyle.FullWidthFlewx}>
                                <View style={ApplyJobStyle.FlexCenterLine}>
                                    <View style={ApplyJobStyle.SetWidth}>
                                        <View style={ApplyJobStyle.IconStyle}>
                                            <IconT name="trophy" size={20} color={Colors.gray_text_color} />
                                        </View>
                                        <View style={ApplyJobStyle.IconStyle}>
                                            <View style={ApplyJobStyle.DashViewStyles} />
                                        </View>
                                    </View>
                                </View>
                                <View style={ApplyJobStyle.SetHeight}>
                                    <Text style={ApplyJobStyle.OfferTextStyle}>{t("Offer_Later")}</Text>
                                    <Text style={ApplyJobStyle.NotyetText}>{t("Not_Yet_Text")}</Text>
                                </View>
                            </View>
                            <View style={ApplyJobStyle.FullWidthFlewx}>
                                <View style={ApplyJobStyle.FlexCenterLine}>
                                    <View style={ApplyJobStyle.SetWidth}>
                                        <View style={ApplyJobStyle.IconStyle}>
                                            <IconF name="dot-circle-o" size={20} color={Colors.theme_background_brink_pink} />
                                        </View>
                                        <View style={ApplyJobStyle.IconStyle}>
                                            <View style={ApplyJobStyle.Borderlinevertical} />
                                        </View>
                                    </View>
                                </View>
                                <View style={ApplyJobStyle.SetHeight}>
                                    <Text style={ApplyJobStyle.OfferTextStyle}>{t("Team_Matching")}</Text>
                                    <Text style={ApplyJobStyle.NotyetText}>{t("Date_18")}</Text>
                                </View>
                            </View>
                            <View style={ApplyJobStyle.FullWidthFlewx}>
                                <View style={ApplyJobStyle.FlexCenterLine}>
                                    <View style={ApplyJobStyle.SetWidth}>
                                        <View style={ApplyJobStyle.IconStyle}>
                                            <Icon name="checkcircle" size={20} color={Colors.theme_background_brink_pink} />
                                        </View>
                                        <View style={ApplyJobStyle.IconStyle}>
                                            <View style={ApplyJobStyle.Borderlinevertical} />
                                        </View>
                                    </View>
                                </View>
                                <View style={ApplyJobStyle.SetHeight}>
                                    <Text style={ApplyJobStyle.OfferTextStyle}>{t("Final_Hr_Interviews")}</Text>
                                    <Text style={ApplyJobStyle.NotyetText}>{t("Date_16")}</Text>
                                </View>
                            </View>
                            <View style={ApplyJobStyle.FullWidthFlewx}>
                                <View style={ApplyJobStyle.FlexCenterLine}>
                                    <View style={ApplyJobStyle.SetWidth}>
                                        <View style={ApplyJobStyle.IconStyle}>
                                            <Icon name="checkcircle" size={20} color={Colors.theme_background_brink_pink} />
                                        </View>
                                        <View style={ApplyJobStyle.IconStyle}>
                                            <View style={ApplyJobStyle.Borderlinevertical} />
                                        </View>
                                    </View>
                                </View>
                                <View style={ApplyJobStyle.SetHeight}>
                                    <Text style={ApplyJobStyle.OfferTextStyle}>{t("Technical_Interviews")}</Text>
                                    <Text style={ApplyJobStyle.NotyetText}>{t("Date_12")}</Text>
                                </View>
                            </View>
                            <View style={ApplyJobStyle.FullWidthFlewx}>
                                <View style={ApplyJobStyle.FlexCenterLine}>
                                    <View style={ApplyJobStyle.SetWidth}>
                                        <View style={ApplyJobStyle.IconStyle}>
                                            <Icon name="checkcircle" size={20} color={Colors.theme_background_brink_pink} />
                                        </View>
                                        <View style={ApplyJobStyle.IconStyle}>
                                            <View style={ApplyJobStyle.Borderlinevertical} />
                                        </View>
                                    </View>
                                </View>
                                <View style={ApplyJobStyle.SetHeight}>
                                    <Text style={ApplyJobStyle.OfferTextStyle}>{t("Start_Interview")}</Text>
                                    <Text style={ApplyJobStyle.NotyetText}>{t("Date_10")}</Text>
                                </View>
                            </View>
                            <View style={ApplyJobStyle.FullWidthFlewx}>
                                <View style={ApplyJobStyle.FlexCenterLine}>
                                    <View style={ApplyJobStyle.SetWidth}>
                                        <View style={ApplyJobStyle.IconStyle}>
                                            <Icon name="checkcircle" size={20} color={Colors.theme_background_brink_pink} />
                                        </View>
                                        <View style={ApplyJobStyle.IconStyle}>
                                            <View style={ApplyJobStyle.Borderlinevertical} />
                                        </View>
                                    </View>
                                </View>
                                <View style={ApplyJobStyle.SetHeight}>
                                    <Text style={ApplyJobStyle.OfferTextStyle}>{t("Receved_By_Team")}</Text>
                                    <Text style={ApplyJobStyle.NotyetText}>{t("Date_17")}</Text>
                                </View>
                            </View>
                            <View style={ApplyJobStyle.FullWidthFlewx}>
                                <View style={ApplyJobStyle.FlexCenterLine}>
                                    <View style={ApplyJobStyle.SetWidth}>
                                        <View style={ApplyJobStyle.IconStyle}>
                                            <Icon name="checkcircle" size={20} color={Colors.theme_background_brink_pink} />
                                        </View>
                                    </View>
                                </View>
                                <View style={ApplyJobStyle.SetHeight}>
                                    <Text style={ApplyJobStyle.OfferTextStyle}>{t("Aplication_Submiotted")}</Text>
                                    <Text style={ApplyJobStyle.NotyetText}>{t("Date_21")}</Text>
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
