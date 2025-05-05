import {Dimensions, PixelRatio} from 'react-native';

const {width: deviceWidth, height: deviceHeight} = Dimensions.get('window');

const baseWidth = 375;
const baseHeight = 812;

const wp = (value: number | string): number => {
  const percentage = typeof value === 'number' ? value : parseFloat(value);
  const ph = PixelRatio.roundToNearestPixel((deviceWidth * percentage) / 100);
  return typeof value === 'number' ? ph / 4.2 : ph;
};

const hp = (value: number | string): number => {
  const percentage = typeof value === 'number' ? value : parseFloat(value);
  const pw = PixelRatio.roundToNearestPixel((deviceHeight * percentage) / 100);
  return typeof value === 'number' ? pw / 4.2 : pw;
};

const normalizeFontSize = (size: number): number => {
  const scale = Math.min(deviceWidth / baseWidth, deviceHeight / baseHeight);
  const newSize = size * scale;

  return PixelRatio.roundToNearestPixel(newSize);
};

export {wp, hp, normalizeFontSize, deviceWidth, deviceHeight};
