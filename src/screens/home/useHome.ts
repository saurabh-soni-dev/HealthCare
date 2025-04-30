import {useState} from 'react';
import {patients} from './home.const';

interface patientsProps {
  image: string;
  name: string;
  gender: string;
  age: number;
}

const useHome = () => {
  const [patientList] = useState<patientsProps[]>(patients);

  const onPressEdit = (patientName: string) => {
    console.log('Patient Name:', patientName);
  };

  return {patientList, onPressEdit};
};

export default useHome;
