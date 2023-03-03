import React, { useState, useMemo } from "react";
import { View, Text, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import { JobTypeStyles } from '../../../styles';
import { JobSelectdata, SH, SelectLOcation, JobTypedata, Officedata } from '../../../utils';
import { AppHeader, Button, Spacing } from '../../../components';
import { RouteName } from "../../../routes";
import { useTranslation } from "react-i18next";
import { useTheme } from '@react-navigation/native';

const SelectJobandLocation = (props) => {
  const { navigation } = props;
  const { Colors } = useTheme();
  const JobTypeStyle = useMemo(() => JobTypeStyles(Colors), [Colors]);
  const { t } = useTranslation();
  const [Selectjob, SetSelectjob] = useState([]);
  const [SelectLocation, SetSelectLocation] = useState([]);
  const [SelectJobType, SetSelectJobType] = useState([]);
  const [SelectOffice, SetSelectOffice] = useState([]);

  const JobSelectdataview = (item, index) => {
    return (
      <TouchableOpacity
        onPress={() => {
          if (Selectjob.includes(index)) {
            let unlike = Selectjob.filter((elem) => elem !== index);
            SetSelectjob(unlike);
          }
          else {
            SetSelectjob([...Selectjob, index]);
          }
        }}
        style={Selectjob.includes(index) ? JobTypeStyle.JobViewLocationBgColor : JobTypeStyle.JobViewLocation} >
        <Text style={Selectjob.includes(index) ? JobTypeStyle.JobTextStyleTwo : JobTypeStyle.JobTextStyles}>{t(item.text)}</Text>
      </TouchableOpacity >
    )
  }
  const JobSelectdataviewtwo = (item, index) => {
    return (
      <TouchableOpacity
        onPress={() => {
          if (SelectLocation.includes(index)) {
            let unlike = SelectLocation.filter((elem) => elem !== index);
            SetSelectLocation(unlike);
          }
          else {
            SetSelectLocation([...SelectLocation, index]);
          }
        }}
        style={SelectLocation.includes(index) ? JobTypeStyle.JobViewLocationBgColor : JobTypeStyle.JobViewLocation} >
        <Text style={SelectLocation.includes(index) ? JobTypeStyle.JobTextStyleTwo : JobTypeStyle.JobTextStyles}>{t(item.text)}</Text>
      </TouchableOpacity >
    )
  }
  const Jobtypedataview = (item, index) => {
    return (
      <TouchableOpacity
        onPress={() => {
          if (SelectJobType.includes(index)) {
            let unlike = SelectJobType.filter((elem) => elem !== index);
            SetSelectJobType(unlike);
          }
          else {
            SetSelectJobType([...SelectJobType, index]);
          }
        }}
        style={SelectJobType.includes(index) ? JobTypeStyle.JobViewLocationBgColor : JobTypeStyle.JobViewLocation} >
        <Text style={SelectJobType.includes(index) ? JobTypeStyle.JobTextStyleTwo : JobTypeStyle.JobTextStyles}>{t(item.text)}</Text>
      </TouchableOpacity >
    )
  }
  const Officedataview = (item, index) => {
    return (
      <TouchableOpacity
        onPress={() => {
          if (SelectOffice.includes(index)) {
            let unlike = SelectOffice.filter((elem) => elem !== index);
            SetSelectOffice(unlike);
          }
          else {
            SetSelectOffice([...SelectOffice, index]);
          }
        }}
        style={SelectOffice.includes(index) ? JobTypeStyle.JobViewLocationBgColor : JobTypeStyle.JobViewLocation} >
        <Text style={SelectOffice.includes(index) ? JobTypeStyle.JobTextStyleTwo : JobTypeStyle.JobTextStyles}>{t(item.text)}</Text>
      </TouchableOpacity >
    )
  }
  return (
    <View style={JobTypeStyle.MinViewBgColor}>
      <View>
        <AppHeader onPress={() => navigation.navigate(RouteName.LOGIN_SCREEN)} Iconname="arrow-left" title={t("Job_Preferences")} />
        <ScrollView
          contentContainerStyle={JobTypeStyle.ScrollviewStyles}>
          <View style={JobTypeStyle.ContainerTwo}>
            <View style={JobTypeStyle.MinViewContent}>
              <Spacing space={SH(15)} />
              <View style={JobTypeStyle.FlexTitlejob}>
                <Text style={JobTypeStyle.TextStylesTwo}>{t("Select_Job")}</Text>
              </View>
              <Spacing space={SH(15)} />
              <View>
                <FlatList
                  data={JobSelectdata}
                  numColumns={2}
                  showsHorizontalScrollIndicator={false}
                  renderItem={({ item, index }) => JobSelectdataview(item, index)}
                  keyExtractor={item => item.id}
                  contentContainerStyle={JobTypeStyle.FlatListStyles}
                />
              </View>
              <Spacing space={SH(15)} />
              <View style={JobTypeStyle.FlexTitlejob}>
                <Text style={JobTypeStyle.TextStylesTwo}>{t("Select_Location")}</Text>
              </View>
              <Spacing space={SH(15)} />
              <View>
                <FlatList
                  data={SelectLOcation}
                  numColumns={2}
                  showsHorizontalScrollIndicator={false}
                  renderItem={({ item, index }) => JobSelectdataviewtwo(item, index)}
                  keyExtractor={item => item.id}
                  contentContainerStyle={JobTypeStyle.FlatListStyles}
                />
              </View>
              <Spacing space={SH(15)} />
              <View style={JobTypeStyle.FlexTitlejob}>
                <Text style={JobTypeStyle.TextStylesTwo}>{t("Job_Type_Text")}</Text>
              </View>
              <Spacing space={SH(15)} />
              <View>
                <FlatList
                  data={JobTypedata}
                  numColumns={3}
                  showsHorizontalScrollIndicator={false}
                  renderItem={({ item, index }) => Jobtypedataview(item, index)}
                  keyExtractor={item => item.id}
                  contentContainerStyle={JobTypeStyle.FlatListStyles}
                />
              </View>
              <Spacing space={SH(20)} />
              <View style={JobTypeStyle.FlexTitlejob}>
                <Text style={JobTypeStyle.TextStylesTwo}>{t("Office_Text")}</Text>
              </View>
              <Spacing space={SH(20)} />
              <View>
                <FlatList
                  data={Officedata}
                  numColumns={3}
                  showsHorizontalScrollIndicator={false}
                  renderItem={({ item, index }) => Officedataview(item, index)}
                  keyExtractor={item => item.id}
                  contentContainerStyle={JobTypeStyle.FlatListStyles}
                />
              </View>
              <Spacing space={SH(100)} />
            </View>
          </View>
        </ScrollView>
        <View style={JobTypeStyle.ButtonPostionAbolute}>
          <Button buttonStyle={JobTypeStyle.ButtonPadding} onPress={() => navigation.replace(RouteName.HOME_SCREEN)} title={t("Save_Text")} />
        </View>
      </View>
    </View>
  )
}
export default SelectJobandLocation;