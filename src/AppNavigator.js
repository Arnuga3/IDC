import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigation, BottomNavigationTab, Icon } from '@ui-kitten/components';
import HomeScreen from './home/HomeScreen';
import UserScreen from './user/UserScreen';
import HistoryScreen from './history/HistoryScreen';

const { Navigator, Screen } = createBottomTabNavigator();

const HomeIcon = (props) => (
  <Icon {...props} name='home-outline'/>
);

const PersonIcon = (props) => (
  <Icon {...props} name='person-outline'/>
);

const CalendarIcon = (props) => (
  <Icon {...props} name='calendar-outline'/>
);


const BottomTabBar = ({ navigation, state }) => (
  <BottomNavigation
    selectedIndex={state.index}
    onSelect={index => navigation.navigate(state.routeNames[index])}>
    <BottomNavigationTab icon={HomeIcon}/>
    <BottomNavigationTab icon={PersonIcon}/>
    <BottomNavigationTab icon={CalendarIcon}/>
  </BottomNavigation>
);

const TabNavigator = () => (
  <Navigator tabBar={props => <BottomTabBar {...props} />}>
    <Screen name='Home' component={HomeScreen}/>
    <Screen name='User' component={UserScreen}/>
    <Screen name='History' component={HistoryScreen}/>
  </Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer>
    <TabNavigator/>
  </NavigationContainer>
);
