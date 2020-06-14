import React, { useState, useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { ThemeContext, Card, Button, Icon, Text, Input, Overlay } from 'react-native-elements';
import {getTimeblocks} from './hooks';

const arrowProps = {
    color: 'white',
    size: 36,
    type: 'feather'
};

const UP = 'arrow-up';
const UPRIGHT = 'arrow-up-right';
const RIGHT = 'arrow-right';
const DOWNRIGHT = 'arrow-down-right';
const DOWN = 'arrow-down';

const Inputs = () => {
    const { theme } = useContext(ThemeContext);
    const styles = stylesWithTheme(theme);

    const [arrowActive, setArrowActive] = useState(null);
    const [carbs, setCarbs] = useState(null);
    const [open, setOpen] = useState(false);

    const [result, setResult] = useState(false);

    const [error, setError] = useState(false);

    const calculate = async () => {
        const hour = new Date().getHours();
        const timeblocks = await getTimeblocks();
        let units = 0;
        let percent = 0;
        let time = '';

        if (hour > 0 && hour < 11) {
            time = 'Breakfast';
            units = carbs / timeblocks.breakfast;
        }

        else if (hour > 11 && hour < 16) {
            time = 'Lunch';
            units = carbs / timeblocks.lunch;
        }

        else if (hour > 16 && hour < 23) {
            time = 'Dinner'
            units = carbs / timeblocks.dinner;
        }

        if (arrowActive === UP) {
            percent = '+20%';
            units += units * 0.2;
        }

        else if (arrowActive === UPRIGHT) {
            percent = '+10%';
            units += units * 0.1;
        }

        else if (arrowActive === DOWNRIGHT) {
            percent = '-10%';
            units -= units * 0.1;
        }

        else if (arrowActive === DOWN) {
            percent = '-20%'
            units -= units * 0.2;
        }

        units = Math.round(units * 2) / 2;
        setResult({
            units,
            arrow: <Icon {...arrowProps} name={arrowActive}/>,
            carbs,
            percent,
            time
        });
        setOpen(true);
    };

    return (
        <Card>
            {/* <Text style={styles.title}>Blood Glucose Level (optional)</Text>
            <Input
                inputStyle={styles.input}
                inputContainerStyle={{borderBottomWidth: 0}}
                keyboardType='decimal-pad'
                maxLength={4}
                leftIcon={{ type: 'font-awesome-5', name: 'tint', size: 36, color: theme.colors.c_dark_blue }}
                onChangeText={value => setBg(value)}
                errorStyle={{ color: 'pink' }}
                errorMessage={error ? error : null}
            /> */}

            <Text style={styles.title}>Glucose Trend Arrows</Text>
            <View style={styles.arrowBtnGroup}>
                <Button
                    buttonStyle={arrowActive === UP ? styles.activeArrowBtn : styles.arrowBtn}
                    icon={<Icon {...arrowProps} name={UP}/>}
                    onPress={() => setArrowActive(UP)}
                />
                <Button
                    buttonStyle={arrowActive === UPRIGHT ? styles.activeArrowBtn : styles.arrowBtn}
                    icon={<Icon {...arrowProps} name={UPRIGHT}/>}
                    onPress={() => setArrowActive(UPRIGHT)}
                />
                <Button
                    buttonStyle={arrowActive === RIGHT ? styles.activeArrowBtn : styles.arrowBtn}
                    icon={<Icon {...arrowProps} name={RIGHT}/>}
                    onPress={() => setArrowActive(RIGHT)}
                />
                <Button
                    buttonStyle={arrowActive === DOWNRIGHT ? styles.activeArrowBtn : styles.arrowBtn}
                    icon={<Icon {...arrowProps} name={DOWNRIGHT}/>}
                    onPress={() => setArrowActive(DOWNRIGHT)}
                />
                <Button
                    buttonStyle={arrowActive === DOWN ? styles.activeArrowBtn : styles.arrowBtn}
                    icon={<Icon {...arrowProps} name={DOWN}/>}
                    onPress={() => setArrowActive(DOWN)}
                />
            </View>

            <Text style={styles.title}>Carbohydrates</Text>
            <Input
                inputStyle={styles.input}
                inputContainerStyle={{borderBottomWidth: 0}}
                keyboardType='decimal-pad'
                maxLength={3}
                leftIcon={{ type: 'font-awesome-5', name: 'utensils', size: 36, color: theme.colors.c_dark_blue }}
                onChangeText={value => setCarbs(value)}
                errorStyle={{ color: 'pink' }}
                errorMessage={error ? error : null}
            />

            <Button buttonStyle={styles.calcBtn} title='Calculate' onPress={calculate}/>
        
            {open ?
                <Overlay isVisible={open} onBackdropPress={() => setOpen(false)}>
                    <Text>{JSON.stringify(result)}</Text>
                </Overlay>
                : null
            }
        </Card>
    );
};

const stylesWithTheme = theme => StyleSheet.create({
    title: {
        marginTop: 10,
        marginBottom: 5,
        fontSize: 20
    },
    arrowBtnGroup: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    arrowBtn: {
        width: 50,
        height: 50,
        margin: 10,
        backgroundColor: theme.colors.c_light_blue
    },
    activeArrowBtn : {
        backgroundColor: theme.colors.c_dark_blue,
        width: 65,
        height: 65,
        margin: 10
    },
    bgInput: {
        margin: 12,
        display: 'flex',
        justifyContent: 'center'
    },
    input: {
        paddingLeft: 12,
        borderWidth: 1,
        backgroundColor: 'rgba(0,0,0,.05)',
        borderColor: 'transparent',
        margin: 8,
        padding: 8,
        fontSize: 38,
        fontWeight: 'bold',
        borderRadius: 5,
        width: 100,
        textAlign: 'center',
        color: theme.colors.c_dark_blue
    },
    calcBtn: {
        marginBottom: 20,
        height: 70,
        backgroundColor: theme.colors.c_light_blue
    }
});

export default Inputs;