import React, { useState,useMemo } from "react";
import { View, Text, FlatList, ScrollView } from 'react-native';
import { JobTypeStyles } from '../../../styles';
import { JobTimedata, SH } from '../../../utils';
import { AppHeader, Button, Spacing, CheckBox } from '../../../components';
import { RouteName } from "../../../routes";
import { useTranslation } from "react-i18next";
import { useTheme } from '@react-navigation/native';

const JobTimesScreen = (props) => {
  const { navigation } = props;
  const { Colors } = useTheme();
  const JobTypeStyle = useMemo(() => JobTypeStyles(Colors), [Colors]);
  const { t } = useTranslation();
  const [Checkboxs, SetCheckboxs] = useState(JobTimedata);
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
  const Jobtypedataview = (item, index, value) => {
    return (
      <View style={JobTypeStyle.BgWhiteStyles}>
        <View style={JobTypeStyle.FlexRowJobData}>
          <View style={JobTypeStyle.FlexRowJobText}>
            {item.iconname}
            <Text style={JobTypeStyle.DesignerTextStyles}>{t(item.Designertext)}</Text>
          </View>
          <View>
            <CheckBox disabled={false}
              value={item.CheckBoxitem}
              onValueChange={(newValue) => Checkboxfunction(newValue, index)} />
          </View>
        </View>
      </View>
    )
  }
  return (
    <View style={JobTypeStyle.MinViewBgColor}>
      <View>
        <ScrollView
          contentContainerStyle={JobTypeStyle.ScrollviewStyles}>
          <AppHeader onPress={() => navigation.navigate(RouteName.JOB_TYPES_SCREEN)} Iconname={true} title={t("Job_Times")} />
          <View style={JobTypeStyle.container}>
            <View style={JobTypeStyle.MinViewContent}>
              <Spacing space={SH(50)} />
              <Text style={JobTypeStyle.TextSatyles}>{t("What_Type_Of_Job_You_Looking_For")}</Text>
              <Spacing space={SH(50)} />
              <View>
                <FlatList
                  data={Checkboxs}
                  numColumns={1}
                  showsHorizontalScrollIndicator={false}
                  renderItem={({ item, index }) => Jobtypedataview(item, index)}
                  keyExtractor={item => item.id}
                  contentContainerStyle={JobTypeStyle.FlatListStyles}
                />
              </View>
            </View>
          </View>
        </ScrollView>
        <View style={JobTypeStyle.ButtonPostionAbolute}>
          <Button buttonStyle={JobTypeStyle.ButtonPadding} onPress={() => navigation.navigate(RouteName.SERLECT_JOB_AND_LOCATION)} title={t("Save_Text")} />
        </View>
      </View>
    </View>
  )
}
export default JobTimesScreen;