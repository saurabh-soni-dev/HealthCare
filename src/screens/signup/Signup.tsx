import React, {FC} from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  View,
} from 'react-native';
import {
  CustomHeader,
  CustomStatusBar,
  CustomText,
  CustomTextInput,
  TextButton,
} from '../../components';
import useSignup from './useSignup';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {scaleFont} from '../../utility';

const Signup: FC = () => {
  const {
    colors,
    styles,
    name,
    setName,
    email,
    setEmail,
    dateOfBirth,
    setDateOfBirth,
    gender,
    setGender,
    phoneNumber,
    setPhoneNumber,
    address,
    setAddress,
    profileImage,
    borderHighlight,
    navigateToLoginScreen,
    navigateToHomeScreen,
    handleFocused,
  } = useSignup();

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <CustomStatusBar />
      <CustomHeader
        title={'Signup'}
        subTitle="Add your details like (Name, Phone number, Address)"
        onBack={navigateToLoginScreen}
      />
      <ScrollView
        style={styles.mainContainer}
        bounces
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled={true}
        overScrollMode="never"
        keyboardShouldPersistTaps="handled"
        alwaysBounceVertical={false}>
        <CustomTextInput
          label="Full name"
          rightIcon="person"
          placeholder="Dr. Cameron"
          value={name}
          onChangeText={text => setName(text)}
          keyboardType="default"
          maxLength={20}
        />
        <CustomTextInput
          label="Email address"
          rightIcon="mail"
          placeholder="cameron@yopmail.com"
          value={email}
          onChangeText={text => setEmail(text)}
          keyboardType="email-address"
        />
        <CustomTextInput
          label="Date of birth"
          rightIcon="calendar"
          placeholder="11 July 1998"
          value={dateOfBirth}
          onChangeText={text => setDateOfBirth(text)}
          keyboardType="default"
          maxLength={15}
        />
        <CustomTextInput
          label="Gender"
          rightIcon="transgender"
          placeholder="Male"
          value={gender}
          onChangeText={text => setGender(text)}
          keyboardType="default"
          maxLength={6}
        />
        <CustomTextInput
          label="Phone number"
          rightIcon="call"
          placeholder="+91 8702843752"
          value={phoneNumber}
          onChangeText={text => setPhoneNumber(text)}
          keyboardType="phone-pad"
          maxLength={10}
          returnKeyType="done"
        />
        <CustomTextInput
          label="Address"
          rightIcon="location"
          placeholder="Fort Lauderdalefl, FL, USA"
          value={address}
          onChangeText={text => setAddress(text)}
          keyboardType="default"
          maxLength={10}
          returnKeyType="done"
        />
        <View style={styles.profileImageView}>
          <TouchableOpacity
            style={styles.uploadButton}
            activeOpacity={0.8}
            onPressIn={handleFocused}
            onPressOut={handleFocused}>
            <CustomText text="Profile image" style={styles.uploadButtonText} />
            <Icon
              name={'cloud-upload'}
              size={scaleFont(22)}
              color={borderHighlight ? colors.primary : colors.text}
            />
          </TouchableOpacity>
          <View style={styles.imagePreview}>
            {!profileImage ? (
              <Image
                source={{uri: 'https://randomuser.me/api/portraits/men/6.jpg'}}
                style={styles.profileImage}
              />
            ) : (
              <CustomText
                text="Image preview!"
                style={styles.uploadButtonText}
              />
            )}
          </View>
        </View>
      </ScrollView>
      <TextButton
        title="Signup"
        onPress={navigateToHomeScreen}
        buttonStyle={styles.loginButton}
        titleStyle={styles.loginButtonText}
      />
    </KeyboardAvoidingView>
  );
};

export default Signup;
