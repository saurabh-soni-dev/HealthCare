import {useAuthNavigation} from '../../hooks/useAppNavigation';
import {useSettingsContext} from '../../i18n/SettingsContext';
import {createStyles} from './notification.style';

const useNotification = () => {
  const navigation = useAuthNavigation();
  const {theme} = useSettingsContext();
  const {colors} = theme;
  const styles = createStyles(colors);

  const onPressBackIcon = () => {
    navigation.goBack();
  };
  return {styles, onPressBackIcon};
};

export default useNotification;
