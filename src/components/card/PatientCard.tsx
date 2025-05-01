import React, {FC} from 'react';
import {
  Image,
  ImageStyle,
  Text,
  TextStyle,
  TouchableHighlight,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import iconName from '../../utility/iconName.json';
import {useSettingsContext} from '../../i18n/SettingsContext';

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

      <TouchableHighlight
        onPress={onPressEdit}
        underlayColor="#D1D5DB"
        style={styles.editButton}>
        <Icon name={iconName.edit} size={20} color={colors.card} />
      </TouchableHighlight>
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
    height: 60,
    width: 60,
    backgroundColor: colors.background,
    borderRadius: 100,
    marginRight: 12,
    alignItems: 'center',
    justifyContent: 'center',
  } as ViewStyle,

  profileImage: {
    height: 60,
    width: 60,
    borderRadius: 30,
  } as ImageStyle,

  detailsContainer: {
    flex: 1,
  } as ViewStyle,

  nameText: {
    fontSize: 18,
    fontWeight: '500',
    color: colors.text,
  } as TextStyle,

  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  } as ViewStyle,

  infoText: {
    fontSize: 14,
    color: colors.text,
    marginRight: 5,
    textTransform: 'capitalize',
  } as TextStyle,

  editButton: {
    height: 60,
    width: 60,
    backgroundColor: colors.text,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 12,
  } as ViewStyle,
});
