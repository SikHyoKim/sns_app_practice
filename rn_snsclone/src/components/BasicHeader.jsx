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

const BasicHeader = ({title, enableSearch, leftArrowOption}) => {
  const navigation = useNavigation();
  const [text, setText] = useState('');

  return (
    <View style={styles.headerWrapper}>
      {leftArrowOption === false ? (
        <View>
          <View style={{width: 32, height: 32}} />
        </View>
      ) : (
        <TouchableOpacity onPress={() => navigation.replace('MainTab')}>
          <Image style={styles.leftArrowIcons} source={leftArrow} />
        </TouchableOpacity>
      )}
      {enableSearch ? (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TextInput
            placeholder="검색"
            style={styles.SearchTextInput}
            value={text}
            onChange={setText}
          />
          <TouchableOpacity
            onPress={() => setText('')}
            style={{position: 'absolute', right: 10}}>
            <Image source={xIcon} style={{width: 24, height: 24}} />
          </TouchableOpacity>
        </View>
      ) : (
        <Text style={styles.headerTitle}>{title}</Text>
      )}

      <Image style={styles.leftArrowIcons} />
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
  SearchTextInput: {
    backgroundColor: '#F5F5F5',
    width: 300,
    height: 40,
    paddingLeft: 15,
    color: '#7B7B7B',
  },
});

export default BasicHeader;
