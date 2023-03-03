import { StyleSheet } from 'react-native';
import { SH, SW, SF, Fonts, widthPercent } from '../../utils';

export default HomeTabStyles = (Colors) => StyleSheet.create({
  MinViewScreen: {
    height: '100%',
    backgroundColor: Colors.white_text_color,
    width: '100%',
  },
  widthview: {
    width: '100%',
  },
  PaddingHorizontal: {
    paddingHorizontal: SH(10),
  },
  ChangeTheameBgcolor: {
    height: SH(55),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 200,
    backgroundColor: Colors.light_gray_text_color,
  },
  SetFileChnage: {
    width: '95%',
    height: SH(47),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    color: Colors.gray_text_color,
    fontSize: SF(17),
    fontFamily: Fonts.Poppins_Medium,
    borderRadius: 200,
    backgroundColor: Colors.light_gray_text_color,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 2 : 25,
    },
  },
  Inputwidthset: {
    width: '90%'
  },
  placeholdertextcolor: {
    color: Colors.black_text_color
  },
  Inputstyles: {
    backgroundColor: 'transparent',
    color: Colors.black_text_color,
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 0 : 0,
    },
    shadowOpacity: 0.58,
    shadowRadius: Platform.OS === 'ios' ? 0 : 0,
    elevation: Platform.OS === 'ios' ? 0 : 0,
  },
  IconStyles: {
    width: '10%',
  },
  FlextTextStyles: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  FeaturedTextaStylers: {
    color: Colors.theme_backgound_second_black,
    fontSize: SF(18),
    fontFamily: Fonts.Poppins_Medium,
  },
  Skillstext: {
    color: Colors.theme_backgound_second_black,
    fontSize: SF(18),
    paddingLeft: SH(20),
    fontFamily: Fonts.Poppins_Medium,
  },
  Seealltextstyle: {
    color: Colors.black_text_color,
    fontSize: SF(18),
    fontFamily: Fonts.Poppins_Medium,
  },
  BoxViewStyle: {
    width: SW(300),
    marginRight: SH(20),
    padding: SH(18),
    borderRadius: SH(20),
  },
  BoxFeatred: {
    width: '100%',
    padding: SH(20),
    borderRadius: SH(20),
    marginTop: -20,
  },
  BoxViewStylefeatured: {
    width: '100%',
    padding: SH(20),
    marginTop: SH(5)
  },
  Textcenter: {
    textAlign: 'center',
    color: Colors.black_text_color,
    fontFamily: Fonts.Poppins_Medium,
    fontSize: SF(16),
  },
  Paddingright: {
    marginRight: SH(20),
    backgroundColor: Colors.lavender_blush_color,
    width: SW(200),
    padding: SH(10),
    borderRadius: SH(10),
  },
  FlatListStyles: {
    paddingHorizontal: SH(10),
    paddingLeft: SH(0),
  },
  Flexrowgraf: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: SH(40),
  },
  Recommendedboxleft: {
    paddingHorizontal: SH(10),
  },
  Imagestyles: {
    width: SW(40),
    height: SH(43),
    borderRadius: SH(10)
  },
  FlexTextsrosewt: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  SetImagMinView: {
    width: '23%',
  },
  Textviewwidth: {
    width: '77%',
  },
  Producttextstyle: {
    color: Colors.white_text_color,
    fontFamily: Fonts.Poppins_Medium,
    fontSize: SF(16),
    lineHeight: SH(20),
  },
  Producttextstyletwo: {
    color: Colors.white_text_color,
    fontFamily: Fonts.Poppins_Regular,
    fontSize: SF(14),
    lineHeight: SH(22)
  },
  buttonstyle: {
    height: SH(30),
    paddingVertical: SH(0),
    width: widthPercent(30),
    paddingHorizontal: SH(10),
    backgroundColor: Colors.mauvelous_Color
  },
  buttonstyletwo: {
    height: SH(30),
    paddingVertical: SH(0),
    width: widthPercent(19),
    backgroundColor: Colors.mauvelous_Color,
  },
  buttontrxtstylers: {
    fontSize: SF(12),
  },
  Flexthreebutton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%'
  },
  Flextextyearly: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  YearlyTextset: {
    fontSize: SF(14),
    fontFamily: Fonts.Poppins_Medium,
    color: Colors.white_text_color,
  },
  PaddingHorizontal: {
    paddingHorizontal: SH(10),
  },
  CenterIcon: {
    padding: SH(10),
    flexDirection: 'row',
    alignItems: 'center',
    height: SH(130),
    justifyContent: 'center',
  },
  Imagestylesbox: {
    height: SH(70),
    width: SW(70),
  },
  Textcentertewo: {
    textAlign: 'center',
    color: Colors.gray_text_color,
    fontFamily: Fonts.Poppins_Medium,
    fontSize: SF(15),
  },
  LottieStylesset: {
    width: SW(130),
  },
  Postionbgcolorset: {
    backgroundColor: Colors.theme_background_brink_pink,
    paddingHorizontal: SH(17),
    position: 'absolute',
    top: 0,
    right: 0,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 5,
  },
  Topboxtextstyle: {
    color: Colors.gray_text_color,
    fontFamily: Fonts.Poppins_Medium,
    textAlign: 'center'
  },
  ParsanTegText: {
    color: Colors.black_text_color,
    fontFamily: Fonts.Poppins_Medium,
    textAlign: 'center',
    fontWeight: '700'
  },
  PhpText: {
    color: Colors.gray_text_color,
    fontFamily: Fonts.Poppins_Medium,
    textAlign: 'center',
    fontWeight: '600'
  }
});