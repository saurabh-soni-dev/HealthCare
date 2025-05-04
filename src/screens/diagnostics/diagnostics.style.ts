import {ImageStyle, TextStyle, ViewStyle} from 'react-native';
import {horizontalScale, scaleFont, verticalScale} from '../../utility';
import {font} from '../../theme';

export const createStyles = (colors: any) => ({
  screenContainer: {
    flex: 1,
    backgroundColor: colors.background,
  } as ViewStyle,

  card: {
    flex: 1,
  } as ViewStyle,

  treatmentCard: {
    flex: 1.1,
    paddingHorizontal: horizontalScale(20),
    paddingVertical: 5,
  } as ViewStyle,

  planCard: {
    backgroundColor: colors.card,
    width: '100%',
    height: '100%',
    borderRadius: 25,
    padding: verticalScale(15),
    flexDirection: 'row',
    alignItems: 'center',
  } as ViewStyle,

  planCardRow: {
    width: '30%',
  } as ViewStyle,

  destinationCardRow: {
    flex: 1.1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: horizontalScale(20),
  } as ViewStyle,

  destinationCard: {
    flex: 1,
    paddingRight: horizontalScale(5),
  } as ViewStyle,

  destinationCardRight: {
    flex: 1,
    paddingLeft: horizontalScale(5),
  } as ViewStyle,

  pressureCard: {
    backgroundColor: colors.card,
  } as ViewStyle,

  minusButton: {
    borderColor: colors.text,
  } as ViewStyle,

  minusButtonLeft: {
    padding: verticalScale(13),
    borderWidth: 0,
    backgroundColor: colors.text,
  } as ViewStyle,

  counterCardRow: {
    flex: 1.8,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: horizontalScale(20),
  } as ViewStyle,

  buttonStyle: {
    marginTop: verticalScale(10),
    marginBottom: verticalScale(40),
    marginHorizontal: horizontalScale(20),
  } as ViewStyle,

  planText: {
    fontSize: scaleFont(16),
    fontFamily: font.openSansSemiBold,
    color: colors.text,
  } as TextStyle,

  nameText: {
    fontSize: scaleFont(18),
    fontFamily: font.openSansSemiBold,
    color: colors.text,
    marginTop: verticalScale(20),
  } as TextStyle,

  ageText: {
    fontSize: scaleFont(14),
    fontFamily: font.openSansRegular,
    color: colors.text,
    marginTop: verticalScale(3),
    textTransform: 'capitalize',
  } as TextStyle,

  imageStyle: {
    height: verticalScale(180),
    width: horizontalScale(200),
    marginTop: verticalScale(-40),
  } as ImageStyle,
});
