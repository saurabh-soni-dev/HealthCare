import React, {FC} from 'react';
import {Image, Switch, TouchableHighlight, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {CustomStatusBar, CustomText} from '../../components';
import {LGColor, LGDarkColor} from '../../theme';
import info from '../../utility/userInfo.json';
import useSettings from './useSettings';

const Settings: FC = () => {
  const {styles, isDark, toggleTheme, colors} = useSettings();

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
      <View style={styles.darkTheme}>
        <CustomText text={'Dark theme'} style={styles.darkThemeText} />
        <TouchableHighlight>
          <Switch
            value={isDark}
            onValueChange={toggleTheme}
            trackColor={{false: colors.text, true: colors.text}}
            thumbColor={isDark ? colors.primary : colors.background}
            ios_backgroundColor={colors.text}
            disabled={false}
          />
        </TouchableHighlight>
      </View>
    </View>
  );
};

export default Settings;
