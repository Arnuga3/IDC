import AsyncStorage from '@react-native-community/async-storage';

export const getTimeblocks = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem('idc_timeblocks')
        return jsonValue != null ? JSON.parse(jsonValue) : null
    } catch(e) {
        console.error(e);
    }
}

export const setTimeblocks = async timeBlocks => {
    try {
        await AsyncStorage.setItem('idc_timeblocks', JSON.stringify(timeBlocks));
    } catch(e) {
        console.error(e);
    }
}