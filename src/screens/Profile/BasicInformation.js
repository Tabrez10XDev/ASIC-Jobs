import React, { useState, useEffect, useMemo } from "react";
import { View, Text, TouchableOpacity, Image, TextInput, Modal } from "react-native";
import { ProfileTabStyles } from "../../styles";
import { useNavigation, useTheme } from '@react-navigation/native';
import images from "../../index";


const BasicInformation = () => {

  const { Colors } = useTheme();
  const ProfileTabStyle = useMemo(() => ProfileTabStyles(Colors), [Colors]);

  return (
    <View>
      <View style={ProfileTabStyle.ImagCenter}>
        <View>
          <Image style={ProfileTabStyle.ImageStyles} resizeMode='cover' source={images.logo} />
          <Text style={ProfileTabStyle.UserName}>Allison Jerry 22</Text>
        </View>
      </View>
      <TextInput
        variant="outlined"
        label="Full Name"
        textContainerStyle={{}}
        style={{ borderRadius: 8, marginTop: 60, height: 60 }}
      />

      <TextInput
        variant="outlined"
        label="Personal Website"
        textContainerStyle={{}}
        style={{ borderRadius: 8, marginTop: 60, height: 60 }}
      />

      <TextInput
        variant="outlined"
        label="Professional Title"
        textContainerStyle={{}}
        style={{ borderRadius: 8, marginTop: 60, height: 60 }}
      />
    </View>
  )
}

export default BasicInformation;