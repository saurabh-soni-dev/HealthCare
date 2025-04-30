import {NavigationContainer} from '@react-navigation/native';
import {FC} from 'react';
import RootStack from './stacks/RootStack';
import SplashScreen from 'react-native-splash-screen';

const Route: FC = () => {
  return (
    <NavigationContainer onReady={() => SplashScreen.hide()}>
      <RootStack />
    </NavigationContainer>
  );
};

export default Route;
