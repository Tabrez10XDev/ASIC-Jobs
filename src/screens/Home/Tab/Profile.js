import React, { useState, useEffect, useMemo } from "react";
import { View, Text, TouchableOpacity, Image, TextInput, Modal } from "react-native";
import Icon from 'react-native-vector-icons/EvilIcons';
import IconF from 'react-native-vector-icons/AntDesign';
import IconG from 'react-native-vector-icons/Ionicons';
import { ProfileTabStyles } from '../../../styles';
import { Button, Spacing } from '../../../components';
import { SH } from '../../../utils';
import images from "../../../index";
import RouteName from "../../../routes/RouteName";
import { useTranslation } from "react-i18next";
import { useNavigation, useTheme } from '@react-navigation/native';

const ProfileTab = (props) => {
  const { Colors } = useTheme();
  const ProfileTabStyle = useMemo(() => ProfileTabStyles(Colors), [Colors]);
  const navigation = useNavigation();
  const { t } = useTranslation();
  const [modalVisible, setModalVisible] = useState(false);
  const [modalcontent, setmodalcontent] = useState(0);
  const [passwordVisibilityold, setpasswordVisibilityold] = useState(true);
  const [passwordVisibilitynew, setpasswordVisibilitynew] = useState(true);
  const [passwordVisibilityconfirm, setPasswordVisibilityconfirm] = useState(true);

  const stateArray = {
    Oldpassword: "",
    Newpassword: "",
    email: "",
    Confirmpassword: "",
    number: null,
  };
  const stateErrorArray = {
    Oldpassword: "",
    Newpassword: "",
    email: "",
    Confirmpassword: "",
    number: null,
  };
  const [state, setState] = useState(stateArray);
  const [stateError, setStateError] = useState(stateErrorArray);

  const onChangeText = (text) => {
    if (text === 'Oldpassword') setpasswordVisibilityold(!passwordVisibilityold);
    if (text === 'Newpassword') setpasswordVisibilitynew(!passwordVisibilitynew);
    if (text === 'Confirmpassword') setPasswordVisibilityconfirm(!passwordVisibilityconfirm);
  };

  useEffect(() => {
    navigation.addListener('focus', () => {
      setModalVisible(false);
      setmodalcontent(0);
    });
  }, [navigation]);

  return (
    <>
      <View style={ProfileTabStyle.BackgroundWhite}>
        <View style={ProfileTabStyle.whilistminbody}>
          <View style={ProfileTabStyle.ImagCenter}>
            <View>
              <Image style={ProfileTabStyle.ImageStyles} resizeMode='cover' source={images.User_image_one_profile} />
              <Text style={ProfileTabStyle.UserName}>{t("Allison_perry")}</Text>
            </View>
          </View>
          <View style={ProfileTabStyle.ProfileDetailesMinview}>
            <Text style={ProfileTabStyle.EditProFile}>
              {t("Edit_Profile")}
            </Text>
            <View style={ProfileTabStyle.PhoneNumberAndIcon}>
              <View style={ProfileTabStyle.setbgwhiteshadow}>
                <View>
                  <Text style={ProfileTabStyle.PhoneNumberText}>{t("Phone_number")}</Text>
                  <Text style={ProfileTabStyle.DigitNumberText}>96034 56878</Text>
                </View>
                <View>
                  <TouchableOpacity
                    onPress={() => { setModalVisible(true); setmodalcontent(1) }}
                  >
                    <View>
                      <Icon
                        size={30}
                        name="pencil"
                        color={Colors.gray_text_color}
                      />
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
              <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => { setModalVisible(!modalVisible) }}
              >
                {modalcontent === 1 ?
                  <View style={ProfileTabStyle.CenteredView}>
                    <View style={ProfileTabStyle.ModalView}>
                      <View style={ProfileTabStyle.ShadowStyleModalTwo}>
                        <View style={ProfileTabStyle.AllPaddingModal}>
                          <TouchableOpacity style={ProfileTabStyle.icomvlose} onPress={() => setModalVisible(!modalVisible)}>
                            <IconF
                              size={25}
                              name="close"
                              color={Colors.black_text_color}
                            />
                          </TouchableOpacity>
                          <Text style={ProfileTabStyle.ModalText}>{t("Change_Phone_Number")}</Text>
                          <Spacing space={SH(10)} />
                          <View style={ProfileTabStyle.BgWhiteShadowInputModal}>
                            <TextInput
                              style={ProfileTabStyle.input}
                              onChangeText={(text) => setState({ ...state, number: text })}
                              value={state.number}
                              placeholder="9603456878"
                              placeholderTextColor={Colors.gray_text_color}
                              keyboardType="numeric"
                            />
                          </View>
                          <Spacing space={SH(10)} />
                          <View style={ProfileTabStyle.ButtonsetModleTwoButton}>
                            <View style={ProfileTabStyle.Marginright}>
                              <Button onPress={() => setModalVisible(!modalVisible)}
                                buttonTextStyle={{ color: Colors.white_text_color }} title={t("Ok")} />
                            </View>
                            <View style={ProfileTabStyle.Marginright}>
                              <Button buttonStyle={ProfileTabStyle.singlebuttonstyles} buttonTextStyle={ProfileTabStyle.Singlebuttontext} title={t("Cancel_Button")} onPress={() => setModalVisible(!modalVisible)} />
                            </View>
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                  : null}
                {modalcontent === 2 ?
                  <View style={ProfileTabStyle.CenteredView}>
                    <View style={ProfileTabStyle.ModalView}>
                      <View style={ProfileTabStyle.ShadowStyleModalTwo}>
                        <View>
                          <View style={ProfileTabStyle.AllPaddingModal}>
                            <TouchableOpacity style={ProfileTabStyle.icomvlose} onPress={() => setModalVisible(!modalVisible)}>
                              <IconF
                                size={25}
                                name="close"
                                color={Colors.gray_text_color}
                              />
                            </TouchableOpacity>
                            <Text style={ProfileTabStyle.ModalText}>{t("Change_Email")}</Text>
                            <Spacing space={SH(10)} />
                            <View>
                              <TextInput
                                style={ProfileTabStyle.BgWhiteShadowInputModal}
                                onChangeText={(text) => setState({ ...state, email: text })}
                                value={state.email}
                                placeholder={t("Exam_Email_Text")}
                                placeholderTextColor={Colors.gray_text_color}
                              />
                            </View>
                            <Spacing space={SH(10)} />
                            <View style={ProfileTabStyle.ButtonsetModleTwoButton}>
                              <View style={ProfileTabStyle.Marginright}>
                                <Button title={t("Ok")} onPress={() => setModalVisible(!modalVisible)} />
                              </View>
                              <View style={ProfileTabStyle.Marginright}>
                                <Button onPress={() => setModalVisible(!modalVisible)} buttonStyle={ProfileTabStyle.singlebuttonstyles} buttonTextStyle={ProfileTabStyle.Singlebuttontext} title={t("Cancel_Button")} />
                              </View>
                            </View>
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                  : null}
                {modalcontent === 3 ?
                  <View style={ProfileTabStyle.CenteredView}>
                    <View style={ProfileTabStyle.ModalView}>
                      <View style={ProfileTabStyle.ShadowStyleModalTwo}>
                        <View>
                          <View style={ProfileTabStyle.AllPaddingModal}>
                            <TouchableOpacity style={ProfileTabStyle.icomvlose} onPress={() => setModalVisible(!modalVisible)}>
                              <IconF
                                size={25}
                                name="close"
                                color={Colors.black_text_color}
                              />
                            </TouchableOpacity>
                            <Text style={ProfileTabStyle.ModalText}>{t("Change_Your_Password")}</Text>
                            <View style={ProfileTabStyle.spaceview}>
                              <View style={ProfileTabStyle.inputUnderLine}>
                                <View style={ProfileTabStyle.inputviewset}>
                                  <TextInput
                                    style={ProfileTabStyle.textpassworedsert}
                                    name="password"
                                    placeholder={t("Old_Password")}
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    textContentType="newPassword"
                                    secureTextEntry={passwordVisibilityold}
                                    onChangeText={(text) => setState({ ...state, Oldpassword: text })}
                                    value={state.Oldpassword}
                                    enablesReturnKeyAutomatically
                                    placeholderTextColor={Colors.gray_text_color}
                                  />
                                  <TouchableOpacity onPress={() => { onChangeText("Oldpassword") }}>
                                    <IconG name={passwordVisibilityold ? 'eye-off' : 'eye'} size={25} style={ProfileTabStyle.eyeiconset} />
                                  </TouchableOpacity>
                                </View>
                              </View>
                            </View>
                            <View style={ProfileTabStyle.spaceview}>
                              <View style={ProfileTabStyle.inputUnderLine}>
                                <View style={ProfileTabStyle.inputviewset}>
                                  <TextInput
                                    style={ProfileTabStyle.textpassworedsert}
                                    name="password"
                                    placeholder={t("New_Password")}
                                    autoCapitalize="none"
                                    placeholderTextColor={'gray'}
                                    autoCorrect={false}
                                    textContentType="newPassword"
                                    secureTextEntry={passwordVisibilitynew}
                                    onChangeText={(text) => setState({ ...state, Newpassword: text })}
                                    value={state.Newpassword}
                                    enablesReturnKeyAutomatically
                                  />
                                  <TouchableOpacity onPress={() => { onChangeText("Newpassword") }}>
                                    <IconG name={passwordVisibilitynew ? 'eye-off' : 'eye'} size={25} style={ProfileTabStyle.eyeiconset} />
                                  </TouchableOpacity>
                                </View>
                              </View>
                            </View>
                            <View style={ProfileTabStyle.spaceview}>
                              <View style={ProfileTabStyle.inputUnderLine}>
                                <View style={ProfileTabStyle.inputviewset}>
                                  <TextInput
                                    style={ProfileTabStyle.textpassworedsert}
                                    name="Confirm New Password"
                                    placeholder={t("Conform_Password")}
                                    placeholderTextColor={Colors.gray_text_color}
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    textContentType="newPassword"
                                    secureTextEntry={passwordVisibilityconfirm}
                                    onChangeText={(text) => setState({ ...state, Confirmpassword: text })}
                                    value={state.Confirmpassword}
                                    enablesReturnKeyAutomatically
                                  />
                                  <TouchableOpacity onPress={() => { onChangeText("Confirmpassword") }}>
                                    <IconG name={passwordVisibilityconfirm ? 'eye-off' : 'eye'} size={25} style={ProfileTabStyle.eyeiconset} />
                                  </TouchableOpacity>
                                </View>
                              </View>
                            </View>
                            <Text></Text>
                            <View style={ProfileTabStyle.ButtonsetModleTwoButton}>
                              <View style={ProfileTabStyle.Marginright}>
                                <Button onPress={() => setModalVisible(!modalVisible)} title={t("Ok")} />
                              </View>
                              <View style={ProfileTabStyle.Marginright}>
                                <Button onPress={() => setModalVisible(!modalVisible)} buttonStyle={ProfileTabStyle.singlebuttonstyles} buttonTextStyle={ProfileTabStyle.Singlebuttontext} title={t("Cancel_Button")} />
                              </View>
                            </View>
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                  : null}
                {modalcontent === 4 ?
                  <View style={ProfileTabStyle.CenteredView}>
                    <View style={ProfileTabStyle.ModalView}>
                      <View style={ProfileTabStyle.ShadowStyleModalTwo}>
                        <View>
                          <View style={ProfileTabStyle.AllPaddingModal}>
                            <TouchableOpacity style={ProfileTabStyle.icomvlose} onPress={() => setModalVisible(!modalVisible)}>
                              <IconF
                                size={25}
                                name="close"
                                color={Colors.black_text_color}
                              />
                            </TouchableOpacity>
                            <Text style={ProfileTabStyle.ModalText}>{t("Are_You_Sure")}</Text>
                            <View style={ProfileTabStyle.ButtonsetModleTwoButton}>
                              <View style={ProfileTabStyle.Marginrightsetview}>
                                <Button title={t("Log_Out")} onPress={() => navigation.navigate(RouteName.LOGIN_SCREEN)} />
                              </View>
                              <View style={ProfileTabStyle.Marginrightsetview}>
                                <Button title={t("Cancel_Button")} onPress={() => setModalVisible(!modalVisible)} buttonStyle={ProfileTabStyle.singlebuttonstyles} buttonTextStyle={ProfileTabStyle.Singlebuttontext}
                                />
                              </View>
                            </View>
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                  : null}
              </Modal>
            </View>
            <View style={ProfileTabStyle.PhoneNumberAndIcon}>
              <View style={ProfileTabStyle.setbgwhiteshadow}>
                <View style={ProfileTabStyle.setpadiingtext}>
                  <Text style={ProfileTabStyle.PhoneNumberText}>{t("Email_Text")}</Text>
                  <Text style={ProfileTabStyle.DigitNumberText}>{t("Testemail")}</Text>
                </View>
                <View>
                  <TouchableOpacity
                    onPress={() => { setModalVisible(true); setmodalcontent(2) }}
                  >
                    <View>
                      <Icon
                        size={30}
                        name="pencil"
                        color={Colors.gray_text_color}
                      />
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={ProfileTabStyle.PhoneNumberAndIcon}>
              <View style={ProfileTabStyle.setbgwhiteshadow}>
                <View>
                  <Text style={ProfileTabStyle.PhoneNumberText}>{t("Password_Text")}</Text>
                  <Text style={ProfileTabStyle.DigitNumberText}>******</Text>
                </View>
                <View>
                  <TouchableOpacity
                    onPress={() => { setModalVisible(true); setmodalcontent(3) }}
                  >
                    <View>
                      <Icon
                        size={30}
                        name="pencil"
                        color={Colors.gray_text_color}
                      />
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <Spacing space={SH(20)} />
            <TouchableOpacity
              onPress={() => { setModalVisible(true); setmodalcontent(4) }}
            >
              <View style={ProfileTabStyle.iconandtextflexset}>
                <View>
                  <Text style={ProfileTabStyle.logoutdivset}>{t("Log_Out")}</Text>
                </View>
                <View>
                  <IconF
                    size={27}
                    name="arrowright"
                    color={Colors.black_text_color}
                  />
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate(RouteName.SETTING_SCREEN)}
            >
              <View style={ProfileTabStyle.iconandtextflexset}>
                <View>
                  <Text style={ProfileTabStyle.logoutdivset}>{t("Setting_Text")}</Text>
                </View>
                <View>
                  <IconF
                    size={27}
                    name="arrowright"
                    color={Colors.black_text_color}
                  />
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};
export default ProfileTab;
