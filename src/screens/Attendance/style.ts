import {normalizeFontSize, wp} from '@app/constants/responsive';
import {COLORS, FONTS} from '@app/constants/theme';
import {StyleSheet, Text, View} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    ...FONTS.extraBold,
    color: COLORS.black,
    fontSize: normalizeFontSize(30),
  },
});
