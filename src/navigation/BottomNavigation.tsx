import {ImageBackground, Platform, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '@app/screens/HomeScreen/HomeScreen';
import CustomBottomTab from '@app/components/CustomBottomTab/CustomBottomTab';
import {wp} from '@app/constants/responsive';
import {COLORS} from '@app/constants/theme';
import AlertScreen from '@app/screens/Alerts/AlertScreen';
import AttendanceScreen from '@app/screens/Attendance/AttendanceScreen';
import NotificationScreen from '@app/screens/Notification/NotificationScreen';


const BottomNavigation = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabStyle,
      }}>
      <Tab.Screen
        name={'HomeScreen'}
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <CustomBottomTab tabName="Home" focused={focused} />
          ),
        }}
      />

      <Tab.Screen
        name={'AlertScreen'}
        component={AlertScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <CustomBottomTab tabName="Alerts" focused={focused} />
          ),
        }}
      />

      <Tab.Screen
        name={'AttendanceScreen'}
        component={AttendanceScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <CustomBottomTab tabName="Attendance" focused={focused} />
          ),
        }}
      />

      <Tab.Screen
        name={'NotificationScreen'}
        component={NotificationScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <CustomBottomTab tabName="Notifications" focused={focused} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;

const styles = StyleSheet.create({
  tabStyle: {
    height: wp(80),
    backgroundColor: COLORS.white,
    paddingTop: wp(15),
    position: 'absolute',
    borderRadius: wp(6),
  },
  scanWrap: {
    position: 'absolute',
    top: -wp(55),
    backgroundColor: COLORS.white,
    width: wp(75),
    height: wp(75),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: wp(70),
  },
  iconWrap: {
    width: wp(45),
    height: wp(45),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: wp(45),
    backgroundColor: COLORS.primary,
    boxShadow: '0px 0px 40px 2px #3F57FF',
  },
});
