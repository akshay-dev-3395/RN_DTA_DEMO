import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {COLORS, FONTS} from '@app/constants/theme';
import { normalizeFontSize, wp } from '@app/constants/responsive';

type Props = {
  buttonName: string;
  buttonStyle?: ViewStyle;
  nameStyle?: TextStyle;
  onPress: () => void;
};

const ButtonComponent = (props: Props) => {
  const {buttonName, buttonStyle, nameStyle, onPress} = props;
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, buttonStyle]}>
      <Text style={[styles.textStyle, nameStyle]}>{buttonName}</Text>
    </TouchableOpacity>
  );
};

export default ButtonComponent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary,
    height: wp(52),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: wp(10),
  },
  textStyle: {
    ...FONTS.semiBold,
    fontSize: normalizeFontSize(17),
    color: COLORS.white,
  },
});
