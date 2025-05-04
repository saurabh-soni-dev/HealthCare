import React, {FC} from 'react';
import {Text, TextStyle, View, ViewStyle} from 'react-native';
import {useSettingsContext} from '../../i18n/SettingsContext';
import {font} from '../../theme';
import {iconName, scaleFont, verticalScale} from '../../utility';
import IconButon from '../common/IconButon';

interface DiagnosticsCardProps {
  title: string;
  onPressAdd?: () => void;
  rightIconName?: string;
  rightIconColor?: string;
  leftIconName?: string;
  leftIconSize?: number;
  leftIconColor?: string;
  buttonStyle?: ViewStyle;
  buttonStyleLeft?: ViewStyle;
  cardStyle?: ViewStyle;
}

const DiagnosticsCard: FC<DiagnosticsCardProps> = ({
  title,
  onPressAdd,
  rightIconName,
  rightIconColor,
  leftIconName,
  leftIconSize,
  leftIconColor,
  buttonStyle,
  cardStyle,
  buttonStyleLeft,
}) => {
  const {theme} = useSettingsContext();
  const styles = createStyles(theme.colors, buttonStyle, buttonStyleLeft);

  return (
    <View style={[styles.card, cardStyle]}>
      <Text allowFontScaling={false} numberOfLines={2} style={styles.title}>
        {title}
      </Text>
      <View style={styles.iconRow}>
        <View>
          {leftIconName && (
            <IconButon
              iconName={leftIconName}
              iconSize={leftIconSize}
              iconColor={leftIconColor}
              onPress={onPressAdd}
              style={styles.clockIconButtonLeft}
            />
          )}
        </View>
        <IconButon
          iconName={rightIconName ? rightIconName : iconName.plus}
          onPress={onPressAdd}
          style={styles.clockIconButton}
          iconColor={rightIconColor}
        />
      </View>
    </View>
  );
};

export default DiagnosticsCard;

const createStyles = (colors: any, buttonStyle: any, buttonStyleLeft: any) => ({
  card: {
    width: '100%',
    backgroundColor: colors.primary,
    borderRadius: 20,
    padding: verticalScale(15),
    justifyContent: 'space-between',
  } as ViewStyle,

  title: {
    fontSize: scaleFont(16),
    fontFamily: font.openSansSemiBold,
    color: colors.text,
  } as TextStyle,

  iconRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  } as ViewStyle,

  clockIconButton: {
    borderWidth: 1,
    borderColor: '#FFFFFF',
    borderStyle: 'dashed',
    alignSelf: 'flex-end',
    backgroundColor: 'transparent',
    marginTop: verticalScale(25),
    ...buttonStyle,
  } as ViewStyle,

  clockIconButtonLeft: {
    borderWidth: 1,
    borderColor: '#FFFFFF',
    borderStyle: 'dashed',
    alignSelf: 'flex-end',
    backgroundColor: 'transparent',
    marginTop: verticalScale(25),
    ...buttonStyleLeft,
  } as ViewStyle,
});
