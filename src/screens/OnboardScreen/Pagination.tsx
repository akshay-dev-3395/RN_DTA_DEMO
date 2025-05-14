import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {memo} from 'react';

import ArrowRight from '@app/assets/icons/general/arrow.svg';
import Animated, {
  SharedValue,
  interpolate,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import {navigate, resetNavigation} from '@app/services/navigationService';
import {wp} from '@app/constants/responsive';
import useAppStore from '@app/stores/appStore';

const FIRST_WIDTH = wp(25);
const SECOND_WIDTH = wp(10);

type Props = {
  currentIndex: SharedValue<number>;
  setIsClickNext: (state: boolean) => void;
  isClickNext: boolean;
};

const Pagination = (props: Props) => {
  const {currentIndex, setIsClickNext, isClickNext} = props;
  const {isOnboard, setOnboard}: any = useAppStore(state => state);

  // const dispatch = useAppDispatch();

  const onPressButton = async (state: boolean) => {
    if (state) {
      resetNavigation('HomeScreen', null);
      setOnboard(true);
    } else {
      currentIndex.value = 1;
      setIsClickNext(true);
    }
  };

  const animateView1Style = useAnimatedStyle(() => {
    const bg = currentIndex.value == 0 ? '#202C55' : '#D9D9D9';
    const widthValue = interpolate(
      currentIndex.value,
      [0, 1],
      [FIRST_WIDTH, SECOND_WIDTH],
    );
    return {
      width: withTiming(widthValue, {duration: 700}),
      backgroundColor: bg,
    };
  });

  const animateView2Style = useAnimatedStyle(() => {
    const bg = currentIndex.value == 0 ? '#D9D9D9' : '#202C55';
    const widthValue = interpolate(
      currentIndex.value,
      [0, 1],
      [SECOND_WIDTH, FIRST_WIDTH],
    );
    return {
      width: withTiming(widthValue, {duration: 700}),
      backgroundColor: bg,
    };
  });

  return (
    <View style={styles.container}>
      <View style={styles.sliderWrap}>
        <Animated.View style={[styles.sliderStyle, animateView1Style]} />
        <Animated.View style={[styles.sliderStyle, animateView2Style]} />
      </View>
      <TouchableOpacity
        onPress={() => onPressButton(isClickNext)}
        style={styles.button}
        testID="next-button">
        <ArrowRight />
      </TouchableOpacity>
    </View>
  );
};

export default memo(Pagination);

const styles = StyleSheet.create({
  container: {
    paddingBottom: wp(25),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: wp(20),
  },
  button: {
    height: wp(50),
    width: wp(50),
    backgroundColor: '#202C55',
    justifyContent: 'center',
    borderRadius: wp(50),
    alignItems: 'center',
  },
  sliderWrap: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sliderStyle: {
    height: wp(5),
    width: wp(25),
    backgroundColor: '#202C55',
    borderRadius: 4,
    marginRight: 5,
  },
});
