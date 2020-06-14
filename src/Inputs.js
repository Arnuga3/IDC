import React, { useState, useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { ThemeContext, Card, Button, Icon, Text, Input } from 'react-native-elements';

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

const Buttons = () => {
    const { theme } = useContext(ThemeContext);
    const styles = stylesWithTheme(theme);
    const [arrowActive, setArrowActive] = useState(null);
    const [error, setError] = useState(false);
    return (
        <View>
            <Card>
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

                <Text style={styles.title}>Blood Glucose Level</Text>
                <View style={styles.inputWrapper}>
                    <Input
                        inputStyle={styles.input}
                        inputContainerStyle={{borderBottomWidth: 0}}
                        keyboardType='decimal-pad'
                        maxLength={4}
                        leftIcon={{ type: 'font-awesome-5', name: 'tint', size: 36, color: theme.colors.c_dark_blue }}
                        // onChangeText={value => this.setState({ comment: value })}
                        errorStyle={{ color: 'pink' }}
                        errorMessage={error ? error : null}
                    />
                </View>

                <Text style={styles.title}>Carbohydrates</Text>
                <View style={styles.inputWrapper}>
                    <Input
                        inputStyle={styles.input}
                        inputContainerStyle={{borderBottomWidth: 0}}
                        keyboardType='decimal-pad'
                        maxLength={3}
                        leftIcon={{ type: 'font-awesome-5', name: 'utensils', size: 36, color: theme.colors.c_dark_blue }}
                        // onChangeText={value => this.setState({ comment: value })}
                        errorStyle={{ color: 'pink' }}
                        errorMessage={error ? error : null}
                    />
                </View>

                <Button buttonStyle={styles.calcBtn} title='Calculate'/>
            </Card>
        </View>
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
        justifyContent: 'space-evenly',
        margin: 12,
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
        color: theme.colors.c_dark_blue
    },
    calcBtn: {
        marginBottom: 20,
        height: 70,
        backgroundColor: theme.colors.c_light_blue
    }
});

export default Buttons;