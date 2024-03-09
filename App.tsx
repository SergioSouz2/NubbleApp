import React from 'react';

import { ThemeProvider } from '@shopify/restyle';
import { theme } from './src/theme/theme';
import { LoginScreen } from './src/screens/auth/LoginScreen/LoginScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';
import { SignUpScreen } from './src/screens/auth/SignUpScreen/SignUpScreen';

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <StatusBar backgroundColor='transparent' barStyle={'dark-content'}/>
        <LoginScreen />
        {/* <SignUpScreen /> */}
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

export default App;