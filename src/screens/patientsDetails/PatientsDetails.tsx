import React, {FC} from 'react';
import {View} from 'react-native';
import {CustomHeader, CustomStatusBar, TextButton} from '../../components';
import {DiagnosticsCard, LeftCard, RightCard} from '../../components/cardIndex';
import usePatientsDetails from './usePatientsDetails';

const PatientsDetails: FC = () => {
  const {styles, onPressBackIcon, patientInfo, navigateToDiagnosticsScreen} =
    usePatientsDetails();

  return (
    <View style={styles.container}>
      <CustomStatusBar />
      <CustomHeader
        title={patientInfo?.name}
        subTitle="Action Plan"
        onBack={onPressBackIcon}
      />
      <View style={styles.contentContainer}>
        <View style={styles.leftColumn}>
          <DiagnosticsCard
            title="Assign Diagnostics"
            onPressAdd={navigateToDiagnosticsScreen}
          />
          <LeftCard
            testName="Lab Tests"
            testIcon="logo-gitlab"
            type="Full Full Blood"
            typeIcon="document-outline"
            body="TEST"
            num="24.11"
            type1="Puncture"
            type1Icon="document-outline"
            body1="TEST"
            num1="24.11"
            exray="https://randomuser.me/api/portraits/women/8.jpg"
          />
        </View>
        <View style={styles.rightColumn}>
          <RightCard
            nameOfDoctor={patientInfo?.name}
            imageOfDoctor={patientInfo?.image}
            type="Full Brain"
            body="MRI"
            num="24.08"
            exray="https://randomuser.me/api/portraits/women/8.jpg"
          />
          <RightCard
            nameOfDoctor={patientInfo?.name}
            imageOfDoctor={patientInfo?.image}
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
