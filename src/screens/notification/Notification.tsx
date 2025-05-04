import React, {FC} from 'react';
import {View} from 'react-native';
import {CustomHeader, CustomStatusBar} from '../../components';
import useNotification from './useNotification';

const Notification: FC = () => {
  const {styles, onPressBackIcon} = useNotification();
  return (
    <View style={styles.container}>
      <CustomStatusBar />
      <CustomHeader
        title="Notification"
        subTitle="You have 10 new notification"
        onBack={onPressBackIcon}
      />
    </View>
  );
};

export default Notification;
