import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const leftArrow = require('../assets/icons/basicheader/leftArrow.png');
const xIcon = require('../assets/icons/search/close.png');

const ExportHeader = ({title, enableSearch, leftArrowOption}) => {
  const navigation = useNavigation();
  const [text, setText] = useState('');

  return (
    <View style={styles.headerWrapper}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image style={styles.leftArrowIcons} source={leftArrow} />
      </TouchableOpacity>
      <Text style={styles.headerTitle}>{title}</Text>
      <TouchableOpacity
        style={{
          width: 32,
          height: 32,
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <Text style={{fontSize: 15, fontWeight: '700', color: '#4AABFF'}}>등록</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headerWrapper: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#EAEAEA',
    paddingHorizontal: 16,
    paddingVertical: 18,
  },
  leftArrowIcons: {
    width: 32,
    height: 32,
  },
  headerTitle: {
    fontSize: 16,
    lineHeight: 19.97,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000',
  },
});

export default ExportHeader;
