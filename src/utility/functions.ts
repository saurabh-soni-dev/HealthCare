import {Dimensions, PixelRatio} from 'react-native';
const {width, height} = Dimensions.get('window');

// SE -  W: 402 H: 874
// iOS16 -  W: 375 H: 667

const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

const horizontalScale = (size: number) => (width / guidelineBaseWidth) * size;
const verticalScale = (size: number) => (height / guidelineBaseHeight) * size;

const moderateScale = (size: number, factor = 0.5) =>
  size + (horizontalScale(size) - size) * factor;

const scaleFont = (size: number) => {
  const adjustedSize = width > 400 ? size - 2 : size;
  const scale = Math.min(
    width / guidelineBaseWidth,
    height / guidelineBaseHeight,
  );
  return Math.round(PixelRatio.roundToNearestPixel(adjustedSize * scale));
};

export {horizontalScale, moderateScale, scaleFont, verticalScale};
