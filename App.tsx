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
        <Text preset="headingLarge" bold>
          Coffstack
        </Text>
        <Box style={{ margin: 24 }}>
          <Button title='Entrar' marginBottom='s14' backgroundColor='carrotSecondary' />
          <Button title='Entrar' loading />
        </Box>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
