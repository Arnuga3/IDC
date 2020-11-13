import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { ThemeContext, Button, Icon, Text, Overlay } from 'react-native-elements';
import {agreeToNote} from './hooks';

const WarningOverlay = ({ open, onClose }) => {
    const { theme } = useContext(ThemeContext);
    const styles = stylesWithTheme(theme);

    const handleUnderstood = async () => {
        agreeToNote();
        onClose();
    };

    return (
        <Overlay overlayStyle={styles.overlay} isVisible={open} onBackdropPress={onClose}>
            <View>
                <Icon style={{ margin: 8 }} color={theme.colors.c_primary_dark} size={100} type='feather' name={'alert-triangle'}/>
                <Text style={styles.message}>
                    {
`
Libre IDC uses a simple calculation process based on the amount of carbohydrates per unit proportion over a specific time of day and adjusting the insulin dose based on the blood glucose trend arrows.
Users of this app MUST read the user manual section and MUST get approval from Healt Practice before using Libre IDC to calculate their insulin dose. Libre IDC app's goal is to improve diabetes management and this can be achieved with proper use. By choosing "Continue" you are taking responsibility. Be mindful, be safe.
`
                    }
                </Text>
                <Button buttonStyle={styles.button} title='Continue' onPress={handleUnderstood}/>
                <Text style={styles.smallText}>{'The message will not be shown again'}</Text>
            </View>
        </Overlay>
    );
};

const stylesWithTheme = theme => StyleSheet.create({
    overlay: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        width: '90%',
        height: '90%',
        padding: 32,
        paddingBottom: 16
    },
    message: {
        lineHeight: 22,
        color: 'rgba(0,0,0,.6)',
        fontSize: 16
    },
    smallText: {
        color: 'rgba(0,0,0,.4)',
        fontSize: 12,
        textAlign: 'center'
    },
    button: {
        marginTop: 32,
        backgroundColor: theme.colors.c_primary_dark
    }
});

export default WarningOverlay;