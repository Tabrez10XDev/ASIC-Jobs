import { StyleSheet, Dimensions } from 'react-native';
import { SF, Fonts, Colors, widthPercent, SW } from '../../utils';
const { height: SCREEN_HEIGHT } = Dimensions.get("window");

const IS_IPHONE_X = SCREEN_HEIGHT === 812 || SCREEN_HEIGHT === 896;
const STATUS_BAR_HEIGHT = 0;
const HEADER_HEIGHT = 64;
const NAV_BAR_HEIGHT = HEADER_HEIGHT - STATUS_BAR_HEIGHT;

export default ProfileTabStyles = (Colors) => StyleSheet.create({
  container: {
    flex: 1
  },
  contentContainer: {
    flexGrow: 1
  },
  navContainer: {
    height: HEADER_HEIGHT,
    marginHorizontal: 10
  },
  statusBar: {
    height: STATUS_BAR_HEIGHT,
    backgroundColor: "transparent"
  },
  navBar: {
    height: NAV_BAR_HEIGHT,
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "transparent",
    paddingRight: 11,
  },
  titleStyle: {
    color: Colors.White_text_color,
    fontWeight: "bold",
    fontSize: SF(18)
  },
  flexDirectionrowskipnext: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: widthPercent(100),
    marginTop: SW(75),
    paddingHorizontal: '5%',
    alignItems: 'center',
  },
  homeheadertext: {
    color: 'white',
    fontWeight: '700',
    fontSize: 25,
    position: 'relative',
    top: 25,
  },
  whilistminbody: {
    width: '100%',
    marginTop: '5%',
    height: '100%'
  },
  imagcenter: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
  allisonperry: {
    color: '#000',
    fontFamily: Fonts.Poppins_Medium,
    textAlign: 'center',
    fontSize: 18,
    marginTop: 10,
  },
  profiledetailesminview: {
    width: '90%',
    marginHorizontal: '5%',
  },
  phonenumberandicon: {
    marginTop: '0%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    paddingBottom: 13,
  },
  iconstyleseacrch: {
    color:'gray',
  },
  setbgwhiteshadow: {
    backgroundColor: Colors.White_text_color,
    width: '100%',
    textAlign: 'center',
    height: 60,
    borderRadius: 7,
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: 'center',
    shadowColor: "#000",
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 2 : 25,
    },
    shadowOpacity: 0.58,
    shadowRadius: Platform.OS === 'ios' ? 2 : 25,
    elevation: Platform.OS === 'ios' ? 1 : 2,
  },
  setbgwhiteshadowinputmodal: { 
    width: '100%',
    height: 50,
    borderRadius: 7,
    paddingLeft: 10,
    marginTop: 15,
    fontSize:17,
    fontFamily:Fonts.Poppins_Medium,
    marginBottom: 15,
    paddingRight: 10,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    shadowColor: 'gray',
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 2 : 5,
      minHeight: '100%',
    },
    shadowOpacity: 1,
    shadowRadius: Platform.OS === 'ios' ? 2 : 50,
    elevation: Platform.OS === 'ios' ? 1 : 6,
    overflow: 'hidden',   
    borderRadius: 7,
    textAlignVertical: 'bottom'
  },
  phonenumberandicontWO: {
    marginTop: '6%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '2%',
    paddingBottom: 13,
  },
  editprofileset: {
    marginTop: '8%',
    fontFamily: Fonts.Poppins_Medium,
    // color:Color.gray,
    color: '#000',
    fontSize: 19,
    paddingBottom: 13,
  },
  phonenumbertext: {
    color: 'black',
    fontSize: 17,
    fontFamily: Fonts.Poppins_Medium,
  },
  phonenumbertexttwo: {
    color: 'black',
    fontFamily: Fonts.Poppins_Medium,
    textAlign: 'center',
    fontSize: 20,
  },
  digitnumbertext: {
    color: 'gray',
    fontSize: 17,
    fontFamily: Fonts.Poppins_Medium,
  },
  logoutdivset: {
    textAlign: 'center',
    color: '#000',
    borderBottomColor: 'red',
    marginTop: 10,
    fontSize: SF(20),
    fontFamily: Fonts.Poppins_Medium,
    paddingBottom: 15,
  },
  iconlessthanback: {
    color: Colors.black_text_color,
    flexDirection: 'row',
    justifyContent: 'center',
    marginRight: 15,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'gray',
   
  },
  icomvlose: {
    position: 'relative',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    top: -15,
  },
  modalView: { 
    backgroundColor: Colors.White_text_color,
    borderRadius: 10,
    width: '90%',
    shadowColor: "#000",
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
  },
  setshadowstylemodaltwo: {
   
    padding:2,
    width: '100%',
  },
  setiallpaddingmodal: {
    paddingTop: 30,
    paddingBottom: 15,
    paddingHorizontal:15,
    borderRadius: 100,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: Colors.White_text_color,
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    textAlign: 'center',
    color: '#000',
    fontSize: 22,
    fontFamily: Fonts.Poppins_Medium,
    marginTop: -10,
   
  },
  modalTexttwo: {
    textAlign: 'center',
    color: 'black',
    fontSize: 22,
    fontFamily: Fonts.Poppins_Medium,
    marginTop: -10,
    paddingBottom:20,
  },
  marginrightsetview: {
    width:'48%'
  },
  marginright: {
    width:'48%'
  },
  togglrswitchflex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  buttonset: {
    borderWidth: 1,
    borderColor: 'hsl(216.8, 90.7%, 38%)',
    backgroundColor: 'hsl(216.8, 90.7%, 38%)',
    width: '90%',
    borderRadius: 222,
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },
  buttonsetwhite: {
    borderWidth: 1,
    borderColor: 'hsl(216.8, 90.7%, 38%)',
    backgroundColor: 'white',
    width: '83%',
    borderRadius: 222,
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },
  buttonTextStyleSignWithNumber: {
    color: 'hsl(216.8, 90.7%, 38%)',
    fontFamily: Fonts.Poppins_Medium,
    fontSize: 18,
  },
  buttonTextStyleSignWithNumber2: {
    color: 'white',
    fontFamily: Fonts.Poppins_Medium,
    fontSize: 18,
  },
  buttonTextStyleSignWithNumbertwo: {
    color: 'white',
    fontFamily: Fonts.Poppins_Medium,
    fontSize: 18,
  },
  buttonTextStyleSignWithNumber2two: {
    color: 'hsl(216.8, 90.7%, 38%)',
    fontFamily: Fonts.Poppins_Medium,
    fontSize: 18,
  },
  paregraphtextmodal: {
    textAlign: 'center',
    fontSize: 16,
    paddingTop: 15,
    paddingBottom: 25,
    color: 'gray',
    fontWeight: '700',
  },
  input: {
    fontFamily: Fonts.Poppins_Medium,
    // height: 40,
    width: '100%',
    fontSize: 17,
  },
  buttonsetmoddletwobutton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingTop:10,
  },
  hometextheadercolor: {
    color: 'hsl(214.3, 83.2%, 51%)',
    fontSize: 23,
    fontWeight: '700',
    marginTop: 12,
    paddingLeft: 5,
    textAlign: 'center',
  },
  nabarview: {
    flexDirection: 'row',
    paddingLeft: 50,
  },
  minviewarroandtitle: {
    flexDirection: 'row',
    paddingLeft: 10,
    alignItems: 'center',
    paddingTop: Platform.OS === 'ios' ? 15 : 0,
  },
  leftarrostyle: {
    paddingTop: 15,
    marginRight: 20,
    color: 'hsl(214.3, 83.2%, 51%)',
  },
  settingviewset: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
    borderBottomWidth: 0.5,
    borderBottomColor:'lightgray',
    paddingBottom: 12,
    width:'100%'
  },
  iconandtextflexset: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between',
    width:'100%'
  },
  bgcolorser: {
    backgroundColor: 'white',
    width: '100%',
    borderRadius: 20,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  spaceview: {
    marginTop: 12,
  },
  inputUnderLine: {
    backgroundColor: 'white',
    width: Platform.OS === 'ios' ? '95%' : '90%',
    height: 50,
    borderRadius: 7, 
    flexDirection: 'row',
    fontFamily: 'DMSans-Medium',
    paddingLeft: 15,
    width:'100%',
    paddingRight: 45,   
    backgroundColor: '#fff',
    shadowColor: 'gray',
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 2 : 5,
      minHeight: '100%',
    },
    shadowOpacity: 1,
    shadowRadius: Platform.OS === 'ios' ? 2 : 50,
    elevation: Platform.OS === 'ios' ? 1 : 6,
    overflow: 'hidden',   
    borderRadius: 7,
  },
  inputviewset: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  textpassworedsert: {
    color: "black",
    fontFamily: 'DMSans-Medium',
    width: '100%',
    fontSize:16,
    position:'relative',
    left:-5,
  },
  eyeiconset: {
    color: 'gray'
  },
  bgwhitelogout: {
    backgroundColor:'white',    
  },
  iconProfileScreenStyleeacrch: {
    color: Colors.black
  },
  singlebuttonstyles: {
    borderColor: Colors.theme_backgound,
     backgroundColor: 'white',
  },
  Singlebuttontext: {
    color:Colors.theme_backgound,
  }
});