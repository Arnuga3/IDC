import React, { useState, useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { ThemeContext, Card, Button, Icon, Text, Input, Overlay } from 'react-native-elements';
import {getTimeblocks} from './hooks';
import ResultOverlay from './ResultOverlay';

const UP = 'arrow-up';
const UPRIGHT = 'arrow-up-right';
const RIGHT = 'arrow-right';
const DOWNRIGHT = 'arrow-down-right';
const DOWN = 'arrow-down';

const arrows = [
    { id: 1, title: UP, percent: .2, operator: 'add' },
    { id: 2, title: UPRIGHT, percent: .1, operator: 'add' },
    { id: 3, title: RIGHT, percent: 0, operator: 'add' },
    { id: 4, title: DOWNRIGHT, percent: .1, operator: 'substract' },
    { id: 5, title: DOWN, percent: .2, operator: 'substract' }
];

const arrowProps = {
    color: 'white',
    size: 36,
    type: 'feather'
};

const Inputs = () => {
    const { theme } = useContext(ThemeContext);
    const styles = stylesWithTheme(theme);

    const [open, setOpen] = useState(false);
    const [arrow, setArrow] = useState(null);
    const [carbs, setCarbs] = useState(null);
    const [data, setData] = useState(null);

    const calculate = async () => {
        const hour = new Date().getHours();
        const timeBlocks = await getTimeblocks();
        let units = 0;
        let correction = 0;
        let result = 0;

        const currentTimeBlock = timeBlocks.filter(tb => hour >= tb.from && hour < tb.to)[0];
        if (currentTimeBlock && carbs && arrow) {
            units = carbs / currentTimeBlock.carbsPerUnit;
            correction = units * arrow.percent;
            result = Math.round((arrow.operator === 'add' ? units + correction : units - correction) * 2) / 2;

            setData({
                timeBlock: currentTimeBlock,
                arrow,
                arrowIconProps: { ...arrowProps, name: arrow.title },
                carbs,
                units,
                correction,
                result
            });
            setOpen(true);

        } else {

        }
    };

    return (
        <View style={styles.wrapper}>
            <Text style={styles.title}>Glucose Trend Arrows</Text>
            <View style={styles.arrowBtnGroup}>
                {arrows.map((a, i ) =>
                    <Button
                        key={i}
                        buttonStyle={arrow && arrow.id === a.id ? styles.activeArrowBtn : styles.arrowBtn}
                        icon={<Icon {...arrowProps} name={a.title}/>}
                        onPress={() => setArrow(a)}
                    />
                )}
            </View>
            <Text style={styles.title}>Carbohydrates</Text>
            <Input
                inputStyle={styles.input}
                inputContainerStyle={{borderBottomWidth: 0}}
                keyboardType='decimal-pad'
                maxLength={3}
                leftIcon={{ type: 'font-awesome-5', name: 'utensils', size: 36, color: 'black' }}
                onChangeText={value => setCarbs(value)}
            />

            <Button buttonStyle={styles.calcBtn} title='Calculate' onPress={calculate}/>
        
            {open ? <ResultOverlay data={data} open={open} onClose={() => setOpen(false)}/> : null }
        </View>
    );
};

const stylesWithTheme = theme => StyleSheet.create({
    wrapper: {
        padding: 32
    },
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
        backgroundColor: theme.colors.c_primary_light
    },
    activeArrowBtn : {
        backgroundColor: 'black',
        width: 65,
        height: 65,
        margin: 10
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
        backgroundColor: theme.colors.c_primary_dark
    }
});

export default Inputs;