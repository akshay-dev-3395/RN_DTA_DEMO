import {normalizeFontSize, wp} from '@app/constants/responsive';
import {COLORS, FONTS} from '@app/constants/theme';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flex: 1
  },
  headerSection: {
    position: 'relative',
    zIndex: 1,
    // paddingTop: wp(10)
  },
  textStyle: {
    ...FONTS.extraBold,
    color: COLORS.black,
    fontSize: normalizeFontSize(30),
  },
  scrollSection: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: wp(50),
  },
});
