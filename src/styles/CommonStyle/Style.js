import { StyleSheet } from 'react-native';
import { SF, SH, Fonts, Colors, widthPercent, SW } from '../../utils';

export default StyleSheet.create({
  themeMainViewContainer:{
    width: '100%',
    height: '100%',
    backgroundColor:Colors.white
  },
  setminviewstylesplasg: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:Colors.theme_backgound
  },
  setsplashscreehhieight: {
    height: SH(200),
    width: SW(200),
  },
  bottomTabMain:{
   backgroundColor:Colors.theme_backgound_second,
   paddingBottom:SH(1),
   paddingTop:SH(1),
   height:SH(65)

  },
  bottomTabIcon:{
    height: SH(25),
    width: SW(25),
    resizeMode:'contain'
  },
  tabBarLabelStyle:{
  color:Colors.white,
  fontSize:SF(15),
  fontFamily:Fonts.Poppins_Medium
  },
  headerTitleStyle: {
    color: Colors.white,
    fontSize: SF(20),
    fontFamily:Fonts.Poppins_Medium
  },
  headerStyle:{
    backgroundColor: Colors.theme_backgound,
    elevation: 0,
    shadowOpacity: 0,
  },
  headerLetStyle:{
  marginLeft:SW(-10)
  },
  bottomButtonView:{
    paddingHorizontal:SW(15),
    flexDirection:'row',
    width:"100%",
    justifyContent:'space-between',
    alignItems:'center',
    position:'absolute',
    bottom:0,
    backgroundColor:Colors.black,
    paddingVertical:SH(10)
  },
  /* PI Creation start */
  piCretionButtonView:{
    paddingHorizontal:SW(10),
    flexDirection:'row',
    width:"100%",
    justifyContent:'space-between',
    alignItems:'center'
  },
  piCretionSearchView:{
    paddingHorizontal:SW(0),
    flexDirection:'row',
    width:"100%",
    justifyContent:'space-between',
    alignItems:'center'
  },
  ProductAddMoreView:{
  flexDirection:'row',
  width:"100%",
  justifyContent:'space-between',
  alignItems:'center'
  },
  ProductAddMoreViewWidth:{
    width:"50%",
    },
    addMoreIconTitleView:{
      flexDirection:'row',
      width:"100%",
      justifyContent:'flex-start',
      alignItems:'center',
      paddingHorizontal:SW(15),
      color:Colors.theme_backgound_second,
      fontFamily:Fonts.Poppins_Regular
    },
    addMoreIconTitleText:{
      fontSize:SF(18),
      color:Colors.blue,
      paddingLeft:SW(8),
      fontFamily:Fonts.Poppins_Medium
    },
    ProductAddMoreViewOuter:{
      paddingHorizontal:SW(15)
    },
    ProductAddMoreViewInner:{
      borderColor:Colors.light_gray,
      borderWidth:1,
      borderRadius:SH(5)

    },
    removeBox:{
      position:'absolute',
      right:SW(-10),
      top:SH(-10),
      zIndex:1
    },
    PrButtonStyle:{
      width:"40%"
    },
  /* PI Creation end */


  /* Inward payment start */

    /* Inward payment end */


      /* Expense start */
      ProductAddMoreViewLableText:{
        fontSize:SF(15),
        color:Colors.black,
        width:"85%",
        fontFamily:Fonts.Poppins_Medium,
      },
      expense_lable_input_style:{
        borderRadius: SH(0),
        borderWidth: SH(0),
        borderBottomWidth: SH(1),

      },
      ExpenseAddMoreViewOuter:{
        paddingHorizontal:SW(15),
        flexDirection:'row',
        width:"100%",
        justifyContent:'flex-start',
        alignItems:'center'
      },
      editIconTitleView:{
        paddingLeft:SW(10),
      },
      editIconTitleViewTopSet:{
        paddingLeft:SW(10),
        position:'absolute',
        right:SW(10),
        zIndex:1
      },
    /* Expense end */

   /*tab start */
   tabOuterView:{
    flexDirection:'row',
    width:"100%",
    justifyContent:'flex-start',
    alignItems:'center',
    backgroundColor:Colors.theme_backgound,
   },
   tabInnerView:{
    backgroundColor:Colors.theme_backgound,
    paddingVertical:SH(17),
    width:"50%",
    borderBottomColor:Colors.white,
    borderBottomWidth:SH(4)
   },
   tabInnerActiveView:{
    borderBottomColor:Colors.theme_backgound_second,
   },
   tabInnerText:{
    fontSize:SF(20),
    color:Colors.white,
    textAlign:'center',
    fontFamily:Fonts.Poppins_Medium
   },
   /*tab end */

/* Add Round Button start */
   AddRoundButtonView:{
    width:SW(50),
    height:SW(50),
    position:'absolute',
    bottom:'5%',
    right:'2%',
    borderRadius:SH(50),
    zIndex:1

  },
  AddRoundButtonStyle:{
    width:'100%',
    height:'100%',
    borderRadius:SH(50),
  },
  AddRoundIconContainerStyle:{
    marginRight: SW(5),
  },
/* Add Round Button end */

/* Search input start */
  inputContainerStyleSearch:{
    width: '100%',
    borderColor: Colors.light_gray,
    fontSize: SF(15),
    color: Colors.black,
    paddingHorizontal: SH(10),
    fontFamily: Fonts.Poppins_Regular,
    backgroundColor: Colors.white,
    borderRadius: SH(7),
    borderWidth: SH(1),
    borderBottomWidth: SH(1),

  },
  inputStyleSearch:{
    borderWidth: SH(0),

  },

/* Search input end */


/* view detail modal style start */
viewDetailModalHeader:{
textAlign:'left',
fontSize:SF(20),
color:Colors.black,
borderBottomColor:Colors.light_gray,
borderBottomWidth:SH(1),
fontFamily:Fonts.Poppins_Bold
},
viewDirectionRow:{
  flexDirection:'row',
  justifyContent:'space-between'
},
viewDirectionRowSize:{
  width:'50%'
},
viewDetailText:{
  color:Colors.black,
  fontSize:SF(16),
  fontFamily:Fonts.Poppins_Regular
},
viewDetailTextLabel:{
  fontFamily:Fonts.Poppins_Medium
},
viewDetailBoldText:{
  fontFamily:Fonts.Poppins_Bold
},
detailHr:{
  height:SH(1),
  backgroundColor:Colors.light_gray,
  width:'100%',
  marginVertical:SH(20)
},
viewDetailModalView:{
  paddingHorizontal:SW(10),
  paddingVertical:SW(20)

},
/* view detail modal style end */

/* home style start */
homeListButtonMainView:{
  paddingHorizontal:SW(20),

},
homeListButtonMain:{
  flexDirection:'row',
  width:"100%",
  justifyContent:'space-between',
  alignItems:'center',
  backgroundColor:Colors.Ghost_White,
  paddingHorizontal:SW(10),
  paddingVertical:SH(16),
  shadowColor: Colors.black,
shadowOffset: {
	width: 0,
	height: SH(3),
},
shadowOpacity: 0.29,
shadowRadius: 4.65,
elevation: 7,
borderRadius:SH(6)
},
homeListButtonMainLeft:{
  flexDirection:'row',
  width:"90%",
  justifyContent:'flex-start',
  alignItems:'center',

},
homeListButtonRight:{
  flexDirection:'row',
  width:"10%",
  justifyContent:'flex-end',
  alignItems:'center',
},
homeListButtonText:{
color:Colors.black,
paddingHorizontal:SW(10),
fontSize:SF(18),
fontFamily:Fonts.Poppins_Regular
},

countryInput:{
  width: '100%',
          borderColor: Colors.gray,
          fontSize: SF(15),
          color: Colors.black,
          paddingVertical: SH(8),
          paddingHorizontal: SH(10),
          fontFamily: Fonts.Poppins_Regular,
          backgroundColor: Colors.white,
          borderRadius: SH(7),
          borderWidth: SH(1),
}
});