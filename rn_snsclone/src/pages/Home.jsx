import React from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const Home = () => {
  const {width} = Dimensions.get('window');
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFF'}}>
      <View style={{flex: 1, backgroundColor: '#FFF', maxWidth: width}}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            borderBottomWidth: 1,
            borderBottomColor: '#E0E0E0',
            paddingVertical: 13,
          }}>
          <Text style={{fontSize: 17, fontWeight: '700', lineHeight: 24}}>
            오늘의 운동
          </Text>
        </View>
        {/* FEED */}
        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingVertical: 16,
              paddingHorizontal: 16,
            }}>
            <TouchableOpacity
              style={{flexDirection: 'row', alignItems: 'center',gap: 6}}>
              <Image source={profile} style={{width: 32, height: 32}} />
              <Text>userName</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={moremenu} style={{width: 24, height: 24}} />
            </TouchableOpacity>
          </View>
          <View style={{gap: 8, alignItems: 'center'}}>
            <Image
              source={homefeed}
              style={{width: width - 32, height: 343, borderRadius: 8}}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              gap: 16,
              paddingTop: 18,
              paddingHorizontal: 16,
            }}>
            <TouchableOpacity
              style={{flexDirection: 'row', gap: 5, alignItems: 'center'}}>
              <Image source={favorite} style={{width: 24, height: 24}} />
              <Text style={{fontSize: 14, lineHeight: 14, fontWeight: '400'}}>0</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{flexDirection: 'row', gap: 5, alignItems: 'center'}}>
              <Image source={mode_comment} style={{width: 23, height: 23}} />
              <Text style={{fontSize: 14, lineHeight: 14, fontWeight: '400'}}>0</Text>
            </TouchableOpacity>
          </View>
          <View style={{paddingHorizontal: 16}}>
            <View style={{paddingVertical: 8}}>
              <Text style={{fontSize: 22, lineHeight: 22, fontWeight: '400'}}>content</Text>
            </View>
            <View>
              <Text
                style={{
                  fontSize: 12,
                  lineHeight: 16,
                  fontWeight: '400',
                  color: '#BBBBBB',
                }}>
                10:04time
              </Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const profile = require('../assets/imgs/Homeimgs/_Avatar_.png');
const moremenu = require('../assets/icons/HomeIcons/more_horiz.png');
const homefeed = require('../assets/imgs/Homeimgs/photo.png');
const favorite = require('../assets/icons/HomeIcons/favorite.png');
const mode_comment = require('../assets/icons/HomeIcons/mode_comment.png');

const dummy_img = [
  {
    imgurl: 'https://dummyimage.com/362x343/000/fff',
  },
  {
    imgurl: 'https://dummyimage.com/362x343/000/fff',
  },
  {
    imgurl: 'https://dummyimage.com/362x343/000/fff',
  },
  {
    imgurl: 'https://dummyimage.com/362x343/000/fff',
  },
];

export default Home;
