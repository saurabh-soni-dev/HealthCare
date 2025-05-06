import {FC} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {stackScreens} from './rootStack.const';
import {RootStackParams} from './rootStackParams';

const Stack = createNativeStackNavigator<RootStackParams>();
const RootStack: FC = () => {
  return (
    <Stack.Navigator
      initialRouteName={'Login'}
      screenOptions={{
        headerShown: false,
        statusBarAnimation: 'fade',
        presentation: 'card',
        orientation: 'portrait',
        navigationBarColor: '',
      }}>
      {stackScreens?.map(screen => (
        <Stack.Screen
          key={screen?.name}
          name={screen?.name as keyof RootStackParams}
          component={screen?.component}
        />
      ))}
    </Stack.Navigator>
  );
};

export default RootStack;
