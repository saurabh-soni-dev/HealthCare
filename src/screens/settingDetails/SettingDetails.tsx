import {ScrollView, View} from 'react-native';
import React, {FC} from 'react';
import useSettingDetails from './useSettingDetails';
import {CustomHeader, CustomStatusBar, CustomText} from '../../components';
import {aboutApp, privacyPolicy, termsOfService} from './settingDetails.const';

const SettingDetails: FC = () => {
  const {styles, flag, onPressBackIcon, language} = useSettingDetails();

  const AppLanguage = () => {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        {language?.map(ll => (
          <View style={styles.row} key={ll.id}>
            <CustomText text={ll.title} style={styles.titleText} />
          </View>
        ))}
      </ScrollView>
    );
  };

  const PrivacyPolicy = () => (
    <ScrollView showsVerticalScrollIndicator={false}>
      {privacyPolicy?.map((pp, i) => (
        <View style={styles.row} key={i}>
          <CustomText
            text={`${i + 1} - ${pp.title}`}
            style={styles.titleText}
          />
          <View style={styles.pointView}>
            {pp?.data?.map((point, index) => (
              <CustomText
                key={index}
                text={point}
                numberOfLines={50}
                style={styles.paragraphText}
              />
            ))}
          </View>
        </View>
      ))}
    </ScrollView>
  );

  const TermsOfService = () => (
    <ScrollView showsVerticalScrollIndicator={false}>
      {termsOfService?.map((ts, i) => (
        <View style={styles.row} key={i}>
          <CustomText
            text={`${i + 1} - ${ts.title}`}
            style={styles.titleText}
          />
          <View style={styles.pointView}>
            {ts?.data?.map((point, index) => (
              <CustomText
                key={index}
                text={point}
                numberOfLines={50}
                style={styles.paragraphText}
              />
            ))}
          </View>
        </View>
      ))}
    </ScrollView>
  );

  const AboutTheApp = () => (
    <ScrollView showsVerticalScrollIndicator={false}>
      {aboutApp?.map((ap, i) => (
        <View style={styles.row} key={i}>
          <CustomText
            text={`${i + 1} - ${ap.title}`}
            style={styles.titleText}
          />
          <View style={styles.pointView}>
            {ap?.data?.map((point, index) => (
              <CustomText
                key={index}
                text={point}
                numberOfLines={50}
                style={styles.paragraphText}
              />
            ))}
          </View>
        </View>
      ))}
    </ScrollView>
  );

  return (
    <View style={styles.container}>
      <CustomStatusBar />
      <CustomHeader title={flag} onBack={onPressBackIcon} />
      <View style={styles.contentContainer}>
        {flag === 'App Language' && AppLanguage()}
        {flag === 'Privacy Policy' && PrivacyPolicy()}
        {flag === 'Terms of Service' && TermsOfService()}
        {flag === 'About the App' && AboutTheApp()}
      </View>
    </View>
  );
};

export default SettingDetails;
