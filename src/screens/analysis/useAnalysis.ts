import {useSettingsContext} from '../../i18n/SettingsContext';
import {createStyles} from './analysis.style';

const useAnalysis = () => {
  const {theme} = useSettingsContext();
  const {colors} = theme;
  const styles = createStyles(colors);

  return {styles, colors};
};

export default useAnalysis;
