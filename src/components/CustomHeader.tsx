import React, {FC} from 'react';
import {Text, TextStyle, View, ViewStyle} from 'react-native';
import {useSettingsContext} from '../i18n/SettingsContext';
import fonts from '../theme/fonts';
import {horizontalScale, scaleFont, verticalScale} from '../utility/functions';
import iconName from '../utility/iconName.json';
import IconButon from './IconButon';

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
        <IconButon
          iconName={iconName.back}
          iconSize={20}
          iconColor={theme.colors.card}
          onPress={onBack}
          style={styles.editButton}
        />
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
    paddingHorizontal: horizontalScale(20),
    paddingVertical: verticalScale(20),
    width: '100%',
  } as ViewStyle,

  row: {
    flexDirection: 'row',
    alignItems: 'center',
  } as ViewStyle,

  title: {
    fontSize: scaleFont(18),
    fontFamily: fonts.openSansMedium,
    color: colors.text,
  } as TextStyle,

  subTitle: {
    fontSize: scaleFont(14),
    fontFamily: fonts.openSansRegular,
    color: colors.text,
  } as TextStyle,

  editButton: {
    backgroundColor: colors.text,
    marginRight: horizontalScale(10),
    padding: verticalScale(14),
  } as ViewStyle,
});
