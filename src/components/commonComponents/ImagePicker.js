import React, { useMemo, useState } from 'react';
import { TouchableOpacity, StyleSheet, Image, View } from 'react-native';
import PropTypes from 'prop-types';
import { SH, SF, SW, widthPercent, Colors } from '../../utils';

import { launchImageLibrary } from 'react-native-image-picker';

function ImgPicker(props) {
    const { userimagstyle, text } = props;
    const [imgpathselect, SetImgpathselect] = useState('');
    const [filePath, setFilePath] = useState('');
    const [AlertData, setAlertData] = useState(false);
    const Styles = useMemo(
        () =>
            StyleSheet.create({
                userimagstyle: {
                    width: Platform.OS === 'ios' ? '30%' : '30%',
                    height: Platform.OS === 'ios' ? 100 : SH(100),
                    overflow: 'hidden',
                    borderRadius: 10,
                    position: "absolute",
                    alignSelf: "center",
                },
                userimagstyletwo: {
                    width: Platform.OS === 'ios' ? 100 : '100%',
                    height: Platform.OS === 'ios' ? 100 : SH(200),
                    borderRadius: 10,
                },
                borderroundimage: {
                    position: 'relative',
                    width: SW(153),
                    height: SH(153)
                },
                mainView: {
                    position: "relative",
                    flexDirection: "column",
                    alignItems: "baseline",
                },
                Setwidthminview: {
                    width: '100%'
                }
            }),
        [],
    );
    const chooseFile = () => {
        let options = {
            mediaType: 'photo',
            cropping: true,
            includeBase64: false,
            saveToPhotos: true,
            maxWidth: 200,
            maxHeight: 200,
            quality: 10,
            allowsEditing: true,
        };
        launchImageLibrary(options, (response) => {
            console.log(response, '=====>')
            if (response.didCancel) {
                setAlertData(current => !current)
                return;
            }
            setFilePath(response.assets[0].base64);
            SetImgpathselect(response.assets[0].uri);
        });
    };
    return (
        <View style={Styles.mainView}>
            <TouchableOpacity>
                {imgpathselect ?
                    <TouchableOpacity onPress={() => chooseFile()}>
                        <Image style={[Styles.userimagstyle, { ...userimagstyle }]} resizeMode="cover" source={{ uri: imgpathselect }} />
                    </TouchableOpacity>
                    :
                    null
                }
            </TouchableOpacity>
        </View>
    );
}
ImgPicker.defaultProps = {
    userImage: '',
    noImageType: '',
    onPress: () => { }
};

ImgPicker.propTypes = {
    userImage: PropTypes.string,
    noImageType: PropTypes.string,
    onPress: PropTypes.func,
};

export default ImgPicker;
