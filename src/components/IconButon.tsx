import {StyleSheet, TouchableHighlight, ViewStyle} from 'react-native';
import React, {FC} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {scaleFont, verticalScale} from '../utility/functions';

interface IconButonProps {
  iconName: string;
  onPress: () => void;
  style?: ViewStyle;
  iconColor?: string;
  iconSize?: number;
}

const IconButon: FC<IconButonProps> = ({
  iconName,
  onPress,
  style,
  iconColor,
  iconSize,
}) => {
  return (
    <TouchableHighlight
      onPress={onPress}
      underlayColor={'#6B7280'}
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
    padding: verticalScale(18),
    backgroundColor: '#E5E7EB',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
