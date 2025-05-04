import React, {FC} from 'react';
import {FlatList, View} from 'react-native';
import {CustomStatusBar, CustomText, IconButon} from '../../components';
import {PatientCard} from '../../components/cardIndex';
import {iconName, userInfo} from '../../utility';
import useHome from './useHome';

const Home: FC = () => {
  const {
    styles,
    patientList,
    onPressEdit,
    navigateToNotificationScreen,
    navigateToAddPatientsScreen,
    navigateToPatientsScreen,
  } = useHome();

  return (
    <View style={styles.screenContainer}>
      <CustomStatusBar />
      <View style={styles.contentWrapper}>
        <View style={styles.headerRow}>
          <CustomText
            text={userInfo.name}
            numberOfLines={2}
            style={styles.userNameText}
          />
          <IconButon
            iconName={iconName.notification}
            onPress={navigateToNotificationScreen}
          />
        </View>
        <View style={styles.patientListSection}>
          <View style={styles.patientListHeader}>
            <CustomText
              text={`${userInfo.yourPatients}(${patientList.length})`}
              numberOfLines={2}
              style={styles.patientListCount}
            />
            <View style={styles.patientListHeaderRight}>
              <IconButon
                iconName={iconName.clock}
                onPress={() => console.log('clock')}
                style={styles.clockIconButton}
              />
              <IconButon
                iconName={iconName.plus}
                onPress={navigateToAddPatientsScreen}
              />
            </View>
          </View>
          <FlatList
            data={patientList}
            keyExtractor={(_, index) => `${index}`}
            renderItem={({item, index}) => (
              <PatientCard
                key={index}
                item={item}
                onPress={() => navigateToPatientsScreen(item.name)}
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
