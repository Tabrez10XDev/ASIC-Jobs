import React, { useState, useMemo } from 'react';
import { View, Text, ScrollView, } from 'react-native';
import { ResumeStyles, Style } from '../../styles';
import { Spacing, Button, ConfirmationAlert, DocumentPicker } from '../../components';
import { useTranslation } from "react-i18next";
import { SH } from '../../utils';
import { RouteName } from '../../routes';
import { useTheme } from '@react-navigation/native';

const ApplyJobDetails = (props) => {
    const { t } = useTranslation();
    const { Colors } = useTheme();
    const ResumeStyle = useMemo(() => ResumeStyles(Colors), [Colors]);
    const { navigation } = props;
    const [buttoncolor, setbuttoncolor] = useState(0);
    const [alertVisible, setAlertVisible] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [okbutton, Setokbutton] = useState('');

    var alertdata = {
        'logout': t("Successful_Added_Documents"),
        'Apply': t("Apply_Successfully")
    }
    const onoknutton = () => {
        if (okbutton === 1) navigation.navigate(RouteName.APPLY_JOB_DETAILS);
        if (okbutton === 2) navigation.navigate(RouteName.APPLY_JOB_DETAILS);
    }
    const buttonfunction = (item) => {
        setbuttoncolor(item)
    }

    return (
        <View style={ResumeStyle.MinViewScreen}>
            <ScrollView
                keyboardShouldPersistTaps="handled"
                contentContainerStyle={{
                    width: '100%',
                    height: 'auto',
                }}>
                <View style={ResumeStyle.PaddingHorizontal}>
                    <Spacing space={SH(20)} />
                    <Text style={ResumeStyle.ResuameTextStyles}>{t("Resume_OR_CV")}</Text>
                    <Spacing space={SH(20)} />
                    <View style={ResumeStyle.BorderView}>
                        <Text style={ResumeStyle.ParegraphTextStyle}>{t("Upload_Your_CV")}</Text>
                        <DocumentPicker UploadViewdoqumnet={true} />
                        <Button onPress={() => {
                            setAlertVisible(true);
                            setAlertMessage(alertdata.Apply);
                            Setokbutton(2);
                        }} buttonStyle={ResumeStyle.buttonStyle} title={t("Apply_text")} />
                    </View>
                    <Spacing space={SH(50)} />
                    <Text style={ResumeStyle.ResuameTextStyles}>{t("Portfolio_Option")}</Text>
                    <Spacing space={SH(20)} />
                    <View>
                        <View style={ResumeStyle.Flexbuttonview}>
                            <Button onPress={() => buttonfunction(1)} buttonStyle={buttoncolor === 1 ? ResumeStyle.buttonStylestwo : ResumeStyle.buttonStyles} buttonTextStyle={buttoncolor === 1 ? ResumeStyle.buttontexttwo : ResumeStyle.buttontext} title={t("Portfolio_Link")} />
                            <Button onPress={() => buttonfunction(2)} buttonStyle={buttoncolor === 2 ? ResumeStyle.buttonStylestwo : ResumeStyle.buttonStyles} buttonTextStyle={buttoncolor === 2 ? ResumeStyle.buttontexttwo : ResumeStyle.buttontext} title={t("Add_Slide")} />
                        </View>
                        <Spacing space={SH(20)} />
                        <View style={ResumeStyle.Flexbuttonview}>
                            <Button onPress={() => buttonfunction(3)} buttonStyle={buttoncolor === 3 ? ResumeStyle.buttonStylestwo : ResumeStyle.buttonStyles} buttonTextStyle={buttoncolor === 3 ? ResumeStyle.buttontexttwo : ResumeStyle.buttontext} title={t("Add_Pdf")} />
                            <Button onPress={() => buttonfunction(4)} buttonStyle={buttoncolor === 4 ? ResumeStyle.buttonStylestwo : ResumeStyle.buttonStyles} buttonTextStyle={buttoncolor === 4 ? ResumeStyle.buttontexttwo : ResumeStyle.buttontext} title={t("Add_Photos")} />
                        </View>
                    </View>
                </View>
            </ScrollView>
            <ConfirmationAlert
                message={alertMessage}
                modalVisible={alertVisible}
                setModalVisible={setAlertVisible}
                onPress={() => { setAlertVisible(!alertVisible), onoknutton() }}
                buttonminview={Style.buttonotp}
                iconVisible={true}
                buttonText={t("Ok")}
            />
            <View style={ResumeStyle.Savecenterbutton}>
                <Button onPress={() => {
                    setAlertVisible(true);
                    setAlertMessage(alertdata.logout);
                    Setokbutton(1);
                }} buttonStyle={ResumeStyle.Buttonsave} title={t("Add_Pdf")} />
            </View>
        </View>
    );
};
export default ApplyJobDetails;
