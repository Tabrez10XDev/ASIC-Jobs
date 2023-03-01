import React, { useMemo } from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import { Colors, SF, SH, SW,Fonts } from '../../utils';
import IconEA from 'react-native-vector-icons/Entypo';

function DropdownComponent({
    onPress,
    value,
    labelStyle,
    label,
    textError,
    required=false,
    containerStyle,
    errorStyle
}) {
    var colors = Colors;
    const styles = useMemo(
        () =>
            StyleSheet.create({
                container: {
                    width: "100%",
                    paddingHorizontal:SW(15),
                    ...containerStyle
                },
                  dateIconTitleView:{
                    flexDirection:'row',
                    width:"100%",
                    justifyContent:'flex-start',
                    alignItems:'center',
                    paddingVertical: SH(10),
                    paddingHorizontal:SW(10),
                    borderColor: Colors.gray,
                    backgroundColor: Colors.white,
                    borderRadius: SH(7),
                    borderWidth: SH(1),
                  },
                  dateIconTitleText:{
                    fontSize:SF(15),
                    color:Colors.black,
                    paddingLeft:SW(15),
                    fontFamily: Fonts.Poppins_Regular,
                  },
                labelStyle: {
                    width: '100%',
                    fontSize: SF(15),
                    color: Colors.theme_backgound,
                    fontFamily: Fonts.Poppins_Medium,
                    fontWeight:'500',
                    paddingBottom:SH(5),
                    ...labelStyle
                  },
                  errorStyle:{
                    color:Colors.theme_backgound_second,
                    margin: 5,
                    fontSize: 12,
                    ...errorStyle
                    },
            }),
        [containerStyle,labelStyle,errorStyle]
    )

    return (
        <View style={styles.container}>
            {label && <Text style={styles.labelStyle}>{label + (required ? "*" : "")}</Text>}
            <TouchableOpacity style={styles.dateIconTitleView} onPress={onPress}>
            <IconEA
              color={Colors.gray} size={SF(25)}
              name="flag"
            />
            <Text style={styles.dateIconTitleText}>{value}</Text>
          </TouchableOpacity>
           <Text style={styles.errorStyle}>{textError}</Text>

        </View>
    );
};

export default DropdownComponent;