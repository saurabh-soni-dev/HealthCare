import {ViewStyle} from 'react-native';
import {horizontalScale, verticalScale} from '../../utility/functions';

export const createStyles = (colors: any) => ({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  } as ViewStyle,

  contentContainer: {
    flex: 1,
    paddingHorizontal: horizontalScale(20),
    marginTop: verticalScale(20),
    flexDirection: 'row',
  } as ViewStyle,

  buttonStyle: {
    marginBottom: verticalScale(40),
    marginHorizontal: horizontalScale(20),
  } as ViewStyle,

  leftColumn: {
    flex: 1,
    paddingRight: horizontalScale(5),
  } as ViewStyle,
  rightColumn: {
    flex: 1,
    paddingLeft: horizontalScale(5),
  } as ViewStyle,
});
