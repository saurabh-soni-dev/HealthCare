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
      if (params?.patientName) {
        setPatientName(params?.patientName);
      }
    }, [params?.patientName]),
  );

  const onPressBackIcon = () => {
    navigation.goBack();
  };

  return {styles, onPressBackIcon, patientName};
};

export default usePatientsDetails;
