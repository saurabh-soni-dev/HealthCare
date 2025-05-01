import {ViewStyle} from 'react-native';

export const createStyles = (colors: any) => ({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  } as ViewStyle,

  contentContainer: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop: 20,
    flexDirection: 'row',
  } as ViewStyle,

  buttonStyle: {
    marginBottom: 40,
    marginHorizontal: 20,
  } as ViewStyle,

  leftColumn: {flex: 1, paddingRight: 5} as ViewStyle,
  rightColumn: {flex: 1, paddingLeft: 5} as ViewStyle,
});
