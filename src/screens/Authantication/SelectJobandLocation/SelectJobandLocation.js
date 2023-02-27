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
  const [Selectcolor, SetSelectcolor] = useState([]);
  const [Selectcolortwo, SetSelectcolortwo] = useState([]);
  const [Selectcolorthree, SetSelectcolorthree] = useState([]);
  const [Selectcolorfour, SetSelectcolorfour] = useState([]);

  const JobSelectdataview = (item, index) => {
    return (
      <TouchableOpacity
        onPress={() => {
          if (Selectcolor.includes(index)) {
            let unlike = Selectcolor.filter((elem) => elem !== index);
            SetSelectcolor(unlike);
          }
          else {
            SetSelectcolor([...Selectcolor, index]);
          }
        }}
        style={Selectcolor.includes(index) ? JobTypeStyle.JobViewlocationbgcolor : JobTypeStyle.JobViewlocation} >
        <Text style={Selectcolor.includes(index) ? JobTypeStyle.Jobtextstylestwo : JobTypeStyle.Jobtextstyles}>{t(item.text)}</Text>
      </TouchableOpacity >
    )
  }
  const JobSelectdataviewtwo = (item, index) => {
    return (
      <TouchableOpacity
        onPress={() => {
          if (Selectcolortwo.includes(index)) {
            let unlike = Selectcolortwo.filter((elem) => elem !== index);
            SetSelectcolortwo(unlike);
          }
          else {
            SetSelectcolortwo([...Selectcolortwo, index]);
          }
        }}
        style={Selectcolortwo.includes(index) ? JobTypeStyle.JobViewlocationbgcolor : JobTypeStyle.JobViewlocation} >
        <Text style={Selectcolortwo.includes(index) ? JobTypeStyle.Jobtextstylestwo : JobTypeStyle.Jobtextstyles}>{t(item.text)}</Text>
      </TouchableOpacity >
    )
  }
  const Jobtypedataview = (item, index) => {
    return (
      <TouchableOpacity
        onPress={() => {
          if (Selectcolorthree.includes(index)) {
            let unlike = Selectcolorthree.filter((elem) => elem !== index);
            SetSelectcolorthree(unlike);
          }
          else {
            SetSelectcolorthree([...Selectcolorthree, index]);
          }
        }}
        style={Selectcolorthree.includes(index) ? JobTypeStyle.JobViewlocationbgcolor : JobTypeStyle.JobViewlocation} >
        <Text style={Selectcolorthree.includes(index) ? JobTypeStyle.Jobtextstylestwo : JobTypeStyle.Jobtextstyles}>{t(item.text)}</Text>
      </TouchableOpacity >
    )
  }
  const Officedataview = (item, index) => {
    return (
      <TouchableOpacity
        onPress={() => {
          if (Selectcolorfour.includes(index)) {
            let unlike = Selectcolorfour.filter((elem) => elem !== index);
            SetSelectcolorfour(unlike);
          }
          else {
            SetSelectcolorfour([...Selectcolorfour, index]);
          }
        }}
        style={Selectcolorfour.includes(index) ? JobTypeStyle.JobViewlocationbgcolor : JobTypeStyle.JobViewlocation} >
        <Text style={Selectcolorfour.includes(index) ? JobTypeStyle.Jobtextstylestwo : JobTypeStyle.Jobtextstyles}>{t(item.text)}</Text>
      </TouchableOpacity >
    )
  }
  return (
    <View style={JobTypeStyle.minviewbgcolor}>
      <View>
        <AppHeader onPress={() => navigation.navigate(RouteName.LOGIN_SCREEN)} Iconname="arrow-left" title={t("Job_Preferences")} />
        <ScrollView
          contentContainerStyle={JobTypeStyle.sacroowviewstyletwor}>
          <View style={JobTypeStyle.containertwo}>
            <View style={JobTypeStyle.minviewallcontent}>
              <Spacing space={SH(20)} />
              <View style={JobTypeStyle.Flextitlejob}>
                <Text style={JobTypeStyle.Textasatylestwo}>{t("Select_Job")}</Text>
              </View>
              <Spacing space={SH(20)} />
              <View>
                <FlatList
                  data={JobSelectdata}
                  numColumns={2}
                  showsHorizontalScrollIndicator={false}
                  renderItem={({ item, index }) => JobSelectdataview(item, index)}
                  keyExtractor={item => item.id}
                  contentContainerStyle={JobTypeStyle.Flatliststyles}
                />
              </View>
              <Spacing space={SH(20)} />
              <View style={JobTypeStyle.Flextitlejob}>
                <Text style={JobTypeStyle.Textasatylestwo}>{t("Select_Location")}</Text>
              </View>
              <Spacing space={SH(20)} />
              <View>
                <FlatList
                  data={SelectLOcation}
                  numColumns={2}
                  showsHorizontalScrollIndicator={false}
                  renderItem={({ item, index }) => JobSelectdataviewtwo(item, index)}
                  keyExtractor={item => item.id}
                  contentContainerStyle={JobTypeStyle.Flatliststyles}
                />
              </View>
              <Spacing space={SH(20)} />
              <View style={JobTypeStyle.Flextitlejob}>
                <Text style={JobTypeStyle.Textasatylestwo}>{t("Job_Type_Text")}</Text>
              </View>
              <Spacing space={SH(20)} />
              <View>
                <FlatList
                  data={JobTypedata}
                  numColumns={3}
                  showsHorizontalScrollIndicator={false}
                  renderItem={({ item, index }) => Jobtypedataview(item, index)}
                  keyExtractor={item => item.id}
                  contentContainerStyle={JobTypeStyle.Flatliststyles}
                />
              </View>
              <Spacing space={SH(20)} />
              <View style={JobTypeStyle.Flextitlejob}>
                <Text style={JobTypeStyle.Textasatylestwo}>{t("Office_Text")}</Text>
              </View>
              <Spacing space={SH(20)} />
              <View>
                <FlatList
                  data={Officedata}
                  numColumns={3}
                  showsHorizontalScrollIndicator={false}
                  renderItem={({ item, index }) => Officedataview(item, index)}
                  keyExtractor={item => item.id}
                  contentContainerStyle={JobTypeStyle.Flatliststyles}
                />
              </View>
              <Spacing space={SH(100)} />
            </View>
          </View>
        </ScrollView>
        <View style={JobTypeStyle.Buttonpostionabolute}>
          <Button buttonStyle={JobTypeStyle.Buttonpadding} onPress={() => navigation.navigate(RouteName.HOME_SCREEN)} title={t("Save_Text")} />
        </View>
      </View>
    </View>
  )
}
export default SelectJobandLocation;