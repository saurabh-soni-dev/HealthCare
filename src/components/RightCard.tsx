import React, {FC} from 'react';
import {
  Image,
  ImageStyle,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import {useSettingsContext} from '../i18n/SettingsContext';
import fonts from '../theme/fonts';

interface RightCardProps {
  nameOfDoctor: string;
  imageOfDoctor: string;
  type: string;
  body: string;
  num: string;
  exray: string;
}

const RightCard: FC<RightCardProps> = ({
  nameOfDoctor,
  imageOfDoctor,
  type,
  body,
  num,
  exray,
}) => {
  const {theme} = useSettingsContext();
  const styles = createStyles(theme.colors);

  return (
    <View style={styles.card}>
      <View style={styles.headerRow}>
        <Text allowFontScaling={false} numberOfLines={2} style={styles.title}>
          {nameOfDoctor}
        </Text>
        <View style={styles.imageWrapper}>
          <Image
            source={{uri: imageOfDoctor}}
            resizeMode="cover"
            style={styles.profileImage}
          />
        </View>
      </View>

      <View style={styles.textGroup}>
        <Text allowFontScaling={false} numberOfLines={2} style={styles.type}>
          {type}
        </Text>
        <Text allowFontScaling={false} numberOfLines={2} style={styles.body}>
          {body}
        </Text>
        <Text allowFontScaling={false} numberOfLines={2} style={styles.num}>
          {num}
        </Text>
      </View>

      <View style={styles.xrayContainer}>
        <Image
          source={{uri: exray}}
          resizeMode="cover"
          style={styles.xrayImage}
        />
      </View>
    </View>
  );
};

export default RightCard;

const createStyles = (colors: any) => ({
  card: {
    height: '48%',
    width: '100%',
    backgroundColor: colors.card,
    borderRadius: 20,
    padding: 15,
    marginBottom: 10,
  } as ViewStyle,

  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
  } as ViewStyle,

  title: {
    fontSize: 18,
    fontFamily: fonts.openSansSemiBold,
    color: colors.text,
    width: '60%',
  } as TextStyle,

  imageWrapper: {
    height: '24%',
    width: '40%',
    backgroundColor: colors.background,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  } as ViewStyle,

  profileImage: {
    height: 60,
    width: 60,
    borderRadius: 30,
  } as ImageStyle,

  textGroup: {
    marginTop: 25,
  } as ViewStyle,

  type: {
    fontSize: 14,
    color: colors.text,
    fontFamily: fonts.openSansRegular,
  } as TextStyle,

  body: {
    fontSize: 18,
    color: colors.text,
    marginBottom: 4,
    fontFamily: fonts.openSansBold,
  } as TextStyle,

  num: {
    fontSize: 14,
    color: colors.text,
    fontFamily: fonts.openSansRegular,
  } as TextStyle,

  xrayContainer: {
    marginTop: 25,
    backgroundColor: colors.border,
    height: 85,
    borderRadius: 20,
  } as ViewStyle,

  xrayImage: {
    height: 85,
    width: '100%',
    borderRadius: 10,
  } as ImageStyle,
});
