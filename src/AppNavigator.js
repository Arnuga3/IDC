import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigation, BottomNavigationTab, Icon } from '@ui-kitten/components';
import Home from './components/screens/home/Home';
import MealLogs from './components/screens/mealLogs/MealLogs';
import UserAccount from './components/screens/userAccount/UserAccount';
import MealNew from './components/screens/mealNew/MealNew';
import MealItemForm from './components/screens/mealNew/MealItemForm';

const { Navigator, Screen } = createBottomTabNavigator();

const HomeIcon = (props) => (
	<Icon {...props} name='home-outline' />
);

const ListIcon = (props) => (
	<Icon {...props} name='list-outline' />
);

const PersonIcon = (props) => (
	<Icon {...props} name='person-outline' />
);


const BottomTabBar = ({ navigation, state }) => (
	<BottomNavigation
		selectedIndex={state.index}
		onSelect={index => navigation.navigate(state.routeNames[index])}
	>
		<BottomNavigationTab icon={HomeIcon} />
		<BottomNavigationTab icon={ListIcon} />
		<BottomNavigationTab icon={PersonIcon} />
	</BottomNavigation>
);

const TabNavigator = () => (
	<Navigator tabBar={props => <BottomTabBar {...props} />}>
		<Screen name='Home' component={Home} />
		<Screen name='Logs' component={MealLogs} />
		<Screen name='User' component={UserAccount} />
		<Screen name='MealNew' component={MealNew} />
		<Screen name='MealItemForm' component={MealItemForm} />
	</Navigator>
);

export const AppNavigator = () => (
	<NavigationContainer>
		<TabNavigator />
	</NavigationContainer>
);
