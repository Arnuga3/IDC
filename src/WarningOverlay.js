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
User MUST:
    - Read the user manual and make sure everything is clear
    - Check with Health Practice if the Libre IDC calculator is suitable
    - Take responsibility and don't rely blindly on the tool

Libre IDC MUST be used for one or more reasons:
    - Learn how to calculate an insulin dose
    - Check the results of your calculations
    - Reduce time spent on calculations
`
                    }
                </Text>
                <Button buttonStyle={styles.button} title='Understood' onPress={handleUnderstood}/>
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