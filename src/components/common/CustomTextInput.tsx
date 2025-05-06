import React, {FC, useRef, useState} from 'react';
import {
  KeyboardTypeOptions,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useSettingsContext} from '../../i18n/SettingsContext';
import {font} from '../../theme';
import {scaleFont, verticalScale} from '../../utility';

interface CustomTextInputProps {
  label: string;
  rightIcon: string;
  placeholder: string;
  value: string;
  onChangeText?: (text: string) => void;
  secureTextEntry?: boolean;
  keyboardType?: KeyboardTypeOptions;
  maxLength?: number;
  returnKeyType?: 'done' | 'go' | 'next' | 'search' | 'send';
}

const CustomTextInput: FC<CustomTextInputProps> = ({
  label,
  rightIcon,
  placeholder,
  value,
  onChangeText,
  keyboardType,
  secureTextEntry,
  maxLength,
  returnKeyType,
}) => {
  const {theme} = useSettingsContext();
  const {colors} = theme;

  const [isFocused, setIsFocused] = useState(false);
  const [isDisplayPass, setIsDisplayPass] = useState(secureTextEntry ?? false);
  const inputRef = useRef<TextInput | null>(null);
  const checkIsFocusedHandler = (): void => {
    setTimeout(() => {
      const isInputFocused: boolean = inputRef.current?.isFocused?.() ?? false;
      setIsFocused(isInputFocused);
    }, 0);
  };

  const togglePassword = () => {
    setIsDisplayPass(!isDisplayPass);
  };

  const passwordIcon = isDisplayPass ? `${rightIcon}-off` : rightIcon;
  const styles = getStyles(colors, isFocused);

  return (
    <View style={styles.container}>
      <View style={styles.inputWrapper}>
        <Text allowFontScaling={false} numberOfLines={1} style={styles.label}>
          {label}
        </Text>
        <TextInput
          ref={inputRef}
          style={styles.textInput}
          placeholder={placeholder}
          placeholderTextColor={colors.text}
          onFocus={checkIsFocusedHandler}
          onEndEditing={checkIsFocusedHandler}
          secureTextEntry={isDisplayPass}
          autoCorrect={false}
          value={value}
          onChangeText={onChangeText}
          keyboardType={keyboardType}
          allowFontScaling={false}
          maxLength={maxLength}
          returnKeyType={returnKeyType}
          numberOfLines={1}
        />
      </View>
      <TouchableOpacity onPress={togglePassword}>
        <Icon
          name={passwordIcon}
          size={scaleFont(22)}
          color={isFocused ? colors.primary : colors.text}
        />
      </TouchableOpacity>
    </View>
  );
};

const getStyles = (colors: Record<string, string>, isFocused: boolean) =>
  StyleSheet.create({
    container: {
      backgroundColor: colors.card,
      marginBottom: verticalScale(15),
      padding: verticalScale(15),
      paddingRight: verticalScale(20),
      paddingBottom: verticalScale(18),
      borderRadius: 10,
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: isFocused ? 1 : 0,
      borderColor: isFocused ? colors.primary : '',
    },
    inputWrapper: {
      flex: 1,
    },
    label: {
      fontSize: scaleFont(14),
      fontFamily: font.openSansLight,
      color: colors.text,
    },
    textInput: {
      marginTop: verticalScale(3),
      fontSize: scaleFont(16),
      fontFamily: font.openSansSemiBold,
      color: colors.text,
    },
  });

export default CustomTextInput;
