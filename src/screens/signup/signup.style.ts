import {ImageStyle, TextStyle, ViewStyle} from 'react-native';
import {horizontalScale, scaleFont, verticalScale} from '../../utility';
import {font} from '../../theme';

export const createStyles = (
  colors: any,
  isDark: boolean,
  isFocused: boolean,
) => ({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  } as ViewStyle,

  mainContainer: {
    flex: 1,
    padding: horizontalScale(20),
  } as ViewStyle,

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
    marginTop: verticalScale(20),
    marginBottom: verticalScale(30),
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

  profileImageView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: verticalScale(15),
  } as ViewStyle,

  uploadButton: {
    backgroundColor: colors.card,
    height: verticalScale(100),
    width: '48%',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: isFocused ? 1 : 0,
    borderColor: isFocused ? colors.primary : '',
  } as ViewStyle,

  uploadButtonText: {
    fontSize: scaleFont(14),
    fontFamily: font.openSansLight,
    color: colors.text,
    marginBottom: verticalScale(10),
  } as TextStyle,

  imagePreview: {
    height: verticalScale(100),
    width: '48%',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.text,
    alignItems: 'center',
    justifyContent: 'center',
  } as ViewStyle,

  profileImage: {
    height: '100%',
    width: '100%',
    borderRadius: 10,
  } as ImageStyle,
});
