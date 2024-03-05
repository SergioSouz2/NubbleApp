import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { Text } from './src/components/Text/Text';
import { Button } from './src/components/Button/Button';
import { ThemeProvider } from '@shopify/restyle';
import { theme } from './src/theme/theme';
import { Box } from './src/components/Box/Box';

function App(): React.JSX.Element {


  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <View style={{ paddingHorizontal: 24 }}>
          <Text preset="headingLarge" bold marginBottom='s16'>
            Coffstack
          </Text>
          <Box >
            <Button title='Entrar' marginBottom='s12' backgroundColor='buttonPrimary' />
            <Button title='Entrar' loading backgroundColor='buttonPrimary' />
          </Box>
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
