import {ViewStyle} from 'react-native';
import {horizontalScale, verticalScale} from '../../utility';

export const createStyles = (colors: any) => ({
  tabBar: {
    height: verticalScale(70),
    position: 'absolute',
    flexDirection: 'row',
    backgroundColor: colors.text,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    bottom: verticalScale(18),
    padding: verticalScale(5),
    borderRadius: 100,
    gap: horizontalScale(4),
  } as ViewStyle,
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.background,
    padding: verticalScale(18),
    borderRadius: 100,
  } as ViewStyle,
  focusedButton: {
    backgroundColor: '#F59E0B',
  } as ViewStyle,
});
