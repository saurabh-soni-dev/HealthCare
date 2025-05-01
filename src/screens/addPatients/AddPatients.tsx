import React, {FC} from 'react';
import {View} from 'react-native';
import CustomHeader from '../../components/CustomHeader';
import CustomStatusBar from '../../components/CustomStatusBar';
import useAddPatients from './useAddPatients';

const AddPatients: FC = () => {
  const {styles, onPressBackIcon} = useAddPatients();
  return (
    <View style={styles.container}>
      <CustomStatusBar />
      <CustomHeader
        title="Add Patients"
        subTitle="New patients"
        onBack={onPressBackIcon}
      />
    </View>
  );
};

export default AddPatients;
