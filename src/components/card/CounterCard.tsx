import React, {FC} from 'react';
import {Text, TextStyle, TouchableOpacity, View, ViewStyle} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useSettingsContext} from '../../i18n/SettingsContext';
import {font} from '../../theme';
import {iconName, scaleFont, verticalScale} from '../../utility';

interface CounterCardProps {
  title: string;
  number: string;
  unitText: string;
  onPressAdd?: () => void;
  onPressMinus?: () => void;
}

const CounterCard: FC<CounterCardProps> = ({
  title,
  number,
  unitText,
  onPressAdd,
  onPressMinus,
}) => {
  const {theme} = useSettingsContext();
  const styles = createStyles(theme.colors);

  return (
    <View style={styles.card}>
      <Text style={styles.title} allowFontScaling={false} numberOfLines={1}>
        {title}
      </Text>
      <View style={styles.counterCard}>
        <TouchableOpacity
          style={styles.addButton}
          onPress={onPressAdd}
          activeOpacity={0.6}>
          <Icon name={iconName.plus} size={scaleFont(20)} color={'#111111'} />
        </TouchableOpacity>
        <View style={styles.unitView}>
          <Text style={styles.num} allowFontScaling={false} numberOfLines={1}>
            {number}
          </Text>
          <Text style={styles.unit} allowFontScaling={false} numberOfLines={1}>
            {unitText}
          </Text>
        </View>
        <TouchableOpacity
          style={styles.addButton}
          onPress={onPressMinus}
          activeOpacity={0.6}>
          <Icon name={iconName.minus} size={scaleFont(20)} color={'#111111'} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CounterCard;

const createStyles = (colors: any) => ({
  card: {
    width: '100%',
    backgroundColor: colors.card,
    borderRadius: 25,
    padding: verticalScale(15),
  } as ViewStyle,

  title: {
    fontSize: scaleFont(16),
    fontFamily: font.openSansSemiBold,
    color: colors.text,
    textAlign: 'center',
  } as TextStyle,

  counterCard: {
    marginTop: verticalScale(15),
    padding: verticalScale(8),
    backgroundColor: colors.border,
    borderRadius: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  } as ViewStyle,

  num: {
    fontSize: scaleFont(20),
    fontFamily: font.openSansBold,
    color: colors.text,
    textAlign: 'center',
  } as TextStyle,

  unit: {
    fontSize: scaleFont(14),
    fontFamily: font.openSansRegular,
    color: colors.text,
    textAlign: 'center',
  } as TextStyle,

  addButton: {
    borderRadius: 25,
    borderWidth: 1,
    paddingVertical: verticalScale(12),
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  } as ViewStyle,

  unitView: {
    marginVertical: verticalScale(20),
  } as ViewStyle,
});
