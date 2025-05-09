import React, {FC} from 'react';
import {Text, TextStyle, View, ViewStyle} from 'react-native';
import {useSettingsContext} from '../../i18n/SettingsContext';
import {darkTheme, font, lightTheme} from '../../theme';
import {
  horizontalScale,
  iconName,
  scaleFont,
  verticalScale,
} from '../../utility';
import IconButon from './IconButon';

interface CustomHeaderProps {
  title: string;
  subTitle?: string;
  onBack: () => void;
  isDocButton?: boolean;
  onPressDoc?: () => void;
  containerStyle?: ViewStyle;
}
const CustomHeader: FC<CustomHeaderProps> = ({
  title,
  subTitle,
  onBack,
  isDocButton,
  onPressDoc,
  containerStyle,
}) => {
  const {theme, isDark} = useSettingsContext();
  const styles = createStyles(theme.colors, isDark);

  return (
    <View style={[styles.container, {...containerStyle}]}>
      <View style={styles.row}>
        <IconButon
          iconName={iconName.back}
          iconSize={20}
          iconColor={theme.colors.card}
          onPress={onBack}
          style={styles.editButton}
        />
        <View style={styles.titleView}>
          <Text allowFontScaling={false} numberOfLines={1} style={styles.title}>
            {title}
          </Text>
          {subTitle && (
            <Text
              allowFontScaling={false}
              numberOfLines={1}
              style={styles.subTitle}>
              {subTitle}
            </Text>
          )}
        </View>

        {isDocButton && (
          <IconButon
            iconName={iconName.document}
            iconSize={20}
            iconColor={theme.colors.card}
            style={styles.editButton}
            onPress={onPressDoc}
          />
        )}
      </View>
    </View>
  );
};

export default CustomHeader;

const createStyles = (colors: any, isDark: boolean) => ({
  container: {
    paddingHorizontal: horizontalScale(20),
    paddingVertical: verticalScale(20),
    width: '100%',
    backgroundColor: colors.background,
    // Visual shadow only at the bottom
    shadowColor: isDark ? darkTheme.text : lightTheme.text,
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.1,
    shadowRadius: 3,
    borderBottomWidth: 0.3,
    borderBottomColor: isDark ? lightTheme.text : darkTheme.text,
    // Android shadow
    elevation: 3,
  } as ViewStyle,

  row: {
    flexDirection: 'row',
    alignItems: 'center',
  } as ViewStyle,

  titleView: {
    flex: 1,
  } as ViewStyle,

  title: {
    fontSize: scaleFont(18),
    fontFamily: font.openSansMedium,
    color: colors.text,
  } as TextStyle,

  subTitle: {
    fontSize: scaleFont(14),
    fontFamily: font.openSansRegular,
    color: colors.text,
  } as TextStyle,

  editButton: {
    backgroundColor: colors.text,
    marginRight: horizontalScale(10),
    padding: verticalScale(14),
  } as ViewStyle,
});
