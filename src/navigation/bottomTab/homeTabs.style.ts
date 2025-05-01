import {ViewStyle} from 'react-native';

export const createStyles = (colors: any) => ({
  tabBar: {
    height: 70,
    position: 'absolute',
    flexDirection: 'row',
    backgroundColor: colors.text,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    bottom: 25,
    padding: 5,
    borderRadius: 100,
    gap: 4,
  } as ViewStyle,
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.background,
    padding: 18,
    borderRadius: 100,
  } as ViewStyle,
  focusedButton: {
    backgroundColor: '#F59E0B',
  } as ViewStyle,
});
