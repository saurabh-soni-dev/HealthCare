import React, {FC} from 'react';
import {
  Image,
  ImageStyle,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import {useSettingsContext} from '../../i18n/SettingsContext';
import {font} from '../../theme';
import {scaleFont, verticalScale} from '../../utility';
import IconButon from '../common/IconButon';

interface LeftCardProps {
  testName: string;
  testIcon: string;
  type: string;
  typeIcon: string;
  body: string;
  num: string;
  type1: string;
  type1Icon: string;
  body1: string;
  num1: string;
  exray: string;
}

const LeftCard: FC<LeftCardProps> = ({
  testName,
  testIcon,
  type,
  typeIcon,
  body,
  num,
  type1,
  type1Icon,
  body1,
  num1,
  exray,
}) => {
  const {theme} = useSettingsContext();
  const styles = createStyles(theme.colors);

  return (
    <View style={styles.card}>
      <View style={styles.headerRow}>
        <Text allowFontScaling={false} numberOfLines={2} style={styles.title}>
          {testName}
        </Text>
        <IconButon
          iconName={testIcon}
          iconSize={20}
          iconColor={theme.colors.text}
          style={styles.editButton}
        />
      </View>

      <View style={styles.typeGroup}>
        <View style={styles.textGroup}>
          <Text allowFontScaling={false} numberOfLines={1} style={styles.type}>
            {type}
          </Text>
          <Text allowFontScaling={false} numberOfLines={1} style={styles.body}>
            {body}
          </Text>
          <Text allowFontScaling={false} numberOfLines={1} style={styles.num}>
            {num}
          </Text>
        </View>
        <IconButon
          iconName={typeIcon}
          iconSize={20}
          iconColor={theme.colors.text}
          style={styles.editButton}
        />
      </View>

      <View style={styles.typeGroup}>
        <View style={styles.textGroup}>
          <Text allowFontScaling={false} numberOfLines={1} style={styles.type}>
            {type1}
          </Text>
          <Text allowFontScaling={false} numberOfLines={1} style={styles.body}>
            {body1}
          </Text>
          <Text allowFontScaling={false} numberOfLines={1} style={styles.num}>
            {num1}
          </Text>
        </View>
        <IconButon
          iconName={type1Icon}
          iconSize={20}
          iconColor={theme.colors.text}
          style={styles.editButton}
        />
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

export default LeftCard;

const createStyles = (colors: any) => ({
  card: {
    height: verticalScale(360),
    width: '100%',
    backgroundColor: colors.border,
    borderRadius: 20,
    padding: verticalScale(15),
    marginTop: verticalScale(10),
  } as ViewStyle,

  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  } as ViewStyle,

  title: {
    fontSize: scaleFont(16),
    fontFamily: font.openSansSemiBold,
    color: colors.text,
    width: '60%',
  } as TextStyle,

  typeGroup: {
    marginTop: verticalScale(20),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  } as ViewStyle,

  textGroup: {
    width: '60%',
  } as ViewStyle,

  type: {
    fontSize: scaleFont(14),
    color: colors.text,
    fontFamily: font.openSansRegular,
  } as TextStyle,

  body: {
    fontSize: scaleFont(18),
    color: colors.text,
    marginBottom: 4,
    fontFamily: font.openSansBold,
  } as TextStyle,

  num: {
    fontSize: scaleFont(14),
    color: colors.text,
    fontFamily: font.openSansRegular,
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

  editButton: {
    backgroundColor: colors.background,
  } as ViewStyle,
});
