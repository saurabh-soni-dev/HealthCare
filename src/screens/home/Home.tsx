import React, {FC} from 'react';
import {FlatList, View} from 'react-native';
import PatientCard from '../../components/card/PatientCard';
import CustomStatusBar from '../../components/CustomStatusBar';
import CustomText from '../../components/CustomText';
import IconButon from '../../components/IconButon';
import iconName from '../../utility/iconName.json';
import info from '../../utility/userInfo.json';
import {styles} from './home.style';
import useHome from './useHome';

const Home: FC = () => {
  const {patientList, onPressEdit} = useHome();

  return (
    <View style={styles.screenContainer}>
      <CustomStatusBar />
      <View style={styles.contentWrapper}>
        <View style={styles.headerRow}>
          <CustomText
            text={info.name}
            numberOfLines={2}
            style={styles.userNameText}
          />
          <IconButon
            iconName={iconName.notification}
            onPress={() => console.log('Notification')}
          />
        </View>
        <View style={styles.patientListSection}>
          <View style={styles.patientListHeader}>
            <CustomText
              text={`${info.yourPatients}(${patientList.length})`}
              numberOfLines={2}
            />
            <View style={styles.patientListHeaderRight}>
              <IconButon
                iconName={iconName.clock}
                onPress={() => console.log('clock')}
                style={styles.clockIconButton}
              />
              <IconButon
                iconName={iconName.plus}
                onPress={() => console.log('plus')}
              />
            </View>
          </View>
          <FlatList
            data={patientList}
            keyExtractor={(_, index) => `${index}`}
            renderItem={({item}) => (
              <PatientCard
                item={item}
                onPressEdit={() => onPressEdit(item.name)}
              />
            )}
            contentContainerStyle={styles.patientListContent}
            showsVerticalScrollIndicator={false}
            ListFooterComponent={<View style={styles.listFooterSpacing} />}
            keyboardDismissMode="on-drag"
            initialNumToRender={7}
          />
        </View>
      </View>
    </View>
  );
};

export default Home;
