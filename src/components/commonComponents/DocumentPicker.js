import React, { useState, useCallback, useMemo } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import DocumentPicker, { types } from 'react-native-document-picker';
import { Spacing } from '../../components';
import { ApplyJobStyles, ResumeStyles } from '../../styles';
import { useTranslation } from "react-i18next";
import { SH } from '../../utils';
import Icon from 'react-native-vector-icons/AntDesign';
import { useTheme } from '@react-navigation/native';
import axios from 'axios';

function DocPicker(props) {
    const { UploadView, UploadViewdoqumnet, Textstyles, Graybackgeoundpdfview } = props;
    const { t } = useTranslation();
    const { Colors } = useTheme();
    const ResumeStyle = useMemo(() => ResumeStyles(Colors), [Colors]);
    const ApplyJobStyle = useMemo(() => ApplyJobStyles(Colors), [Colors]);
    const [fileResponse, setFileResponse] = useState([]);
    const id = props.id

    const handleDocumentSelection = useCallback(async () => {
        try {
            const response = await DocumentPicker.pick({

                type: [types.pdf],
                presentationStyle: 'fullScreen',
            });
            setFileResponse(response);
            props.setFileResponse(response)

            // uploadResume(response[0].type, response[0].name, response[0].uri,)

        } catch (err) {
            console.warn(err);
        }
    }, []);

    async function uploadResume(type, filename, docUri) {
        let data = new FormData();
        data.append('resume_file', {type: type, uri: docUri, name: filename});
        data.append('user_id', id);
        data.append('name', filename);

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://asicjobs.in/api/webapi.php?api_action=candidate_resume_add',
            data: data
        };

        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
            })
            .catch((error) => {
                console.log(error);
            });
    }


    return (
        <View>
            {fileResponse == 0 ?
                <View>
                    {UploadViewdoqumnet &&
                        <TouchableOpacity onPress={handleDocumentSelection} style={ResumeStyle.Graybackgeound} >
                            <Text style={ResumeStyle.Uplodatextstyles}>{t("Upload_A_Doc")}</Text>
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
                :
                <View>
                    {fileResponse.map((file, index) => (
                        <TouchableOpacity onPress={handleDocumentSelection} style={[ResumeStyle.Graybackgeoundpdfview, { ...Graybackgeoundpdfview }]}>
                            <Text
                                key={index.toString()}
                                style={[ResumeStyle.Textstyles, { ...Textstyles }]}
                                numberOfLines={1}
                                ellipsizeMode={'middle'}>
                                {file?.uri}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>
            }
        </View>
    )
}
export default DocPicker;