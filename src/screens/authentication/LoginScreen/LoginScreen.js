import React, { useState,useEffect } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { Authentication } from '../../../styles';
import { Button, Container, Spacing, Input,SweetAlertModal } from '../../../components';
import images from '../../../index';
import { RouteName } from '../../../routes';
import { SH,Validator} from '../../../utils';
import { useDispatch,useSelector } from 'react-redux';
import { Signin_Action } from '../../../redux/action';
const LoginScreen = (props) => {
  const { navigation } = props;
  const dispatch = useDispatch();
  const [submitButton, setSubmitButton] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [message, setMessage] = useState('');
  const {signindata} = useSelector((state)=>state.authReducer);
  const [state, setState] = useState({
    email: "",
    emailError: "",
    password: "",
    passwordError: "",
  });

  const loginValidationSchema = (type) => {
    if(type == "email"){
      setState({...state, emailError: Validator({type:"email","value":state.email}) });
    }else if(type == "password"){
      setState({...state, passwordError: Validator({type:"password","value":state.password}) });
    }
  };

  useEffect(()=>{
  if(state.email && state.password && state.emailError == "" &&  state.passwordError == ""){
    setSubmitButton(false)
    }else{
      setSubmitButton(true)
    }
  },[state])
  
  useEffect(()=>{
    if(signindata.length != 0){
      if(signindata.status == "success"){
        setLoginSuccess(true)
      }
      setMessage(signindata.message)
      setModalVisible(true)
      dispatch(Signin_Action(true));

      }
    },[signindata])

  const submitForm = () => {
    dispatch(Signin_Action(false,state));
  };

  const submitFormSuccess = () => {
    setModalVisible(false);
   loginSuccess && navigation.replace(RouteName.DRAWER_NAVIGATOR);
  }; 

  return (
    <Container>
        <View style={Authentication.textcenterview}>
          <View ></View>
          <View style={Authentication.inputView}>
          <Text style={[Authentication.setpatintlogin]}>Login</Text>
            <Spacing space={SH(30)} />
            <Input
              placeholder="Email"
              onChangeText={(text)=> setState({...state, email: text })}
              value={state.email}
              onBlur={() => loginValidationSchema("email")}
              errorMessage={state.emailError}
            />
           <Spacing space={SH(5)} />
            <Input
              placeholder="Password"
              onChangeText={(text)=> setState({...state, password: text })}
              value={state.password}
              secureTextEntry={true}
              onBlur={() => loginValidationSchema("password")}
              errorMessage={state.passwordError}
            />
          <Spacing space={SH(30)} />
          <View style={Authentication.buttonView}>
            <Button disable={submitButton} title="Login" containerStyle={Authentication.nextButton} onPress={() => submitForm()} />
          </View>
          <Spacing space={SH(25)} />
        </View>
        <View></View>

        </View>
        <SweetAlertModal modalVisible={modalVisible} onPress={()=>submitFormSuccess()}  loginSuccess={loginSuccess} message={message} />
    </Container>
  );
};
export default LoginScreen;
