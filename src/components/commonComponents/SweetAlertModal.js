import React ,{useMemo} from "react";
import { Modal, Text, View ,Image} from "react-native";
import {SweetAlertModalStyle} from '../../styles';
import  Button  from './Button';
// import  LottieIcon  from './LottieIcon';
import propTypes from 'prop-types';
import images from "../../index";

function SweetaelertModal(props) {
    const { message, modalVisible, setModalVisible, onPress, onPressCancel, buttonText, cancelButtonText, iconVisible,loginSuccess=false } = props;

    return <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
            setModalVisible(!modalVisible);
        }}
    >
        <View style={SweetAlertModalStyle.setbgcolorgrsay}>
            <View style={SweetAlertModalStyle.centeredView}>
                <View style={SweetAlertModalStyle.modalView}>
                    {iconVisible &&
                        <View style={SweetAlertModalStyle.setroundcenter}>
                            <View style={SweetAlertModalStyle.checkiconright}>
                            </View>
                        </View>
                    }
                    {loginSuccess &&
                    <Image 
                    style={SweetAlertModalStyle.loginSuccessIcon}
                    source={images.loginSuccess}
                    />
                    }
                    <View style={SweetAlertModalStyle.registertextset}>
                        <Text style={SweetAlertModalStyle.settext}>{message}</Text>
                    </View>
                    <View style={SweetAlertModalStyle.buttonminview}>
                        {onPress && 
                        <View style={SweetAlertModalStyle.setokbutton}>
                            <Button 
                            title={buttonText}
                            onPress={() =>  onPress() }
                            />
                        </View>
                        }
                        {cancelButtonText ?
                            <View style={SweetAlertModalStyle.setokbutton}>
                                <Button title={cancelButtonText}
                                    onPress={() => { onPressCancel() }}
                                />
                            </View>
                            : null
                        }


                    </View>
                </View>
            </View>
        </View>
    </Modal>;
}

SweetaelertModal.defaultProps = {
    message: '',
    setModalVisible: () => { },
    modalVisible: false,
    onPress: () => { },
    onPressCancel: () => { },
    buttonText: 'Ok',
    cancelButtonText: '',
    iconVisible: false
};

SweetaelertModal.propTypes = {
    message: propTypes.string,
    setModalVisible: propTypes.func,
    modalVisible: propTypes.bool,
    onPress: propTypes.func,
    onPressCancel: propTypes.func,
    buttonText: propTypes.string,
    cancelButtonText: propTypes.string,
    iconVisible: propTypes.bool
};

export default SweetaelertModal;
