import React, { useState, useContext } from 'react';
import { ThemeContext, Header, Button, Icon } from 'react-native-elements';
import Settings from './Settings';
import Inputs from './Inputs';

const Home = () => {
    const [settingsOpen, setSettingsOpen] = useState(false);
    const { theme } = useContext(ThemeContext);
    return (
        <>
            <Header
                containerStyle={{ backgroundColor: theme.colors.c_dark }}
                centerComponent={
                    {
                        text: settingsOpen ? 'Settings' : 'Insulin Dose Calculator',
                        style: {
                            color: '#fff',
                            fontWeight: 'bold',
                            textTransform: 'uppercase'
                        }
                    }
                }
                rightComponent={
                    <Button
                        buttonStyle={{ backgroundColor: 'transparent' }}
                        icon={<Icon name='settings' color='white' size={24} type='feather'></Icon>}
                        onPress={() => setSettingsOpen(true)}
                    />
                }
            />
            {settingsOpen ? <Settings onClose={() => setSettingsOpen(false)}/> : <Inputs/>}
        </>
    );
}

export default Home;