import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  tabBar: {
    height: 70,
    position: 'absolute',
    flexDirection: 'row',
    backgroundColor: '#111111',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    bottom: 25,
    padding: 5,
    borderRadius: 100,
    gap: 4,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F5F5',
    // width: 60,
    // height: 60,
    padding: 18,
    borderRadius: 100,
  },
  focusedButton: {
    backgroundColor: '#F59E0B',
  },
});
