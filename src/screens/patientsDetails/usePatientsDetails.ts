import {useFocusEffect} from '@react-navigation/native';
import {useCallback, useState} from 'react';
import {useAuthNavigation, useAuthRoute} from '../../hooks/useAppNavigation';
import {useSettingsContext} from '../../i18n/SettingsContext';
import {createStyles} from './patientsDetails.style';

const usePatientsDetails = () => {
  const navigation = useAuthNavigation();
  const {params} = useAuthRoute('PatientsDetails');
  const {theme} = useSettingsContext();
  const {colors} = theme;
  const styles = createStyles(colors);

  const [patientName, setPatientName] = useState<string>('');

  useFocusEffect(
    useCallback(() => {
      if (params?.patientDetails) {
        setPatientName(params?.patientDetails.name);
      }
    }, [params]),
  );

  const onPressBackIcon = () => {
    navigation.goBack();
  };
  // function start: navigateToAddPatientsScreen
  const navigateToDiagnosticsScreen = () => {
    navigation.navigate('Diagnostics', {
      patientDetails: params.patientDetails,
    });
  };
  // function end: navigateToAddPatientsScreen

  return {styles, onPressBackIcon, patientName, navigateToDiagnosticsScreen};
};

export default usePatientsDetails;
