import React, {FC} from 'react';
import {View} from 'react-native';
import {CustomStatusBar, CustomText} from '../../components';
import useSplash from './useSplash';

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
