import React from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import OptionHeader from '../components/OptionHeader';

const Mypage = () => {
  const renderItem = ({item}) => {
    return (
      <View>
        <View
          style={{
            flexDirection: 'row',
            paddingHorizontal: 25,
            paddingVertical: 21,
            gap: 16,
          }}>
          <Image
            source={{uri: item.profileImg}}
            style={{width: 60, height: 60, borderRadius: 50}}
          />
          <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', flex: 1, paddingHorizontal: 24}}>
            <View>
              <TouchableOpacity>
                <Text>게시글</Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity>
                <Text>팔로워</Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity>
                <Text>팔로잉</Text>
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
            {item.name} {item.statusMessages}
          </Text>
        </View>
        {/* 나의 게시글 */}
        <View>
          <View>
            <TouchableOpacity>
              <Image source={item.post.img1} style={{width: 120, height: 120}} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFF'}}>
      <View style={{flex: 1}}>
        <View>
          <OptionHeader title={my_dummy_data[0].name} />
        </View>
        <FlatList
          data={my_dummy_data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
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
    post: {
      img1: require('../assets/icons/Mypage/photo1.png'),
      img2: require('../assets/icons/Mypage/photo2.png'),
      img3: require('../assets/icons/Mypage/photo3.png'),
      img4: require('../assets/icons/Mypage/photo4.png'),
      img5: require('../assets/icons/Mypage/photo5.png'),
      img6: require('../assets/icons/Mypage/photo6.png'),
    },
    // posts
  },
];

export default Mypage;
