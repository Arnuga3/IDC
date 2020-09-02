import React, { useContext } from 'react';
import Settings from './Settings';
import Calculator from './Calculator';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ThemeContext, Button, Icon, Image } from 'react-native-elements';

const Stack = createStackNavigator();

const Navigation = () => {
    const { theme } = useContext(ThemeContext);
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home' screenOptions={{ headerStyle: { backgroundColor: theme.colors.c_secondary, elevation: 0 } }}>
                <Stack.Screen
                    name='Calculator'
                    component={Calculator}
                    options={({ navigation }) => ({
                        headerTitle: () => <Image
                            source={require('./../assets/libreidc.png')}
                            style={{ width: 250, height: 50 }}
                        />,
                        headerRight: () =>
                            <Button
                                buttonStyle={{ backgroundColor: 'transparent', marginRight: 10 }}
                                icon={<Icon name='settings' color='black' size={30} type='feather'></Icon>}
                                onPress={() => navigation.navigate('Settings')}
                            />,
                        headerTitleAlign: 'center'
                    })}
                />
                <Stack.Screen name='Settings' component={Settings} options={{ headerTitleAlign: 'center' }}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;