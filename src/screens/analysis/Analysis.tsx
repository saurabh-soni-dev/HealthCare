import {View} from 'react-native';
import React, {FC} from 'react';
import useAnalysis from './useAnalysis';
import {CustomStatusBar} from '../../components';

const Analysis: FC = () => {
  const {styles} = useAnalysis();
  return (
    <View style={styles.screenContainer}>
      <CustomStatusBar />
    </View>
  );
};

export default Analysis;
