import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  contentWrapper: {
    padding: 20,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userNameText: {
    flex: 1,
    fontSize: 24,
  },
  patientListSection: {
    flexGrow: 1,
  },
  patientListContent: {
    flexGrow: 1,
    rowGap: 12,
  },
  patientListHeader: {
    marginVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  patientListHeaderRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  clockIconButton: {
    marginRight: 10,
    borderWidth: 1,
    borderStyle: 'dashed',
    padding: 19,
  },
  listFooterSpacing: {
    marginBottom: 450,
  },
});
