import {TextStyle, ViewStyle} from 'react-native';

export const createStyles = (colors: any) => ({
  screenContainer: {
    flex: 1,
    backgroundColor: colors.background,
  } as ViewStyle,

  contentWrapper: {
    padding: 20,
  } as ViewStyle,

  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
  } as ViewStyle,

  userNameText: {
    flex: 1,
    fontSize: 24,
    color: colors.text,
  } as TextStyle,

  patientListSection: {
    flexGrow: 1,
  } as ViewStyle,

  patientListContent: {
    flexGrow: 1,
    rowGap: 12,
  } as ViewStyle,

  patientListHeader: {
    marginVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  } as ViewStyle,

  patientListHeaderRight: {
    flexDirection: 'row',
    alignItems: 'center',
  } as ViewStyle,

  clockIconButton: {
    marginRight: 10,
    borderWidth: 1,
    borderStyle: 'dashed',
    padding: 19,
  } as ViewStyle,

  listFooterSpacing: {
    marginBottom: 450,
  } as ViewStyle,
});
