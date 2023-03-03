import React, { useMemo } from 'react';
import { View, Text, TouchableOpacity, Image, FlatList, ScrollView } from 'react-native';
import { HomeTabStyles } from '../../../styles';
import { Spacing, Button, } from '../../../components';
import { SH, Seeallsata } from '../../../utils';
import LinearGradient from 'react-native-linear-gradient';
import { useTranslation } from "react-i18next";
import { RouteName } from '../../../routes';
import { useTheme } from '@react-navigation/native';

const FeaturedAllJob = (props) => {
    const { navigation } = props;
    const { t } = useTranslation();
    const { Colors } = useTheme();
    const HomeStyle = useMemo(() => HomeTabStyles(Colors), [Colors]);
    const Featureddataview = (item) => {
        return (
            <TouchableOpacity onPress={() => navigation.navigate(RouteName.JOB_DETAILS_SCREEN)} style={HomeStyle.BoxViewStylefeatured}>
                <LinearGradient
                    start={{ x: 0.0, y: 0.25 }}
                    end={{ x: 0.5, y: 1.0 }}
                    locations={[0, 0.5, 0.6]}
                    colors={[Colors.green_sheen_colors, Colors.medium_aquamarine, Colors.medium_aquamarine]}
                    style={HomeStyle.BoxFeatred}>
                    <View style={HomeStyle.FlexTextsrosewt}>
                        <View style={HomeStyle.SetImagMinView}>
                            <Image source={item.image} style={HomeStyle.Imagestyles} />
                        </View>
                        <View style={HomeStyle.Textviewwidth}>
                            <Text style={HomeStyle.Producttextstyle}>{t(item.text)}</Text>
                            <Text style={HomeStyle.Producttextstyletwo}>{t(item.smalltext)}</Text>
                        </View>
                    </View>
                    <Spacing space={SH(30)} />
                    <View style={HomeStyle.Flexthreebutton}>
                        <Button buttonStyle={HomeStyle.buttonstyle} buttonTextStyle={HomeStyle.buttontrxtstylers} title={t("Administration")} />
                        <Button buttonStyle={HomeStyle.buttonstyletwo} buttonTextStyle={HomeStyle.buttontrxtstylers} title={t("Designers")} />
                        <Button buttonStyle={HomeStyle.buttonstyletwo} buttonTextStyle={HomeStyle.buttontrxtstylers} title={t("Junior_Text")} />
                    </View>
                    <Spacing space={SH(25)} />
                    <View style={HomeStyle.Flextextyearly}>
                        <Text style={HomeStyle.YearlyTextset}>{t(item.yearlytext)}</Text>
                        <Text style={HomeStyle.YearlyTextset}>{t(item.yearlytexttwo)}</Text>
                    </View>
                </LinearGradient>
            </TouchableOpacity>
        );
    }

    return (
        <View style={HomeStyle.MinViewScreen}>
            <ScrollView
                keyboardShouldPersistTaps="handled"
                contentContainerStyle={{
                    width: '100%',
                    height: 'auto',
                }}>
                <View style={HomeStyle.widthview}>
                    <View style={HomeStyle.widthview}>
                        <FlatList
                            data={Seeallsata}
                            numColumns={1}
                            showsHorizontalScrollIndicator={false}
                            renderItem={({ item, index }) => Featureddataview(item, index)}
                            keyExtractor={item => item.id}
                        />
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};
export default FeaturedAllJob;
