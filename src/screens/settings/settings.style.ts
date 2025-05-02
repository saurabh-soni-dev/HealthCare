import {ViewStyle, TextStyle, ImageStyle} from 'react-native';
import fonts from '../../theme/fonts';
import {
  horizontalScale,
  scaleFont,
  verticalScale,
} from '../../utility/functions';

export const createStyles = (colors: any) => ({
  screenContainer: {
    flex: 1,
  } as ViewStyle,

  gradient: {
    height: '30%',
  } as ViewStyle,

  headerContainer: {
    padding: verticalScale(20),
  } as ViewStyle,

  titleText: {
    fontSize: scaleFont(32),
    color: colors.text,
    fontFamily: fonts.openSansBold,
  } as TextStyle,

  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: verticalScale(45),
  } as ViewStyle,

  profileImageWrapper: {
    height: 60,
    width: 60,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.card,
  } as ViewStyle,

  profileImage: {
    height: 60,
    width: 60,
    borderRadius: 15,
    borderWidth: 0.5,
    borderColor: colors.text,
  } as ImageStyle,

  profileTextContainer: {
    left: 10,
  } as ViewStyle,

  profileName: {
    fontSize: scaleFont(32),
    color: colors.text,
    fontFamily: fonts.openSansSemiBold,
  } as TextStyle,

  profileLocation: {
    fontSize: scaleFont(16),
    color: colors.text,
    fontFamily: fonts.openSansMedium,
  } as TextStyle,

  darkTheme: {
    paddingVertical: verticalScale(50),
    paddingHorizontal: horizontalScale(20),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  } as ViewStyle,

  darkThemeText: {
    fontSize: scaleFont(18),
    color: colors.text,
    fontFamily: fonts.openSansRegular,
  } as TextStyle,
});
