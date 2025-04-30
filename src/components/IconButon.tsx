import {StyleSheet, TouchableHighlight, ViewStyle} from 'react-native';
import React, {FC} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

interface IconButonProps {
  iconName: string;
  onPress: () => void;
  style?: ViewStyle;
}

const IconButon: FC<IconButonProps> = ({iconName, onPress, style}) => {
  return (
    <TouchableHighlight
      onPress={onPress}
      underlayColor={'#6B7280'}
      style={[styles.button, {...style}]}>
      <Icon name={iconName} size={24} color={'#111111'} />
    </TouchableHighlight>
  );
};

export default IconButon;

const styles = StyleSheet.create({
  button: {
    padding: 18,
    backgroundColor: '#E5E7EB',
    borderRadius: 100,
  },
});
