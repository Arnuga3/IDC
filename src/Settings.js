import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { ThemeContext, Button, Icon, Text, Input } from 'react-native-elements';
import {getTimeblocks, setTimeblocks} from './hooks';

import { AdMobBanner } from 'expo-ads-admob';

const TIMEBLOCKS = [
    {
        id: 1,
        title: 'Breakfast',
        from: 0,
        to: 11,
        carbsPerUnit: 0,
        icon: 'sunrise'
    },
    {
        id: 2,
        title: 'Lunch',
        from: 11,
        to: 15,
        carbsPerUnit: 0,
        icon: 'sun'
    },
    {
        id: 3,
        title: 'Dinner',
        from: 15,
        to: 23,
        carbsPerUnit: 0,
        icon: 'sunset'
    }
];

const Settings = ({ navigation }) => {
    const { theme } = useContext(ThemeContext);
    const styles = stylesWithTheme(theme);

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
        navigation.navigate('Calculator', { name: 'Calculator' })
    };

    const handleChange = (tBlock, value) => {
        const tbs = dataState.map(tb => 
            tb.id === tBlock.id ? { ...tb, carbsPerUnit: value } : tb
        );
        setDataState(tbs);
    };

    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <View>
                    <Text style={styles.title}>Time Block</Text>    
                    <View style={styles.subTitle}>
                        <Icon style={{marginLeft: 5, marginRight: 10}} type='font-awesome-5' name='utensils' size={18} color={theme.colors.c_primary_dark}/>
                        <Text>Carbs / Per 1 Unit</Text>
                    </View>  
                    {dataState ?
                        dataState.map((tb, i) =>
                            <React.Fragment key={i}>
                                <View style={styles.label}>
                                    <Text style={styles.timeBlock}>{tb.title}</Text>
                                    <Text style={styles.timeBlockRange}>{`${tb.from}.00 - ${tb.to}.00`}</Text>
                                </View>
                                <Input
                                    value={tb.carbsPerUnit.toString()}
                                    inputStyle={styles.input}
                                    inputContainerStyle={{borderBottomWidth: 0}}
                                    keyboardType='decimal-pad'
                                    maxLength={3}
                                    onChangeText={value => handleChange(tb, value)}
                                />
                            </React.Fragment>
                        ) : null
                    }
                </View>
                <Button buttonStyle={styles.button} title='Update' onPress={handleSave}/>
            </View>
            
            <AdMobBanner
                bannerSize="fullBanner"
                adUnitID="ca-app-pub-3501676624733022/9090256537"
                // adUnitID="ca-app-pub-3940256099942544/6300978111"
                servePersonalizedAds
            />

        </View>
    );
};

const stylesWithTheme = theme => StyleSheet.create({
    container: {
        height: '100%'
    },  
    wrapper: {
        padding: 50,
        display: 'flex',
        flexGrow: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: 'white'
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold'
    },
    subTitle: {
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 25,
        fontSize: 20,
        color: theme.colors.c_primary_light
    },
    label: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'baseline'
    },
    timeBlock: {
        marginLeft: 12,
        fontSize: 20,
        color: 'rgba(0,0,0,.5)'
    },
    timeBlockRange: {
        marginRight: 12,
        fontSize: 12,
        color: theme.colors.c_primary_dark
    },
    input: {
        paddingLeft: 12,
        borderWidth: 1,
        backgroundColor: 'rgba(0,0,0,.05)',
        borderColor: 'transparent',
        padding: 8,
        fontSize: 20,
        fontWeight: 'bold',
        borderRadius: 5,
        flex: 1
    },
    button: {
        backgroundColor: theme.colors.c_primary_dark
    }
});

export default Settings;