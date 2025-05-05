import {TextStyle, ViewStyle} from 'react-native';
import {horizontalScale, scaleFont, verticalScale} from '../../utility';
import {font} from '../../theme';

export const createStyles = (colors: any) => ({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  } as ViewStyle,

  contentContainer: {
    flex: 1,
    paddingHorizontal: horizontalScale(20),
    marginTop: verticalScale(5),
    flexDirection: 'row',
  } as ViewStyle,

  titleText: {
    fontSize: scaleFont(18),
    fontFamily: font.openSansBold,
    color: colors.text,
  } as TextStyle,

  paragraphText: {
    fontSize: scaleFont(14),
    fontFamily: font.openSansRegular,
    color: colors.text,
    marginBottom: verticalScale(10),
  } as TextStyle,

  row: {
    marginBottom: verticalScale(20),
  } as ViewStyle,

  pointView: {
    marginTop: verticalScale(8),
  } as ViewStyle,
});
