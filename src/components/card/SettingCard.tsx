import React, {FC} from 'react';
import {
  Switch,
  TextStyle,
  TouchableHighlight,
  View,
  ViewStyle,
} from 'react-native';
import {useSettingsContext} from '../../i18n/SettingsContext';
import {
  horizontalScale,
  iconName,
  scaleFont,
  verticalScale,
} from '../../utility';
import CustomText from '../common/CustomText';
import Icon from 'react-native-vector-icons/Ionicons';
import {font} from '../../theme';

interface SettingCardProps {
  item: any;
  index: number;
  onPress: () => void;
  isDark: boolean;
  onChangeTheme: () => void;
}

const SettingCard: FC<SettingCardProps> = ({
  item,
  index,
  onPress,
  isDark,
  onChangeTheme,
}) => {
  const {theme} = useSettingsContext();
  const styles = createStyles(theme.colors);

  return (
    <View style={styles.settingSectionCard} key={index}>
      {item?.data?.map((setting: any, i: number) => (
        <TouchableHighlight
          key={setting.id}
          onPress={onPress}
          style={styles.highlightRow}
          underlayColor={theme.colors.border}>
          <View style={[styles.settingCard, i !== 0 && styles.devider]}>
            <View style={styles.settingIconRow}>
              <View style={styles.settingIconView}>
                <Icon
                  name={setting.icon}
                  size={scaleFont(26)}
                  color={theme.colors.background}
                />
              </View>
              <CustomText text={setting.name} style={styles.textStyle} />
            </View>
            {index === 0 && setting.id === 1 ? (
              <Switch
                value={isDark}
                onValueChange={onChangeTheme}
                trackColor={{
                  false: theme.colors.border,
                  true: theme.colors.primary,
                }}
                thumbColor={
                  isDark ? theme.colors.text : theme.colors.background
                }
                ios_backgroundColor={theme.colors.notification}
                disabled={false}
              />
            ) : (
              <Icon
                name={iconName.rightArrow}
                size={scaleFont(20)}
                color={theme.colors.background}
              />
            )}
          </View>
        </TouchableHighlight>
      ))}
    </View>
  );
};

export default SettingCard;

const createStyles = (colors: any) => ({
  settingSectionCard: {
    borderRadius: 15,
    backgroundColor: colors.text,
  } as ViewStyle,

  settingCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    padding: verticalScale(15),
  } as ViewStyle,

  devider: {
    borderTopWidth: 0.3,
    borderTopColor: colors.background,
  } as ViewStyle,

  highlightRow: {
    borderRadius: 15,
  } as ViewStyle,

  settingIconRow: {
    flexDirection: 'row',
    alignItems: 'center',
  } as ViewStyle,

  settingIconView: {
    marginRight: horizontalScale(10),
  } as ViewStyle,

  textStyle: {
    fontSize: scaleFont(18),
    color: colors.card,
    fontFamily: font.openSansSemiBold,
  } as TextStyle,
});
