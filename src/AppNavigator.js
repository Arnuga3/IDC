import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigation, BottomNavigationTab, Icon } from '@ui-kitten/components';
import Home from './components/screens/homeScreen/Home';
import MealLogs from './components/screens/mealLogsScreen/MealLogs';
import UserAccount from './components/screens/userAccountScreen/UserAccount';
import NewMeal from './components/screens/newMealScreen/NewMeal';

const { Navigator, Screen } = createBottomTabNavigator();

const HomeIcon = (props) => (
  <Icon {...props} name='home-outline'/>
);

const ListIcon = (props) => (
  <Icon {...props} name='list-outline'/>
);

const PersonIcon = (props) => (
  <Icon {...props} name='person-outline'/>
);


const BottomTabBar = ({ navigation, state }) => (
  <BottomNavigation
    selectedIndex={state.index}
    onSelect={index => navigation.navigate(state.routeNames[index])}>
    <BottomNavigationTab icon={HomeIcon}/>
    <BottomNavigationTab icon={ListIcon}/>
    <BottomNavigationTab icon={PersonIcon}/>
  </BottomNavigation>
);

const TabNavigator = () => (
  <Navigator tabBar={props => <BottomTabBar {...props} />}>
    <Screen name='Home' component={Home}/>
    <Screen name='Logs' component={MealLogs}/>
    <Screen name='User' component={UserAccount}/>
    <Screen name='NewMeal' component={NewMeal}/>
  </Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer>
    <TabNavigator/>
  </NavigationContainer>
);
