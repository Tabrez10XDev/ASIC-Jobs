import { StyleSheet } from 'react-native';
import { shadow } from 'react-native-paper';
import { SH, SW, SF, Fonts, Colors, heightPercent, widthPercent } from '../../utils';
export default StyleSheet.create({

    Minviewsigninscreen: {
        height: '100%',
    },
    PositionRelative: {
        position: 'relative',
        height: 70
      },
    LeadsHeaderbox: {
        width: '100%',
        borderBottomColor: Colors.lightgrey,
        borderBottomWidth: 1,
        paddingVertical: SH(10),
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: SH(10)
    },
    dsetbottomaerroe: {
        position:'absolute',
        bottom:0,
       
    },
    LeadsUpDownArro: {
        width: '15%',
        flexDirection: 'row',
        justifyContent: 'center',
        textAlign: 'center',
    },
    LeadsDropdownbox: {
        width: '70%'
    },
    LeadDropdown: {
        borderWidth: 0,
        padding: 0,
        paddingVertical: SH(0),
        width: '100%',
        borderRightWidth: 1,
        borderRadius: 0,
        borderRightColor: Colors.lightgrey,
        minHeight: 'auto',
        paddingRight: SH(10)
    },
    icon: {
        marginRight: 5,
    },
    selectedTextStyleLead: {
        fontSize: SF(22),
        fontFamily: Fonts.Poppins_Medium,
    },
    LeadsUpDownArroIcon: {
        fontSize: SF(24)
    },
   
    NoleadImage: {       
        width: SW(100),
        height:SH(100),          
    },
    NoleadText: {
        fontSize: SF(22),
        fontFamily: Fonts.Poppins_Bold,
        paddingTop: SH(5),
        color: Colors.gray
    },
    RefreshText: {
        fontSize: SF(18),
        fontFamily: Fonts.Poppins_Medium,
        color: Colors.green_text_color
    }
   
});