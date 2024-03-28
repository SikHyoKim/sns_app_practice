import React from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import BasicHeader from '../components/BasicHeader';

const Search = () => {
  const renderItem = ({item}) => {
    return (
      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          paddingTop: 12,
        }}>
        <TouchableOpacity
          style={{
            flex: 1,
            justifyContent: 'center',
            paddingVertical: 12,
          }}>
          <Text
            style={{
              fontSize: 15,
              fontWeight: '400',

              color: '#3A3A3A',
            }}>
            {item.word}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{width: 30, justifyContent: 'center', alignItems: 'center'}}>
          <Image source={xIcon} style={{width: 24, height: 24}} />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFF'}}>
      <View>
        <BasicHeader enableSearch={true} />
      </View>
      <View style={{paddingVertical: 20, paddingLeft: 24, paddingRight: 25}}>
        {!dummy_search ? (
          <View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: '700',
                  lineHeight: 21.72,
                  color: '#3A3A3A',
                }}>
                최근 검색어
              </Text>
              <TouchableOpacity>
                <Text
                  style={{
                    fontSize: 13,
                    fontWeight: '500',
                    lineHeight: 18.82,
                    color: '#C3C3C3',
                  }}>
                  전체삭제
                </Text>
              </TouchableOpacity>
            </View>

            <FlatList
              data={dummy_search}
              keyExtractor={item => item.id}
              renderItem={renderItem}
            />
          </View>
        ) : (
          <View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                paddingVertical: 83,
                paddingHorizontal: 83,
                gap: 12,
              }}>
              <Text style={{fontSize: 19, fontWeight: '500', color: '#A5A5A5'}}>
                검색 결과가 없어요
              </Text>
              <Text style={{fontSize: 14, fontWeight: '400', color: '#C3C3C3'}}>
                검색어의 철자와 띄어쓰기가 정확한지 확인해 주세요
              </Text>
            </View>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

const xIcon = require('../assets/icons/search/close.png');

const dummy_search = [
  {
    id: 1,
    word: '러닝',
  },
  {
    id: 2,
    word: '필라테스',
  },
  {
    id: 3,
    word: '헬스장',
  },
  {
    id: 4,
    word: '등산',
  },
];

export default Search;
