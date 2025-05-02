import React, {FC} from 'react';
import {
  ActivityIndicator,
  Text,
  TextStyle,
  TouchableHighlight,
  ViewStyle,
} from 'react-native';
import {useSettingsContext} from '../i18n/SettingsContext';
import fonts from '../theme/fonts';
import {scaleFont, verticalScale} from '../utility/functions';

interface TextButtonProps {
  title: string;
  onPress: () => void;
  disabled?: boolean;
  isLoading?: boolean;
  buttonStyle?: ViewStyle;
}

const TextButton: FC<TextButtonProps> = ({
  title,
  onPress,
  disabled,
  isLoading,
  buttonStyle,
}) => {
  const {theme} = useSettingsContext();
  const styles = createStyles(theme.colors);

  return (
    <TouchableHighlight
      onPress={onPress}
      disabled={disabled}
      style={[styles.button, buttonStyle]}>
      {isLoading ? (
        <ActivityIndicator size={'small'} color={'#111111'} />
      ) : (
        <Text allowFontScaling={false} numberOfLines={1} style={styles.title}>
          {title}
        </Text>
      )}
    </TouchableHighlight>
  );
};

export default TextButton;

const createStyles = (colors: any) => ({
  button: {
    height: verticalScale(55),
    backgroundColor: colors.notification,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  } as ViewStyle,

  title: {
    fontSize: scaleFont(16),
    fontFamily: fonts.openSansSemiBold,
    color: '#111111',
  } as TextStyle,
});
