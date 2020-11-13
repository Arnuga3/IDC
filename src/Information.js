import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { ThemeContext, Button, Icon, Text, Input } from 'react-native-elements';

import { AdMobBanner } from 'expo-ads-admob';


const Information = ({ navigation }) => {
    const { theme } = useContext(ThemeContext);
    const styles = stylesWithTheme(theme);

    return (
        <View style={styles.container}>
            <ScrollView style={styles.wrapper}>
                <View>
                    <Text style={styles.step}>Setup</Text>
<Text>
{
`Currently, Libre IDC application provides 3 fixed time blocks:

  \u2022 Breakfast
  \u2022 Lunch
  \u2022 Dinner
                        
Before the first use, the carbs / unit values for each time block need to be set in the apllication settings.

1. Tap the 'cog' button on the main screen to go to 'Settings'.
`}
</Text>
<Icon name='settings' color='black' size={30} type='feather'></Icon>
<Text>
{`
2. Enter the numbers into the fields on the 'Settings' screen and tap 'Update' button.

Note: This information need to entered only once and can be updated later when values change over the time.`
}
</Text>
                </View>

                <View>
                    <Text style={styles.step}>How to use</Text>
                    <Text>
{`To perform a calculation user need to select a trend arrow (From the Freestyle Libre/ LibreLink), enter the amount of carbs and tap the calculate button.

The insulin dose is getting calculated by dividing the number of carbs by the number of carbs per one unit specified in the time block. Libre IDC using the current machine's time to select a time block. For example, if the number of carbs for a breakfast is 60 and the carbs / per unit for the breakfast time block is set to 20, the dose will be 3 units (60 / 20 = 3).

The selected trend arrow makes an adjustment to the dose, takes away or adds based on the percentage:
`}
                    </Text>

                    <View style={styles.arrowBlock}>
                        <Icon name='arrow-up' color='black' size={30} type='feather'></Icon>
                        <Text> Rising quickly  +20% of the main dose</Text>
                    </View>

                    <View style={styles.arrowBlock}>
                        <Icon name='arrow-up-right' color='black' size={30} type='feather'></Icon>
                        <Text> Rising  +10% of the main dose</Text>
                    </View>

                    <View style={styles.arrowBlock}>
                        <Icon name='arrow-right' color='black' size={30} type='feather'></Icon>
                        <Text> Steady  0% no adjustment</Text>
                    </View>

                    <View style={styles.arrowBlock}>
                        <Icon name='arrow-down-right' color='black' size={30} type='feather'></Icon>
                        <Text> Falling  -10% from the main dose</Text>
                    </View>

                    <View style={styles.arrowBlock}>
                        <Icon name='arrow-down' color='black' size={30} type='feather'></Icon>
                        <Text> Falling quickly  -20% from the main dose</Text>
                    </View>
                    <Text>
{`
For example, if blood glucose is Falling quickly and the dose is 3 units, the calculator will calculate the correction dose of 20% (3 * 0.2 = 0.6). The final dose will be 2.5 units (3 - 0.6 = 2.4), (~2.4 = 2.5).
`}
                    </Text>
                </View>

                <View>
                    <Text style={styles.step}>Feedback</Text>
                </View>
<Text>
{`
Libre IDC was created to solve one problem and is not yet flexible enough. You can complete the survey on https://anuga3tech.github.io/libre-idc-survey/ to share your experience and thoughts.
We strive to extend the functionality of the application and make it more flexible and useful for people managing diabetes in their day to day lifes. We know how difficult it might be sometimes.




`}
</Text>
            </ScrollView>
            
            <AdMobBanner
                bannerSize="fullBanner"
                // adUnitID=""
                servePersonalizedAds
            />

        </View>
    );
};

const stylesWithTheme = theme => StyleSheet.create({
    container: {
        height: '100%',
        overflow: 'scroll'
    },  
    wrapper: {
        padding: 50,
        display: 'flex',
        flexGrow: 1,
        flexDirection: 'column',
        backgroundColor: 'white'
    },
    step: {
        fontSize: 24,
        fontWeight: 'bold',
        color: theme.colors.c_primary_dark,
        marginTop: 25,
        marginBottom: 5
    },
    arrowBlock: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    }
});

export default Information;