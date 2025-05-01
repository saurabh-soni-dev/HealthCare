import {View, Text, ViewStyle, TextStyle} from 'react-native';
import React, {FC} from 'react';
import {useSettingsContext} from '../i18n/SettingsContext';
import fonts from '../theme/fonts';
import IconButon from './IconButon';
import iconName from '../utility/iconName.json';

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
    height: '30%',
    width: '100%',
    backgroundColor: colors.primary,
    borderRadius: 20,
    padding: 15,
    justifyContent: 'space-between',
  } as ViewStyle,

  title: {
    fontSize: 18,
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
