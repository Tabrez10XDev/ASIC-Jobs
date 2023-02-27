import { StyleSheet } from 'react-native';
import { color } from 'react-native-reanimated';
import { Colors, SH, SW, SF, Fonts } from '../../utils';

export default SaveJobListStyles = (Colors) => StyleSheet.create({
  minstyleviewphotograpgy: {
    height: '100%',
    backgroundColor: '#f5f0f0',
    width: '100%'
  },
  SavedtitleStylers: {
    paddingLeft: SH(20),
    color: Colors.black_text_color,
    fontSize: SF(25),
    fontFamily: Fonts.Poppins_Medium,
  },
  Likestyles: {
    width: SW(80)
  },
  flexviewstylers: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  Trendingdataminview: {
    paddingHorizontal: SH(15),
    marginRight: SH(8),
    borderRadius: 100,
    height: SH(32),
    flexDirection: 'row',
    paddingTop: SH(2),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.theme_backgound,
  },
  Trendingdataminviewtwo: {
    paddingHorizontal: SH(15),
    borderWidth: 1,
    paddingTop: SH(2),
    backgroundColor: Colors.White_text_color,
    borderColor: Colors.theme_backgound,
    marginRight: SH(8),
    borderRadius: 100,
    height: SH(32),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  Colortextstyles: {
    fontSize: SF(14),
    color: Colors.White_text_color,
    fontFamily: Fonts.Poppins_Medium,
  },
  Colortextstylestwo: {
    fontSize: SF(14),
    fontFamily: Fonts.Poppins_Medium,
    color: Colors.theme_backgound,
  },
  Flatliststyles: {
    paddingLeft: SH(15),
    paddingRight: SH(10)
  },
  Flatliststylestwo: {
    paddingHorizontal: SH(15),
  },
  DevelperStyles: {
    width: '60%',
  },
  Widthfifty: {
    width: '40%',
  },
  Flextworow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  Minbgcolorwhite: {
    padding: SH(17),
    marginBottom: SH(20),
    borderRadius: SH(20),
    backgroundColor:Colors.White_text_color,
  },
  Imagestyles: {
    height: SH(52),
    width: SW(50),
    borderRadius: 200,
  },
  Imagwidthtextflex: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  DevelperText: {
    fontFamily: Fonts.Poppins_Medium,
    fontSize: SF(16),
    lineHeight: SH(22),
    color: Colors.black_text_color,
  },
  Normalsmalltext: {
    fontFamily: Fonts.Poppins_Medium,
    fontSize: SF(14),
    color: Colors.gray_text_color,
  },
  Imageviewstyles: {
    paddingRight: SH(10),
  },
  DevelperTexttwo: {
    fontFamily: Fonts.Poppins_Medium,
    fontSize: SF(16),
    lineHeight: SH(22),
    textAlign: 'right',
    color: Colors.black_text_color,
  },
  Normalsmalltexttwo: {
    fontFamily: Fonts.Poppins_Medium,
    fontSize: SF(14),
    textAlign: 'right',
    color: Colors.gray_text_color,
  },
  Twobuttonflexview: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTopWidth:1,
    borderStyle:'dashed',
    borderColor:Colors.light_gray_text_color,
    paddingTop:SH(10)
  },
  Statusbutton: {
    height: SH(30),
    paddingHorizontal: SH(20),
    backgroundColor:Colors.theme_backgound,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 200,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 1,
  },
  Statusbuttontwo: {
    height: SH(30),
    paddingHorizontal: SH(20),
    borderWidth: 1,
    borderColor: Colors.theme_backgound,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 200,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 1,
  },
  Applytextstyles: {
    color: Colors.theme_backgound,
    fontFamily: Fonts.Poppins_Medium,
    fontSize: SF(14),
  },
  Openbuttontextstyles: {
    color: Colors.White_text_color,
    fontFamily: Fonts.Poppins_Medium,
    fontSize: SF(14),
  },
  Fulltimetextstyle: {
    color: Colors.theme_backgound,
    fontFamily: Fonts.Poppins_Medium,
    fontSize: SF(18),
    fontWeight: '700'
  }
});