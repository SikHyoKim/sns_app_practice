import React, {useEffect, useState} from 'react';
import {
  Alert,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import BasicHeader from './BasicHeader';
import api from '../api/axios';
const LogIn = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // useEffect(() => {
  //   setTimeout(() => {
  //     navigation.replace('MainTab');
  //   }, 2000);
  // }, []);
  // const LoginSuccess = () => {
  //   if ()
  // }
  const LogInCheck = async () => {
    // API 호출을 위한 URL
    const apiUrl = '/auth';
    // API 호출을 위한 데이터
    const userData = {
      email,
      password,
    };

    // Axios를 사용하여 POST 요청
    try {
      const response = await api.post(apiUrl, userData);
      if (response) {
        Alert.alert('로그인 성공!', '환영합니다!');
        navigation.navigate('MainTab');
      } else {
        console.log('false');
        console.log(response.state, response.problem, response.status);
      }
    } catch (error) {
      Alert.alert('오류 발생', error.message, error.reason);
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFF'}}>
      <View style={{flex: 1}}>
        <BasicHeader title={'로그인'} leftArrowOption={false} />
        <View
          style={{
            justifyContent: 'center',
            flex: 1,
            paddingHorizontal: 24,
            paddingBottom: '50%',
          }}>
          <View style={{gap: 10}}>
            <View
              style={{
                borderWidth: 0.5,
                borderRadius: 4,
                borderColor: '#C3C3C3',
                padding: 9,
              }}>
              <TextInput
                placeholder="이메일를 입력 해주세요"
                keyboardType="email-address"
                autoComplete="off"
                autoFocus={true}
                value={email}
                onChangeText={setEmail}
                inputMode="email"
              />
            </View>
            <View
              style={{
                borderWidth: 0.5,
                borderRadius: 4,
                borderColor: '#C3C3C3',
                padding: 9,
              }}>
              <TextInput
                placeholder="비밀번호를 입력 해주세요"
                autoComplete="off"
                secureTextEntry={true}
                value={password}
                onChangeText={setPassword}
                maxLength={12}
              />
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              paddingTop: 20,
              paddingBottom: 30,
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              onPress={() => navigation.navigate('SignUpScreen')}>
              <Text>회원가입</Text>
            </TouchableOpacity>
            <View style={{flexDirection: 'row', gap: 8}}>
              <TouchableOpacity>
                <Text>아이디 찾기</Text>
              </TouchableOpacity>
              <View
                style={{
                  borderWidth: 1,
                  borderColor: '#E0E0E0',
                  height: 10,
                  marginTop: 3,
                }}
              />
              <TouchableOpacity>
                <Text>비밀번호 찾기</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <TouchableOpacity
              onPress={LogInCheck}
              style={{
                backgroundColor: '#4AABFF',
                justifyContent: 'center',
                alignItems: 'center',
                paddingVertical: 13,
                borderRadius: 4,
              }}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: '700',
                  lineHeight: 23.68,
                  color: '#FFF',
                }}>
                로그인
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LogIn;
