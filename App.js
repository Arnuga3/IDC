import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ThemeProvider } from 'react-native-elements';
import Home from './src/Home';

const theme = {
  colors: {
    c_red: '#dc493a',
    c_dark: '#262626',
    c_dark_blue: '#006494',
    c_light_blue: '#4392f1'
  }
};

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <View style={styles.container}>
        <Home/>
      </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: 'white',
    justifyContent: 'center',
  },
});