import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../navigation/stacks/rootStackParams';

export const useAuthNavigation = <
  T extends keyof RootStackParams = keyof RootStackParams,
>(
  _values?: T,
): NativeStackNavigationProp<RootStackParams, T> => {
  return useNavigation<NativeStackNavigationProp<RootStackParams, T>>();
};

export const useAuthRoute = <
  T extends keyof RootStackParams = keyof RootStackParams,
>(
  _values?: T,
): RouteProp<RootStackParams, T> => {
  return useRoute<RouteProp<RootStackParams, T>>();
};
