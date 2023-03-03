import { StyleSheet } from 'react-native';
import { Fonts, SF, SH, SW } from '../../utils';

export default Login = (Colors) => StyleSheet.create({
  container: {
    width: '100%',
    height: 'auto',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  countryCodePickerView: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    fontSize: SF(12),
  },
  LoginText: {
    fontSize: SF(27),
    color: Colors.theme_background_brink_pink,
    textAlign: 'center',
    fontFamily: Fonts.Poppins_Medium,
  },
  imagesetus: {
    width: SW(150),
    height: SH(150),
  },
  textStyle: {
    color: '#263238',
    fontSize: SF(17),
    fontFamily: Fonts.Poppins_Medium,
  },
  registerTextStyle: {
    fontSize: SF(17),
    fontFamily: Fonts.Poppins_Bold,
    color: Colors.theme_background_brink_pink,
  },
  ViewTextStyle: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '100%',
  },
  MinViewScreen: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  InputSpaceView: {
    width: '100%'
  },
  simplestatetext: {
    fontSize: SF(18),
    fontFamily: Fonts.Poppins_Medium,
    width: SW(60),
    borderBottomColor: Colors.theme_background_brink_pink,
  },
  simplestatetexttwoset: {
    fontSize: SF(18),
    fontFamily: Fonts.Poppins_Medium,
    paddingRight: SH(20),
    width: '100%',
    borderBottomColor: Colors.theme_background_brink_pink,
  },
  minviewtext: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderStyle: 'dashed',
  },
  SetHeightmodal: {
    height: '100%',
    overflow: 'hidden',
  },
  addplacestextset: {
    paddingRight: SH(20),
    fontSize: SF(14),
    fontFamily: Fonts.Poppins_Medium,
    color: Colors.theme_background_brink_pink,
    borderBottomColor: Colors.theme_background_brink_pink,
  },
  setserachbgcolorview: {
    position: 'relative',
    zIndex: 4,
    paddingTop: SH(10),
    paddingHorizontal: SH(10),
    paddingBottom: SH(10),
    backgroundColor: Colors.theme_background_brink_pink,
  },
  LoginButton: {
    paddingVertical: SH(0)
  },
  TopSpaceRegister: {
    paddingTop: SH(50),
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '100%',
    paddingBottom: SH(20),
  },
  setregistertext: {
    fontFamily: Fonts.Poppins_Bold,
    fontWeight: '700',
    fontSize: SF(25),
    color: Colors.theme_background_brink_pink,
  },
  TopSpaceRegisterTwo: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '100%',
  },
  FirstNameTextStyle: {
    color: Colors.black_text_color,
    fontSize: SF(15),
    opacity: 0.7,
    fontFamily: Fonts.Poppins_Medium,
  },
  MinVieCountry: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: SH(12),
    width: '100%',
    height: SH(47),
    color: Colors.gray_text_color,
    fontSize: SF(17),
    fontFamily: Fonts.Poppins_Medium,
    borderRadius: 7,
    backgroundColor: Colors.white_text_color,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 2 : 25,
    },
    shadowOpacity: 0.58,
    shadowRadius: Platform.OS === 'ios' ? 2 : 25,
    elevation: Platform.OS === 'ios' ? 1 : 2,
  },
  DropDownIconFlex: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRightWidth: 1,
    paddingRight:SH(20),
    borderRightColor: Colors.light_gray_text_color,
  },
  dropdowniconright: {
    position: 'relative',
    left: 9,
  },
  inputstyle: {
    backgroundColor: 'transparent',
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 2 : 0,
    },
    shadowOpacity: 0.58,
    shadowRadius: Platform.OS === 'ios' ? 2 : 0,
    elevation: Platform.OS === 'ios' ? 1 : 0,
  },
  FlexRowChekBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
  },
  SimpleTextStyle: {
    fontSize: SF(11),
    paddingLeft:SH(15),
    paddingTop:SH(2),
    fontFamily: Fonts.Poppins_Medium,
    color: Colors.black_text_color
  },
  bluecolor: {
    color:Colors.blue_color,
  },
  ButtonView: {
    width: '100%'
  },
  TopSpace: {
    width: '100%',
  },
  AlredyAndLoginBox: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  MemberTextStyle: {
    fontSize: SF(15),
    fontFamily: Fonts.Poppins_Medium,
    textAlign: 'center',
    color: Colors.black_text_color,
  },
  LoginScreenText: {
    paddingLeft: SH(10),
    fontFamily: Fonts.Poppins_Bold,
    fontSize: SF(16),
    color: Colors.theme_background_brink_pink,
  },
  AccountButton: {
    width: '100%',
  },
  MinViewScreen: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    backgroundColor: Colors.white_text_color,
  },
  keybordTopViewStyle: {
    height: '100%',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  MinFlexView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  MinViewSecond: {
    width: '90%',
    marginHorizontal: '5%',
  },
  LoginButton: {
    width:'100%'
  },
  MinViewBgColor: {
    backgroundColor:Colors.white_text_color,
    height:'100%',
  },
  Forgetpasswordstyles: {
    fontFamily:Fonts.Poppins_Medium,
    color:Colors.black_text_color,
    fontSize:SF(18),
    fontWeight:'600'
  },
  TabMinview: {
    width: '100%',
    height: '100%',
    paddingTop: SH(20),
    paddingHorizontal: SH(20),
    backgroundColor: Colors.white_text_color,
  },
  InputUnderLine: {
    backgroundColor: Colors.light_gray_text_color,
    color: Colors.black_text_color,
    width: '100%',
    height: SH(58),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: SH(10),
    fontFamily: Fonts.Poppins_Medium,
    paddingHorizontal: SH(15),
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 0 : 25,
    },
    shadowOpacity: 0.58,
    shadowRadius: Platform.OS === 'ios' ? 0 : 25,
    elevation: Platform.OS === 'ios' ? 0 : 0,
  },
  Marginright: {
    paddingRight: SH(6),
  },
  InputTextStyle: {
    fontSize: SF(16),
    fontFamily: Fonts.Poppins_Medium,
    width: '100%',
    backgroundColor:'transparent',
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 0 : 0,
    },
    shadowOpacity: 0.58,
    shadowRadius: Platform.OS === 'ios' ? 0 : 0,
    elevation: Platform.OS === 'ios' ? 0 : 0,
  },
  SeTextStyleForget: {
    fontSize: SF(15),
    fontFamily: Fonts.Poppins_Medium,
    color: Colors.black_text_color,
  },
  CenterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
});