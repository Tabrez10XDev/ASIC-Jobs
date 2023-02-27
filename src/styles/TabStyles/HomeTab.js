import { StyleSheet } from 'react-native';
import { Colors, SH, SW, SF, Fonts, widthPercent } from '../../utils';

export default HomeTabStyles = (Colors) => StyleSheet.create({
  minstyleviewphotograpgy: {
    height: '100%',
    backgroundColor: Colors.White_text_color,
    width: '100%',
  },
  widthview: {
    width: '100%',
  
  },
  Paddinghorizxontal: {
    paddingHorizontal: SH(10)
  },
  changetheamebgcolor: {
    height: SH(67),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 200,
    backgroundColor: Colors.theme_backgound,
  },
  Setfilechnage: {
    paddingHorizontal: SH(12),
    width: '95%',
    height: SH(47),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    color: Colors.gray_text_color,
    fontSize: SF(17),
    fontFamily: Fonts.Poppins_Medium,
    borderRadius: 200,
    backgroundColor: Colors.White_text_color,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 2 : 25,
    },
  },
  Inputwidthset: {
    width: '90%'
  },
  Inputstyles: {
    backgroundColor: 'transparent',
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 0 : 0,
    },
    shadowOpacity: 0.58,
    shadowRadius: Platform.OS === 'ios' ? 0 : 0,
    elevation: Platform.OS === 'ios' ? 0 : 0,
  },
  Iconstyles: {
    width: '10%',
  },
  Flexttextstyles: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  FeaturedTextastylers: {
    color: Colors.theme_backgound_second,
    fontSize: SF(20),
    fontFamily: Fonts.Poppins_Medium,
  },
  Skillstext: {
    color: Colors.theme_backgound_second,
    fontSize: SF(20),
    paddingLeft:SH(20),
    fontFamily: Fonts.Poppins_Medium,
  },
  Seealltextstyle: {
    color: Colors.black_text_color,
    fontSize: SF(20),
    fontFamily: Fonts.Poppins_Medium,
  },
  Boxviewstylesset: {
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
  Boxviewstylessetfeatured: {
    width: '100%',
    padding: SH(20),
    marginTop: SH(5)
  },
  Textcenter: {
    textAlign: 'center',
    color: Colors.black_text_color,
    fontFamily: Fonts.Poppins_Medium,
    fontSize: SF(18),
  },

  Paddingright: {
    marginRight: SH(20),
    backgroundColor: Colors.Liner_gradiunt_color_one,
    width: SW(200),
    padding: SH(10),
    borderRadius: SH(10),
  },
  Flatliststyles: {
    paddingHorizontal: SH(10),
    paddingLeft: SH(0),
  },
  Flexrowgraf: {
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    paddingHorizontal:SH(40),
  },
  Recommendedboxleft: {
    paddingHorizontal: SH(10),
  },
  Imagestyles: {
    width: SW(40),
    height: SH(43),
    borderRadius: SH(10)
  },
  Flextextsrosewt: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  Setimagminview: {
    width: '23%',
  },
  Textviewwidth: {
    width: '77%',
  },
  Producttextstyle: {
    color: Colors.White_text_color,
    fontFamily: Fonts.Poppins_Medium,
    fontSize: SF(18),
    lineHeight: 22
  },
  Producttextstyletwo: {
    color: Colors.White_text_color,
    fontFamily: Fonts.Poppins_Regular,
    fontSize: SF(18),
    lineHeight: 22
  },
  buttonstyle: {
    height: SH(30),
    paddingVertical: SH(0),
    width: widthPercent(30),
    paddingHorizontal: SH(10)
  },
  buttonstyletwo: {
    height: SH(30),
    paddingVertical: SH(0),
    width: widthPercent(19),
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
    color: Colors.White_text_color,
  },
  PaddingHorizontal: {
    paddingHorizontal: SH(10),
  },
  Centericon: {
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
    backgroundColor: Colors.theme_backgound,
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
  parsantegtext: {
    color: Colors.black_text_color,
    fontFamily: Fonts.Poppins_Medium,
    textAlign: 'center',
    fontWeight:'700'
  },
  phptext: {
    color: Colors.gray_text_color,
    fontFamily: Fonts.Poppins_Medium,
    textAlign: 'center',
    fontWeight:'600'
  }
});