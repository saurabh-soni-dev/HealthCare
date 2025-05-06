import {useState} from 'react';
import {useSettingsContext} from '../../i18n/SettingsContext';
import {createStyles} from './login.style';

const useLogin = () => {
  const {theme, isDark} = useSettingsContext();
  const {colors} = theme;
  const styles = createStyles(colors, isDark);

  const [phoneNumer, setPhoneNumer] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return {styles, phoneNumer, setPhoneNumer, password, setPassword};
};

export default useLogin;
