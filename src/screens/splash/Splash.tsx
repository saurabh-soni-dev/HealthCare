import {View} from 'react-native';
import React, {FC} from 'react';
import {styles} from './splash.style';
import CustomText from '../../components/CustomText';
import useSplash from './useSplash';

const Splash: FC = () => {
  const {} = useSplash();
  return (
    <View style={styles.container}>
      <CustomText text="HealthCare" style={styles.textStyle} />
    </View>
  );
};

export default Splash;
