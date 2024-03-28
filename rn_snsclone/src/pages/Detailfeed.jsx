import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import BasicHeader from '../components/BasicHeader';
import {useRoute} from '@react-navigation/native';

export default function Detailfeed() {
  const route = useRoute();
  const dummy_feed = route.params;
  const {width} = Dimensions.get('window');
  const [isComent, setIsComent] = useState(dummy_feed.selectedItem.comment);

  // console.log(dummy_feed.selectedItem);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFF'}}>
      <ScrollView>
        <View style={{flex: 1, backgroundColor: '#FFF'}}>
          <View>
            <BasicHeader title={'상세페이지'} />
            <View
              style={{
                flexDirection: 'row',
                position: 'absolute',
                right: 0,
                padding: 16,
                top: 0,
                gap: 10,
              }}>
              <TouchableOpacity>
                <Image source={share} style={{width: 30, height: 30}} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={scrab} style={{width: 30, height: 30}} />
              </TouchableOpacity>
            </View>
          </View>
          {/* feed */}
          <View style={{maxWidth: width}}>
            <View
              style={{
                flexDirection: 'row',
                paddingHorizontal: 24,
                paddingVertical: 24,
                justifyContent: 'space-between',
              }}>
              <View
                style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
                <Image
                  source={{uri: dummy_feed.selectedItem.profileImg}}
                  style={{width: 40, height: 40}}
                />
                <Text
                  style={{
                    fontSize: 14,
                    lineHeight: 20.27,
                    color: '#3A3A3A',
                    fontWeight: '500',
                  }}>
                  {dummy_feed.selectedItem.name}
                </Text>
              </View>
              <TouchableOpacity>
                <Image source={more} style={{width: 30, height: 30}} />
              </TouchableOpacity>
            </View>
            <View>
              <Image
                source={{uri: dummy_feed.selectedItem.feedImg}}
                style={{width: width, height: 492}}
              />
              <View
                style={{
                  paddingHorizontal: 24,
                  paddingVertical: 24,
                  gap: 10,
                  paddingBottom: 20,
                }}>
                <Text
                  style={{
                    fontSize: 12,
                    lineHeight: 16,
                    fontWeight: '400',
                    color: '#A5A5A5',
                  }}>
                  {dummy_feed.selectedItem.time}
                </Text>
                <Text
                  style={{
                    fontWeight: '400',
                    lineHeight: 21.72,
                    fontSize: 15,
                    letterSpacing: -1,
                  }}>
                  {dummy_feed.selectedItem.contents}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  paddingHorizontal: 24,
                  gap: 8,
                  flexWrap: 'wrap',
                  paddingBottom: 31,
                }}>
                <TouchableOpacity style={styles.hashtag}>
                  <Text style={styles.hashtagfont}>#스포츠</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.hashtag}>
                  <Text style={styles.hashtagfont}>#필라테스복</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.hashtag}>
                  <Text style={styles.hashtagfont}>#요가복</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.hashtag}>
                  <Text style={styles.hashtagfont}>#기능성</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.hashtag}>
                  <Text style={styles.hashtagfont}>#언더아머 FW 컬렉션</Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  paddingHorizontal: 24,
                  paddingVertical: 20,
                  borderTopWidth: 1,
                  borderBottomWidth: 1,
                  borderColor: '#E0E0E0',
                  gap: 16,
                }}>
                <TouchableOpacity
                  style={{flexDirection: 'row', alignItems: 'center', gap: 4}}>
                  <Image
                    source={expressionImg}
                    style={{width: 16, height: 16}}
                  />
                  <Text>표현하기</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{flexDirection: 'row', alignItems: 'center', gap: 4}}>
                  <Image source={commentImg} style={{width: 16, height: 16}} />
                  <Text>댓글 {dummy_feed.selectedItem.comment}</Text>
                </TouchableOpacity>
              </View>
            </View>
            {/* comment */}
            <View>
              {setIsComent === 0 && dummy_feed.selectedItem.like ? (
                <View>
                  <View
                    style={{
                      paddingVertical: 30,
                      justifyContent: 'center',
                      alignItems: 'center',
                      gap: 6,
                    }}>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: '700',
                        lineHeight: 23.17,
                        color: '#A5A5A5',
                      }}>
                      댓글이 없어요.
                    </Text>
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: '400',
                        lineHeight: 21.72,
                        color: '#A5A5A5',
                      }}>
                      첫 댓글을 남겨주세요!
                    </Text>
                  </View>
                  <View
                    style={{
                      paddingVertical: 23,
                      paddingHorizontal: 16,
                      borderTopWidth: 0.5,
                      borderTopColor: '#E0E0E0',
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}>
                    <Image
                      source={image_upload}
                      style={{width: 30, height: 30}}
                    />
                    <TextInput
                      placeholder="댓글을 입력하세요"
                      style={{
                        backgroundColor: '#F5F5F5',
                        width: 261,
                        height: 35,
                        borderRadius: 4,
                        borderWidth: 0.5,
                        borderColor: '#F5F5F5',
                        paddingHorizontal: 10,
                      }}
                    />
                    <TouchableOpacity>
                      <Text
                        style={{
                          fontSize: 15,
                          fontWeight: '500',
                          lineHeight: 21.72,
                          color: '#C3C3C3',
                        }}>
                        등록
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              ) : (
                <View style={{paddingVertical: 26, paddingHorizontal: 23}}>
                  <View
                    style={{
                      flexDirection: 'row',
                      gap: 5,
                    }}>
                    <View>
                      <Image
                        source={{uri: dummy_feed.selectedItem.profileImg}}
                        style={{width: 30, height: 30}}
                      />
                    </View>
                    <View style={{paddingTop: 6, paddingRight: 23}}>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                        }}>
                        <Text
                          style={{
                            paddingTop: 6,
                            fontSize: 13,
                            fontWeight: '700',
                            lineHeight: 19.24,
                            color: '#7B7B7B',
                          }}>
                          {dummy_feed.selectedItem.name}
                        </Text>
                        <Text
                          style={{
                            fontSize: 13,
                            fontWeight: '400',
                            lineHeight: 19.24,
                            color: '#A5A5A5',
                          }}>
                          시간
                        </Text>
                      </View>
                      <View style={{paddingVertical: 10}}>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            lineHeight: 22.5,
                            color: '#3A3A3A',
                          }}>
                          정확한 자세와 고중량 무게를 들지 않는 선이시면
                          괜찮으실 것 같네요 ㅎㅎ
                        </Text>
                      </View>
                      <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                          }}>
                        <View
                          style={{
                            flexDirection: 'row',
                            gap: 16,
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}>
                          <View>
                            <TouchableOpacity
                              style={{flexDirection: 'row', gap: 4}}>
                              <Image
                                source={heartImg}
                                style={{width: 24, height: 24}}
                              />
                              <Text
                                style={{
                                  fontSize: 15,
                                  fontWeight: '400',
                                  lineHeight: 22.2,
                                }}>
                                10
                              </Text>
                            </TouchableOpacity>
                          </View>
                          <View>
                            <TouchableOpacity
                              style={{flexDirection: 'row', gap: 4}}>
                              <Image
                                source={commentImg}
                                style={{width: 22, height: 18}}
                              />
                              <Text
                                style={{
                                  fontSize: 15,
                                  fontWeight: '400',
                                  lineHeight: 22.2,
                                }}>
                                5
                              </Text>
                            </TouchableOpacity>
                          </View>
                        </View>
                        <View>
                          <TouchableOpacity>
                            <Text
                              style={{
                                fontSize: 13,
                                fontWeight: '400',
                                lineHeight: 19.24,
                                color: '#7B7B7B',
                              }}>
                              신고
                            </Text>
                          </TouchableOpacity>
                        </View>
                      </View>
                    </View>
                  </View>
                  <View
                    style={{
                      paddingVertical: 23,
                      paddingHorizontal: 16,
                      borderTopWidth: 0.5,
                      borderTopColor: '#E0E0E0',
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}>
                    <Image
                      source={image_upload}
                      style={{width: 30, height: 30}}
                    />
                    <TextInput
                      placeholder="댓글을 입력하세요"
                      style={{
                        backgroundColor: '#F5F5F5',
                        width: 261,
                        height: 35,
                        borderRadius: 4,
                        borderWidth: 0.5,
                        borderColor: '#F5F5F5',
                        paddingHorizontal: 10,
                      }}
                    />
                    <TouchableOpacity>
                      <Text
                        style={{
                          fontSize: 15,
                          fontWeight: '500',
                          lineHeight: 21.72,
                          color: '#C3C3C3',
                        }}>
                        등록
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              )}
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const scrab = require('../assets/icons/Detailfeed/scrab.png');
const share = require('../assets/icons/Detailfeed/share.png');
const more = require('../assets/icons/Detailfeed/more.png');
const commentImg = require('../assets/icons/Detailfeed/comment.png');
const expressionImg = require('../assets/icons/Detailfeed/expression-outline.png');
const image_upload = require('../assets/icons/Detailfeed/image_upload.png');
const heartImg = require('../assets/icons/Detailfeed/heart-outline.png');

const styles = StyleSheet.create({
  hashtag: {
    backgroundColor: '#F3F3F3',
    borderRadius: 4,
    gap: 2,
    paddingHorizontal: 8,
    paddingVertical: 4,
    height: 28,
  },
  hashtagfont: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 20.27,
    color: '#7B7B7B',
  },
});
