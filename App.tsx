import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { Text } from './src/components/Text/Text';
import { Button } from './src/components/Button/Button';
import { ThemeProvider } from '@shopify/restyle';
import { theme } from './src/theme/theme';
import { Box } from './src/components/Box/Box';
import { EyeOffIcon } from './src/assets/icons/EyeOffIcon';
import { EyeOnIcon } from './src/assets/icons/EyeOnIcon';
import { Icon } from './src/components/Icon/Icon';

function App(): React.JSX.Element {


  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <View style={{ paddingHorizontal: 24 }}>
          <Text preset="headingLarge" bold marginBottom='s16'>
            Coffstack
          </Text>
          <Box >
            <Button title='Primary' marginBottom='s12' />
            <Button preset='outline' title='Outline' marginBottom='s12' />
            <Button title='Loading' loading marginBottom='s12' />
            <Button disabled title='Disabled' />

            <Icon name='eyeOn' size={50} color='backgroundContrast' />
            <Icon name='eyeOff' size={100} color='carrotSecondary' />

          </Box>
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
