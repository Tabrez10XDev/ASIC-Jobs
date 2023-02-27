import React, { useState, useMemo } from "react";
import { View, Text, KeyboardAvoidingView, Switch, ScrollView } from "react-native";
import IconF from 'react-native-vector-icons/AntDesign';
import { SettingStyle, Style, LanguageStyles } from '../../styles';
import { useTheme } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { DropDown } from '../../components';

const SettingStylesScreen = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [okbutton, Setokbutton] = useState('');
  const { Colors } = useTheme();
  const SettingStyles = useMemo(() => SettingStyle(Colors), [Colors]);

  var alertdata = {
    'logout': " Deleted Successfully",
  }
  const onoknutton = () => {
    okbutton;
  }
  const changeLanguage = value => {
    i18n
      .changeLanguage(value)
      .then(() => setLanguage(value))
      .catch(err => console.log(err));
    {
      setValue(value);
      setIsFocus(false);
    }
  };
  const DataofDropdown = [
    { label: 'English', value: 'en' },
    { label: 'Arabic', value: 'ara' },
    { label: 'Spanish', value: 'Spa' },
    { label: 'French', value: 'Fr' },
  ];
  const { t, i18n } = useTranslation();
  const [Language, setLanguage] = useState('en');
  const [isFocus, setIsFocus] = useState(false);
  const [value, setValue] = useState('en');

  return (
    <>
      <View style={[Style.minstyleviewphotograpgyTwo]}>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={Style.contentContainerStyle}>
          <KeyboardAvoidingView enabled>
            <View style={SettingStyles.keybordtopviewstyle}>
              <View style={SettingStyles.minflexview}>
                <View style={SettingStyles.togglrswitchflex}>
                  <View>
                    <Text style={SettingStyles.cellulardatatext}>{t("Location_Track")}</Text>
                  </View>
                </View>
                <View style={SettingStyles.toggleswotchview}>
                  <Text style={SettingStyles.downlodtoggleswitchtext}>
                    {t("Enalble_Location")}
                  </Text>
                  <View>
                    <Switch
                      trackColor={{ false: "lightgray", true: "lightgray" }}
                      thumbColor={isEnabled ? "hsl(214.3, 83.2%, 51%)" : "white"}
                      ios_backgroundColor="#3e3e3e"
                      onValueChange={toggleSwitch}
                      value={isEnabled}
                    />
                  </View>
                </View>
                <Text style={SettingStyles.cellulardatatext}>{t("Location_text")}</Text>
                <View style={SettingStyles.righticonminview}>
                  <View>
                    <Text style={SettingStyles.standardrecommedtext}>{t("Location_Tracking")}</Text>
                    <Text style={SettingStyles.downloadfastertext}>{t("Enables_recommended")}</Text>
                  </View>
                  <View>
                    <IconF
                      size={30}
                      name="check"
                      style={SettingStyles.chekiconstyle}
                    />
                  </View>
                </View>
                <View style={SettingStyles.righticonminview}>
                  <View>
                    <Text style={SettingStyles.standardrecommedtext}>{t("Location_features")}</Text>
                    <Text style={SettingStyles.downloadfastertext}>{t("Hours_years")}</Text>
                  </View>
                </View>
                <Text style={LanguageStyles.Settingtext}>{t("Select_Your_Language")}</Text>
                <View style={isFocus ? LanguageStyles.LeadsDropdownbox : LanguageStyles.LeadsDropdownboxOpen}>
                  <DropDown
                    data={DataofDropdown}
                    dropdownStyle={LanguageStyles.LeadDropdown}
                    onChange={item => {
                      changeLanguage(item.value)
                    }}
                    search
                    searchPlaceholder="Search bar"
                    selectedTextStyle={LanguageStyles.selectedTextStyleLead}
                    iconStyle={LanguageStyles.iconStyle}
                    value={value}
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                    labelField="label"
                    valueField="value"
                    renderLeftIcon={() => (
                      <Icon color="black" name={isFocus ? 'arrowup' : 'arrowdown'} size={20} />
                    )}
                  />
                </View>
                <View style={SettingStyles.righticonminview}>
                  <View style={SettingStyles.bodysettextwidth}>
                    <Text style={SettingStyles.standardrecommedtext}>{t("Synce_Changes")}</Text>

                  </View>
                  <View>
                    <IconF
                      size={30}
                      name="check"
                      style={SettingStyles.chekiconstyle}
                    />
                  </View>
                </View>
              </View>
            </View>
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
    </>
  );
};
export default SettingStylesScreen;
