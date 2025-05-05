import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './styles.ts';
import onboardHook from './onboardHook.ts';
import ScreenWrapper from '@app/components/Layouts/ScreenWrapper.tsx';
import Animated from 'react-native-reanimated';
import Pagination from './Pagination.tsx';

const OnboardScreen = () => {
  const {
    isClickNext,
    setIsClickNext,
    currentIndex,
    animateImageStyle,
    animateView1Style,
    animateView2Style,
  } = onboardHook();

  return (
    <ScreenWrapper translucent>
      <View style={styles.container}>
        <Animated.Image
          source={require('@app/assets/images/general/onboard.png')}
          style={[styles.imageStyle, animateImageStyle]}
        />
        <View style={styles.innerContainer}>
          <Animated.View style={[styles.bottomDiv1, animateView1Style]}>
            <Text style={styles.welcome}>
              Submit leave requests and get approvals on the go
            </Text>
            <Text style={styles.pText}>
              Stay organized and productive with personalized to-do lists and
              task reminders.
            </Text>
          </Animated.View>
          <Animated.View style={[styles.bottomDiv2, animateView2Style]}>
            <Text style={styles.welcome}>
              Connect with your team instantly, anytime, anywhere
            </Text>
            <Text style={styles.pText}>
              Stay organized and productive with personalized to-do lists and
              task reminders.
            </Text>
          </Animated.View>
        </View>
        <Pagination
          isClickNext={isClickNext}
          setIsClickNext={setIsClickNext}
          currentIndex={currentIndex}
        />
      </View>
    </ScreenWrapper>
  );
};

export default OnboardScreen;
