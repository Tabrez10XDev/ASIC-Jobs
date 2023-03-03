import { StyleSheet } from 'react-native';
import { SH, SW, SF, Fonts } from '../../utils';

export default ResumeStyles = (Colors) => StyleSheet.create({
  MinViewScreen: {
    height: '100%',
    backgroundColor: Colors.ghost_white_color,
    width: '100%'
  },
  PaddingHorizontal: {
    paddingHorizontal: SH(20),
  },
  ResuameTextStyles: {
    color: Colors.black_text_color,
    fontFamily: Fonts.Poppins_Medium,
    fontSize: SF(20),
  },
  BorderView: {
    borderWidth: 2,
    borderColor: Colors.theme_background_brink_pink,
    height: SH(300),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    borderStyle: 'dashed',
    borderRadius: 10,
  },
  Graybackgeound: {
    backgroundColor: Colors.light_gray_text_color,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: SH(70),
    width: '100%',
    borderRadius: 10,
  },
  Graybackgeoundpdfview: {
    backgroundColor: Colors.light_gray_text_color,
    width: SW(300),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: SH(70),
    borderRadius: 10,
  },
  Uplodatextstyles: {
    color: Colors.theme_background_brink_pink,
    fontFamily: Fonts.Poppins_Medium,
    fontSize: SF(20)
  },
  ParegraphTextStyle: {
    color: Colors.gray_text_color,
    fontFamily: Fonts.Poppins_Medium,
    fontSize: SF(17),
    position: 'absolute',
    top: SH(30),
    width: '90%',
    textAlign: 'center'
  },
  buttonStyle: {
    position: 'absolute',
    bottom: SH(30),
    width: '50%',
    textAlign: 'center',
  },
  Flexbuttonview: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttonStyles: {
    width: '47%',
    backgroundColor: Colors.white_text_color,
    borderWidth: 1,
    borderColor: Colors.theme_background_brink_pink,
  },
  buttontext: {
    color: Colors.theme_background_brink_pink,
  },
  buttonStylestwo: {
    width: '47%',
  },
  Buttonsave: {
    position: 'absolute',
    bottom: SH(10),
    width: '90%',
  },
  Savecenterbutton: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  Textstyles: {
    color:Colors.black_text_color,
    fontFamily:Fonts.Poppins_Medium,
    fontSize:SF(20)
  }
});