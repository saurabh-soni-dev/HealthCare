import {useAuthNavigation} from '../../hooks/useAppNavigation';
import {useSettingsContext} from '../../i18n/SettingsContext';
import {createStyles} from './diagnostics.style';

const useDiagnostics = () => {
  const navigation = useAuthNavigation();
  const {theme} = useSettingsContext();
  const {colors} = theme;
  const styles = createStyles(colors);

  const onPressBackIcon = () => {
    navigation.goBack();
  };

  return {styles, colors, onPressBackIcon};
};

export default useDiagnostics;
