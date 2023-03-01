import React, { useMemo } from 'react';
import { Modal, View, StyleSheet, TouchableOpacity } from 'react-native';
import IconEA from 'react-native-vector-icons/Entypo';
import { Colors, SH, SW } from '../../utils';
function ModalComponent(props) {
  const { children, animationType = "slide", transparent = true, visible = false, setModalVisible } = props;

  return <Modal
    animationType={animationType}
    transparent={transparent}
    visible={visible}
    onRequestClose={() => {
      setModalVisible(!visible);
    }}
  >
    <View style={modalStyle.mainView} >
      <View style={modalStyle.modalInnerView}>
        <TouchableOpacity
        style={modalStyle.close}
        onPress={()=>{setModalVisible(false)}}
        >
        <IconEA name='circle-with-cross' size={SH(32)} color={Colors.black}  />
        </TouchableOpacity>
        {children}
      </View>
    </View>
  </Modal>;
}

const modalStyle = StyleSheet.create({
  mainView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: '100%',
    backgroundColor: 'gray',
    opacity: Platform.OS === 'ios' ? 30 : 0.9,
  },
  modalInnerView: {
    width: '90%',
    backgroundColor: Colors.white,
    borderRadius: SH(10),
    paddingHorizontal: SW(10),
    paddingVertical: SH(10),
    maxHeight:"90%"
  },
  close:{
    position:'absolute',
    right:SW(-10),
    top:SH(-10),
    zIndex:1,
    backgroundColor:Colors.white,
    borderRadius:SH(30)
  }
}
);
export default ModalComponent;

