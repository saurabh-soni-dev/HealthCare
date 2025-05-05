import {useState} from 'react';
import {useSettingsContext} from '../../i18n/SettingsContext';
import {iconName} from '../../utility';
import {createStyles} from './settings.style';

interface SettingsItem {
  id: number;
  name: string;
  icon: string;
  navigation: string;
}
export type SettingsSection = {
  title: string;
  data: SettingsItem[];
};

const useSettings = () => {
  const {toggleTheme, isDark, theme} = useSettingsContext();
  const {colors} = theme;
  const styles = createStyles(colors);

  const [settings] = useState<SettingsSection[]>([
    {
      title: 'App Preferences',
      data: [
        {
          id: 1,
          name: 'Theme',
          icon: iconName.theme,
          navigation: 'ThemeSettings',
        },
        {
          id: 2,
          name: 'App Language',
          icon: iconName.language,
          navigation: 'LanguageSettings',
        },
      ],
    },
    {
      title: 'Legal',
      data: [
        {
          id: 1,
          name: 'Privacy Policy',
          icon: iconName.privacy,
          navigation: 'PrivacyPolicy',
        },
        {
          id: 2,
          name: 'Terms of Service',
          icon: iconName.terms,
          navigation: 'TermsOfService',
        },
        {
          id: 3,
          name: 'About the App',
          icon: iconName.about,
          navigation: 'AboutApp',
        },
      ],
    },
    {
      title: 'About & Account',
      data: [
        {
          id: 1,
          name: 'Logout',
          icon: iconName.logout,
          navigation: 'Logout',
        },
      ],
    },
  ]);

  return {styles, isDark, toggleTheme, colors, settings};
};

export default useSettings;
