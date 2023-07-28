import React, { useState, useCallback, useMemo } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import DocumentPicker, { types } from 'react-native-document-picker';
import { Spacing } from '../../components';
import { ApplyJobStyles, ResumeStyles } from '../../styles';
import { useTranslation } from "react-i18next";
import { SH } from '../../utils';
import Icon from 'react-native-vector-icons/AntDesign';
import { useTheme } from '@react-navigation/native';

function ImagePicker(props) {
    const { UploadView, UploadViewdoqumnet, Textstyles, Graybackgeoundpdfview } = props;
    const { t } = useTranslation();
    const { Colors } = useTheme();
    const ResumeStyle = useMemo(() => ResumeStyles(Colors), [Colors]);
    const ApplyJobStyle = useMemo(() => ApplyJobStyles(Colors), [Colors]);
    const [fileResponse, setFileResponse] = useState([]);
    const handleDocumentSelection = useCallback(async () => {
        try {
            const response = await DocumentPicker.pick({

                type: [types.images],
                presentationStyle: 'fullScreen',
            });
            setFileResponse(response);
            props.setImage(response[0].uri)
            props.setFileResponse(response)
        } catch (err) {
            console.warn(err);
        }
    }, []);


    return (
        <View>
            <View>
                {UploadViewdoqumnet &&
                    <TouchableOpacity onPress={handleDocumentSelection} style={{alignSelf:'flex-end', marginBottom:10, marginTop:0, top:-14}} >
                        <Icon color="black" name='edit' size={20} />

                    </TouchableOpacity>
                }
                {UploadView &&
                    <TouchableOpacity onPress={handleDocumentSelection}>
                        <View style={ApplyJobStyle.Iconcenter}>
                            <Icon name="upload" color={Colors.theme_background_brink_pink} size={26} />
                        </View>
                        <Spacing space={SH(10)} />
                        <Text style={ApplyJobStyle.Uploadtextstyle}>{t("Upload")}</Text>
                    </TouchableOpacity>
                }
            </View>


        </View>
    )
}
export default ImagePicker;