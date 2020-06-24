import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ThemeProvider } from 'react-native-elements';
import Navigation from './src/Navigation';

const theme = {
  colors: {
    c_secondary: 'rgba(255, 230, 0, 1)',
    c_primary_dark: '#009999',
    c_gold: 'gold'
  }
};

export default function App() {
  return (
    <ThemeProvider theme={theme}>
        <Navigation/>
    </ThemeProvider>
  );
}