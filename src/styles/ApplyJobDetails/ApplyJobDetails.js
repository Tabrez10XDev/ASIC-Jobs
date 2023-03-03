import { StyleSheet } from 'react-native';
import { Colors, SH, SW, SF, Fonts, widthPercent } from '../../utils';

export default ApplyJobStyles = (Colors) => StyleSheet.create({
  MinViewScreen: {
    height: '100%',
    backgroundColor: Colors.white_text_color,
    width: '100%'
  },
  MinViewScreen: {
    height: '100%',
    backgroundColor: Colors.white_text_color,
    width: '100%'
  },
  MinBgColorWhite: {
    backgroundColor: Colors.white_text_color,
    padding: SH(20),
    width: widthPercent(43),
    paddingRight: SH(25),
    borderRadius: SH(10),
    marginBottom: SH(20),
    marginRight:SH(5),
    marginLeft:SH(10),
    borderWidth:1,
    borderColor:Colors.light_gray_text_color,
  },
  PaddingHorizontal: {
    paddingHorizontal: SH(10),
  },
  FlexCenterAlign: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: SH(20),
    borderRadius: SH(10),
    justifyContent: 'space-between',
    width: '100%',
    backgroundColor: Colors.white_text_color,
    borderWidth:1,
    borderColor:Colors.light_gray_text_color,
  },
  UxDisignerStyless: {
    height: SH(52),
    width: SW(50),
    borderRadius: 400
  },
  FlexImageText: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  LeftPadding: {
    paddingLeft: SH(20)
  },
  Uxdesignertext: {
    color: Colors.black_text_color,
    fontFamily: Fonts.Poppins_Medium,
    fontSize: SF(15),
    lineHeight: SH(22),
  },
  UxDesignerTextTWO: {
    color: Colors.gray_text_color,
    fontFamily: Fonts.Poppins_Medium,
    fontSize: SF(15),
    lineHeight: SH(22),
  },
  TextLeft: {
    color: Colors.gray_text_color,
    fontFamily: Fonts.Poppins_Medium,
    fontSize: SF(15),
    lineHeight: SH(22),
    textAlign: 'right'
  },
  SelectProfileText: {
    color: Colors.black_text_color,
    fontFamily: Fonts.Poppins_Medium,
    fontSize: SF(22),
  },
  SelectProfileTextBlack: {
    color: Colors.black_text_color,
    fontFamily: Fonts.Poppins_Medium,
    fontSize: SF(18),
  },
  CenterImages: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  UxDesigneText: {
    color: Colors.black_text_color,
    fontFamily: Fonts.Poppins_Medium,
    fontSize: SF(17),
    textAlign: 'center'
  },
  UxDesigneTextSmall: {
    color: Colors.gray_text_color,
    fontFamily: Fonts.Poppins_Medium,
    fontSize: SF(13),
    textAlign: 'center'
  },
  Postionset: {
    position: 'absolute',
    right: SH(20),
    top: SH(10)
  },
  Applybuttonstyles: {
    height: SH(30),
    width: SW(100),
    backgroundColor: Colors.Plump_purple_color,
  },
  buttonbgcolorview: {
    height: SH(30),
    width: SW(100),
    backgroundColor: Colors.light_carmine_pink_color,
  },
  buttontextstyle: {
    fontSize: SF(14)
  },
  ResumeTextStyles: {
    color: Colors.black_text_color,
    fontFamily: Fonts.Poppins_Medium,
    fontSize: SF(15),
  },
  FlexRowChekBox: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '48%',
    padding: SH(10),
    backgroundColor: Colors.white_text_color,
    borderRadius: 10,
    borderWidth:1,
    borderColor:Colors.light_gray_text_color,
  },
  TextViewStyles: {
    paddingLeft: SH(25)
  },
  Minviewtwoflex: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  TextAreaView: {
    height: SH(100),
    backgroundColor: Colors.white_text_color,
    width: '65%',
    borderRadius: 10,
    borderWidth:1,
    borderColor:Colors.light_gray_text_color,
  },
  Inputstyles: {
    paddingHorizontal: SH(12),
    width: '100%',
    paddingTop: SH(12),
    paddingBottom: SH(7),
    height: SH(47),
    color: Colors.gray_text_color,
    fontSize: SF(17),
    fontFamily: Fonts.Poppins_Medium,
    borderRadius: 7,
    backgroundColor: Colors.white_text_color,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 2 : 0,
    },
    shadowOpacity: 0.58,
    shadowRadius: Platform.OS === 'ios' ? 2 : 0,
    elevation: Platform.OS === 'ios' ? 1 : 0,
  },
  Uploadview: {
    height: SH(100),
    backgroundColor: Colors.white_text_color,
    width: '30%',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth:1,
    borderColor:Colors.light_gray_text_color,
    justifyContent: 'center'
  },
  Uploadtextstyle: {
    color: Colors.black_text_color,
    fontFamily: Fonts.Poppins_Medium,
    fontSize: SF(17),
    textAlign: 'center'
  },
  Iconcenter: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  Flexcedntyer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  ButtonHorizontal: {
    position: 'absolute',
    paddingHorizontal: SH(20),
    width: '100%',
    bottom: SH(10),
  },
  Trackapliactiontext: {
    color: Colors.black_text_color,
    fontFamily: Fonts.Poppins_Medium,
    fontSize: SF(22),
  },
  Borderlinevertical: {
    height: SH(65),
    width: 2,
    backgroundColor: Colors.theme_background_brink_pink,
  },
  FlexCenterLine: {
    flexDirection: 'row',
    width: SW(100),
  },
  IconStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%'
  },
  SetWidth: {
    width: '100%'
  },
  DashViewStyles: {
    borderWidth: 1,
    height: SH(65),
    borderStyle: 'dashed',
  },
  Flextext: {
    flexDirection: 'row',
  },
  OfferTextStyle: {
    color: Colors.black_text_color,
    fontFamily: Fonts.Poppins_Medium,
    fontSize: SF(18),
  },
  NotyetText: {
    color: Colors.gray_text_color,
    fontFamily: Fonts.Poppins_Medium,
    fontSize: SF(16),
  },
  SetHeight: {
    width: '72%'
  },
  WidthFile: {
    width: '100%',
  },
  FullWidthFlewx: {
    flexDirection: 'row',
    backgroundColor: Colors.white_text_color,
  },
  Backgroundcolorview: {
    paddingBottom: SH(20),
    paddingTop:SH(20),
    backgroundColor: Colors.theme_background_brink_pink,
    width: '100%',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  Imagestyles: {
    height: SH(83),
    width: SW(80),
    borderRadius: 200,
  },
  Centerimage: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  buttonwidthg33: {
    width: '40%',
    backgroundColor: Colors.mauvelous_Color,
    borderRadius: 200,
    height: SH(40),
  },
  buttonwidthg25: {
    width: '25%',
    backgroundColor: Colors.mauvelous_Color,
    borderRadius: 200,
    height: SH(34),
  },
  Flexrowcenter: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: SH(20),
    justifyContent: 'space-between',
  },
  ProductDesigner: {
    textAlign: 'center',
    color: Colors.white_text_color,
    fontFamily: Fonts.Poppins_Medium,
    fontSize: SF(19),
  },
  Googleteam: {
    textAlign: 'center',
    color: Colors.white_text_color,
    fontFamily: Fonts.Poppins_Medium,
    fontSize: SF(19),
    opacity: 0.8,
  },
  textstyles: {
    fontSize: SF(14),
    fontWeight:'700'
  },
  ProductDesignertwo: {
    textAlign: 'center',
    color: Colors.white_text_color,
    fontFamily: Fonts.Poppins_Medium,
    fontSize: SF(17),
  },
  FlexRowText: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: SH(10),
    backgroundColor: Colors.white_text_color,
    height: SH(50),
    marginHorizontal: SH(10),
    borderRadius: 200,
  },
  Tabtextstyles: {
    color: Colors.black_text_color,
    fontFamily: Fonts.Poppins_Medium,
    fontSize: SF(17),
    fontWeight: '800',
  },
  TabtextstylesActive: {
    color: Colors.gray_text_color,
    fontFamily: Fonts.Poppins_Medium,
    fontSize: SF(17),
    fontWeight: '800',
  },
  Centerviesecond: {
    backgroundColor: Colors.white_text_color,
    height: SH(35),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 207,
  },
  Centerviesecondtwo: {
    backgroundColor: 'transparent',
    height: SH(35),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 207,
  },
  Discriptiontextview: {
    width: widthPercent(7),
  },
  Flexrowdescription: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: SH(20),
  },
  parehraphview: {
    width: widthPercent(86),
  },
  ParegraphTextStyles: {
    fontFamily: Fonts.Poppins_Medium,
    fontSize: SF(17),
    color: Colors.black_text_color,
    opacity: 0.7,
  },
  whiteboxwhishlist: {
    width: '100%',
    borderBottomWidth: 0.5,
    paddingHorizontal: SH(20),
    borderStyle: 'dashed',
  },
  flexDirectiwhilist: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingRight: Platform.OS === 'ios' ? 15 : 0,
  },
  reviewflex: {
    flexDirection: 'row',
  },
  setreviesstyleimage: {
    height: SH(50),
    width: SW(50),
    borderRadius: 7,
  },
  textviewsetwhishlist: {
    width: '70%',
    paddingHorizontal: SH(20),
  },
  flexratingandtext: {
    flexDirection: 'row',
  },
  Datetextstyle: {
    fontFamily: Fonts.Poppins_Medium,
    fontSize: SF(15),
    color: Colors.black_text_color,
    lineHeight: SH(22),
    opacity: 0.7,
  },
  setdollardtextset: {
    fontFamily: Fonts.Poppins_Medium,
    fontSize: SF(17),
    color: Colors.gray_text_color,
  },
  Ratingview: {
    position: 'absolute',
    right: SH(20),
    top: SH(10),
    zIndex: 3,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  Aerroestyles: {
    width: SW(75),
    position: 'absolute',
    top: 0,
    left: 0,
  },
  centerlottw: {
    position: 'absolute',
    top: SH(20),
    left: SH(6),
    zIndex: 3,
  },
  CheckBoxStyles: {
    position: 'absolute',
    top: SH(10),
    right: SH(20),
  },
  Paddinghorizontal: {
    paddingHorizontal: SH(20),
    position: 'absolute',
    bottom: SH(0),
    paddingVertical: SH(10),
    width: '100%',
    backgroundColor: Colors.white_text_color,
  },
  Textwidthset: {
    width: SW(100),
    backgroundColor: 'transparent'
  }
});