import {ViewStyle, TextStyle} from 'react-native';
import fonts from '../../theme/fonts';

export const createStyles = (colors: any) => ({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
  } as ViewStyle,
  textStyle: {
    fontSize: 60,
    fontFamily: fonts.neonDerthawRegular,
    color: colors.text,
  } as TextStyle,
});
