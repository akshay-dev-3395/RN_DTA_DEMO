import {View, Text} from 'react-native';
import React from 'react';
import ScreenWrapper from '@app/components/Layouts/ScreenWrapper';
import {styles} from './styles';

const HomeScreen = () => {
  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <Text style={styles.textStyle}> Welcome to Home Screen</Text>
      </View>
    </ScreenWrapper>
  );
};

export default HomeScreen;
