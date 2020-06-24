import React, { useState, useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { ThemeContext, Button, Overlay, ListItem } from 'react-native-elements';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
 
const TimePicker = () => {
    const { theme } = useContext(ThemeContext);
    const styles = stylesWithTheme(theme);

    const [timePickerVisible, setTimePickerVisible] = useState(false);
    const [overlayVisible, setOverlayVisible] = useState(false);

    const [timeblockState, setTimeblockState] = useState({
        active: null,
        from: null,
        to: null
    });

    const handleTimeblockItem = item => {
        setTimeblockState({...timeblockState, active: item});
        setTimePickerVisible(true);
    };

    const handleTimeChange = date => {
        setTimePickerVisible(false);        // Solves showing twice
        const d = new Date(date);
        const dateString = d.getHours() + ':' + d.getMinutes();
        console.warn("A date has been picked: ", date);
        setTimeblockState({...timeblockState, [timeblockState.active]: dateString});
        setTimePickerVisible(false);
    };
 
    return (
        <View>
            <Button
                buttonStyle={styles.addTimeblockBtn}
                title='Add Time Block'
                onPress={() => setOverlayVisible(true)}
            />
            <Overlay overlayStyle={styles.overlay} isVisible={overlayVisible} onBackdropPress={() => setOverlayVisible(false)}>
                <View>
                    <ListItem
                        title='From'
                        subtitle={timeblockState.from ? timeblockState.from : ''}
                        leftIcon={{name: 'clock', type: 'feather'}}
                        onPress={() => handleTimeblockItem('from')}
                        bottomDivider
                    />
                    <ListItem
                        title='To'
                        subtitle={timeblockState.to ? timeblockState.to : ''}
                        leftIcon={{name: 'clock', type: 'feather'}}
                        onPress={() => handleTimeblockItem('to')}
                        bottomDivider
                    />
                    <DateTimePickerModal
                        isVisible={timePickerVisible}
                        mode='time'
                        display='picker'
                        onConfirm={handleTimeChange}
                        minuteInterval={30}
                        onCancel={() => setTimePickerVisible(false)}
                    />
                </View>
            </Overlay>
        </View>
    );
};

const stylesWithTheme = theme => StyleSheet.create({
    overlay: {
        padding: 32,
        width: '90%',
        height: '90%'
    },
    addTimeblockBtn: {
        backgroundColor: 'rgba(0,0,0,.4)'
    },
    time: {
        backgroundColor: 'aqua'
    }
});

export default TimePicker;