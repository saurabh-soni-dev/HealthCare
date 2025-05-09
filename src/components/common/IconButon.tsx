import React, {FC} from 'react';
import {StyleSheet, TouchableHighlight, ViewStyle} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {scaleFont, verticalScale} from '../../utility';

interface IconButonProps {
  iconName: string;
  onPress?: () => void;
  style?: ViewStyle;
  iconColor?: string;
  iconSize?: number;
  underlayColor?: string;
}

const IconButon: FC<IconButonProps> = ({
  iconName,
  onPress,
  style,
  iconColor,
  iconSize,
  underlayColor,
}) => {
  return (
    <TouchableHighlight
      onPress={onPress}
      underlayColor={underlayColor ?? 'rgba(0,0,0,0.1)'}
      style={[styles.button, {...style}]}>
      <Icon
        name={iconName}
        size={iconSize ? scaleFont(iconSize) : scaleFont(20)}
        color={iconColor ? iconColor : '#111111'}
      />
    </TouchableHighlight>
  );
};

export default IconButon;

const styles = StyleSheet.create({
  button: {
    padding: verticalScale(16),
    backgroundColor: '#E5E7EB',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
