import React, {FC} from 'react';
import {
  ActivityIndicator,
  Text,
  TextStyle,
  TouchableHighlight,
  ViewStyle,
} from 'react-native';
import {useSettingsContext} from '../../i18n/SettingsContext';
import {font} from '../../theme';
import {scaleFont, verticalScale} from '../../utility';

interface TextButtonProps {
  title: string;
  onPress: () => void;
  disabled?: boolean;
  isLoading?: boolean;
  buttonStyle?: ViewStyle;
  titleStyle?: TextStyle;
}

const TextButton: FC<TextButtonProps> = ({
  title,
  onPress,
  disabled,
  isLoading,
  buttonStyle,
  titleStyle,
}) => {
  const {theme} = useSettingsContext();
  const styles = createStyles(theme.colors);

  return (
    <TouchableHighlight
      onPress={onPress}
      disabled={disabled}
      style={[styles.button, buttonStyle]}
      underlayColor={'rgba(0,0,0,0.1)'}>
      {isLoading ? (
        <ActivityIndicator size={'small'} color={'#111111'} />
      ) : (
        <Text
          allowFontScaling={false}
          numberOfLines={1}
          style={[styles.title, {...titleStyle}]}>
          {title}
        </Text>
      )}
    </TouchableHighlight>
  );
};

export default TextButton;

const createStyles = (colors: any) => ({
  button: {
    height: verticalScale(50),
    backgroundColor: colors.notification,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  } as ViewStyle,

  title: {
    fontSize: scaleFont(16),
    fontFamily: font.openSansSemiBold,
    color: '#111111',
  } as TextStyle,
});
