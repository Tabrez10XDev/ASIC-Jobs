import { StyleSheet } from 'react-native';
import { SF, SH, SW, Fonts, Colors } from '../../utils';

export default StyleSheet.create({
  textcenterview: {
    height: '100%',
    position: 'relative',
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingHorizontal: SW(20),
    backgroundColor:Colors.theme_backgound
  },
  inputView: {
    paddingHorizontal: SH(30)
  },
  forgotText: {
    color: Colors.white,
    alignSelf: 'flex-end',
    paddingTop: SH(10),
    fontFamily: Fonts.RobotoCondensed_Regular
  },
  nextButton: {
    width: SW(150),
    alignSelf: 'flex-end'
  },
  setpatintlogin: {
    fontSize: SF(25),
    textAlign: 'center',
    fontFamily: Fonts.Poppins_Medium,
    color:Colors.white
  },
  pleseentername: {
    color: Colors.red,
    fontSize: SF(15),
    fontFamily: Fonts.Poppins_Medium,
    textAlign: 'left',
    width: '100%',
  },
});