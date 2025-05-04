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

  const [patientInfo, setPatientInfo] = useState<any>();

  useFocusEffect(
    useCallback(() => {
      if (params?.patientDetails) {
        setPatientInfo(params?.patientDetails);
      }
    }, [params?.patientDetails]),
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

  return {styles, onPressBackIcon, patientInfo, navigateToDiagnosticsScreen};
};

export default usePatientsDetails;
