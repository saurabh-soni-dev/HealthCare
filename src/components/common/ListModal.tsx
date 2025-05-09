import React, {FC, useMemo} from 'react';
import {
  Modal,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useSettingsContext} from '../../i18n/SettingsContext';
import {font} from '../../theme';
import {horizontalScale, scaleFont, verticalScale} from '../../utility';
import CustomHeader from './CustomHeader';
import CustomStatusBar from './CustomStatusBar';
import CustomText from './CustomText';

interface ListModalProps {
  visible: boolean;
  options: string[];
  onClose: () => void;
  onSelect: (value: string) => void;
}

const ListModal: FC<ListModalProps> = ({
  visible,
  options,
  onClose,
  onSelect,
}) => {
  const {theme, isDark} = useSettingsContext();
  const {colors} = theme;

  const styles = useMemo(() => createStyles(colors), [colors]);

  return (
    <Modal
      visible={visible}
      animationType="slide"
      onRequestClose={onClose}
      presentationStyle="fullScreen">
      <View style={styles.container}>
        <CustomStatusBar />
        <CustomHeader title="What is your gender?" onBack={onClose} />
        <View style={styles.genderContainer}>
          {options?.map((item, index) => (
            <TouchableOpacity
              key={item}
              onPress={() => onSelect(item)}
              activeOpacity={0.6}
              style={styles.genderCard}>
              <Icon
                name={index === 0 ? 'man' : 'woman'}
                size={scaleFont(100)}
                color={isDark ? colors.notification : colors.primary}
              />
              <CustomText text={item} style={styles.genderLabel} />
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </Modal>
  );
};

export default ListModal;

const createStyles = (colors: any) => ({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  } as ViewStyle,

  genderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: horizontalScale(20),
    paddingVertical: verticalScale(30),
  } as ViewStyle,

  genderCard: {
    width: '47%',
    padding: verticalScale(20),
    borderRadius: 20,
    borderWidth: 0.3,
    borderColor: colors.text,
    alignItems: 'center',
  } as ViewStyle,

  genderLabel: {
    marginTop: verticalScale(25),
    fontSize: scaleFont(18),
    fontFamily: font.openSansSemiBold,
    color: colors.text,
    textAlign: 'center',
  } as TextStyle,
});
