import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { ThemeContext, Button, Icon, Text, Overlay } from 'react-native-elements';

const WarningOverlay = ({ open, onClose }) => {
    const { theme } = useContext(ThemeContext);
    const styles = stylesWithTheme(theme);

    return (
        <Overlay overlayStyle={styles.overlay} isVisible={open} onBackdropPress={onClose}>
            <View>
                <Icon style={{ margin: 8 }} color={theme.colors.c_primary_dark} size={100} type='feather' name={'alert-triangle'}/>
                <Text style={styles.message}>
                    {
`
    Libre IDC is a simple tool developed by a FreeStyle Libre system's user and enthusiast and is not an official recommendation.

    Please read a user guide carefully and check with your Health Practice if Libre IDC is right for you before using it to calculate your insulin dose.

    Libre IDC users MUST check every calculation result and MUST NOT blindly rely on the tool's results. 
`
                    }
                </Text>
                <Button buttonStyle={styles.button} title='Understood' onPress={onClose}/>
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