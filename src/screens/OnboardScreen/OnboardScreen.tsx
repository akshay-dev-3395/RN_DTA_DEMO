import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './styles.ts';
import onboardHook from './onboardHook.ts';
import ScreenWrapper from '@app/components/Layouts/ScreenWrapper.tsx';

const OnboardScreen = () => {
  const {} = onboardHook();
  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <Text>OnboardScreen</Text>
      </View>
    </ScreenWrapper>
  );
};

export default OnboardScreen;
