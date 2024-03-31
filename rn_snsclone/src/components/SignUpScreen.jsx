import React, {useState} from 'react';
import {
  View,
  TextInput,
  Alert,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';
import BasicHeader from './BasicHeader';
import {useNavigation} from '@react-navigation/native';
import api from '../api/axios';

const SignUpScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nickname, setNickname] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSignUp = async () => {
    // API 호출을 위한 URL
    const apiUrl = '/accounts';
    // API 호출을 위한 데이터
    const userData = {
      email,
      password,
      nickname,
      phoneNumber,
    };

    // Axios를 사용하여 POST 요청
    // 400에러 날경우 - 이메일 : 이메일 형식 , 비밀번호 : 특문,영어 대/소 문자 1자 이상, 숫자 1개이상, 닉네임 : 영어 소문자만
    try {
      const response = await api.post(apiUrl, userData);
      Alert.alert('회원가입 성공!', '환영합니다!', response);
      navigation.navigate('LogIn');
    } catch (error) {
      Alert.alert('오류 발생', error.message, error.reason);
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFF'}}>
      <View style={{flex: 1}}>
        <View>
          <BasicHeader title={'회원가입'} />
        </View>
        <View
          style={{
            paddingVertical: 10,
            paddingHorizontal: 36,
            flex: 1,
            paddingTop: 60,
            justifyContent: 'space-between',
          }}>
          <View style={{gap: 18}}>
            <View style={styles.InputText}>
              <TextInput
                placeholder="이메일"
                value={email}
                onChangeText={setEmail}
              />
            </View>
            <View style={styles.InputText}>
              <TextInput
                placeholder="비밀번호"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                maxLength={20}
              />
              <Text style={{fontSize: 10, color: '#AAA'}}>
                영어 대,소문자 1자씩, 숫자 1개,특문1개 이상 필수 입력
              </Text>
            </View>
            <View style={styles.InputText}>
              <TextInput
                placeholder="닉네임"
                value={nickname}
                onChangeText={setNickname}
              />
              <Text style={{fontSize: 10, color: '#AAA'}}>
                영어소문자만 입력
              </Text>
            </View>
            <View style={styles.InputText}>
              <TextInput
                placeholder="핸드폰 번호"
                value={phoneNumber}
                onChangeText={setPhoneNumber}
                keyboardType="phone-pad"
                maxLength={11}
              />
            </View>
          </View>

          <View>
            <TouchableOpacity
              onPress={handleSignUp}
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                paddingVertical: 13,
                backgroundColor: '#4AABFF',
                borderRadius: 4,
              }}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: '700',
                  lineHeight: 23.68,
                  color: '#FFF',
                }}>
                회원가입
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  InputText: {
    borderWidth: 0.5,
    borderRadius: 4,
    borderColor: '#C3C3C3',
    padding: 9,
    gap: 5,
  },
});

export default SignUpScreen;
