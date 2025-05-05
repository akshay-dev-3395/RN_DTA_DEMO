import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './styles.ts';
import initialHook from './initialHook.ts';
import ScreenWrapper from '@app/components/Layouts/ScreenWrapper.tsx';
import Navigation from '@app/navigation/index.tsx';
import useAppStore from '@app/stores/appStore.ts';

const InitialScreen = () => {
  const {firstRoute, isLoading} = initialHook();

  const {isOnboard, setOnboard}: any = useAppStore(state => state);

  console.log('InitialScreen====', isOnboard);

  if (!isLoading) {
    return <Navigation firstScreen={firstRoute} />;
  }

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <Text style={styles.textStyle} onPress={() => setOnboard(true)}>
          Welcome
        </Text>
      </View>
    </ScreenWrapper>
  );
};

export default InitialScreen;
