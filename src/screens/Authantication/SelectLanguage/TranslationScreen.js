import React, { useState } from 'react';
import '../SelectLanguage/i18n'
import { View, Text, Image } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Button, Container, DropDown, Lottie, Spacing, } from '../../../components';
import Icon from 'react-native-vector-icons/AntDesign';
import { LanguageStyles } from '../../../styles';
import { useNavigation } from '@react-navigation/native';
import RouteName from '../../../routes/RouteName';
import images from '../../../index';
import { SH } from '../../../utils';

const Translation = () => {
  const navigation = useNavigation();
  const { t, i18n } = useTranslation();
  const [Language, setLanguage] = useState('en');
  const [isFocus, setIsFocus] = useState(false);
  const [value, setValue] = useState('en');

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
    { label: t("English"), value: 'en' },
    { label: t("Arabic"), value: 'ara' },
    { label: t("Spanish"), value: 'Spa' },
    { label: t("French"), value: 'Fr' },
  ];
  const confirmButton = () => {
    navigation.navigate(RouteName.LOGIN_SCREEN)
  };
  return (
    <Container>
      <View style={LanguageStyles.MinView}>
        <Lottie source={images.Languageanimation} />
        <Spacing space={SH(50)} />
        <View style={LanguageStyles.SelectTagWrap}>
          <Text style={LanguageStyles.SelectText}>{t("Select_Language")}</Text>
          <View style={isFocus ? LanguageStyles.TranslationDropdown : LanguageStyles.TranslationDropdownOpen}>
            <DropDown
              data={DataofDropdown}
              dropdownStyle={LanguageStyles.DropdownStyles}
              onChange={item => {
                changeLanguage(item.value)
              }}
              search
              maxHeight={250}
              searchPlaceholder="Search bar"
              IconStyle={LanguageStyles.IconStyle}
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
        </View>
        <Spacing space={SH(20)} />
        <View style={LanguageStyles.ConfirmButtonView}>
          <Button
            title={t("Confirm_Text")}
            onPress={confirmButton}
            buttonStyle={LanguageStyles.LoginButton} />
        </View>
      </View>
    </Container>
  );
};

export default Translation;