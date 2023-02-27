import { StyleSheet } from 'react-native';
import { SH, SW, SF, Fonts, widthPercent } from '../../utils';

export default ResumeStyles = (Colors) => StyleSheet.create({
  minstyleviewphotograpgy: {
    height: '100%',
    backgroundColor: Colors.Apply_job_light_gray,
    width: '100%'
  },
  PaddingHorizontal: {
    paddingHorizontal: SH(20),
  },
  Resuametextstyles: {
    color: Colors.black_text_color,
    fontFamily: Fonts.Poppins_Medium,
    fontSize: SF(20),
  },
  Borderview: {
    borderWidth: 2,
    borderColor: Colors.theme_backgound,
    height: SH(300),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    borderStyle: 'dashed',
    borderRadius: 10,
  },
  Graybackgeound: {
    backgroundColor: Colors.lightgrey,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: SH(70),
    width: '100%',
    borderRadius: 10,
  },
  Graybackgeoundpdfview: {
    backgroundColor: Colors.lightgrey,
    width: SW(300),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: SH(70),
    borderRadius: 10,
  },
  Uplodatextstyles: {
    color: Colors.theme_backgound,
    fontFamily: Fonts.Poppins_Medium,
    fontSize: SF(20)
  },
  Paregraphtextstyle: {
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
    backgroundColor: Colors.White_text_color,
    borderWidth: 1,
    borderColor: Colors.theme_backgound,
  },
  buttontext: {
    color: Colors.theme_backgound,
  },
  buttonStylestwo: {
    width: '47%',
  },
  Buttonsave: {
    position: 'absolute',
    bottom: 10,
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