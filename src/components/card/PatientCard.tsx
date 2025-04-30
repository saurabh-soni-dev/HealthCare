import React, {FC} from 'react';
import {Image, StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import iconName from '../../utility/iconName.json';

// Patient type definition
interface Patient {
  image: string;
  name: string;
  gender: string;
  age: number;
}

interface PatientCardProps {
  item: Patient;
  onPressEdit?: () => void;
}

const PatientCard: FC<PatientCardProps> = ({item, onPressEdit}) => {
  return (
    <View style={styles.cardContainer}>
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
        <Icon name={iconName.edit} size={20} color="#111111" />
      </TouchableHighlight>
    </View>
  );
};

export default PatientCard;
const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageWrapper: {
    height: 60,
    width: 60,
    backgroundColor: '#E5E7EB',
    borderRadius: 100,
    marginRight: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileImage: {
    height: 60,
    width: 60,
    borderRadius: 30,
  },
  detailsContainer: {
    flex: 1,
  },
  nameText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#111827',
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  infoText: {
    fontSize: 14,
    color: '#4B5563',
    marginRight: 5,
    textTransform: 'capitalize',
  },
  editButton: {
    height: 60,
    width: 60,
    backgroundColor: '#E5E7EB',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 12,
  },
});
