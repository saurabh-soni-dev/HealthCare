import {View} from 'react-native';
import React, {FC} from 'react';
import usePatientsDetails from './usePatientsDetails';
import CustomStatusBar from '../../components/CustomStatusBar';
import CustomHeader from '../../components/CustomHeader';

const PatientsDetails: FC = () => {
  const {styles, onPressBackIcon} = usePatientsDetails();

  return (
    <View style={styles.container}>
      <CustomStatusBar />
      <CustomHeader
        title="Title header"
        subTitle="Sub title"
        onBack={onPressBackIcon}
      />
    </View>
  );
};

export default PatientsDetails;
