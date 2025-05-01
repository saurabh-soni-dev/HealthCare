import React, {FC} from 'react';
import {View} from 'react-native';
import CustomHeader from '../../components/CustomHeader';
import CustomStatusBar from '../../components/CustomStatusBar';
import TextButton from '../../components/TextButton';
import usePatientsDetails from './usePatientsDetails';
import AddCard from '../../components/AddCard';
import RightCard from '../../components/RightCard';

const PatientsDetails: FC = () => {
  const {styles, onPressBackIcon} = usePatientsDetails();

  return (
    <View style={styles.container}>
      <CustomStatusBar />
      <CustomHeader
        title="Brooklyn Simmons"
        subTitle="Action Plan"
        onBack={onPressBackIcon}
      />
      <View style={styles.contentContainer}>
        <View style={styles.leftColumn}>
          <AddCard title="Assign Diagnostics" />
        </View>
        <View style={styles.rightColumn}>
          <RightCard
            nameOfDoctor="Dr. Brooklyn Simmons"
            imageOfDoctor="https://randomuser.me/api/portraits/women/5.jpg"
            type="Full Brain"
            body="MRI"
            num="24.08"
            exray="https://randomuser.me/api/portraits/women/8.jpg"
          />
          <RightCard
            nameOfDoctor="Dr. Brooklyn Simmons"
            imageOfDoctor="https://randomuser.me/api/portraits/women/0.jpg"
            type="Cardiogram"
            body="Heart"
            num="28.10"
            exray="https://randomuser.me/api/portraits/men/19.jpg"
          />
        </View>
      </View>
      <TextButton
        title="Send To Team"
        onPress={() => {}}
        buttonStyle={styles.buttonStyle}
      />
    </View>
  );
};

export default PatientsDetails;
