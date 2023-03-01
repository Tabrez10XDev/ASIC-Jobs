import React,{useEffect, useState} from 'react';
import { StyleSheet, View, Modal, ActivityIndicator } from 'react-native';
import { Colors } from '../../utils';
import {LoaderStyle} from '../../styles';

const Loader = (props) => {
  const {loading=false}=props;
  return (
    <Modal
      transparent={true}
      animationType={'none'}
      visible={loading}
      onRequestClose={() => {
        console.log('close modal');
      }}>
      <View style={LoaderStyle.modalBackground}>
        <View style={LoaderStyle.activityIndicatorWrapper}>
          {loading ?
            <ActivityIndicator
              animating={true}
              color={Colors.theme_backgound}
              size="large"
              style={LoaderStyle.activityIndicator}
            />
            : null}
        </View>
      </View>
    </Modal>
  );
};

export default Loader;

const styles = StyleSheet.create({
 
});