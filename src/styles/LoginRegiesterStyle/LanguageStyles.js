
import { StyleSheet } from 'react-native';
import { SF, SH, SW, Colors, Fonts } from '../../utils';

export default StyleSheet.create({
  LeadDropdown: {
    borderWidth: 0,
    padding: 0,
    paddingVertical: SH(0),
    width: '100%',
    borderRightWidth: 1,
    borderRadius: 0,
    borderRightColor: Colors.gray_text_color,
    minHeight: 'auto',
    paddingRight: SH(10),
    backgroundColor: Colors.White_text_color,
    paddingHorizontal: 15,
    borderRadius: 100
  },
  LeadDropdowntwo: {
    borderWidth: 0,
    padding: 0,
    paddingVertical: SH(0),
    width: "100%",
    borderRightWidth: 1,
    borderRadius: 0,
    borderRightColor: Colors.light_gray_text_color,
    minHeight: 'auto',
    paddingRight: SH(10),
    backgroundColor: Colors.White_text_color,
    paddingHorizontal: 15,
    borderRadius: 100
  },
  selectedTextStyleLead: {
    fontSize: SF(22),
  },
  icon: {
    marginRight: 5,
  },
  LeadsDropdownbox: {
    width: '100%',
  },
  LeadsDropdownboxtwo: {
    width: '100%',
  },
  LeadsDropdownboxOpen: {
    width: '100%',
  },
  LeadsDropdownboxOpentwo: {
    width: '70%',
  },
  selectText: {
    fontSize: SF(25),
    paddingBottom: SH(15),
    color: Colors.black_text_color,
    fontWeight: '500'
  },
  Settingtext: {
    fontSize: SF(25),
    paddingBottom: SH(10),
    color: Colors.black_text_color,
    fontWeight: '500',
    paddingTop: SH(10),
    fontFamily: Fonts.Poppins_Medium,
  },
  mainView: {
    height: '100%',
    width:'100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.White_text_color,
  },
  imagesetus: {
    width: SW(100),
    height: SH(100),
    borderRadius: 200,
  },
  imagsetview: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  LeadDropdown: {
    borderWidth: 1,
    padding: 0,
    paddingVertical: SH(5),
    width: '100%',
    borderRightWidth: 1,
    borderRadius: 0,
    borderRightColor: Colors.gray_text_color,
    minHeight: 'auto',
    paddingRight: SH(10),
    backgroundColor: Colors.White_text_color,
    paddingHorizontal: SH(15),
    borderRadius: 100
  },
  LeadDropdowntwo: {
    borderWidth: 0,
    padding: 0,
    paddingVertical: SH(5),
    width: "100%",
    borderRightWidth: 1,
    borderRadius: 0,
    borderRightColor: Colors.light_gray_text_color,
    minHeight: 'auto',
    paddingRight: SH(10),
    backgroundColor: Colors.White_text_color,
    paddingHorizontal: SH(15),
    borderRadius: 100
  },
  selectedTextStyleLead: {
    fontSize: SF(20),
  },
  icon: {
    marginRight: 5,
  },
  LeadsDropdownbox: {
    width: '100%',
  },
  LeadsDropdownboxtwo: {
    width: '100%',
  },
  LeadsDropdownboxOpen: {
    width: '70%',
  },
  LeadsDropdownboxOpentwo: {
    width: '70%',
  },

  selectlagWrap: {
    justifyContent: 'center',
    alignItems: 'center',
    width:'100%'
  },
  buttonviewsettopspace: {
    justifyContent: 'center',
    alignItems: 'center',
    width:'70%',
    paddingTop: SH(12)
  },
  LoginButton: {
    paddingVertical: SH(0),
    width: '100%',
    borderRadius:200
  },
  imagesetus: {
    width: SW(100),
    height: SH(100),
    borderRadius: 200,
  },
  imagsetview: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  lottieImgset: {
    // width: SW(200)
  }
});
