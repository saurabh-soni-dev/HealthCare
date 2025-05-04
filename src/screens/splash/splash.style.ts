import {ViewStyle, TextStyle} from 'react-native';
import {font} from '../../theme';

export const createStyles = (colors: any) => ({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
  } as ViewStyle,
  textStyle: {
    fontSize: 60,
    fontFamily: font.neonDerthawRegular,
    color: colors.text,
  } as TextStyle,
});
