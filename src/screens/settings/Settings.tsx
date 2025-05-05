import React, {FC} from 'react';
import {FlatList, Image, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {CustomStatusBar, CustomText} from '../../components';
import {SettingCard} from '../../components/cardIndex';
import {LGColor, LGDarkColor} from '../../theme';
import info from '../../utility/userInfo.json';
import useSettings from './useSettings';

const Settings: FC = () => {
  const {
    styles,
    isDark,
    toggleTheme,
    settings,
    navigateToSettingDetailsScreen,
  } = useSettings();

  return (
    <View style={styles.screenContainer}>
      <LinearGradient
        colors={isDark ? LGDarkColor : LGColor}
        style={styles.gradient}>
        <CustomStatusBar />
        <View style={styles.headerContainer}>
          <CustomText text="Settings" style={styles.titleText} />
          <View style={styles.profileContainer}>
            <View style={styles.profileImageWrapper}>
              <Image
                source={{uri: info.userImage}}
                style={styles.profileImage}
                resizeMode="contain"
              />
            </View>
            <View style={styles.profileTextContainer}>
              <CustomText text={info.userName} style={styles.profileName} />
              <CustomText text={info.address} style={styles.profileLocation} />
            </View>
          </View>
        </View>
      </LinearGradient>
      <FlatList
        data={settings}
        keyExtractor={(_, index) => `${index}`}
        renderItem={({item, index}) => (
          <SettingCard
            item={item}
            index={index}
            onPress={name => navigateToSettingDetailsScreen(name)}
            isDark={isDark}
            onChangeTheme={toggleTheme}
          />
        )}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={<View style={styles.listFooterSpacing} />}
        keyboardDismissMode="on-drag"
        initialNumToRender={7}
      />
    </View>
  );
};

export default Settings;
