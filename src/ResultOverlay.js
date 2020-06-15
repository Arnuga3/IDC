import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { ThemeContext, Card, Button, Icon, Text, ListItem, Overlay } from 'react-native-elements';

const ResultOverlay = ({ data, open, onClose }) => {
    const { theme } = useContext(ThemeContext);
    const styles = stylesWithTheme(theme);

    const { arrowIconProps, result, arrow, timeBlock, units, correction } = data;

    return (
        <Overlay overlayStyle={styles.overlay} isVisible={open} onBackdropPress={onClose}>
            <View>
                <Text style={styles.result}>{result}</Text>
                <View>
                    <ListItem
                        title={`Correction:  ${arrow.operator === 'add' ? '+' : '-'}${arrow.percent * 100}%`}
                        subtitle={`Trend Arrow`}
                        leftIcon={
                            <Icon
                                {...arrowIconProps}
                                backgroundColor='gold'
                                width={50}
                                height={50}
                                size={50}
                            />
                        }
                        bottomDivider
                    />
                    <ListItem
                        title={`${timeBlock.carbsPerUnit} Carbs/Unit`}
                        subtitle={`Time Block:  ${timeBlock.from}.00-${timeBlock.to}.00 (${timeBlock.title})`}
                        bottomDivider
                    />
                    <ListItem
                        title={`Insulin Dose: ${result} Units`}
                        subtitle={`Base units: ${units} + correction: ${correction} (${arrow.percent * 100}%)`}
                    />
                </View>
                <Button buttonStyle={styles.button} title='OK' onPress={onClose}/>
            </View>
        </Overlay>
    );
};

const stylesWithTheme = theme => StyleSheet.create({
    overlay: {
        display: 'flex',
        width: '90%',
        padding: 32
    },
    result: {
        textAlign: 'center',
        fontSize: 84,
        fontWeight: 'bold',
        color: theme.colors.c_primary_dark
    },
    button: {
        marginTop: 32,
        backgroundColor: theme.colors.c_primary_dark
    }
});

export default ResultOverlay;