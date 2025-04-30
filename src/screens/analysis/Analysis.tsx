import {View, Text} from 'react-native';
import React, {FC} from 'react';
import {styles} from './analysis.style';
import CustomStatusBar from '../../components/CustomStatusBar';

const Analysis: FC = () => {
  return (
    <View style={styles.container}>
      <CustomStatusBar />
      <Text>Analysis</Text>
    </View>
  );
};

export default Analysis;
