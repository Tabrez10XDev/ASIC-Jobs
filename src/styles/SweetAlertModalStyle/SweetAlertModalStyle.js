import { StyleSheet ,Platform} from 'react-native';
import { SF, SH,  widthPercent, SW,Fonts,Colors } from '../../utils';

export default StyleSheet.create({
    settext: {
        color: Colors.black,
        fontSize: SF(20),
        paddingLeft: SW(20),
        paddingRight: SW(20),
        textAlign: 'center',
        fontFamily:Fonts.Poppins_Regular
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    modalView: {
        backgroundColor: Colors.white,
        borderRadius: SH(7),
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: SH(2)
        },
        shadowOpacity: SH(0.25),
        shadowRadius: SH(4),
        elevation: SH(5),
        paddingVertical: SH(20),
        width: '95%'
    },
    setroundcenter: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    checkiconright: {
        borderWidth: 3,
        height: SH(80),
        width: SW(80),
        borderRadius: SH(100),
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center'
    },
    setbackgroundicon: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: SH(15),
    },
    registertextset: {
        paddingVertical: SH(10),
        flexDirection: 'row',
        justifyContent: 'center',
    },
    buttonminview: {
        flexDirection: 'row',
        justifyContent: "space-around",
        paddingTop: SH(20),
    },
    setokbutton: {
        width: '30%'
    },
    setbgcolorgrsay: {
        backgroundColor: Colors.gray,
        height: '100%',
        alignItems: 'center',
        flexDirection: 'row',
        opacity: Platform.OS === 'ios' ? 2 : 0.9,
    },
    loginSuccessIcon:{
        width:SW(80),
        width:SW(80),
        alignSelf:'center',
        resizeMode:"contain"
    }
});