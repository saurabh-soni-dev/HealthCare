import {useEffect} from 'react';
import {useAuthNavigation} from '../../hooks/useAppNavigation';
import {useSettingsContext} from '../../i18n/SettingsContext';
import {createStyles} from './splash.style';

const useSplash = () => {
  const navigation = useAuthNavigation();
  const {theme} = useSettingsContext();
  const {colors} = theme;
  const styles = createStyles(colors);

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('HomeTabs');
    }, 2000);
  });

  return {styles};
};
export default useSplash;
