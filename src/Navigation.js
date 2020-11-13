import React, { useContext } from 'react';
import Settings from './Settings';
import Information from './Information';
import Calculator from './Calculator';
import { View } from 'react-native';
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
                        headerTitle: () =>
                            <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                <Image
                                    source={require('./../assets/libreidc.png')}
                                    style={{ width: 250, height: 50 }}
                                />
                                <Button
                                    buttonStyle={{ backgroundColor: 'transparent', margin: 10 }}
                                    icon={<Icon name='info' color={theme.colors.c_primary_dark} size={34} type='feather'></Icon>}
                                    onPress={() => navigation.navigate('Information')}
                                />
                                <Button
                                    buttonStyle={{ backgroundColor: 'transparent' }}
                                    icon={<Icon name='settings' color='black' size={30} type='feather'></Icon>}
                                    onPress={() => navigation.navigate('Settings')}
                                />
                            </View>,
                        headerTitleAlign: 'center'
                    })}
                />
                <Stack.Screen name='Settings' component={Settings} options={{ headerTitleAlign: 'center' }}/>
                <Stack.Screen name='Information' component={Information} options={{ headerTitleAlign: 'center' }}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;