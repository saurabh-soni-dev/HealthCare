import {
  View,
  Text,
  TextStyle,
  ViewStyle,
  TouchableHighlight,
} from 'react-native';
import React, {FC} from 'react';
import {useSettingsContext} from '../i18n/SettingsContext';
import fonts from '../theme/fonts';
import Icon from 'react-native-vector-icons/Ionicons';

interface CustomHeaderProps {
  title: string;
  subTitle: string;
  onBack: () => void;
}
const CustomHeader: FC<CustomHeaderProps> = ({title, subTitle, onBack}) => {
  const {theme} = useSettingsContext();
  const styles = createStyles(theme.colors);

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TouchableHighlight
          onPress={onBack}
          underlayColor="#D1D5DB"
          style={styles.editButton}>
          <Icon
            name={'chevron-back-outline'}
            size={24}
            color={theme.colors.card}
          />
        </TouchableHighlight>
        <View>
          <Text allowFontScaling={false} numberOfLines={1} style={styles.title}>
            {title}
          </Text>
          <Text
            allowFontScaling={false}
            numberOfLines={1}
            style={styles.subTitle}>
            {subTitle}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default CustomHeader;

const createStyles = (colors: any) => ({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    width: '100%',
  } as ViewStyle,

  row: {
    flexDirection: 'row',
    alignItems: 'center',
  } as ViewStyle,

  title: {
    fontSize: 18,
    fontFamily: fonts.openSansMedium,
    color: colors.text,
  } as TextStyle,

  subTitle: {
    fontSize: 14,
    fontFamily: fonts.openSansRegular,
    color: colors.text,
    marginTop: 2,
  } as TextStyle,

  editButton: {
    height: 60,
    width: 60,
    backgroundColor: colors.text,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  } as ViewStyle,
});
