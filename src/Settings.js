import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { ThemeContext, Card, Button, Icon, Text, Input } from 'react-native-elements';
import {getTimeblocks, setTimeblocks} from './hooks';

const TIMEBLOCKS = [
    {
        id: 1,
        title: 'Breakfast',
        from: 0,
        to: 11,
        carbsPerUnit: 0
    },
    {
        id: 2,
        title: 'Lunch',
        from: 11,
        to: 16,
        carbsPerUnit: 0
    },
    {
        id: 3,
        title: 'Dinner',
        from: 16,
        to: 23,
        carbsPerUnit: 0
    }
];

const Settings = ({ onClose }) => {
    const { theme } = useContext(ThemeContext);
    const styles = stylesWithTheme(theme);

    const [error, setError] = useState(false);

    const [dataState, setDataState] = useState(TIMEBLOCKS);
    useEffect(() => {
        getStoredTimeblocks();
    }, []);

    const getStoredTimeblocks = async () => {
        const storedTimeBlocks = await getTimeblocks();
        if (storedTimeBlocks)
            setDataState(storedTimeBlocks);
    };

    const handleSave = () => {
        if (dataState) setTimeblocks(dataState);
        onClose();
    };

    const handleChange = (tBlock, value) => {
        const tbs = dataState.map(tb => 
            tb.id === tBlock.id ? { ...tb, carbsPerUnit: value } : tb
        );
        setDataState(tbs);
    };

    return (
            <View style={styles.wrapper}>
                <Text style={styles.title}>Time Block</Text>    
                <View style={styles.subTitle}>
                    <Icon style={{marginLeft: 5, marginRight: 10}} type='font-awesome-5' name='utensils' size={18} color={theme.colors.c_primary_dark}/>
                    <Text>Carbs/Unit</Text>
                </View>
                <View>
                    {dataState ?
                        dataState.map((tb, i) =>
                            <React.Fragment key={i}>
                                <Text style={styles.timeBlock}>{tb.title}</Text>
                                <Input
                                    value={tb.carbsPerUnit.toString()}
                                    inputStyle={styles.input}
                                    inputContainerStyle={{borderBottomWidth: 0}}
                                    keyboardType='decimal-pad'
                                    maxLength={3}
                                    onChangeText={value => handleChange(tb, value)}
                                    errorStyle={{ color: 'pink' }}
                                    errorMessage={error ? error : null}
                                />
                            </React.Fragment>
                        ) : null
                    }
                    
                </View>
                <Button buttonStyle={styles.button} title='OK' onPress={handleSave}/>
            </View>
    );
};

const stylesWithTheme = theme => StyleSheet.create({
    wrapper: {
        padding: 32
    },
    title: {
        marginTop: 10,
        fontSize: 32,
        fontWeight: 'bold'
    },
    subTitle: {
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 20,
        fontSize: 20,
        color: theme.colors.c_primary_light
    },
    timeBlock: {
        marginLeft: 12,
        fontSize: 20
    },
    input: {
        paddingLeft: 12,
        borderWidth: 1,
        backgroundColor: 'rgba(0,0,0,.05)',
        borderColor: 'transparent',
        padding: 8,
        fontSize: 38,
        fontWeight: 'bold',
        borderRadius: 5,
        color: theme.colors.c_primary_dark,
        flex: 1
    },
    button: {
        marginBottom: 15,
        backgroundColor: theme.colors.c_primary_dark
    }
});

export default Settings;