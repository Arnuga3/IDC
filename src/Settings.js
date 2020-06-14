import React, { useState, useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { ThemeContext, Card, Button, Icon, Text, Input } from 'react-native-elements';
import {getTimeblocks,setTimeblocks} from './hooks';

const Settings = ({ onClose }) => {
    const { theme } = useContext(ThemeContext);
    const styles = stylesWithTheme(theme);

    const [error, setError] = useState(false);
    const [timeBlocks, setTimeBlocks] = useState(null);
    
    useEffect(async() => {
        const storedTimeBlocks = await getTimeblocks();
        setTimeblocks(storedTimeBlocks);
    }, []);

    const handleSave = async () => {
        try {
            // if (timeBlocks) await AsyncStorage.setItem('idc_timeblocks', JSON.stringify(timeBlocks))
        } catch (e) {
            // saving error
        }
    };

    return (
        <View>
            <Card>
                <Text style={styles.title}>Time Block</Text>    
                <View style={styles.subTitle}>
                    <Icon style={{marginLeft: 5, marginRight: 10}} type='font-awesome-5' name='utensils' size={18} color={theme.colors.c_dark_blue}/>
                    <Text>Carbs/Unit</Text>
                </View>
                <View>
                    <Text style={styles.timeBlock}>Breakfast</Text>
                    <Input
                        inputStyle={styles.input}
                        inputContainerStyle={{borderBottomWidth: 0}}
                        keyboardType='decimal-pad'
                        maxLength={3}
                        // onChangeText={value => this.setState({ comment: value })}
                        errorStyle={{ color: 'pink' }}
                        errorMessage={error ? error : null}
                    />
                </View>
                <View>
                    <Text style={styles.timeBlock}>Lunch</Text>
                    <Input
                        inputStyle={styles.input}
                        inputContainerStyle={{borderBottomWidth: 0}}
                        keyboardType='decimal-pad'
                        maxLength={3}
                        // onChangeText={value => this.setState({ comment: value })}
                        errorStyle={{ color: 'pink' }}
                        errorMessage={error ? error : null}
                    />
                </View>
                <View>
                    <Text style={styles.timeBlock}>Dinner</Text>
                    <Input
                        inputStyle={styles.input}
                        inputContainerStyle={{borderBottomWidth: 0}}
                        keyboardType='decimal-pad'
                        maxLength={3}
                        // onChangeText={value => this.setState({ comment: value })}
                        errorStyle={{ color: 'pink' }}
                        errorMessage={error ? error : null}
                    />
                </View>
                <Button buttonStyle={styles.button} type='outline' title='Cancel' onPress={onClose}/>
                <Button buttonStyle={styles.button} title='Save' onPress={onClose}/>
            </Card>
        </View>
    );
};

const stylesWithTheme = theme => StyleSheet.create({
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
        color: theme.colors.c_light_blue
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
        color: theme.colors.c_dark_blue,
        flex: 1
    },
    button: {
        marginBottom: 15
    }
});

export default Settings;