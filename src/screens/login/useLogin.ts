import {useState} from 'react';
import {useSettingsContext} from '../../i18n/SettingsContext';
import {createStyles} from './login.style';
import {useAuthNavigation} from '../../hooks/useAppNavigation';

const useLogin = () => {
  const navigation = useAuthNavigation();
  const {theme, isDark} = useSettingsContext();
  const {colors} = theme;
  const styles = createStyles(colors, isDark);

  const [phoneNumer, setPhoneNumer] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const navigateToHomeScreen = () => {
    navigation.navigate('HomeTabs');
  };

  const navigateToSignupScreen = () => {
    navigation.navigate('Signup');
  };

  return {
    styles,
    phoneNumer,
    setPhoneNumer,
    password,
    setPassword,
    navigateToHomeScreen,
    navigateToSignupScreen,
  };
};

export default useLogin;
