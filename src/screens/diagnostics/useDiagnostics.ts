import {useFocusEffect} from '@react-navigation/native';
import {useAuthNavigation, useAuthRoute} from '../../hooks/useAppNavigation';
import {useSettingsContext} from '../../i18n/SettingsContext';
import {createStyles} from './diagnostics.style';
import {useCallback, useState} from 'react';

const useDiagnostics = () => {
  const navigation = useAuthNavigation();
  const {params} = useAuthRoute('Diagnostics');
  const {theme} = useSettingsContext();
  const {colors} = theme;
  const styles = createStyles(colors);

  const [patientInfo, setPatientInfo] = useState<any>('');

  useFocusEffect(
    useCallback(() => {
      if (params) {
        setPatientInfo(params?.patientDetails);
      }
    }, [params]),
  );

  const onPressBackIcon = () => {
    navigation.goBack();
  };

  return {styles, colors, onPressBackIcon, patientInfo};
};

export default useDiagnostics;
