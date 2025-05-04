import React, {FC} from 'react';
import {Image, View} from 'react-native';
import {
  CustomHeader,
  CustomStatusBar,
  CustomText,
  TextButton,
} from '../../components';
import useDiagnostics from './useDiagnostics';
import {CounterCard, DiagnosticsCard} from '../../components/cardIndex';
import {iconName} from '../../utility';
import imageIndex from '../../assets/imageIndex';

const Diagnostics: FC = () => {
  const {styles, colors, onPressBackIcon} = useDiagnostics();

  return (
    <View style={styles.screenContainer}>
      <CustomStatusBar />
      <CustomHeader title="Diagnostics" onBack={onPressBackIcon} isDocButton />
      <View style={styles.card}>
        <View style={styles.treatmentCard}>
          <View style={styles.planCard}>
            <View style={styles.planCardRow}>
              <CustomText
                text="Treatment Plan"
                numberOfLines={2}
                style={styles.planText}
              />
              <CustomText
                text="Brooklyn Simmons"
                numberOfLines={2}
                style={styles.nameText}
              />
              <CustomText
                text="Female 28"
                numberOfLines={1}
                style={styles.ageText}
              />
            </View>
            <View style={styles.planCardRow}>
              <Image
                source={imageIndex.girl}
                style={styles.imageStyle}
                resizeMode="cover"
              />
            </View>
          </View>
        </View>
        <View style={styles.destinationCardRow}>
          <View style={styles.destinationCard}>
            <DiagnosticsCard
              title="Add Destination"
              rightIconColor={colors.background}
            />
          </View>
          <View style={styles.destinationCardRight}>
            <DiagnosticsCard
              title="Pressure Control"
              rightIconName={iconName.minus}
              leftIconName={iconName.heart}
              leftIconSize={27}
              leftIconColor={colors.background}
              cardStyle={styles.pressureCard}
              buttonStyle={styles.minusButton}
              buttonStyleLeft={styles.minusButtonLeft}
            />
          </View>
        </View>
        <View style={styles.counterCardRow}>
          <View style={styles.destinationCard}>
            <CounterCard title="Magnesium" number="700" unitText="Mg" />
          </View>
          <View style={styles.destinationCardRight}>
            <CounterCard title="Melatonin" number="500" unitText="Mg" />
          </View>
        </View>
      </View>
      <TextButton
        title="Save Appoinment"
        onPress={() => {}}
        buttonStyle={styles.buttonStyle}
      />
    </View>
  );
};

export default Diagnostics;
