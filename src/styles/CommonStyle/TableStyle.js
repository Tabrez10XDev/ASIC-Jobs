import { StyleSheet,Dimensions } from 'react-native';
import {SH, Colors, SF, SW, Fonts} from '../../utils';

export default StyleSheet.create({
  manageView: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  manageIconView: {
    marginLeft: SW(5)
  },
  rowWidth: {
    maxWidth: "25%",
    minWidth: "25%"

  },
  manageWidth: {
    // width: "20%"
  },
  setdataviewnodata: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height:'80%',
  },
  nodatafoundtextstyle: {
    textAlign: 'center',
    fontSize: SF(20),
    color: Colors.gray,
    fontFamily: Fonts.Poppins_Medium,

  },
  headerTextView:{
    // backgroundColor:Colors.light_gray
  },
  headerText:{
    color:Colors.black,
    fontSize:SF(15),
    fontFamily: Fonts.Poppins_Bold,

  },
  dataTableMainBody:{
    paddingHorizontal:SW(10),
  },
  dataTableMain:{
    borderColor:Colors.light_gray,
    borderWidth:SH(1),
    borderRadius:SH(5)
  },
  cellText:{
    color:Colors.black,
    fontSize:SF(15),
    fontFamily: Fonts.Poppins_Regular,

  },
 
});