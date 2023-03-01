import React,{useEffect, useState} from 'react';
import { SweetAlertModal } from '.';
import { useDispatch, useSelector } from 'react-redux';
import { error_handling_action } from '../../redux/action';

const HandlingError = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();

  const { errorHandling } = useSelector((state) => state.commonReducer);
  useEffect(() => { 
  if(errorHandling.status == "error"){
    setModalVisible(true)
    setMessage(errorHandling.message)
     dispatch(error_handling_action(true))
  }
  }, [errorHandling]);

  return (
    <SweetAlertModal
    modalVisible={modalVisible}
    message={message}
    buttonText="OK"
    onPress= {() => setModalVisible(false)}
    />
  );
};

export default HandlingError;
