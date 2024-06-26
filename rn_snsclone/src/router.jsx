import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CustomBottomTab from './components/CustomBttomTab';
import Home from './pages/Home';
import Splash from './pages/Splash';
import Search from './pages/Search';
import Chatting from './pages/Chatting';
import Mypage from './pages/Mypage';
import Detailfeed from './pages/Detailfeed';
import Addpost from './pages/Addpost';
import LogIn from './components/LogIn';
import SignUpScreen from './components/SignUpScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const renderTabBar = props => <CustomBottomTab {...props} />;

const MainTab = () => {
  return (
    <Tab.Navigator
      tabBar={renderTabBar}
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="홈" component={Home} />
      <Tab.Screen name="검색" component={Search} />
      <Tab.Screen name="추가" component={Addpost} />
      <Tab.Screen name="채팅" component={Chatting} />
      <Tab.Screen name="내 정보" component={Mypage} />
    </Tab.Navigator>
  );
};

const router = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="LogIn" component={LogIn} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
      <Stack.Screen name="MainTab" component={MainTab} />
      <Stack.Screen name="Detailfeed" component={Detailfeed} />
    </Stack.Navigator>
  );
};

export default router;
