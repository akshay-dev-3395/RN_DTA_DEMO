import {View, Text} from 'react-native';
import React from 'react';
import {RootStackType} from './navigationType.ts';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OnboardScreen from '@app/screens/OnboardScreen/OnboardScreen.tsx';
import HomeScreen from '@app/screens/HomeScreen/HomeScreen.tsx';
import BottomNavigation from './BottomNavigation.tsx';
import AlertScreen from '@app/screens/Alerts/AlertScreen.tsx';
import AttendanceScreen from '@app/screens/Attendance/AttendanceScreen.tsx';
import NotificationScreen from '@app/screens/Notification/NotificationScreen.tsx';
import ProfileScreen from '@app/screens/Profile/ProfileScreen.tsx';
import TermsConditionScreen from '@app/screens/Profile/TermsConditionScreen.tsx';

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
        <Stack.Screen name={'BottomNavigation'} component={BottomNavigation} />
        <Stack.Screen name={'HomeScreen'} component={HomeScreen} />
        <Stack.Screen name={'AlertScreen'} component={AlertScreen} />
        <Stack.Screen name={'AttendanceScreen'} component={AttendanceScreen} />
        <Stack.Screen name={'NotificationScreen'} component={NotificationScreen} />
        <Stack.Screen name={'ProfileScreen'} component={ProfileScreen} />
        <Stack.Screen name={'TermsConditionScreen'} component={TermsConditionScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default Navigation;
