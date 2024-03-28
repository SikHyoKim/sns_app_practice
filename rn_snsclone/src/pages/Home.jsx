import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const Home = () => {
  const navigation = useNavigation();
  const {width} = Dimensions.get('window');
  const [isClicked, setIsClicked] = useState(dummy_feed);
  const renderItem = ({item, index}) => {
    const detailItemClick = clickedId => {
      const selectedItem = dummy_feed.find(item => item.id === clickedId);
      navigation.replace('Detailfeed', {selectedItem});
    };
    const toggleLike = id => {
      const newData = isClicked.map(item => {
        if (item.id === id) {
          return {...item, onlike: !item.onlike};
        }
        return item;
      });
      setIsClicked(newData);
    };

    return (
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
            style={{flexDirection: 'row', alignItems: 'center', gap: 6}}>
            <Image source={profile} style={{width: 32, height: 32}} />
            <Text>{item.name}</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={moremenu} style={{width: 24, height: 24}} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => detailItemClick(item.id)}
          style={{gap: 8, alignItems: 'center'}}>
          <Image
            source={{uri: item.feedImg}}
            style={{width: width - 32, height: 343, borderRadius: 8}}
          />
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            gap: 16,
            paddingTop: 18,
            paddingHorizontal: 16,
          }}>
          <TouchableOpacity
            onPress={() => toggleLike(item.id)}
            style={{flexDirection: 'row', gap: 5, alignItems: 'center'}}>
            {item.onlike ? (
              <Image source={heartfill} style={{width: 24, height: 24}} />
            ) : (
              <Image source={favorite} style={{width: 24, height: 24}} />
            )}
            <Text style={{fontSize: 14, lineHeight: 14, fontWeight: '400'}}>
              {item.like}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{flexDirection: 'row', gap: 5, alignItems: 'center'}}>
            <Image source={mode_comment} style={{width: 23, height: 23}} />
            <Text style={{fontSize: 14, lineHeight: 14, fontWeight: '400'}}>
              {item.comment}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{paddingHorizontal: 16}}>
          <View style={{paddingVertical: 8}}>
            <Text style={{fontSize: 22, lineHeight: 22, fontWeight: '400'}}>
              {item.contents}
            </Text>
          </View>
          <View>
            <Text
              style={{
                fontSize: 12,
                lineHeight: 16,
                fontWeight: '400',
                color: '#BBBBBB',
              }}>
              {item.time}
            </Text>
          </View>
        </View>
      </View>
    );
  };

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
        <FlatList
          data={dummy_feed}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          showsHorizontalScrollIndicator={false}
          removeClippedSubviews
          style={{marginBottom: 80}}
          extraData={isClicked}
        />
      </View>
    </SafeAreaView>
  );
};

const profile = require('../assets/imgs/Homeimgs/_Avatar_.png');
const moremenu = require('../assets/icons/HomeIcons/more_horiz.png');
const homefeed = require('../assets/imgs/Homeimgs/photo.png');
const favorite = require('../assets/icons/HomeIcons/favorite.png');
const mode_comment = require('../assets/icons/HomeIcons/mode_comment.png');
const heartfill = require('../assets/icons/HomeIcons/heart-fill.png');

const dummy_feed = [
  {
    id: 1,
    name: 'Jeongtaeyoung_5812',
    profileImg: 'https://avatar.iran.liara.run/public',
    feedImg: 'https://picsum.photos/id/1/400/400',
    contents: '오운완',
    like: 27,
    comment: 14,
    time: '5분 전',
    onlike: false,
  },
  {
    id: 2,
    name: 'Jeongtaeyoung_5812',
    profileImg: 'https://avatar.iran.liara.run/public',
    feedImg: 'https://picsum.photos/id/1/400/400',
    contents: '오늘은 어떤운동',
    like: 17,
    comment: 1,
    time: '50분 전',
    onlike: false,
  },
  {
    id: 3,
    name: 'Jeongtaeyoung_5812',
    profileImg: 'https://avatar.iran.liara.run/public',
    feedImg: 'https://picsum.photos/id/1/400/400',
    contents: '운동 좋아',
    like: 307,
    comment: 4,
    time: '10분 전',
    onlike: false,
  },
  {
    id: 4,
    name: 'Jeongtaeyoung_5812',
    profileImg: 'https://avatar.iran.liara.run/public',
    feedImg: 'https://picsum.photos/id/1/400/400',
    contents: '운동 힘들어',
    like: 337,
    comment: 140,
    time: '1시간 전',
    onlike: false,
  },
];

export default Home;
