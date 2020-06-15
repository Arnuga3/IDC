import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ThemeProvider } from 'react-native-elements';
import Home from './src/Home';

const theme = {
  colors: {
    c_secondary: 'salmon',
    c_primary_dark: 'orange',
    c_primary_light: 'gold'
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