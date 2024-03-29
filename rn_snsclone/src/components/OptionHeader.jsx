import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';

const OptionHeader = ({title}) => {
  return (
    <View>
      <View style={styles.headerWrapper}>
        <Text style={styles.headerTitle}>{title}</Text>
        <View style={{flexDirection: 'row', gap: 8}}>
          <TouchableOpacity>
            <Image source={settingIcon} style={{width: 30, height: 30}} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={frameIcon} style={{width: 30, height: 30}} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const settingIcon = require('../assets/icons/Mypage/setting.png');
const frameIcon = require('../assets/icons/Mypage/Frame.png');

const styles = StyleSheet.create({
  headerWrapper: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#EAEAEA',
    paddingHorizontal: 25,
    paddingVertical: 18,
  },
  headerTitle: {
    fontSize: 20,
    lineHeight: 19.97,
    fontWeight: '700',
    textAlign: 'center',
    color: '#000',
  },
  SearchTextInput: {
    backgroundColor: '#F5F5F5',
    width: 300,
    height: 40,
    paddingLeft: 15,
    color: '#7B7B7B',
  },
});

export default OptionHeader;
