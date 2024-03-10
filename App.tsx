import React from 'react';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from '@shopify/restyle';
import { Routes } from './src/routes/Routes';
import { theme } from './src/theme/theme';
import { StatusBar } from 'react-native';

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <StatusBar backgroundColor='transparent' barStyle={'dark-content'}/>
        <Routes/>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

export default App;