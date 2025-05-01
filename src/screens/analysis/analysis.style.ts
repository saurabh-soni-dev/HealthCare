import {ViewStyle} from 'react-native';

export const createStyles = (colors: any) => ({
  screenContainer: {
    flex: 1,
    backgroundColor: colors.background,
  } as ViewStyle,
});
