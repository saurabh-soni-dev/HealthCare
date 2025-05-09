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
  numberOfLines?: number;
  multiline?: boolean;
  editable?: boolean;
  isButton?: boolean;
  onPress?: () => void;
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
  numberOfLines,
  multiline,
  isButton,
  onPress,
  editable,
}) => {
  const {theme} = useSettingsContext();
  const {colors} = theme;

  const [isFocused, setIsFocused] = useState(false);
  const [isDisplayPass, setIsDisplayPass] = useState(secureTextEntry ?? false);
  const [isMultiLine] = useState(multiline ?? false);
  const [borderHighlight, setBorderHighlight] = useState<boolean>(false);

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
  const styles = getStyles(colors, isFocused, isMultiLine, borderHighlight);

  const handleFocused = () => {
    setBorderHighlight(!borderHighlight);
  };

  return (
    <TouchableOpacity
      style={styles.container}
      disabled={!isButton}
      onPress={onPress}
      activeOpacity={0.8}
      onPressIn={handleFocused}
      onPressOut={handleFocused}>
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
          numberOfLines={numberOfLines ?? 1}
          multiline={isMultiLine}
          editable={editable}
        />
      </View>
      <TouchableOpacity onPress={togglePassword} disabled={!isDisplayPass}>
        <Icon
          name={passwordIcon}
          size={scaleFont(isFocused || borderHighlight ? 24 : 22)}
          color={isFocused || borderHighlight ? colors.primary : colors.text}
        />
        {isMultiLine && (
          <View style={styles.countView}>
            <Text
              allowFontScaling={false}
              numberOfLines={1}
              style={styles.countTextln}>
              {value?.length}
            </Text>
            <View style={styles.divider} />
            <Text
              allowFontScaling={false}
              numberOfLines={1}
              style={styles.countText}>
              {maxLength}
            </Text>
          </View>
        )}
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const getStyles = (
  colors: Record<string, string>,
  isFocused: boolean,
  isMultiLine: boolean,
  borderHighlight: boolean,
) =>
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
      borderWidth: isFocused || borderHighlight ? 1 : 0,
      borderColor: isFocused || borderHighlight ? colors.primary : '',
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
      opacity: isFocused ? 1 : 0.8,
      height: verticalScale(isMultiLine ? 100 : 22),
    },

    countView: {
      marginTop: 15,
    },

    countText: {
      fontSize: scaleFont(14),
      fontFamily: isFocused ? font.openSansSemiBold : font.openSansLight,
      color: colors.text,
      textAlign: 'center',
    },

    countTextln: {
      fontSize: scaleFont(14),
      fontFamily: isFocused ? font.openSansSemiBold : font.openSansLight,
      color: isFocused ? colors.notification : colors.text,
      textAlign: 'center',
    },

    divider: {
      height: isFocused ? 2 : 1,
      backgroundColor: isFocused ? colors.primary : colors.text,
      marginVertical: 1,
    },
  });

export default CustomTextInput;
