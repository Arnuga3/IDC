import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { ThemeContext, Button, Icon, Text, ListItem, Overlay, Divider } from 'react-native-elements';

const ResultOverlay = ({ data, open, onClose }) => {
    const { theme } = useContext(ThemeContext);
    const styles = stylesWithTheme(theme);

    const { arrowIconProps, rawResult, result, arrow, timeBlock, carbs, units, correction } = data;

    const operator = arrow.operator === 'add' ? '+' : '-';
    return (
        <Overlay overlayStyle={styles.overlay} isVisible={open} onBackdropPress={onClose}>
            <View>
                <Text style={styles.result}>{result}</Text>
                <View>
                    <ListItem
                        title={`Correction:  ${operator}${arrow.percent * 100}%`}
                        subtitle={'Trend Arrow \n' + 'BG level - ' + arrow.description}
                        leftIcon={<Icon {...arrowIconProps} backgroundColor='gold' width={55} height={55} size={55}/>}
                        bottomDivider
                    />
                    <View style={styles.row}>
                        <View style={styles.rowItem}>
                            <Text>
                                <Text style={styles.textImportant}>{`${timeBlock.carbsPerUnit}`}</Text>
                                {` Carbs/Unit`}
                            </Text>
                            <Text>{`${timeBlock.from}.00-${timeBlock.to}.00`}</Text>
                            <View style={styles.datTime}>
                                <Icon style={{ marginRight: 4 }} color='black' size={16} type='feather' name={timeBlock.icon}/>
                                <Text style={styles.textImportant}>{`${timeBlock.title}`}</Text>
                            </View>
                        </View>
                        <View style={styles.rowItem}>
                            <Text>Meal Carbs</Text>
                            <Text style={styles.textImportant}>{carbs}</Text>
                        </View>
                    </View>
                    <Divider/>
                    <View style={styles.row}>
                        <View style={styles.rowItem}>
                            <Text style={styles.textImportant}>Insulin</Text>
                            <Text style={styles.item}>{Math.round(units*100)/100}</Text>
                        </View>
                        <View style={styles.rowItem}>
                            <Text style={styles.textImportant}>{`Correction ${operator}${arrow.percent * 100}%`}</Text>
                            <Text style={styles.item}>{`${operator} ${Math.round(correction*100)/100}`}</Text>
                        </View>
                    </View>
                    <ListItem
                        topDivider
                        title={'Calculation Breakdown:'}
                        subtitle={
                            'Insulin: ' + carbs + ' / ' + timeBlock.carbsPerUnit + ' = ' + Math.round(units*100)/100 + '\n' +
                            'Correction: ' + ' ' + Math.round(units*100)/100 + ' * ' + arrow.percent + ' = ' + Math.round(correction*100)/100 + '\n' +
                            'Final Dose: ' + Math.round(units*100)/100 + ' ' + operator + ' ' + Math.round(correction*100)/100 + ' = ' + rawResult + ' (~ ' + result + ')'
                        }
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
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        width: '90%',
        height: '90%',
        padding: 32,
        paddingBottom: 16
    },
    result: {
        textAlign: 'center',
        fontSize: 84,
        fontWeight: 'bold',
        color: theme.colors.c_primary_dark
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        padding: 15,
        justifyContent: 'space-between'
    },
    rowItem: {
        textAlign: 'center',
        width: '48%'
    },
    item: {
        fontSize: 34,
        color: 'grey',
        fontWeight: 'bold'
    },
    datTime: {
        display: 'flex',
        flexDirection: 'row'
    },
    button: {
        marginTop: 32,
        backgroundColor: theme.colors.c_primary_dark
    },
    textImportant: {
        fontWeight: 'bold',
        fontSize: 14
    }
});

export default ResultOverlay;