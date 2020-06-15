import React, { useState, useContext } from 'react';
import { View } from 'react-native';
import { ThemeContext, Header, Button, Icon, Image } from 'react-native-elements';
import Settings from './Settings';
import Inputs from './Inputs';
import { Text } from 'react-native';

const Home = () => {
    const [settingsOpen, setSettingsOpen] = useState(false);
    const { theme } = useContext(ThemeContext);
    return (
        <>
            <Header
                containerStyle={{ backgroundColor: theme.colors.c_primary_light }}
                centerComponent={
                    <View style={{ height: 100, display: 'flex', alignItems: 'center' }}>
                        <Image
                            source={require('./../assets/freestyle.png')}
                            style={{ width: 250, height: 50 }}
                        />
                        <Text>Insulin Dose Calculator</Text>
                    </View>
                }
                rightComponent={
                    <View style={{ marginTop: -20 }}>
                        <Button
                            buttonStyle={{ backgroundColor: 'transparent' }}
                            icon={<Icon name='settings' color='black' size={24} type='feather'></Icon>}
                            onPress={() => setSettingsOpen(true)}
                        />
                    </View>
                }
                statusBarProps={{
                    height: 100
                }}
            />
            {settingsOpen ? <Settings onClose={() => setSettingsOpen(false)}/> : <Inputs/>}
        </>
    );
}

export default Home;