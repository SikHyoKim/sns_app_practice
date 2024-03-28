import React, {useRef} from 'react';
import {View, TouchableOpacity, StyleSheet, Animated, Text} from 'react-native';

const CustomBottomTab = ({state, navigation, insets, descriptors, name}) => {
  const tab1Value = useRef(new Animated.Value(0)).current;
  const tab2Value = useRef(new Animated.Value(0)).current;
  const tab3Value = useRef(new Animated.Value(0)).current;
  const tab4Value = useRef(new Animated.Value(0)).current;
  const tab5Value = useRef(new Animated.Value(0)).current;

  const scaleAnimated = (value, andimatedValue) =>
    Animated.timing(andimatedValue, {
      useNativeDriver: true,
      toValue: value,
      duration: 150,
    });

  const andimatedValues = {
    0: tab1Value,
    1: tab2Value,
    2: tab3Value,
    3: tab4Value,
    4: tab5Value,
  };

  return (
    <View style={[styles.bottomTabBarWrapper, {paddingBottom: insets.bottom}]}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label = route.name;
        const isFocused = state.index === index;
        const animatedOf = andimatedValues[index];

        const iconFlag = bool => {
          switch (label) {
            case '홈':
              return bool ? bottombar_main_fill : bottombar_main;
            case '검색':
              return bool ? bottombar_search_fill : bottombar_search;
            case '채팅':
              return bool ? bottombar_community_fill : bottombar_community;
            default:
              return bool ? bottombar_mypage_fill : bottombar_mypage;
          }
        };

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
          scaleAnimated(1, animatedOf).start(({finished}) => {
            if (finished) {
              scaleAnimated(0, animatedOf).start();
            }
          });
        };

        return (
          <TouchableOpacity
            style={{flex: 1, alignItems: 'center'}}
            key={index}
            activeOpacity={0.7}
            onPress={onPress}>
            <Animated.Image
              source={iconFlag(isFocused)}
              resizeMode={'contain'}
              style={{
                width: 24,
                height: 24,
                transform: [
                  {
                    scale: animatedOf.interpolate({
                      inputRange: [0, 1],
                      outputRange: [1, 0.9],
                    }),
                  },
                ],
              }}
            />
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                paddingTop: 4,
              }}>
              <Text style={{fontSize: 12}}>{route.name}</Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const bottombar_main_fill = require('../assets/icons/bottomtabs/bottombar_main_fill.png');
const bottombar_main = require('../assets/icons/bottomtabs/bottombar_main.png');
const bottombar_search_fill = require('../assets/icons/bottomtabs/bottombar_search_fill.png');
const bottombar_search = require('../assets/icons/bottomtabs/bottombar_search.png');
const bottombar_mypage_fill = require('../assets/icons/bottomtabs/bottombar_mypage_fill.png');
const bottombar_mypage = require('../assets/icons/bottomtabs/bottombar_mypage.png');
const bottombar_community_fill = require('../assets/icons/bottomtabs/bottombar_community_fill.png');
const bottombar_community = require('../assets/icons/bottomtabs/bottombar_community.png');

const styles = StyleSheet.create({
  bottomTabBarWrapper: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    justifyContent: 'space-between',
    borderStyle: 'solid',
    borderRadius: 24,
    borderTopWidth: 0.5,
    borderLeftWidth: 0.5,
    borderRightWidth: 0.5,
    borderColor: '#C3C3C3',
    backgroundColor: '#FFF',
    paddingTop: 10,
    zIndex: 10,
  },
});

export default CustomBottomTab;
