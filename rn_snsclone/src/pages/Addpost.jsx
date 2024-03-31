import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import BasicHeader from '../components/BasicHeader';

const Addpost = ({}) => {
  return (
    <SafeAreaView style={{flex: 1,backgroundColor: '#FFF'}}>
      <View style={{flex: 1}}>
        <Text>addpost</Text>
        <BasicHeader enableSearch={true} />
      </View>
    </SafeAreaView>
  );
};
export default Addpost;
