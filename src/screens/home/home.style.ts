import {TextStyle, ViewStyle} from 'react-native';
import fonts from '../../theme/fonts';
import {
  horizontalScale,
  moderateScale,
  scaleFont,
  verticalScale,
} from '../../utility/functions';

export const createStyles = (colors: any) => ({
  screenContainer: {
    flex: 1,
    backgroundColor: colors.background,
  } as ViewStyle,

  contentWrapper: {
    padding: moderateScale(20),
  } as ViewStyle,

  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
  } as ViewStyle,

  userNameText: {
    flex: 1,
    fontSize: scaleFont(22),
    color: colors.text,
    fontFamily: fonts.openSansSemiBold,
  } as TextStyle,

  patientListSection: {
    flexGrow: 1,
  } as ViewStyle,

  patientListContent: {
    flexGrow: 1,
    rowGap: verticalScale(12),
  } as ViewStyle,

  patientListHeader: {
    marginVertical: verticalScale(15),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  } as ViewStyle,

  patientListCount: {
    fontSize: scaleFont(16),
    color: colors.text,
    fontFamily: fonts.openSansMedium,
  } as TextStyle,

  patientListHeaderRight: {
    flexDirection: 'row',
    alignItems: 'center',
  } as ViewStyle,

  clockIconButton: {
    marginRight: horizontalScale(10),
    borderWidth: horizontalScale(1),
    borderStyle: 'dashed',
  } as ViewStyle,

  listFooterSpacing: {
    marginBottom: verticalScale(450),
  } as ViewStyle,
});
