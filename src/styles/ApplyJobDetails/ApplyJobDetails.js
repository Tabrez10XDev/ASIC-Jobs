import { StyleSheet } from 'react-native';
import { Colors, SH, SW, SF, Fonts, widthPercent } from '../../utils';

export default ApplyJobStyles = (Colors) => StyleSheet.create({
  minstyleviewphotograpgy: {
    height: '100%',
    backgroundColor: Colors.Apply_job_light_gray,
    width: '100%'
  },
  minstyleviewphotograpgytwo: {
    height: '100%',
    backgroundColor: Colors.White_text_color,
    width: '100%'
  },
  Minbgcolorwhite: {
    backgroundColor: Colors.White_text_color,
    padding: SH(20),
    width: widthPercent(43),
    marginRight: SH(25),
    borderRadius: SH(10),
    marginBottom: SH(20),
  },
  PaddingHorizontal: {
    paddingHorizontal: SH(10),
  },
  Flexcenteralign: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: SH(20),
    justifyContent: 'space-between',
    width: '100%',
    backgroundColor: Colors.White_text_color,
  },
  uxdisignersrytyules: {
    height: SH(52),
    width: SW(50),
    borderRadius: 400
  },
  Fleximagetext: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  Lesftpadding: {
    paddingLeft: SH(20)
  },
  Uxdesignertext: {
    color: Colors.black_text_color,
    fontFamily: Fonts.Poppins_Medium,
    fontSize: SF(15),
    lineHeight: SH(22),
  },
  UxdesignertextTWO: {
    color: Colors.gray_text_color,
    fontFamily: Fonts.Poppins_Medium,
    fontSize: SF(15),
    lineHeight: SH(22),
  },
  Textleft: {
    color: Colors.gray_text_color,
    fontFamily: Fonts.Poppins_Medium,
    fontSize: SF(15),
    lineHeight: SH(22),
    textAlign: 'right'
  },
  Selectprofiletext: {
    color: Colors.theme_backgound,
    fontFamily: Fonts.Poppins_Medium,
    fontSize: SF(22),
  },
  Selectprofiletextblack: {
    color: Colors.black_text_color,
    fontFamily: Fonts.Poppins_Medium,
    fontSize: SF(18),
  },
  Centerimages: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Uxdesignetexts: {
    color: Colors.black_text_color,
    fontFamily: Fonts.Poppins_Medium,
    fontSize: SF(17),
    textAlign: 'center'
  },
  Uxdesignetextssmall: {
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
    backgroundColor: Colors.Resuame_button_color_one,
  },
  buttonbgcolorview: {
    height: SH(30),
    width: SW(100),
    backgroundColor: Colors.Resuame_button_color_two,
  },
  buttontextstyle: {
    fontSize: SF(14)
  },
  resumetextstyles: {
    color: Colors.theme_backgound,
    fontFamily: Fonts.Poppins_Medium,
    fontSize: SF(15),
  },
  Flexrowchekbox: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '48%',
    padding: SH(10),
    backgroundColor: Colors.White_text_color,
    borderRadius: 10,
  },
  Textviestyles: {
    paddingLeft: SH(25)
  },
  Minviewtwoflex: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  Textareaview: {
    height: SH(100),
    backgroundColor: Colors.White_text_color,
    width: '65%',
    borderRadius: 10,
  },
  Inputstyles: {
    paddingHorizontal: 12,
    width: '100%',
    paddingTop: 12,
    paddingBottom: 7,
    height: 47,
    color: 'gray',
    fontSize: SF(17),
    fontFamily: Fonts.Poppins_Medium,
    borderRadius: 7,
    backgroundColor: 'white',
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
    backgroundColor: Colors.White_text_color,
    width: '30%',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
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
  Buttonhorizontal: {
    position: 'absolute',
    paddingHorizontal: SH(20),
    width: '100%',
    bottom: 10,
  },
  Trackapliactiontext: {
    color: Colors.black_text_color,
    fontFamily: Fonts.Poppins_Medium,
    fontSize: SF(22),
  },
  Borderlinevertical: {
    height: SH(65),
    width: 2,
    backgroundColor: Colors.theme_backgound,
  },
  Flexcenterlibe: {
    flexDirection: 'row',
    width: SW(100),
  },
  Iconstyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%'
  },
  Setwidtth: {
    width: '100%'
  },
  Dashviewstyles: {
    borderWidth: 1,
    height: SH(65),
    borderStyle: 'dashed',
  },
  Flextext: {
    flexDirection: 'row',
  },
  Offertextstyle: {
    color: Colors.black_text_color,
    fontFamily: Fonts.Poppins_Medium,
    fontSize: SF(18),
  },
  Notyettext: {
    color: Colors.gray_text_color,
    fontFamily: Fonts.Poppins_Medium,
    fontSize: SF(16),
  },
  Setheight: {
    width: '72%'
  },
  widthfile: {
    width: '100%',
  },
  Fullwidthflewx: {
    flexDirection: 'row',
    backgroundColor:Colors.White_text_color,
  },
  Backgroundcolorview: {
    paddingBottom: SH(20),
    backgroundColor: Colors.theme_backgound,
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
    backgroundColor: Colors.Resuame_button_color_three,
    borderRadius: 200,
    height: SH(40),
  },
  buttonwidthg25: {
    width: '25%',
    backgroundColor: Colors.Resuame_button_color_three,
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
    color: Colors.White_text_color,
    fontFamily: Fonts.Poppins_Medium,
    fontSize: SF(19),
  },
  Googleteam: {
    textAlign: 'center',
    color: Colors.White_text_color,
    fontFamily: Fonts.Poppins_Medium,
    fontSize: SF(19),
    opacity: 0.8,
  },
  textstyles: {
    fontSize: SF(14),
  },
  ProductDesignertwo: {
    textAlign: 'center',
    color: Colors.White_text_color,
    fontFamily: Fonts.Poppins_Medium,
    fontSize: SF(17),
  },
  Flexrowsettext: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: SH(10),
    backgroundColor: Colors.theme_backgound,
    height: SH(50),
    marginHorizontal: SH(10),
    borderRadius: 200,
  },
  Tabtextstyles: {
    color: Colors.White_text_color,
    fontFamily: Fonts.Poppins_Medium,
    fontSize: SF(11),
  },
  Centerviesecond: {
    backgroundColor: Colors.Resuame_button_color_three,
    width: widthPercent(25),
    height: SH(35),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 207,
  },
  Centerviesecondtwo: {
    backgroundColor: 'transparent',
    width: widthPercent(21),
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
  Paregraphtextstyles: {
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
    left: SH(16),
    zIndex: 3,
  },
  Checkboxsetstyles: {
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
    backgroundColor: Colors.White_text_color,
  },
  Textwidthset: {
    width: SW(100),
    backgroundColor: 'transparent'
  }
});