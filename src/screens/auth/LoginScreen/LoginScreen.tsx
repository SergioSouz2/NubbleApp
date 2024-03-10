import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";


import { Text } from "../../../components/Text/Text";
import { Screen } from "../../../components/Screen/Screen";
import { Button } from "../../../components/Button/Button";
import { RootStackParamList } from "../../../routes/Routes";
import { TextInput } from "../../../components/TextInput/TextInput";
import { PasswordInput } from "../../../components/PasswordInput/PasswordInput";

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'LoginScreen'> 

export function LoginScreen({ navigation }:ScreenProps) {

  function navigationToSignUpScreen(){
    navigation.navigate('SignUpScreen')
  }


  return (
    <Screen scrollable>
      <Text preset="headingLarge" bold marginBottom='s8'>
        Coffstack
      </Text>
      <Text preset="paragraphLarge" marginBottom='s40'>
        Digite seu e-mail e senha para entrar
      </Text>
      <TextInput
        label='E-mail'
        errorMessage="mensagem de error"
        placeholder='Digite seu e-mail'
        boxProps={{ marginBottom: 's20' }}
      />
      <PasswordInput
        label='Senha'
        placeholder='Digite sua senha'
        boxProps={{ mb: 's10' }}
      />
      <Text
        preset='paragraphSmall'
        color='primary'
        bold
      >
        Esqueci minha senha
      </Text>
      <Button title='Entrar' marginTop='s48' />
      <Button
        preset='outline'
        title='Criar uma conta'
        marginTop='s12'
        onPress={navigationToSignUpScreen}
      />
    </Screen>
  )
}