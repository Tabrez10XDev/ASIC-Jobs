
import { StyleSheet, Platform } from 'react-native';
import { Fonts, SH, SW, SF } from '../../utils';

export default ChatStyles = (Colors) => StyleSheet.create({
  minstyleviewphotograpgy: {
    flexDirection: 'row',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    backgroundColor: Colors.White_text_color,
  },

  minviewsigninscreen: {
    width: '90%',
    height: '100%',
    marginHorizontal: '5%',
  },
  minflexview: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    paddingBottom: SH(70),
    paddingTop: SH(5),
  },
  flexrowjucenter: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  flexrowjucentertwo: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  textcolormessage: {
    color: Colors.White_text_color,
    fontFamily: Fonts.Poppins_Medium,
    fontSize: SF(16),
  },
  textcolormessagetwoset: {
    color: Colors.White_text_color,
    fontFamily: Fonts.Poppins_Medium,
    fontSize: SF(12),
    paddingTop: SH(6),
    textAlign: 'right'
  },
  textcolormessagetwosettwo: {
    color: 'white',
    fontFamily: 'DMSans-Medium',
    fontSize: SF(12),
    paddingTop: SH(6),
  },
  datesndtimecolor: {
    color: Colors.gray_text_color,
    fontFamily: Fonts.Poppins_Medium,
    fontSize: SF(14),
    textAlign: 'center',
    paddingTop: SH(5),
    paddingLeft: SH(80),
    fontWeight: '600'
  },
  seimagstyleendcall: {
    width: SW(50),
    height: SH(52),
    borderRadius: 100,
  },
  messageminviewowner: {
    backgroundColor: Colors.Chat_bg_color,
    paddingTop: SH(6),
    paddingBottom: SH(4),
    paddingHorizontal: SH(10),
    marginLeft: SH(10),
    width: '70%',
    borderBottomRightRadius: SH(20),
    borderTopLeftRadius: SH(20),
    borderTopRightRadius: SH(20),
  },
  postionabsoluteview: {
    position: 'absolute',
    backgroundColor: Colors.White_text_color,
    bottom: 0,
    width: '100%',
    borderTopLeftRadius: SH(30),
    borderTopRightRadius: SH(30),
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 2 : 25,
    },
    shadowOpacity: 0.58,
    shadowRadius: Platform.OS === 'ios' ? 2 : 25,
    elevation: Platform.OS === 'ios' ? 1 : 10,
  },
  textmessageview: {
    paddingHorizontal: SH(20)
  },
  messagetextcolor: {
    color: 'gray',
    fontSize: 18,
  },
  textinputborderbottom: {
    padding: 0,
    width: SW(200),
    fontSize: SF(16),
  },
  setmarginrightlikeicon: {
    paddingLeft: SH(20),
  },
  flexrowimaginations: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flexcheckset: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  seticonpotion: {
    position: 'relative',
    top: -8.5,
  },
  setrighticonviewstyle: {
    position: 'relative',
    top: SH(9),
    paddingLeft: SH(5),
  },
  seticonrevirview: {
    marginTop: -20,
  },
  chartviewsetbgcolor: {
    paddingVertical: SH(5),
    paddingHorizontal: SH(10),
    width: '70%',
    borderBottomLeftRadius: SH(20),
    borderTopLeftRadius: SH(20),
    borderTopRightRadius: SH(20),
    backgroundColor: Colors.theme_backgound,
  },
  flexrowsetsendmesasagew: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: SH(15)
  },
  setwhitebox: {
    backgroundColor:Colors.Forget_password,
    padding:SH(10),
    borderRadius:7,
    marginBottom:SH(10),
  },
  flexrowsetimage: {
    flexDirection:'row',
    alignItems:'center',
  }, 
  imagecenterstyletop: {
    width:'25%',
  },
  imagsetstyle: {
    width:SW(60),
    height:SH(63),
    borderRadius:100,
  },
  setlistdotviewstyle: {
    position:'absolute',
    top:-10,
    left:43,
  },
  imagecenterstyle: {
    width:'72%',
  },
  textsetdoctore: {
    fontFamily:Fonts.Poppins_Medium,
    fontSize:SF(19),
    color:Colors.theme_backgound,
  },
  setflextimeroe: {
    flexDirection:'row',
    justifyContent:'space-between',
  },
  textsetdoctoretwo: {
    color:Colors.gray_text_color,
    fontFamily:Fonts.Poppins_Medium,
    fontSize:SF(15),
  },
});
