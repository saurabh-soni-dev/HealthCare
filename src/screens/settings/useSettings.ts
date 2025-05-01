import {useSettingsContext} from '../../i18n/SettingsContext';
import {createStyles} from './settings.style';

const useSettings = () => {
  const {toggleTheme, isDark, theme} = useSettingsContext();
  const {colors} = theme;
  const styles = createStyles(colors);

  return {styles, isDark, toggleTheme, colors};
};

export default useSettings;
