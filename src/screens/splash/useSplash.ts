import {useEffect} from 'react';
import {useAuthNavigation} from '../../hooks/useAppNavigation';

const useSplash = () => {
  const navigation = useAuthNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home');
    }, 3000);
  });

  return {};
};
export default useSplash;
