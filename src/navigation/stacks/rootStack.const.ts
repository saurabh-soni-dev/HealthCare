import AddPatients from '../../screens/addPatients/AddPatients';
import Diagnostics from '../../screens/diagnostics/Diagnostics';
import ForgotPassword from '../../screens/forgotPassword/ForgotPassword';
import Login from '../../screens/login/Login';
import Notification from '../../screens/notification/Notification';
import PatientsDetails from '../../screens/patientsDetails/PatientsDetails';
import SettingDetails from '../../screens/settingDetails/SettingDetails';
import Signup from '../../screens/signup/Signup';
import Splash from '../../screens/splash/Splash';
import HomeTabs from '../bottomTab/HomeTabs';

export const stackScreens = [
  {name: 'Splash', component: Splash},
  {name: 'Login', component: Login},
  {name: 'Signup', component: Signup},
  {name: 'ForgotPassword', component: ForgotPassword},
  {name: 'HomeTabs', component: HomeTabs},
  {name: 'PatientsDetails', component: PatientsDetails},
  {name: 'Notification', component: Notification},
  {name: 'AddPatients', component: AddPatients},
  {name: 'Diagnostics', component: Diagnostics},
  {name: 'SettingDetails', component: SettingDetails},
];
