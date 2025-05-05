import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {deviceWidth, wp} from '@app/constants/responsive';

const onboardHook = () => {
  const [isClickNext, setIsClickNext] = useState(false);
  const currentIndex = useSharedValue<number>(0);

  const animateImageStyle = useAnimatedStyle(() => {
    const slideValue = interpolate(
      currentIndex.value,
      [0, 1],
      [0, -deviceWidth * 0.8],
    );
    return {
      transform: [{translateX: withTiming(slideValue, {duration: 700})}],
    };
  });

  const animateView1Style = useAnimatedStyle(() => {
    const opacityValue = interpolate(currentIndex.value, [0, 1], [1, 0]);
    return {
      opacity: withTiming(opacityValue, {duration: 700}),
    };
  });

  const animateView2Style = useAnimatedStyle(() => {
    const opacityValue = interpolate(currentIndex.value, [0, 1], [0, 1]);
    return {
      opacity: withTiming(opacityValue, {duration: 700}),
    };
  });

  return {
    isClickNext,
    setIsClickNext,
    currentIndex,
    animateImageStyle,
    animateView1Style,
    animateView2Style,
  };
};

export default onboardHook;
