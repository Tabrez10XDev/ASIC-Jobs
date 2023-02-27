import React,{useMemo} from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, KeyboardAvoidingView, TextInput } from 'react-native';
import { ChatStyles } from '../../styles';
import images from '../../index';
import IconP from 'react-native-vector-icons/FontAwesome5';
import IconL from 'react-native-vector-icons/AntDesign';
import IconO from 'react-native-vector-icons/Ionicons';
import { Colors, SH } from "../../utils";
import { Spacing } from '../../components';
import { useTranslation } from "react-i18next";
import { useTheme } from '@react-navigation/native';

const Chatscreen = (props) => {
    const { Colors } = useTheme();
    const ChatStyle = useMemo(() => ChatStyles(Colors), [Colors]);
    const { t } = useTranslation();
    return (
        <View style={ChatStyle.minstyleviewphotograpgy}>
            <ScrollView
                keyboardShouldPersistTaps="handled"
                contentContainerStyle={{
                    width: '100%',
                    height: 'auto',
                }}>
                <KeyboardAvoidingView enabled>
                    <View style={ChatStyle.minflexview}>
                        <View style={ChatStyle.minviewsigninscreen}>
                            <View style={ChatStyle.marginbottomsetspace}>
                                <View style={ChatStyle.flexrowjucenter}>
                                    <View style={ChatStyle.chartviewsetbgcolor}>
                                        <Text style={ChatStyle.textcolormessage}>{t("Chattext_let_me")}</Text>
                                        <Text style={ChatStyle.textcolormessagetwoset}>03:16</Text>
                                    </View>
                                </View>
                                <Text style={ChatStyle.datesndtimecolor}>10 Oct,2022</Text>
                                <Spacing space={SH(10)} />
                            </View>
                            <View style={ChatStyle.marginbottomsetspace}>
                                <View style={ChatStyle.flexrowjucentertwo}>
                                    <View style={ChatStyle.leftimage}>
                                        <Image source={images.UXdEsigner_one} style={ChatStyle.seimagstyleendcall} resizeMode={'cover'} />
                                    </View>
                                    <View style={ChatStyle.messageminviewowner}>
                                        <Text style={ChatStyle.textcolormessage}>{t("Chattext_Actually_i_have")}</Text>
                                        <View style={ChatStyle.flexcheckset}>
                                            <View>
                                                <Text style={ChatStyle.textcolormessagetwosettwo}>03:18</Text>
                                            </View>
                                            <View style={ChatStyle.setrighticonviewstyle}>
                                                <IconL color={Colors.White_text_color} name="check" />
                                                <IconL color={Colors.White_text_color} style={ChatStyle.seticonpotion} name="check" />
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <Spacing space={SH(20)} />
                            <View style={ChatStyle.marginbottomsetspace}>
                                <View style={ChatStyle.flexrowjucenter}>
                                    <View style={ChatStyle.chartviewsetbgcolor}>
                                        <Text style={ChatStyle.textcolormessage}>{t("Chat_can_you_just")}</Text>
                                        <Text style={ChatStyle.textcolormessagetwoset}>03:19</Text>
                                    </View>
                                </View>
                                <Text style={ChatStyle.datesndtimecolor}>10 Oct,2022</Text>
                            </View>
                            <Spacing space={SH(14)} />
                            <View style={ChatStyle.marginbottomsetspace}>
                                <View style={ChatStyle.flexrowjucentertwo}>
                                    <View style={ChatStyle.leftimage}>
                                        <Image source={images.UXdEsigner_one} style={ChatStyle.seimagstyleendcall} resizeMode={'cover'} />
                                    </View>
                                    <View style={ChatStyle.messageminviewowner}>
                                        <Text style={ChatStyle.textcolormessage}>{t("Chat_multipal_project")}</Text>
                                        <View style={ChatStyle.flexcheckset}>
                                            <View>
                                                <Text style={ChatStyle.textcolormessagetwosettwo}>03:19</Text>
                                            </View>
                                            <View style={ChatStyle.setrighticonviewstyle}>
                                                <IconL color={Colors.White_text_color} name="check" />
                                                <IconL color={Colors.White_text_color} style={ChatStyle.seticonpotion} name="check" />
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <Spacing space={SH(23)} />
                            <View style={ChatStyle.marginbottomsetspace}>
                                <View style={ChatStyle.flexrowjucenter}>
                                    <View style={ChatStyle.chartviewsetbgcolor}>
                                        <Text style={ChatStyle.textcolormessage}>{t("Chat_Excellent")}</Text>
                                        <Text style={ChatStyle.textcolormessagetwoset}>03:20</Text>
                                    </View>
                                </View>
                                <Text style={ChatStyle.datesndtimecolor}>10 Oct,2022</Text>
                            </View>
                            <Spacing space={SH(27)} />
                            <View style={ChatStyle.marginbottomsetspace}>
                                <View style={ChatStyle.seticonrevirview}>
                                    <View style={ChatStyle.flexrowjucentertwo}>
                                        <View style={ChatStyle.leftimage}>
                                            <Image source={images.UXdEsigner_one} style={ChatStyle.seimagstyleendcall} resizeMode={'cover'} />
                                        </View>
                                        <View style={ChatStyle.messageminviewowner}>
                                            <Text style={ChatStyle.textcolormessage}>{t("Chat_last_paregraph")}</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <Spacing space={SH(27)} />
                        </View>
                    </View>
                </KeyboardAvoidingView>
            </ScrollView>
            <View style={ChatStyle.postionabsoluteview}>
                <View style={ChatStyle.textmessageview}>
                    <View style={ChatStyle.flexrowsetsendmesasagew}>
                        <View>
                            <TextInput
                                style={ChatStyle.textinputborderbottom}
                                placeholder={t("Write_a_reply")}
                                placeholderTextColor={Colors.gray_text_color}
                            />
                        </View>
                        <View style={ChatStyle.flexrowimaginations}>
                            <TouchableOpacity>
                                <IconP name="grin" size={25} />
                            </TouchableOpacity>
                            <TouchableOpacity style={ChatStyle.setmarginrightlikeicon}>
                                <IconO name="send" color={Colors.theme_backgound} size={30} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
};
export default Chatscreen;
