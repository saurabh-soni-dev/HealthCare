import React, {FC} from 'react';
import {
  Image,
  ImageStyle,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {useSettingsContext} from '../../i18n/SettingsContext';
import {font} from '../../theme';
import {
  horizontalScale,
  iconName,
  scaleFont,
  verticalScale,
} from '../../utility';
import IconButon from '../common/IconButon';

// Patient type definition
interface Patient {
  image: string;
  name: string;
  gender: string;
  age: number;
}

interface PatientCardProps {
  item: Patient;
  onPress: () => void;
  onPressEdit?: () => void;
}

const PatientCard: FC<PatientCardProps> = ({item, onPress, onPressEdit}) => {
  const {theme} = useSettingsContext();
  const {colors} = theme;
  const styles = createStyles(colors);

  return (
    <TouchableOpacity style={styles.cardContainer} onPress={onPress}>
      <View style={styles.imageWrapper}>
        <Image
          source={{uri: item.image}}
          resizeMode="cover"
          style={styles.profileImage}
        />
      </View>

      <View style={styles.detailsContainer}>
        <Text
          allowFontScaling={false}
          numberOfLines={1}
          style={styles.nameText}>
          {item.name}
        </Text>

        <View style={styles.infoRow}>
          <Text allowFontScaling={false} style={styles.infoText}>
            {item.gender}
          </Text>
          <Text allowFontScaling={false} style={styles.infoText}>
            {item.age}
          </Text>
        </View>
      </View>

      <IconButon
        iconName={iconName.edit}
        iconSize={20}
        iconColor={colors.card}
        onPress={() => onPressEdit}
        style={styles.editButton}
      />
    </TouchableOpacity>
  );
};

export default PatientCard;

const createStyles = (colors: any) => ({
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  } as ViewStyle,

  imageWrapper: {
    height: verticalScale(60),
    width: horizontalScale(60),
    backgroundColor: colors.background,
    borderRadius: 15,
    marginRight: horizontalScale(12),
    alignItems: 'center',
    justifyContent: 'center',
  } as ViewStyle,

  profileImage: {
    height: verticalScale(60),
    width: horizontalScale(60),
    borderRadius: 15,
  } as ImageStyle,

  detailsContainer: {
    flex: 1,
  } as ViewStyle,

  nameText: {
    fontSize: scaleFont(18),
    fontWeight: '500',
    color: colors.text,
    fontFamily: font.openSansBold,
  } as TextStyle,

  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  } as ViewStyle,

  infoText: {
    fontSize: scaleFont(14),
    color: colors.text,
    marginRight: horizontalScale(5),
    textTransform: 'capitalize',
    fontFamily: font.openSansRegular,
  } as TextStyle,

  editButton: {
    backgroundColor: colors.text,
  } as ViewStyle,
});
