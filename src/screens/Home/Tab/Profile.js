import React, { useState, useEffect, useMemo } from "react";
import { View, Text, TouchableOpacity, Image, Modal, TextInput, } from "react-native";
import Icon from 'react-native-vector-icons/EvilIcons';
import IconF from 'react-native-vector-icons/AntDesign';
import IconG from 'react-native-vector-icons/Ionicons';
import { ProfileTabStyles } from '../../../styles';
import { useTogglePasswordVisibility } from '../../../utils/Passwordviseble';
import { Button } from '../../../components';
import images from "../../../index";
import RouteName from "../../../routes/RouteName";
import { useTranslation } from "react-i18next";
import { useNavigation, useTheme } from '@react-navigation/native';

const ProfileTab = (props) => {
  const { Colors } = useTheme();
  const ProfileTabStyle = useMemo(() => ProfileTabStyles(Colors), [Colors]);
  const [number, onChangeNumber] = React.useState(null);
  const navigation = useNavigation();
  const { t } = useTranslation();
  const [modalVisible, setModalVisible] = useState(false);
  const [modalcontent, setmodalcontent] = useState(0);

  useEffect(() => {
    navigation.addListener('focus', () => {
      setModalVisible(false);
      setmodalcontent(0);
    });
  }, [navigation]);


  const { passwordVisibility, rightIcon, handlePasswordVisibility } =
    useTogglePasswordVisibility();
  const [password, setPassword] = useState('');

  const { passwordVisibilitytwo, rightIcontwo, handlePasswordVisibilitytwo } =
    useTogglePasswordVisibility();
  const [passwordtwo, setPasswordtwo] = useState('');

  const { passwordVisibilitytwoth, rightIcontwoth, handlePasswordVisibilitytwoth } =
    useTogglePasswordVisibility();
  const [passwordtwoth, setPasswordtwoth] = useState('');
  return (
    <>
      <View style={{ backgroundColor: '#fbfbfb' }}>
        <View style={ProfileTabStyle.whilistminbody}>
          <View style={ProfileTabStyle.imagcenter}>
            <View>
              <Image style={{ height: 100, width: 100, borderRadius: 100, flexDirection: 'row', justifyContent: 'center' }} resizeMode='cover' source={images.User_image_one_profile} />
              <Text style={ProfileTabStyle.allisonperry}>{t("Allison_perry")}</Text>
            </View>
          </View>
          <View style={ProfileTabStyle.profiledetailesminview}>
            <Text style={ProfileTabStyle.editprofileset}>
              {t("Edit_profile")}
            </Text>
            <View style={ProfileTabStyle.phonenumberandicon}>
              <View style={ProfileTabStyle.setbgwhiteshadow}>
                <View>
                  <Text style={ProfileTabStyle.phonenumbertext}>{t("Phone_number")}</Text>
                  <Text style={ProfileTabStyle.digitnumbertext}>96034 56878</Text>
                </View>
                <View>
                  <TouchableOpacity
                    onPress={() => { setModalVisible(true); setmodalcontent(1) }}
                  >
                    <View>
                      <Icon
                        size={30}
                        name="pencil"
                        color={Colors.theme_backgound}
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
                  <View style={ProfileTabStyle.centeredView}>
                    <View style={ProfileTabStyle.modalView}>
                      <View style={ProfileTabStyle.setshadowstylemodaltwo}>
                        <View style={ProfileTabStyle.setiallpaddingmodal}>
                          <TouchableOpacity style={ProfileTabStyle.icomvlose} onPress={() => setModalVisible(!modalVisible)}>
                            <IconF
                              size={25}
                              name="close"
                              color={Colors.black_text_color}
                            />
                          </TouchableOpacity>
                          <Text style={ProfileTabStyle.modalText}>{t("Change_Phone_number")}</Text>
                          <View style={ProfileTabStyle.setbgwhiteshadowinputmodal}>
                            <TextInput
                              style={ProfileTabStyle.input}
                              onChangeText={onChangeNumber}
                              value={number}
                              placeholder="9603456878"
                              placeholderTextColor={Colors.gray_text_color}
                              keyboardType="numeric"
                            />
                          </View>
                          <View style={ProfileTabStyle.buttonsetmoddletwobutton}>
                            <View style={ProfileTabStyle.marginright}>
                              <Button onPress={() => setModalVisible(!modalVisible)}
                                buttonTextStyle={{ color: Colors.White_text_color }} title={t("Ok")} />
                            </View>
                            <View style={ProfileTabStyle.marginright}>
                              <Button buttonStyle={ProfileTabStyle.singlebuttonstyles} buttonTextStyle={ProfileTabStyle.Singlebuttontext} title={t("Cancel_button")} onPress={() => setModalVisible(!modalVisible)} />
                            </View>
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                  : null}
                {modalcontent === 2 ?
                  <View style={ProfileTabStyle.centeredView}>
                    <View style={ProfileTabStyle.modalView}>
                      <View style={ProfileTabStyle.setshadowstylemodaltwo}>
                        <View>
                          <View style={ProfileTabStyle.setiallpaddingmodal}>
                            <TouchableOpacity style={ProfileTabStyle.icomvlose} onPress={() => setModalVisible(!modalVisible)}>
                              <IconF
                                size={25}
                                name="close"
                                color={Colors.black_text_color}
                              />
                            </TouchableOpacity>
                            <Text style={ProfileTabStyle.modalText}>{t("Change_email")}</Text>
                            <View>
                              <TextInput
                                style={ProfileTabStyle.setbgwhiteshadowinputmodal}
                                onChangeText={onChangeNumber}
                                placeholder={t("Exam_email_text")}
                                placeholderTextColor={Colors.gray_text_color}
                              />
                            </View>
                            <View style={ProfileTabStyle.buttonsetmoddletwobutton}>
                              <View style={ProfileTabStyle.marginright}>
                                <Button title={t("Ok")} onPress={() => setModalVisible(!modalVisible)} />
                              </View>
                              <View style={ProfileTabStyle.marginright}>
                                <Button onPress={() => setModalVisible(!modalVisible)} buttonStyle={ProfileTabStyle.singlebuttonstyles} buttonTextStyle={ProfileTabStyle.Singlebuttontext} title={t("Cancel_button")} />
                              </View>
                            </View>
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                  : null}
                {modalcontent === 3 ?
                  <View style={ProfileTabStyle.centeredView}>
                    <View style={ProfileTabStyle.modalView}>
                      <View style={ProfileTabStyle.setshadowstylemodaltwo}>
                        <View>
                          <View style={ProfileTabStyle.setiallpaddingmodal}>
                            <TouchableOpacity style={ProfileTabStyle.icomvlose} onPress={() => setModalVisible(!modalVisible)}>
                              <IconF
                                size={25}
                                name="close"
                                color={Colors.black_text_color}
                              />
                            </TouchableOpacity>
                            <Text style={ProfileTabStyle.modalText}>{t("change_Your_Password")}</Text>
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
                                    secureTextEntry={passwordVisibility}
                                    value={password}
                                    enablesReturnKeyAutomatically
                                    placeholderTextColor={Colors.gray_text_color}
                                    onChangeText={text => setPassword(text)}
                                  />
                                  <TouchableOpacity onPress={handlePasswordVisibility}>
                                    <IconG name={rightIcon} size={25} style={ProfileTabStyle.eyeiconset} />
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
                                    secureTextEntry={passwordVisibilitytwo}
                                    value={passwordtwo}
                                    enablesReturnKeyAutomatically
                                    onChangeText={text => setPasswordtwo(text)}
                                  />
                                  <TouchableOpacity onPress={handlePasswordVisibilitytwo}>
                                    <IconG name={rightIcontwo} size={25} style={ProfileTabStyle.eyeiconset} />
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
                                    secureTextEntry={passwordVisibilitytwoth}
                                    value={passwordtwoth}
                                    enablesReturnKeyAutomatically
                                    onChangeText={text => setPasswordtwoth(text)}
                                  />
                                  <TouchableOpacity onPress={handlePasswordVisibilitytwoth}>
                                    <IconG name={rightIcontwoth} size={25} style={ProfileTabStyle.eyeiconset} />
                                  </TouchableOpacity>
                                </View>
                              </View>
                            </View>
                            <Text></Text>
                            <View style={ProfileTabStyle.buttonsetmoddletwobutton}>
                              <View style={ProfileTabStyle.marginright}>
                                <Button onPress={() => setModalVisible(!modalVisible)} title={t("Ok")} />
                              </View>
                              <View style={ProfileTabStyle.marginright}>
                                <Button onPress={() => setModalVisible(!modalVisible)} buttonStyle={ProfileTabStyle.singlebuttonstyles} buttonTextStyle={ProfileTabStyle.Singlebuttontext} title={t("Cancel_button")} />
                              </View>
                            </View>
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                  : null}
                {modalcontent === 4 ?
                  <View style={ProfileTabStyle.centeredView}>
                    <View style={ProfileTabStyle.modalView}>
                      <View style={ProfileTabStyle.setshadowstylemodaltwo}>
                        <View>
                          <View style={ProfileTabStyle.setiallpaddingmodal}>
                            <TouchableOpacity style={ProfileTabStyle.icomvlose} onPress={() => setModalVisible(!modalVisible)}>
                              <IconF
                                size={25}
                                name="close"
                                color={Colors.black_text_color}
                              />
                            </TouchableOpacity>
                            <Text style={ProfileTabStyle.modalText}>{t("Are_you_sure")}</Text>
                            <View style={ProfileTabStyle.buttonsetmoddletwobutton}>
                              <View style={ProfileTabStyle.marginrightsetview}>
                                <Button title={t("Log_out")} onPress={() => navigation.navigate(RouteName.LOGIN_SCREEN)} />
                              </View>
                              <View style={ProfileTabStyle.marginrightsetview}>
                                <Button title={t("Cancel_button")} onPress={() => setModalVisible(!modalVisible)} buttonStyle={ProfileTabStyle.singlebuttonstyles} buttonTextStyle={ProfileTabStyle.Singlebuttontext}
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
            <View style={ProfileTabStyle.phonenumberandicon}>
              <View style={ProfileTabStyle.setbgwhiteshadow}>
                <View style={ProfileTabStyle.setpadiingtext}>
                  <Text style={ProfileTabStyle.phonenumbertext}>{t("Emailtext")}</Text>
                  <Text style={ProfileTabStyle.digitnumbertext}>{t("Testemail")}</Text>
                </View>
                <View>
                  <TouchableOpacity
                    onPress={() => { setModalVisible(true); setmodalcontent(2) }}
                  >
                    <View>
                      <Icon
                        size={30}
                        name="pencil"
                        color={Colors.theme_backgound}
                      />
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={ProfileTabStyle.phonenumberandicon}>
              <View style={ProfileTabStyle.setbgwhiteshadow}>
                <View>
                  <Text style={ProfileTabStyle.phonenumbertext}>{t("Password_text")}</Text>
                  <Text style={ProfileTabStyle.digitnumbertext}>******</Text>
                </View>
                <View>
                  <TouchableOpacity
                    onPress={() => { setModalVisible(true); setmodalcontent(3) }}
                  >
                    <View>
                      <Icon
                        size={30}
                        name="pencil"
                        color={Colors.theme_backgound}
                      />
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <TouchableOpacity
              onPress={() => { setModalVisible(true); setmodalcontent(4) }}
            >
              <View style={ProfileTabStyle.iconandtextflexset}>
                <View>
                  <Text style={ProfileTabStyle.logoutdivset}>{t("Log_out")}</Text>
                </View>
                <View>
                  <IconF
                    size={27}
                    name="arrowright"
                    color={Colors.theme_backgound}
                  />
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate(RouteName.SETTING_SCREEN)}
            >
              <View style={ProfileTabStyle.iconandtextflexset}>
                <View>
                  <Text style={ProfileTabStyle.logoutdivset}>{t("Setting_text")}</Text>
                </View>
                <View>
                  <IconF
                    size={27}
                    name="arrowright"
                    color={Colors.theme_backgound}
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
