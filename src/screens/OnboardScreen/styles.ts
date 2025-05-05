import {
  deviceHeight,
  deviceWidth,
  hp,
  normalizeFontSize,
  wp,
} from '@app/constants/responsive';
import {COLORS, FONTS} from '@app/constants/theme';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  imageStyle: {
    width: deviceWidth * 1.8,
    height: deviceHeight * 0.6,
  },
  innerContainer: {
    flex: 1,
    position: 'relative',
  },
  bottomDiv1: {
    paddingHorizontal: wp(20),
    marginVertical: wp(10),
    position: 'absolute',
  },
  bottomDiv2: {
    paddingHorizontal: wp(20),
    marginVertical: wp(10),
    position: 'absolute',
  },
  welcome: {
    ...FONTS.medium,
    fontSize: normalizeFontSize(24),
    color: COLORS.titleBlack,
  },
  pText: {
    ...FONTS.regular,
    fontSize: normalizeFontSize(14),
    color: COLORS.subText,
    marginTop: wp(10),
  },
});
