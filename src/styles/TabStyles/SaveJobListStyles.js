import { StyleSheet } from 'react-native';
import { color } from 'react-native-reanimated';
import { Colors, SH, SW, SF, Fonts } from '../../utils';

export default SaveJobListStyles = (Colors) => StyleSheet.create({
  MinViewScreen: {
    height: '100%',
    backgroundColor: Colors.white_text_color,
    width: '100%',
    marginTop:-10,
  },
  SavedTitleStylers: {
    paddingLeft: SH(20),
    color: Colors.black_text_color,
    fontSize: SF(20),
    fontFamily: Fonts.Poppins_Medium,
  },
  Likestyles: {
    width: SW(80)
  },
  FlexViewStylers: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  TrendingDataMinView: {
    paddingHorizontal: SH(15),
    Marginright: SH(8),
    borderRadius: 100,
    height: SH(32),
    flexDirection: 'row',
    paddingTop: SH(2),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.theme_background_brink_pink,
  },
  TrendingDataMinViewTwo: {
    paddingHorizontal: SH(15),
    borderWidth: 1,
    paddingTop: SH(2),
    backgroundColor: Colors.white_text_color,
    borderColor: Colors.theme_background_brink_pink,
    Marginright: SH(8),
    borderRadius: 100,
    height: SH(32),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  ColorTextStyles: {
    fontSize: SF(14),
    color: Colors.white_text_color,
    fontFamily: Fonts.Poppins_Medium,
  },
  ColorTextStylesTwo: {
    fontSize: SF(14),
    fontFamily: Fonts.Poppins_Medium,
    color: Colors.theme_background_brink_pink,
  },
  FlatListStyles: {
    paddingLeft: SH(15),
    paddingRight: SH(10)
  },
  FlatListStylestwo: {
    paddingHorizontal: SH(15),
  },
  DevelperStyles: {
    width: '60%',
  },
  Widthfifty: {
    width: '40%',
  },
  FlexRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  MinBgColorWhite: {
    padding: SH(17),
    paddingVertical:SH(10),
    marginBottom: SH(13),
    borderRadius: SH(20),
    borderWidth:1.5,
    borderColor:Colors.light_gray_text_color,
    backgroundColor:Colors.white_text_color,
  },
  Imagestyles: {
    height: SH(52),
    width: SW(50),
    borderRadius: 200,
  },
  ImagWidthTextFlex: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  DevelperText: {
    fontFamily: Fonts.Poppins_Medium,
    fontSize: SF(14),
    lineHeight: SH(22),
    color: Colors.black_text_color,
  },
  Normalsmalltext: {
    fontFamily: Fonts.Poppins_Medium,
    fontSize: SF(14),
    color: Colors.gray_text_color,
  },
  ImageViewStyles: {
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
    backgroundColor:Colors.theme_background_brink_pink,
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
    borderColor: Colors.theme_background_brink_pink,
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
    color: Colors.theme_background_brink_pink,
    fontFamily: Fonts.Poppins_Medium,
    fontSize: SF(14),
  },
  Openbuttontextstyles: {
    color: Colors.white_text_color,
    fontFamily: Fonts.Poppins_Medium,
    fontSize: SF(14),
  },
  Fulltimetextstyle: {
    color: Colors.black_text_color,
    fontFamily: Fonts.Poppins_Medium,
    fontSize: SF(16),
    fontWeight: '700'
  }
});