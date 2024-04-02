import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  RefreshControl,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import api from '../api/axios';

const Home = () => {
  const navigation = useNavigation();
  const {width} = Dimensions.get('window');
  const [isClicked, setIsClicked] = useState(feeds);
  const [feeds, setFeeds] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    getFeed();
  }, []);

  const getFeed = async () => {
    const apiUrl = '/feed';
    try {
      const response = await api.get(apiUrl);
      if (response) {
        setFeeds(response.data.result.content);
      } else {
        console.log('모르겠숴..');
      }
    } catch (error) {
      console.log(error);
    }
  };
  const renderItem = ({item}) => {
    console.log(item);

    const detailItemClick = clickedId => {
      const selectedItem = item.id.find(item => item.id === clickedId);
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
    console.log(`${item.images[0]}`);

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
            <Image
              source={{uri: `${item.imgaes}`}}
              style={{width: 32, height: 32}}
            />
            <Text>{item.nickname}</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={moremenu} style={{width: 24, height: 24}} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => detailItemClick(item.id)}
          style={{gap: 8, alignItems: 'center'}}>
          <Image
            source={{uri: `${item.images[0]}`}}
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
              {item.emotions.total}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{flexDirection: 'row', gap: 5, alignItems: 'center'}}>
            <Image source={mode_comment} style={{width: 23, height: 23}} />
            <Text style={{fontSize: 14, lineHeight: 14, fontWeight: '400'}}>
              {item.replys.length}
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
          data={feeds}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          showsHorizontalScrollIndicator={false}
          removeClippedSubviews
          style={{marginBottom: 80}}
          extraData={isClicked}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={async () => {
                await getFeed();
                setRefreshing(false);
              }}
            />
          }
        />
      </View>
    </SafeAreaView>
  );
};

const moremenu = require('../assets/icons/HomeIcons/more_horiz.png');
const favorite = require('../assets/icons/HomeIcons/favorite.png');
const mode_comment = require('../assets/icons/HomeIcons/mode_comment.png');
const heartfill = require('../assets/icons/HomeIcons/heart-fill.png');

export default Home;
