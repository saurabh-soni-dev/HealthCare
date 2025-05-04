import {Text, TextStyle} from 'react-native';
import React, {FC} from 'react';
import {useSettingsContext} from '../../i18n/SettingsContext';

interface CustomTextProps {
  text: string;
  style?: TextStyle;
  allowFontScaling?: boolean;
  numberOfLines?: number;
}
const CustomText: FC<CustomTextProps> = ({
  text,
  style,
  allowFontScaling = false,
  numberOfLines = 1,
}) => {
  const {theme} = useSettingsContext();
  return (
    <Text
      style={{color: theme.colors.text, ...style}}
      allowFontScaling={allowFontScaling}
      numberOfLines={numberOfLines}>
      {text}
    </Text>
  );
};

export default CustomText;
