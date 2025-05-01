import {ViewStyle, TextStyle, ImageStyle} from 'react-native';
import fonts from '../../theme/fonts';

export const createStyles = (colors: any) => ({
  screenContainer: {
    flex: 1,
  } as ViewStyle,

  gradient: {
    height: '30%',
  } as ViewStyle,

  headerContainer: {
    padding: 20,
  } as ViewStyle,

  titleText: {
    fontSize: 32,
    color: colors.text,
    fontFamily: fonts.openSansBold,
  } as TextStyle,

  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 45,
  } as ViewStyle,

  profileImageWrapper: {
    height: 65,
    width: 65,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.card,
  } as ViewStyle,

  profileImage: {
    height: 65,
    width: 65,
    borderRadius: 35,
    borderWidth: 2,
    borderColor: colors.text,
  } as ImageStyle,

  profileTextContainer: {
    left: 10,
  } as ViewStyle,

  profileName: {
    fontSize: 28,
    color: colors.text,
    fontFamily: fonts.openSansSemiBold,
  } as TextStyle,

  profileLocation: {
    fontSize: 16,
    color: colors.text,
    fontFamily: fonts.openSansMedium,
  } as TextStyle,

  darkTheme: {
    paddingVertical: 50,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  } as ViewStyle,

  darkThemeText: {
    fontSize: 18,
    color: colors.text,
    fontFamily: fonts.openSansRegular,
  } as TextStyle,
});
