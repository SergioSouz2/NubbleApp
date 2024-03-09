import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { Text } from './src/components/Text/Text';
import { Button } from './src/components/Button/Button';
import { ThemeProvider } from '@shopify/restyle';
import { theme } from './src/theme/theme';
import { Box } from './src/components/Box/Box';
import { TextInput } from './src/components/TextInput/TextInput';
import { Icon } from './src/components/Icon/Icon';

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <View style={{ paddingHorizontal: 24 }}>
          <Text preset="headingLarge" bold marginBottom='s8'>
            Coffstack
          </Text>
          <Text preset="paragraphLarge" marginBottom='s40'>
            Digite seu e-mail e senha para entrar
          </Text>
          <Box marginBottom='s20'>
            <TextInput
              label='E-mail'
              errorMessage="mensagem de error"
              placeholder='Digite seu e-mail'
            />
          </Box>
          <Box >
            <TextInput
              label='Senha'
              placeholder='Digite sua senha'
              RightComponent={<Icon name='eyeOn' color='gray2' />}
            />
          </Box>
          <Text
            preset='paragraphSmall'
            color='primary'
            marginTop='s10'
            bold
          >
            Esqueci minha senha
          </Text>
          <Button title='Entrar' marginTop='s48' />
          <Button preset='outline' title='Criar uma conta' marginTop='s12' />
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
