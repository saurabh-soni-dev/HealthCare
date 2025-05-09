import React, {FC} from 'react';
import {Image, KeyboardAvoidingView, Platform, Text, View} from 'react-native';
import imageIndex from '../../assets/imageIndex';
import {CustomStatusBar, CustomTextInput, TextButton} from '../../components';
import useLogin from './useLogin';

const Login: FC = () => {
  const {
    styles,
    phoneNumer,
    setPhoneNumer,
    password,
    setPassword,
    navigateToHomeScreen,
    navigateToSignupScreen,
    navigateToForgotPasswordScreen,
  } = useLogin();

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <CustomStatusBar />
      <View style={styles.mainContainer}>
        <View style={styles.section}>
          <View style={styles.imageView}>
            <Image source={imageIndex.logo} style={styles.imageStyle} />
          </View>
          <Text style={styles.nameStyle}>
            Welcome! {'\n'}to <Text style={styles.hlcStyle}>HELC.io</Text>
          </Text>
        </View>
        <View style={styles.sectionOne}>
          <CustomTextInput
            label="Phone number"
            rightIcon="call"
            placeholder="+91 8702843752"
            value={phoneNumer}
            onChangeText={text => setPhoneNumer(text)}
            keyboardType="phone-pad"
            maxLength={10}
            returnKeyType="done"
          />
          <CustomTextInput
            label="Password"
            rightIcon="eye"
            placeholder="********"
            secureTextEntry
            value={password}
            onChangeText={text => setPassword(text)}
            keyboardType="visible-password"
            maxLength={8}
            returnKeyType="done"
          />
          <TextButton
            title="Login"
            onPress={navigateToHomeScreen}
            buttonStyle={styles.loginButton}
            titleStyle={styles.loginButtonText}
          />
        </View>
        <View style={styles.sectionTwo}>
          <Text
            onPress={navigateToForgotPasswordScreen}
            style={styles.forgotPassText}>
            Forgot Password ?
          </Text>
          <Text style={styles.registerText}>
            If you don't have credentials!{'  '}
            <Text onPress={navigateToSignupScreen} style={styles.signupText}>
              Signup
            </Text>{' '}
          </Text>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Login;
