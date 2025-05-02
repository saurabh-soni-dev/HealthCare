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
import {horizontalScale, scaleFont, verticalScale} from '../utility/functions';

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
    height: verticalScale(260),
    width: '100%',
    backgroundColor: colors.card,
    borderRadius: 20,
    padding: verticalScale(15),
    marginBottom: verticalScale(10),
  } as ViewStyle,

  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  } as ViewStyle,

  title: {
    fontSize: scaleFont(16),
    fontFamily: fonts.openSansSemiBold,
    color: colors.text,
    width: '60%',
  } as TextStyle,

  imageWrapper: {
    height: verticalScale(45),
    width: horizontalScale(45),
    backgroundColor: colors.background,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  } as ViewStyle,

  profileImage: {
    height: verticalScale(45),
    width: horizontalScale(45),
    borderRadius: 10,
  } as ImageStyle,

  textGroup: {
    marginTop: verticalScale(20),
  } as ViewStyle,

  type: {
    fontSize: scaleFont(14),
    color: colors.text,
    fontFamily: fonts.openSansRegular,
  } as TextStyle,

  body: {
    fontSize: scaleFont(18),
    color: colors.text,
    marginBottom: 4,
    fontFamily: fonts.openSansBold,
  } as TextStyle,

  num: {
    fontSize: scaleFont(14),
    color: colors.text,
    fontFamily: fonts.openSansRegular,
  } as TextStyle,

  xrayContainer: {
    marginTop: verticalScale(20),
    backgroundColor: colors.border,
    height: verticalScale(80),
    borderRadius: 20,
  } as ViewStyle,

  xrayImage: {
    height: verticalScale(80),
    width: '100%',
    borderRadius: 10,
  } as ImageStyle,
});
