import AddPatients from '../../screens/addPatients/AddPatients';
import Diagnostics from '../../screens/diagnostics/Diagnostics';
import Notification from '../../screens/notification/Notification';
import PatientsDetails from '../../screens/patientsDetails/PatientsDetails';
import SettingDetails from '../../screens/settingDetails/SettingDetails';
import Splash from '../../screens/splash/Splash';
import HomeTabs from '../bottomTab/HomeTabs';

export const stackScreens = [
  {name: 'Splash', component: Splash},
  {name: 'HomeTabs', component: HomeTabs},
  {name: 'PatientsDetails', component: PatientsDetails},
  {name: 'Notification', component: Notification},
  {name: 'AddPatients', component: AddPatients},
  {name: 'Diagnostics', component: Diagnostics},
  {name: 'SettingDetails', component: SettingDetails},
];
