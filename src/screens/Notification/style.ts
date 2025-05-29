import {normalizeFontSize, wp} from '@app/constants/responsive';
import {COLORS, FONTS} from '@app/constants/theme';
import {StyleSheet, Text, View} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textStyle: {
    color: COLORS.black,
    fontSize: normalizeFontSize(16),
    ...FONTS.semiBold
  },
  headerContainer:{
    width: '100%',
    boxShadow: '0px 1px 0px 0px #a8a7a7',
    justifyContent:'center',
    alignItems: 'center',
    zIndex: 10,
    paddingVertical: wp(30),
    paddingHorizontal: wp(20),
  },
  bodyContainer:{
    paddingBottom: wp(180),
    width: '100%',
  },
  separator: {
    height: wp(1),
    backgroundColor: '#eee',
  },
});
