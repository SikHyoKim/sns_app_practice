import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import api from '../api/axios';
import OptionHeader from '../components/OptionHeader';

const {width} = Dimensions.get('window');
const Mypage = () => {
  const [feeds, setFeeds] = useState([]);

  useEffect(() => {
    getFeed();
  }, []);
  console.log(feeds);
  const getFeed = async () => {
    const apiUrl = '/accounts/info';
    try {
      const response = await api.get(apiUrl);
      if (response) {
        setFeeds(response.data.result);
      } else {
        console.log('모르겠숴..');
      }
    } catch (error) {
      console.log(error);
    }
  };
  const renderPostWidthFlatList = ({item}) => {
    // console.log(item.post[0].img);
    return (
      <View style={{flexDirection: 'row', padding: 1}}>
        <Image source={item.img} style={styles.posts} />
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFF'}}>
      <View style={{flex: 1}}>
        <View>
          <OptionHeader title={feeds} />
        </View>
        <View>
          <View>
            <View
              style={{
                flexDirection: 'row',
                paddingHorizontal: 22,
                paddingVertical: 21,
                gap: 16,
              }}>
              <View>
                <Image
                  source={{uri: my_dummy_data[0].profileImg}}
                  style={{width: 90, height: 90, borderRadius: 50}}
                />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flex: 1,
                }}>
                {/* 게시글, 팔로워, 팔로잉 */}
                <View style={{paddingLeft: 24}}>
                  <TouchableOpacity
                    style={{
                      alignItems: 'center',
                      gap: 2,
                    }}>
                    <Text
                      style={
                        my_dummy_data[0].post.length === 0
                          ? styles.notExistNum
                          : styles.existsNum
                      }>
                      {my_dummy_data[0].post.length}
                    </Text>
                    <Text
                      style={{
                        fontSize: 16,
                        lineHeight: 20.27,
                        fontWeight: '600',
                      }}>
                      게시글
                    </Text>
                  </TouchableOpacity>
                </View>
                <View>
                  <TouchableOpacity
                    style={{
                      alignItems: 'center',
                      gap: 2,
                    }}>
                    <Text
                      style={
                        my_dummy_data[0].follow === 0
                          ? styles.notExistNum
                          : styles.existsNum
                      }>
                      {my_dummy_data[0].follow}
                    </Text>
                    <Text
                      style={{
                        fontSize: 16,
                        lineHeight: 20.27,
                        fontWeight: '600',
                      }}>
                      팔로워
                    </Text>
                  </TouchableOpacity>
                </View>
                <View>
                  <TouchableOpacity
                    style={{
                      alignItems: 'center',
                      gap: 2,
                    }}>
                    <Text
                      style={
                        my_dummy_data[0].following === 0
                          ? styles.notExistNum
                          : styles.existsNum
                      }>
                      {my_dummy_data[0].following}
                    </Text>
                    <Text
                      style={{
                        fontSize: 16,
                        lineHeight: 20.27,
                        fontWeight: '600',
                      }}>
                      팔로잉
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View
              style={{
                paddingHorizontal: 24,
                borderBottomWidth: 0.5,
                paddingBottom: 21,
                borderBottomColor: '#E0E0E0',
              }}>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: '400',
                  lineHeight: 20.27,
                  color: '#3A3A3A',
                }}>
                {my_dummy_data[0].name} {my_dummy_data[0].statusMessages}
              </Text>
            </View>
          </View>
        </View>
        {/* 나의 게시글 */}
        <View style={{flex: 1, paddingBottom: 50}}>
          <FlatList
            data={feeds}
            renderItem={renderPostWidthFlatList}
            numColumns={3}
            keyExtractor={item => item.id}
            scrollIndicatorInsets={true}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const my_dummy_data = [
  {
    id: 1,
    name: 'Mr.kimhan',
    profileImg: 'https://picsum.photos/200',
    statusMessages: '의 일상피드',
    follow: 0,
    following: 1,
    post: [
      {id: 'img1', img: require('../assets/icons/Mypage/photo1.png')},
      {id: 'img2', img: require('../assets/icons/Mypage/photo2.png')},
      {id: 'img3', img: require('../assets/icons/Mypage/photo3.png')},
      {id: 'img4', img: require('../assets/icons/Mypage/photo4.png')},
      {id: 'img5', img: require('../assets/icons/Mypage/photo5.png')},
      {id: 'img6', img: require('../assets/icons/Mypage/photo6.png')},
      {id: 'img7', img: require('../assets/icons/Mypage/photo7.png')},
      {id: 'img8', img: require('../assets/icons/Mypage/photo8.png')},
      {id: 'img9', img: require('../assets/icons/Mypage/photo9.png')},
      {id: 'img10', img: require('../assets/icons/Mypage/photo10.png')},
      {id: 'img11', img: require('../assets/icons/Mypage/photo11.png')},
      {id: 'img12', img: require('../assets/icons/Mypage/photo12.png')},
      {id: 'img13', img: require('../assets/icons/Mypage/photo13.png')},
      {id: 'img14', img: require('../assets/icons/Mypage/photo14.png')},
      {id: 'img15', img: require('../assets/icons/Mypage/photo15.png')},
    ],
    // posts
  },
];
const styles = StyleSheet.create({
  posts: {
    width: width / 3,
    height: 120,
  },
  notExistNum: {
    color: '#888888',
    fontSize: 18,
    fontWeight: '500',
    lineHeight: 20.27,
  },
  existsNum: {
    color: '#3A3A3A',
    fontSize: 18,
    fontWeight: '500',
    lineHeight: 20.27,
  },
});

export default Mypage;
