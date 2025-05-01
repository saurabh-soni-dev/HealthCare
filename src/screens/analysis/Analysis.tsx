import {View} from 'react-native';
import React, {FC} from 'react';
import CustomStatusBar from '../../components/CustomStatusBar';
import useAnalysis from './useAnalysis';

const Analysis: FC = () => {
  const {styles} = useAnalysis();
  return (
    <View style={styles.screenContainer}>
      <CustomStatusBar />
    </View>
  );
};

export default Analysis;
