import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './settings.style';
import CustomStatusBar from '../../components/CustomStatusBar';

const Settings = () => {
  return (
    <View style={styles.container}>
      <CustomStatusBar />
      <Text>Settings</Text>
    </View>
  );
};

export default Settings;
