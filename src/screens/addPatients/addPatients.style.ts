import {ViewStyle} from 'react-native';

export const createStyles = (colors: any) => ({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  } as ViewStyle,
});
