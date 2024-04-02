import React from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import BasicHeader from '../components/BasicHeader';
const {width} = Dimensions.get('screen');
const Chatting = () => {
  const renderItem = ({item}) => {
    return (
      <View>
        <View
          style={{
            flexDirection: 'row',
            gap: 10,
            paddingVertical: 14,
            alignItems: 'center',
          }}>
          <View>
            <TouchableOpacity>
              <Image
                source={{uri: item.profileImg}}
                style={{width: 54, height: 54, borderRadius: 50}}
              />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity style={{gap: 5}}>
              <Text style={{fontWeight: '600'}}>{item.name}</Text>
              <View
                style={{
                  flexDirection: 'row',
                  gap: 5,
                  alignItems: 'center',
                  maxWidth: 150,
                }}>
                <Text
                  ellipsizeMode="tail"
                  numberOfLines={1}
                  style={{fontSize: 15, fontWeight: '600'}}>
                  {item.content}asdfasdfadsfaasdf
                </Text>
                <View style={{borderWidth: 1, width: 0.5, height: 0.5}} />
                <Text
                  style={{color: '#AAAAAA', fontWeight: '400', fontSize: 15}}>
                  {item.time}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row', paddingLeft: 100}}>
            <View
              style={{borderWidth: 4, borderRadius: 50, borderColor: '#4AABFF'}}
            />
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFF'}}>
      <View style={{flex: 1}}>
        <View>
          <View style={{paddingLeft: 16}}>
            <Text style={{fontSize: 24, fontWeight: 'bold'}}>Mr.kimhan</Text>
          </View>
          <BasicHeader enableSearch={true} />
        </View>
        <View style={{paddingHorizontal: 16, paddingVertical: 24}}>
          <Text>메시지</Text>
          <View style={{flexWrap: 'wrap'}}>
            <FlatList
              data={dummy}
              renderItem={renderItem}
              numColumns={3}
              keyExtractor={item => item.id}
              scrollIndicatorInsets={true}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const dummy = [
  {
    id: 1,
    content: '안녕하세요',
    name: '제이름이 뭘까유',
    time: '1시간전',
    profileImg: 'https://picsum.photos/200',
  },
];
export default Chatting;
