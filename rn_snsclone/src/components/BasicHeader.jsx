import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const leftArrow = require('../assets/icons/basicheader/leftArrow.png');

const BasicHeader = ({title}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.headerWrapper}>
      <TouchableOpacity onPress={() => navigation.replace('MainTab')}>
        <Image style={styles.leftArrowIcons} source={leftArrow} />
      </TouchableOpacity>
      <Text style={styles.headerTitle}>{title}</Text>
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
});

export default BasicHeader;
