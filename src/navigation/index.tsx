import {NavigationContainer} from '@react-navigation/native';
import {FC} from 'react';
import RootStack from './stacks/RootStack';
import SplashScreen from 'react-native-splash-screen';
import {useSettingsContext} from '../i18n/SettingsContext';

const Route: FC = () => {
  const {theme} = useSettingsContext();
  return (
    <NavigationContainer onReady={() => SplashScreen.hide()} theme={theme}>
      <RootStack />
    </NavigationContainer>
  );
};

export default Route;
