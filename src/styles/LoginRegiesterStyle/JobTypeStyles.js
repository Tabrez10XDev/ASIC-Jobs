import { StyleSheet } from 'react-native';
import { Fonts, Colors, SF, SH, SW, widthPercent } from '../../utils';

export default JobTypeStyles = (Colors) => StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    paddingHorizontal: SH(20),
  },
  TextSatyles: {
    textAlign: 'center',
    fontSize: SF(28),
    fontFamily: Fonts.Poppins_Medium,
    color: Colors.black_text_color,
    fontWeight: '700',
    opacity: 0.7,
  },
  ButtonPostionAbolute: {
    position: 'absolute',
    bottom: 0,
    paddingVertical: SH(15),
    backgroundColor: Colors.white_text_color,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  ContainerTwo: {
    width: '100%',
    height: '100%',
    paddingHorizontal: SH(10),
  },
  MinViewBgColor: {
    backgroundColor: Colors.white_text_color,
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '100%'
  },
  TextStyles: {
    textAlign: 'center',
    fontSize: SF(28),
    fontFamily: Fonts.Poppins_Medium,
    color: Colors.black_text_color,
    fontWeight: '700',
    opacity: 0.7,
  },
  TextStylestwo: {
    textAlign: 'center',
    fontSize: SF(18),
    fontFamily: Fonts.Poppins_Medium,
    color: Colors.black_text_color,
    fontWeight: '700',
    opacity: 0.7,
  },
  Seealltextview: {
    textAlign: 'center',
    fontSize: SF(18),
    fontFamily: Fonts.Poppins_Medium,
    color: Colors.theme_background_brink_pink,
    fontWeight: '700',
  },
  BgWhiteStyles: {
    width: '100%',
    backgroundColor: Colors.white_text_color,
    borderWidth: 1,
    marginBottom: SH(10),
    borderColor: Colors.gray_text_color,
    padding: SH(5),
    paddingHorizontal: SH(15),
    flexDirection: 'row',
    alignItems: 'center',
    height: SH(50),
    borderRadius: SH(10)
  },
  JobViewLocation: {
    paddingHorizontal: SH(25),
    backgroundColor: Colors.white_text_color,
    borderWidth: 1,
    width: widthPercent(45),
    marginBottom: SH(10),
    borderColor: Colors.gray_text_color,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: SH(40),
    borderRadius: SH(300),
    marginRight: SH(20),
  },
  JobViewLocationBgColor: {
    paddingHorizontal: SH(25),
    backgroundColor: Colors.theme_background_brink_pink,
    borderWidth: 1,
    width: widthPercent(45),
    marginBottom: SH(10),
    borderColor: Colors.theme_background_brink_pink,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: SH(40),
    borderRadius: SH(300),
    marginRight: SH(20),
  },
  FlexRowJobText: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  DesignerTextStyles: {
    textAlign: 'center',
    fontSize: SF(18),
    fontFamily: Fonts.Poppins_Medium,
    color: Colors.black_text_color,
    fontWeight: '600',
    paddingLeft: SH(20),
  },
  FlexRowJobData: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%'
  },
  ButtonPadding: {
    paddingHorizontal: SH(20),
    width: '90%'
  },
  ButtonPostionSet: {
    position: 'absolute',
    bottom: 0,
    paddingVertical: SH(15),
    backgroundColor: Colors.white_text_color,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  FlexTitlejob: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTopColor: Colors.black_text_color,
    paddingVertical: SH(10),
    borderBottomColor: Colors.black_text_color,
    borderStyle: 'dashed'
  },
  TextStylesTwo: {
    textAlign: 'center',
    fontSize: SF(18),
    fontFamily: Fonts.Poppins_Medium,
    color: Colors.theme_background_brink_pink,
    fontWeight: '700',
    opacity: 0.7,
  },
  JobTextStyles: {
    textAlign: 'center',
    fontSize: SF(14),
    fontFamily: Fonts.Poppins_Medium,
    color: Colors.black_text_color,
    fontWeight: '700',
  },
  JobTextStyleTwo: {
    textAlign: 'center',
    fontSize: SF(14),
    fontFamily: Fonts.Poppins_Medium,
    color: Colors.white_text_color,
    fontWeight: '700',
  },
  Checkboxstyles: {
    height: SH(22),
    width: SW(20),
    borderWidth: 2,
    borderColor: Colors.theme_background_brink_pink,
    borderRadius: 100,
  }
});