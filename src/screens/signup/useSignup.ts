import {useState} from 'react';
import ImagePicker from 'react-native-image-crop-picker';
import {useAuthNavigation} from '../../hooks/useAppNavigation';
import {useSettingsContext} from '../../i18n/SettingsContext';
import {createStyles} from './signup.style';

const useSignup = () => {
  const navigation = useAuthNavigation();
  const {theme, isDark} = useSettingsContext();
  const {colors} = theme;

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [dateOfBirth, setDateOfBirth] = useState<string>('');
  const [gender, setGender] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [profileImage, setProfileImage] = useState<string>('');
  const [borderHighlight, setBorderHighlight] = useState<boolean>(false);
  const [isDatePicker, setIsDatePicker] = useState<boolean>(false);
  const [isGenderPicker, setIsGenderPicker] = useState<boolean>(false);

  const styles = createStyles(colors, isDark, borderHighlight);

  const navigateToLoginScreen = () => {
    navigation.goBack();
  };

  const navigateToHomeScreen = () => {
    navigation.navigate('HomeTabs');
  };

  const handleFocused = () => {
    setBorderHighlight(!borderHighlight);
  };

  const selectProfileImage = async () => {
    let mediaImg = await ImagePicker.openPicker({mediaType: 'photo'});
    setProfileImage(mediaImg?.path);
  };

  const datePickerHandler = () => {
    setIsDatePicker(!isDatePicker);
  };

  const genderPickerHandler = () => {
    setIsGenderPicker(!isGenderPicker);
  };

  return {
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
    setProfileImage,
    borderHighlight,
    isDatePicker,
    setIsDatePicker,
    isGenderPicker,
    setIsGenderPicker,
    navigateToLoginScreen,
    navigateToHomeScreen,
    handleFocused,
    selectProfileImage,
    datePickerHandler,
    genderPickerHandler,
  };
};

export default useSignup;
