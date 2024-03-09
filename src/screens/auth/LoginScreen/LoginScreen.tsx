import React from "react";
import { SafeAreaView, View } from "react-native";

import { Icon } from "../../../components/Icon/Icon";
import { Text } from "../../../components/Text/Text";
import { Button } from "../../../components/Button/Button";
import { TextInput } from "../../../components/TextInput/TextInput";
import { Screen } from "../../../components/Screen/Screen";



export function LoginScreen() {
  return (
    <Screen>
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
      <TextInput
        label='Senha'
        placeholder='Digite sua senha'
        RightComponent={<Icon name='eyeOn' color='gray2' />}
        boxProps={{ marginTop: 's10' }}
      />
      <Text
        preset='paragraphSmall'
        color='primary'
        bold
      >
        Esqueci minha senha
      </Text>
      <Button title='Entrar' marginTop='s48' />
      <Button preset='outline' title='Criar uma conta' marginTop='s12' />
    </Screen>
  )
}