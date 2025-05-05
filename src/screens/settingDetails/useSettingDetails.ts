import {useFocusEffect} from '@react-navigation/native';
import {useCallback, useState} from 'react';
import {useAuthNavigation, useAuthRoute} from '../../hooks/useAppNavigation';
import {useSettingsContext} from '../../i18n/SettingsContext';
import {createStyles} from './settingDetails.style';
import {languageOptions} from './settingDetails.const';

interface languageItems {
  id: number;
  title: string;
  isSelected: boolean;
}

const useSettingDetails = () => {
  const navigation = useAuthNavigation();
  const {params} = useAuthRoute('SettingDetails');
  const {theme} = useSettingsContext();
  const {colors} = theme;
  const styles = createStyles(colors);

  const [flag, setflag] = useState<string>('');
  const [language] = useState<languageItems[]>(languageOptions);

  useFocusEffect(
    useCallback(() => {
      if (params?.flag) {
        setflag(params?.flag);
      }
    }, [params?.flag]),
  );

  const onPressBackIcon = () => {
    navigation.goBack();
  };

  return {styles, onPressBackIcon, flag, language};
};

export default useSettingDetails;
