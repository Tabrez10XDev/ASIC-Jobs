import React, { useMemo } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import propTypes from 'prop-types';
import { RowComponent } from '../../components';
import { SF, SH, SW, Fonts, Colors } from '../../utils';
import { useTheme } from '@react-navigation/native';
import IconM from 'react-native-vector-icons/AntDesign';
import { useSelector } from "react-redux";

function AppHeader({ headerStyle, LeftIconStyle, rightView, LeftIconLeftStyle, headerTitle, onPress, onRightPress, titleStyle, Iconname }) {
    const { colors } = useTheme();
    const { colorrdata } = useSelector(state => state.commonReducer) || {};

    const styles = useMemo(
        () =>
            StyleSheet.create({
                container: {
                    // height: SH(70),

                    width: '100%',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    position: 'relative',

                    ...headerStyle
                },
                leftView: {
                    // height: '100%',
                    width: '15%',
                    justifyContent: 'center',
                    alignItems: 'flex-start'
                },
                leftImageStyle: {
                    height: SH(18),
                    width: SW(18),
                    resizeMode: 'contain'
                },
                headerTitle: {
                    fontSize: SF(23),
                    fontWeight: '700',
                    fontFamily: Fonts.Poppins_Medium,
                    color: '#fff',
                    ...titleStyle
                },
                rightView: {
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    backgroundColor: Colors.theme_backgound,
                    width: '100%',
                    height: 50,
                    ...rightView
                },
                rightImageStyle: {
                    resizeMode: 'contain',
                    marginLeft: 5
                },
                LeftIconStyle: {
                    fontSize: SF(30),
                    color: '#fff',
                    paddingLeft:SH(15),
                    paddingRight:SH(30),
                    ...LeftIconStyle
                },
                LeftIconLeftStyle: {
                    width: '100%',
                    flexDirection: 'row',
                    ...LeftIconLeftStyle
                }
            }),
        [headerStyle, colors],
    );
    return (
        <RowComponent rowStyle={styles.container}>
            <View style={styles.rightView}>
                <TouchableOpacity onPress={onPress} style={styles.LeftIconLeftStyle}>
                    {Iconname && <IconM name={'arrowleft'} style={styles.LeftIconStyle} />}
                    {headerTitle && <Text style={styles.headerTitle}>{headerTitle}</Text>}
                </TouchableOpacity>
            </View>
        </RowComponent>
    )
}

AppHeader.defaultProps = {
    headerStyle: {},
    leftImage: null,
    LeftComponent: null,
    title: '',
    rightImage: null,
    onLeftPress: () => { },
};

AppHeader.propTypes = {
    headerStyle: propTypes.shape({}),
    leftImage: propTypes.any,
    LeftComponent: propTypes.any,
    title: propTypes.string,
    rightImage: propTypes.any,
    onLeftPress: propTypes.func

};

export default AppHeader;