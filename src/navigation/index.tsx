import {View, Text} from 'react-native';
import React from 'react';
import {RootStackType} from './navigationType.ts';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OnboardScreen from '@app/screens/OnboardScreen/OnboardScreen.tsx';

type Props = {
  firstScreen?: string;
};

const Navigation = (props: Props) => {
  const {firstScreen} = props;
  const Stack: any = createNativeStackNavigator<RootStackType>();
  return (
    <Stack.Navigator
      initialRouteName={firstScreen}
      screenOptions={{headerShown: false, gestureEnabled: true}}>
      <Stack.Group>
        <Stack.Screen name={'OnboardScreen'} component={OnboardScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default Navigation;
