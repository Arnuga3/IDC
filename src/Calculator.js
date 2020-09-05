import React, { useState, useContext, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { ThemeContext, Button, Icon, Text, Input, Overlay } from 'react-native-elements';
import {getTimeblocks, getIsAgreedNote} from './hooks';
import WarningOverlay from './WarningOverlay';
import ResultOverlay from './ResultOverlay';

import { AdMobBanner } from 'expo-ads-admob';

const UP = 'arrow-up';
const UPRIGHT = 'arrow-up-right';
const RIGHT = 'arrow-right';
const DOWNRIGHT = 'arrow-down-right';
const DOWN = 'arrow-down';

const arrows = [
    { id: 1, title: UP, percent: .2, operator: 'add', description: 'Rising quickly' },
    { id: 2, title: UPRIGHT, percent: .1, operator: 'add', description: 'Rising' },
    { id: 3, title: RIGHT, percent: 0, operator: 'add', description: 'Steady' },
    { id: 4, title: DOWNRIGHT, percent: .1, operator: 'reduce', description: 'Falling' },
    { id: 5, title: DOWN, percent: .2, operator: 'reduce', description: 'Falling quickly' }
];

const arrowProps = {
    color: 'black',
    size: 36,
    type: 'feather'
};

const activeArrowProps = {
    color: 'white',
    size: 38,
    type: 'feather'
};

const Calculator = () => {
    const { theme } = useContext(ThemeContext);
    const styles = stylesWithTheme(theme);

    const [openWarning, setOpenWarning] = useState(false);
    const [open, setOpen] = useState(false);
    const [errorOpen, setErrorOpen] = useState(false);
    const [arrow, setArrow] = useState(null);
    const [carbs, setCarbs] = useState(null);
    const [data, setData] = useState(null);

    useEffect(() => {
        checkWarningReadAndAgreed();
    }, []);


    const checkWarningReadAndAgreed = async () => {
        const agreed = await getIsAgreedNote();
        if (!agreed) setOpenWarning(true);
    };

    const calculate = async () => {
        const hour = new Date().getHours();
        const timeBlocks = await getTimeblocks();
        let units = 0;
        let correction = 0;
        let rawResult = 0;
        let result = 0;

        const currentTimeBlock = timeBlocks ? timeBlocks.filter(tb => hour >= tb.from && hour <= tb.to)[0] : null;

        if (currentTimeBlock && currentTimeBlock.carbsPerUnit > 0 && carbs && arrow) {
            units = carbs / currentTimeBlock.carbsPerUnit;
            correction = units * arrow.percent;
            rawResult = Math.round((arrow.operator === 'add' ? units + correction : units - correction) * 100) / 100;
            result = Math.round((arrow.operator === 'add' ? units + correction : units - correction) * 2) / 2;

            setData({
                timeBlock: currentTimeBlock,
                arrow,
                arrowIconProps: { ...arrowProps, name: arrow.title },
                carbs,
                units,
                correction,
                rawResult,
                result
            });
            setOpen(true);

        } else {
            setErrorOpen(true);
        }
    };

    const errorMsg = () => {
        let msg = '';
        if (!arrow) msg +='Trend Arrow is not selected \n';
        if (!carbs) msg +='Carbs are missing \n';
        if (arrow && carbs) msg += 'Time block or time block\'s value is missing';
        return msg;
    ;}

    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <View>
                    <View style={styles.section}>
                        <Text style={styles.title}>GLUCOSE TREND ARROWS</Text>
                        <View style={styles.arrowBtnGroup}>
                            {arrows.map((a, i ) => {
                                const styleProps = arrow && arrow.id === a.id ? styles.activeArrowBtn : styles.arrowBtn;
                                return (
                                    <Button
                                        key={i}
                                        buttonStyle={styleProps}
                                        icon={arrow && arrow.id === a.id ? <Icon {...activeArrowProps} name={a.title}/> : <Icon {...arrowProps} name={a.title}/>}
                                        onPress={() => setArrow(a)}
                                    />
                                )
                            })}
                        </View>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.title}>MEAL CARBOHYDRATES</Text>
                        <Input
                            inputStyle={styles.input}
                            inputContainerStyle={{borderBottomWidth: 0}}
                            keyboardType='decimal-pad'
                            maxLength={3}
                            leftIcon={{ type: 'font-awesome-5', name: 'utensils', size: 36, color: 'black' }}
                            onChangeText={value => setCarbs(value)}
                        />
                    </View>
                </View>
                <Button buttonStyle={styles.calcBtn} title='Calculate' onPress={calculate}/>
            </View>
           
            <AdMobBanner
                bannerSize="fullBanner"
                adUnitID="ca-app-pub-3501676624733022/9090256537"
                servePersonalizedAds
            />

            {openWarning ? <WarningOverlay open={openWarning} onClose={() => setOpenWarning(false)} /> : null }
            {open ? <ResultOverlay data={data} open={open} onClose={() => setOpen(false)}/> : null }
            {errorOpen ?
                <Overlay isVisible={errorOpen} onBackdropPress={() => setErrorOpen(false)}>
                    <Text>{errorMsg()}</Text>
                </Overlay>
                : null
            }
        </View>
    );
};

const stylesWithTheme = theme => StyleSheet.create({
    container: {
        backgroundColor: theme.colors.c_secondary,
        height: '100%'
    },
    wrapper: {
        marginTop: 10,
        marginLeft: 8,
        marginRight: 8,
        padding: 42,
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        justifyContent: 'space-between',
        backgroundColor: 'white',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50
    },
    section: {
        height: 150
    },
    title: {
        fontSize: 16,
        color: 'rgba(0,0,0,.6)',
        textAlign: 'center'
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
        backgroundColor: theme.colors.c_secondary
    },
    activeArrowBtn : {
        backgroundColor: 'black',
        width: 65,
        height: 65,
        margin: 10
    },
    input: {
        marginLeft: 12,
        marginTop: 8,
        paddingLeft: 12,
        backgroundColor: 'rgba(0,0,0,.05)',
        padding: 8,
        fontSize: 38,
        fontWeight: 'bold',
        borderRadius: 5,
        width: 100,
        textAlign: 'center',
        color: theme.colors.c_dark_blue
    },
    buttonWrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end',
        height: '50%'
    },
    calcBtn: {
        width: '100%',
        backgroundColor: theme.colors.c_primary_dark
    }
});

export default Calculator;