import {useAuthNavigation} from '../../hooks/useAppNavigation';
import {useSettingsContext} from '../../i18n/SettingsContext';
import {createStyles} from './patientsDetails.style';

const usePatientsDetails = () => {
  const navigation = useAuthNavigation();
  const {theme} = useSettingsContext();
  const {colors} = theme;
  const styles = createStyles(colors);

  const onPressBackIcon = () => {
    navigation.goBack();
  };
  return {styles, onPressBackIcon};
};

export default usePatientsDetails;
