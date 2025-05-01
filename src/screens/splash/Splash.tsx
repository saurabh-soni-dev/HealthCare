import {View} from 'react-native';
import React, {FC} from 'react';
import CustomText from '../../components/CustomText';
import useSplash from './useSplash';
import CustomStatusBar from '../../components/CustomStatusBar';

const Splash: FC = () => {
  const {styles} = useSplash();

  return (
    <View style={styles.container}>
      <CustomStatusBar />
      <CustomText text="HealthCare" style={styles.textStyle} />
    </View>
  );
};

export default Splash;
