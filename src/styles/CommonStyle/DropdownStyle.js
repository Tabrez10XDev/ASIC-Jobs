import { StyleSheet } from 'react-native';
import { Colors, SF, SH, SW,Fonts } from '../../utils';

export default StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal:SW(15)
},
dropdownStyle: {
    width: '100%',
    borderColor: Colors.gray,
    paddingVertical: SH(4),
    paddingHorizontal: SH(10),
    backgroundColor: Colors.white,
    borderRadius: SH(7),
    borderWidth: SH(1),
},
placeholderStyle: {
    fontSize: SF(16),
    color: Colors.gray,
},
selectedTextStyle: {
    fontSize: SF(15),
    color: Colors.black,
    fontFamily: Fonts.RobotoCondensed_Regular,
},
iconStyle: {
    width: SW(20),
    height: SH(20),
},
item: {
    paddingHorizontal: SW(10),
    paddingVertical: SH(10)
},
textItem: {
    color: Colors.black,
    fontSize: SF(18),
    fontFamily:Fonts.Poppins_Regular
},
labelStyle: {
    width: '100%',
    fontSize: SF(15),
    color: Colors.theme_backgound,
    fontFamily:Fonts.RobotoCondensed_Regular,
    fontWeight:'500',
    paddingBottom:SH(5)

  },
  errorStyle:{
    color:Colors.theme_backgound_second,
    margin: 5,
    fontSize: 12,
    },
});