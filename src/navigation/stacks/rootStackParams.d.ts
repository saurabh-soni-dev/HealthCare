export type RootStackParams = {
  Splash: undefined;
  Login: undefined;
  Signup: undefined;
  HomeTabs: undefined;
  PatientsDetails: {
    patientDetails: {
      name: string;
      age: number;
      gender: string;
      image: string;
    };
  };
  Notification: undefined;
  AddPatients: undefined;
  Diagnostics: {
    patientDetails: {
      name: string;
      age: number;
      gender: string;
      image: string;
    };
  };
  SettingDetails: {
    flag: string;
  };
};
