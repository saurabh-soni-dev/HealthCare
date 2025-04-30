import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {PlatformPressable} from '@react-navigation/elements';
import {useLinkBuilder} from '@react-navigation/native';
import React from 'react';
import {View} from 'react-native';
import Analysis from '../../screens/analysis/Analysis';
import Home from '../../screens/home/Home';
import Settings from '../../screens/settings/Settings';
import Icon from 'react-native-vector-icons/Ionicons';
import {styles} from './homeTabs.style';
import iconName from '../../utility/iconName.json';

const Tab = createBottomTabNavigator();

const screens = [
  {key: 'Home', screen: Home},
  {key: 'Analysis', screen: Analysis},
  {key: 'Settings', screen: Settings},
];

function MyTabBar({state, navigation}: BottomTabBarProps) {
  const {buildHref} = useLinkBuilder();

  return (
    <View style={styles.tabBar}>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });
          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        let icon: string;
        switch (route.name) {
          case 'Home':
            icon = iconName.home;
            break;
          case 'Analysis':
            icon = iconName.analysis;
            break;
          case 'Settings':
            icon = iconName.settings;
            break;
          default:
            icon = '';
        }

        return (
          <PlatformPressable
            key={route.key}
            onPress={onPress}
            href={buildHref(route.name)}
            style={[styles.button, isFocused && styles.focusedButton]}>
            <Icon name={icon} size={24} color={'#111111'} />
          </PlatformPressable>
        );
      })}
    </View>
  );
}

export default function HomeTabs() {
  const tabs = (props: BottomTabBarProps) => <MyTabBar {...props} />;
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBar={tabs}
      screenOptions={{headerShown: false, tabBarHideOnKeyboard: true}}>
      {screens.map(({key, screen}) => (
        <Tab.Screen key={key} name={key} component={screen} />
      ))}
    </Tab.Navigator>
  );
}
