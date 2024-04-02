import React, {useState} from 'react';
import {
  Image,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import ExportHeader from '../components/ExportHeader';
const img = require('../assets/imgs/Homeimgs/photo.png');
const xicon = require('../assets/icons/photox.png');
const Addpost = ({}) => {
  const [onImage, setOnImage] = useState([]);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFF'}}>
      <View style={{flex: 1}}>
        <ExportHeader title={'데일리 피드 작성'} />
        <View style={{paddingVertical: 24, paddingHorizontal: 24, gap: 20}}>
          {setOnImage.length !== 0 ? (
            <View>
              <TouchableOpacity
                style={{
                  paddingVertical: 16,
                  paddingHorizontal: 16,
                  backgroundColor: '#EAEAEA',
                  width: '50%',
                  alignItems: 'center',
                  height: 100,
                  justifyContent: 'center',
                }}>
                <Text>사진 업로드</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View>
              <Image source={img} style={{width: 94, height: 94}} />
              <TouchableOpacity>
                <Image
                  source={xicon}
                  style={{width: 20, height: 20, position: 'absolute'}}
                />
              </TouchableOpacity>
            </View>
          )}
          <View>
            <TextInput placeholder="글을 입력해주세요" />
          </View>
          <View>
            <Text>키워드 추가</Text>
          </View>
          <View>
            <TextInput />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Addpost;
