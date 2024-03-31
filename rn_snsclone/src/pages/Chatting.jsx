import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import BasicHeader from '../components/BasicHeader';

const Chatting = ({}) => {
  return (
    <SafeAreaView style={{flex: 1,backgroundColor: '#FFF'}}>
      <View style={{flex: 1}}>
        <Text>Mr.kimhan</Text>
        <BasicHeader enableSearch={true} />
      </View>
    </SafeAreaView>
  );
};
export default Chatting;
