import { StyleSheet } from 'react-native';
import { Fonts, Colors, SF, SH, SW,widthPercent } from '../../utils';

export default JobTypeStyles = (Colors) => StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    paddingHorizontal: SH(20),
  },
  containertwo: {
    width: '100%',
    height: '100%',
    paddingHorizontal: SH(10),
  },
  minviewbgcolor: {
    backgroundColor: Colors.White_text_color,
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '100%'
  },
  Textasatyles: {
    textAlign: 'center',
    fontSize: SF(28),
    fontFamily: Fonts.Poppins_Medium,
    color: Colors.black_text_color,
    fontWeight: '700',
    opacity: 0.7,
  },
  Textasatylestwo: {
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
    color: Colors.theme_backgound,
    fontWeight: '700',
  },
  Setbgwhiteviestyles: {
    width: '100%',
    backgroundColor: Colors.White_text_color,
    borderWidth: 1,
    marginBottom: SH(10),
    borderColor: Colors.theme_backgound,
    padding: SH(5),
    paddingHorizontal: SH(15),
    flexDirection: 'row',
    alignItems: 'center',
    height: SH(50),
    borderRadius: SH(10)
  },
  JobViewlocation: {
    paddingHorizontal: SH(25),
    backgroundColor: Colors.White_text_color,
    borderWidth: 1,
    width:widthPercent(45),
    marginBottom: SH(10),
    borderColor: Colors.theme_backgound,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center',
    height: SH(40),
    borderRadius: SH(300),
    marginRight: SH(20),
  },
  JobViewlocationbgcolor: {
    paddingHorizontal: SH(25),
    backgroundColor: Colors.theme_backgound,
    borderWidth: 1,
    width:widthPercent(45),
    marginBottom: SH(10),
    borderColor: Colors.theme_backgound,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center',
    height: SH(40),
    borderRadius: SH(300),
    marginRight: SH(20),
  },
  Flexrowtextstyles: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  Designertextstyles: {
    textAlign: 'center',
    fontSize: SF(18),
    fontFamily: Fonts.Poppins_Medium,
    color: Colors.black_text_color,
    fontWeight: '600',
    paddingLeft: SH(20),
  },
  Flexrowtextstylestwo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%'
  },
  Buttonpadding: {
    paddingHorizontal: SH(20),
    width: '90%'
  },
  Buttonpostionabolute: {
    position: 'absolute',
    bottom: 0,
    paddingVertical:SH(15),
    backgroundColor:Colors.White_text_color,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  Flextitlejob: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTopColor: Colors.black_text_color,
   
    paddingVertical:SH(10),
    borderBottomColor: Colors.black_text_color,
    borderStyle: 'dashed'
  },
  Jobtextstyles: {
    textAlign: 'center',
    fontSize: SF(14),
    fontFamily: Fonts.Poppins_Medium,
    color: Colors.theme_backgound,
    fontWeight: '700',
  },
  Jobtextstylestwo: {
    textAlign: 'center',
    fontSize: SF(14),
    fontFamily: Fonts.Poppins_Medium,
    color: Colors.White_text_color,
    fontWeight: '700',
  },
  Checkboxstyles: {
    height:SH(22),
    width:SW(20),
    borderWidth:2,
    borderColor:Colors.theme_backgound,
    borderRadius:100,
  }
});