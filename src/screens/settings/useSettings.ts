import {useState} from 'react';
import {useSettingsContext} from '../../i18n/SettingsContext';
import {iconName} from '../../utility';
import {createStyles} from './settings.style';
import {useAuthNavigation} from '../../hooks/useAppNavigation';

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
  const navigation = useAuthNavigation();
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
          id: 3,
          name: 'Privacy Policy',
          icon: iconName.privacy,
          navigation: 'PrivacyPolicy',
        },
        {
          id: 4,
          name: 'Terms of Service',
          icon: iconName.terms,
          navigation: 'TermsOfService',
        },
        {
          id: 5,
          name: 'About the App',
          icon: iconName.about,
          navigation: 'AboutApp',
        },
      ],
    },
    {
      title: 'Account',
      data: [
        {
          id: 6,
          name: 'Logout',
          icon: iconName.logout,
          navigation: 'Logout',
        },
      ],
    },
  ]);

  const navigateToSettingDetailsScreen = (flag: string) => {
    if (flag !== 'Logout') {
      navigation.navigate('SettingDetails', {
        flag: flag,
      });
    }
  };

  return {
    styles,
    isDark,
    toggleTheme,
    colors,
    settings,
    navigateToSettingDetailsScreen,
  };
};

export default useSettings;
