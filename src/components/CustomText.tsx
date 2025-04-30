import {StyleSheet, Text, TextStyle} from 'react-native';
import React, {FC} from 'react';

interface CustomTextProps {
  text: string;
  style?: TextStyle;
  allowFontScaling?: boolean;
  numberOfLines?: number;
}
const CustomText: FC<CustomTextProps> = ({
  text,
  style = styles.textStyle,
  allowFontScaling = false,
  numberOfLines = 1,
}) => {
  return (
    <Text
      style={style}
      allowFontScaling={allowFontScaling}
      numberOfLines={numberOfLines}>
      {text}
    </Text>
  );
};

export default CustomText;

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 14,
    color: '#000000',
  },
});
