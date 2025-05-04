import React, {FC} from 'react';
import {Text, TextStyle, View, ViewStyle} from 'react-native';
import {useSettingsContext} from '../../i18n/SettingsContext';
import {font} from '../../theme';
import {iconName, scaleFont, verticalScale} from '../../utility';
import IconButon from '../common/IconButon';

interface DiagnosticsCardProps {
  title: string;
}

const DiagnosticsCard: FC<DiagnosticsCardProps> = ({title}) => {
  const {theme} = useSettingsContext();
  const styles = createStyles(theme.colors);

  return (
    <View style={styles.card}>
      <Text allowFontScaling={false} numberOfLines={2} style={styles.title}>
        {title}
      </Text>
      <IconButon
        iconName={iconName.plus}
        onPress={() => console.log('plus')}
        style={styles.clockIconButton}
        iconColor="#FFFFFF"
      />
    </View>
  );
};

export default DiagnosticsCard;

const createStyles = (colors: any) => ({
  card: {
    height: verticalScale(160),
    width: '100%',
    backgroundColor: colors.primary,
    borderRadius: 20,
    padding: verticalScale(15),
    justifyContent: 'space-between',
  } as ViewStyle,

  title: {
    fontSize: scaleFont(18),
    fontFamily: font.openSansSemiBold,
    color: '#FFFFFF',
  } as TextStyle,

  clockIconButton: {
    borderWidth: 1,
    borderColor: '#FFFFFF',
    borderStyle: 'dashed',
    alignSelf: 'flex-end',
    backgroundColor: 'transparent',
  } as ViewStyle,
});
