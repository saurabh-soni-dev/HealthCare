import {ImageStyle, TextStyle, ViewStyle} from 'react-native';
import {horizontalScale, scaleFont, verticalScale} from '../../utility';
import {font} from '../../theme';

export const createStyles = (colors: any, isDark: boolean) => ({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  } as ViewStyle,

  mainContainer: {
    flex: 1,
  } as ViewStyle,

  section: {
    flex: 3,
    justifyContent: 'flex-end',
  } as ViewStyle,

  sectionOne: {
    flex: 3,
    padding: horizontalScale(20),
  } as ViewStyle,

  sectionTwo: {
    flex: 1,
  } as ViewStyle,

  imageView: {
    height: verticalScale(200),
    width: horizontalScale(200),
    borderRadius: 30,
    alignSelf: 'center',
  } as ViewStyle,

  imageStyle: {
    height: '100%',
    width: '100%',
    borderRadius: 30,
  } as ImageStyle,

  nameStyle: {
    marginTop: verticalScale(10),
    fontSize: scaleFont(28),
    fontFamily: font.openSansSemiBold,
    color: colors.text,
    lineHeight: 30,
    textAlign: 'center',
  } as TextStyle,

  hlcStyle: {
    fontSize: scaleFont(28),
    fontFamily: font.openSansBold,
    color: isDark ? colors.notification : colors.primary,
  } as TextStyle,

  registerText: {
    marginTop: verticalScale(60),
    fontSize: scaleFont(16),
    fontFamily: font.openSansRegular,
    color: colors.text,
    textAlign: 'center',
  } as TextStyle,

  signupText: {
    fontSize: scaleFont(16),
    fontFamily: font.openSansBold,
    color: isDark ? colors.notification : colors.primary,
  } as TextStyle,

  loginButton: {
    marginTop: verticalScale(10),
    height: verticalScale(60),
    width: '70%',
    alignSelf: 'center',
    backgroundColor: colors.primary,
  } as ViewStyle,

  loginButtonText: {
    fontSize: scaleFont(18),
    fontFamily: font.openSansBold,
    color: '#FFFFFF',
  } as TextStyle,

  forgotPassword: {
    marginVertical: verticalScale(15),
    fontSize: scaleFont(16),
    fontFamily: font.openSansSemiBold,
    color: colors.text,
    textAlign: 'center',
  } as TextStyle,
});
