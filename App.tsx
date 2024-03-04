import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { Text } from './src/components/Text/Text';
import { Button } from './src/components/Button/Button';
import { ThemeProvider } from '@shopify/restyle';
import { theme } from './src/theme/theme';

function App(): React.JSX.Element {


  return (
    <ThemeProvider theme={theme}>

      <SafeAreaView>
        <Text preset="headingLarge" bold>
          Coffstack
        </Text>

        <View style={{ margin: 24 }}>
          <Button title='Entrar' />
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
