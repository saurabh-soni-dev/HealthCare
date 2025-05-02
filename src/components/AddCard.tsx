import React, {FC} from 'react';
import {Text, TextStyle, View, ViewStyle} from 'react-native';
import {useSettingsContext} from '../i18n/SettingsContext';
import fonts from '../theme/fonts';
import {scaleFont, verticalScale} from '../utility/functions';
import iconName from '../utility/iconName.json';
import IconButon from './IconButon';

interface AddCardProps {
  title: string;
}

const AddCard: FC<AddCardProps> = ({title}) => {
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

export default AddCard;

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
    fontFamily: fonts.openSansSemiBold,
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
