import {patients} from './home.const';
import {useAuthNavigation} from '../../hooks/useAppNavigation';
import {useSettingsContext} from '../../i18n/SettingsContext';
import {createStyles} from './home.style';

// Define the structure of a patient object
interface Patient {
  image: string;
  name: string;
  gender: string;
  age: number;
}

const useHome = () => {
  const {theme} = useSettingsContext();
  const {colors} = theme;
  const styles = createStyles(colors);

  const navigation = useAuthNavigation();
  const patientList: Patient[] = patients;

  // function start: onPressEdit
  const onPressEdit = (patientName: string) => {
    console.log('Patient Name:', patientName);
  };
  // function end: onPressEdit

  // function start: navigateToNotificationScreen
  const navigateToNotificationScreen = () => {
    navigation.navigate('Notification');
  };
  // function end: navigateToNotificationScreen

  // function start: navigateToAddPatientsScreen
  const navigateToAddPatientsScreen = () => {
    navigation.navigate('AddPatients');
  };
  // function end: navigateToAddPatientsScreen

  // function start: navigateToPatientsScreen
  const navigateToPatientsScreen = (patientName: string) => {
    navigation.navigate('PatientsDetails', {
      patientName: patientName,
    });
  };
  // function end: navigateToPatientsScreen

  return {
    styles,
    patientList,
    onPressEdit,
    navigateToNotificationScreen,
    navigateToAddPatientsScreen,
    navigateToPatientsScreen,
  };
};
// function end: useHome

export default useHome;
