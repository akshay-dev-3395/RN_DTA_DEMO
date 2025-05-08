import {Animated, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useMemo, useRef} from 'react';
import HomeActiveIcon from '@app/assets/icons/homeActive.svg';
import HomeInactiveIcon from '@app/assets/icons/homeInactive.svg';
import AlertActiveIcon from '@app/assets/icons/alertActive.svg';
import AlertInactiveIcon from '@app/assets/icons/alertInactive.svg';
import {COLORS, FONTS} from '@app/constants/theme';
import {normalizeFontSize, wp} from '@app/constants/responsive';
import AttendanceActiveIcon from '@app/assets/icons/attendanceActive.svg';
import AttendanceInactiveIcon from '@app/assets/icons/attendanceInactive.svg';
import NotificationActiveIcon from '@app/assets/icons/notificationActive.svg';
import NotificationInactiveIcon from '@app/assets/icons/notificationInactive.svg';
import { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';


type Props = {
  focused: boolean;
  tabName: string;
};

const CustomBottomTab = (props: Props) => {
  const {focused, tabName} = props;
  const scale = useSharedValue(2);

  
  useEffect(() => {
    console.log("CustomBottomTab",focused);
    if (focused) {
      scale.value = withSpring(2);
    } else {
      scale.value = withSpring( 1, { 
        damping: 5,
        stiffness: 120,
      });
    }
  });



  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{scale: scale.value}],
    };
  });

  const renderIcon = useMemo(() => {
    switch (tabName) {
      case 'Home':
        return focused ? <HomeActiveIcon /> : <HomeInactiveIcon />;
      case 'Alerts':
        return focused ? <AlertActiveIcon /> : <AlertInactiveIcon />;
      case 'Attendance':
        return focused ? <AttendanceActiveIcon /> : <AttendanceInactiveIcon />;
      case 'Notifications':
        return focused ? <NotificationActiveIcon /> : <NotificationInactiveIcon />;
    }
  }, [tabName, focused]);

  return (
   
    <View style={styles.container}>
      {/* <View style={styles.renderIconstyle}>{renderIcon}</View> */}
      <Animated.View style={[styles.renderIconstyle, animatedStyle]}>
        {renderIcon}
      </Animated.View>
      <Text
        style={[
          styles.textButton,
          {color: focused ? COLORS.primary : COLORS.gray1},
        ]}>
        {tabName}
      </Text>
    </View>
   
  );
};

export default CustomBottomTab;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: wp('40%'),
  },
  renderIconstyle: {
    height: wp(40),
    width: wp(40),
    alignItems: 'center',
    justifyContent: 'center',
  },
  textButton: {
    color: COLORS.primary,
    ...FONTS.regular,
    fontSize: normalizeFontSize(13),
  },
});
