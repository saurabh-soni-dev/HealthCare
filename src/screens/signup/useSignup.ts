import {useState} from 'react';
import ImagePicker from 'react-native-image-crop-picker';
import {useAuthNavigation} from '../../hooks/useAppNavigation';
import {useSettingsContext} from '../../i18n/SettingsContext';
import {createStyles} from './signup.style';

interface inputType {
  value: string;
  error?: string;
}

const useSignup = () => {
  const navigation = useAuthNavigation();
  const {theme, isDark} = useSettingsContext();
  const {colors} = theme;

  const [name, setName] = useState<inputType>({value: '', error: ''});
  const [email, setEmail] = useState<inputType>({value: '', error: ''});
  const [dateOfBirth, setDateOfBirth] = useState<inputType>({
    value: '',
    error: '',
  });
  const [gender, setGender] = useState<inputType>({value: '', error: ''});
  const [phoneNumber, setPhoneNumber] = useState<inputType>({
    value: '',
    error: '',
  });
  const [address, setAddress] = useState<inputType>({value: '', error: ''});
  const [profileImage, setProfileImage] = useState<inputType>({
    value: '',
    error: '',
  });
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
    let mediaImg = await ImagePicker.openPicker({
      width: 100,
      height: 100,
      mediaType: 'photo',
      cropping: true,
    });
    setProfileImage({value: mediaImg?.path});
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
