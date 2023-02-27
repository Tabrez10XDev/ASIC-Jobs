import { StyleSheet, Dimensions } from 'react-native';
import { Colors, Fonts, SF, SH, SW } from '../../utils';

const { height: SCREEN_HEIGHT } = Dimensions.get("window");

const IS_IPHONE_X = SCREEN_HEIGHT === 812 || SCREEN_HEIGHT === 896;
const STATUS_BAR_HEIGHT = 0;
const HEADER_HEIGHT = 64;
const NAV_BAR_HEIGHT = HEADER_HEIGHT - STATUS_BAR_HEIGHT;

export default SettingStyle = (Colors) => StyleSheet.create({
  minflexview: {
    width: '93%',
  },
  togglrswitchflex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  cellulardatatext: {
    fontSize: SF(18),
    fontFamily: Fonts.Poppins_Medium,
    color: Colors.black_text_color,
  },
  toggleswotchview: {
    marginTop: '5%',
    borderBottomWidth: 0.3,
    borderBottomColor: Colors.light_gray_text_color,
    paddingBottom: SH(22),
    marginBottom: '5%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  downlodtoggleswitchtext: {
    fontFamily: Fonts.Poppins_Medium,
    fontSize: SF(16),
  },
 
  righticonminview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    width: '100%',
    marginTop: '5%',
    borderBottomWidth: 1,
    borderBottomColor: Colors.light_gray_text_color,
    paddingBottom: SH(17),
  },
  standardrecommedtext: {
    fontFamily: Fonts.Poppins_Medium,
    color:  Colors.black_text_color,
    fontSize: SF(16),
  },
  downloadfastertext: {
    fontSize: SF(14.5),
    fontFamily: Fonts.Poppins_Medium,
    opacity: 0.5,
    paddingTop: '3%',
    color:  Colors.black_text_color,
  },
  chekiconstyle: {
    color:  Colors.black_text_color,
  },
 
  offlinedoenloadstextset: {
    fontSize: 18,
    fontFamily: Fonts.Poppins_Medium,
    paddingTop: '8%',
    color:  Colors.black_text_color,
  },
 
  bodysettextwidth: {
    width: '80%',
  },
 
  keybordtopviewstyle: {
    height: '100%',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: SH(7),
  },
});