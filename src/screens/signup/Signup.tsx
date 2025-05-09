import moment from 'moment';
import React, {FC} from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import DatePicker from 'react-native-date-picker';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  CustomHeader,
  CustomStatusBar,
  CustomText,
  CustomTextInput,
  ListModal,
  TextButton,
} from '../../components';
import {scaleFont} from '../../utility';
import useSignup from './useSignup';

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
    isDatePicker,
    isGenderPicker,
    setIsGenderPicker,
    navigateToLoginScreen,
    navigateToHomeScreen,
    handleFocused,
    selectProfileImage,
    datePickerHandler,
    genderPickerHandler,
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
          editable={false}
          isButton={true}
          onPress={datePickerHandler}
        />
        <CustomTextInput
          label="Gender"
          rightIcon="transgender"
          placeholder="Male"
          value={gender}
          onChangeText={text => setGender(text)}
          keyboardType="default"
          maxLength={6}
          editable={false}
          isButton={true}
          onPress={genderPickerHandler}
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
          returnKeyType="go"
          maxLength={180}
          multiline={true}
          numberOfLines={5}
        />
        <DatePicker
          date={new Date()}
          modal
          open={isDatePicker}
          mode="date"
          onConfirm={(res: Date) =>
            setDateOfBirth(moment(res?.toString()).format('D MMM YYYY'))
          }
          onCancel={datePickerHandler}
          theme={'light'}
          cancelText="Cancel"
          confirmText="Confirm"
          buttonColor={colors.primary}
          dividerColor={colors.primary}
          maximumDate={new Date()}
        />
        <ListModal
          visible={isGenderPicker}
          options={['Male', 'Female']}
          onClose={() => genderPickerHandler()}
          onSelect={gen => {
            setGender(gen);
            setIsGenderPicker(false);
          }}
        />
        <View style={styles.profileImageView}>
          <TouchableOpacity
            style={styles.uploadButton}
            activeOpacity={0.8}
            onPressIn={handleFocused}
            onPressOut={handleFocused}
            onPress={selectProfileImage}>
            <Icon
              name={'cloud-upload'}
              size={scaleFont(22)}
              color={borderHighlight ? colors.primary : colors.text}
            />
            <CustomText
              text="Upload profile image"
              style={styles.uploadButtonText}
            />
          </TouchableOpacity>
          <View style={styles.imagePreview}>
            {profileImage ? (
              <Image
                source={{uri: profileImage}}
                style={styles.profileImage}
                resizeMode="cover"
              />
            ) : (
              <CustomText
                text="Preview of the uploaded image!"
                style={styles.uploadButtonText}
                numberOfLines={2}
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
