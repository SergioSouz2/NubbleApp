import React from "react";
import { Text } from "../../../components/Text/Text";


import { TextInput } from "../../../components/TextInput/TextInput";
import { Button } from "../../../components/Button/Button";

import { Screen } from "../../../components/Screen/Screen";
import { PasswordInput } from "../../../components/PasswordInput/PasswordInput";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../routes/Routes";


type ScreenProps = NativeStackScreenProps<RootStackParamList, 'SignUpScreen'> 

export function SignUpScreen({ navigation}:ScreenProps) {

  function submitForm() {
    //TODO: Implementar
    navigation.navigate('SucessScreen', {
      title: 'Sua conta foi criada com sucesso!',
      description: 'Agora é só fazer login na nossa plataforma',
      icon: {
        name: "checkRound",
        color: 'success'
      }
    })
  }

  return (
    <Screen canGoBack scrollable>
      <Text 
        preset="headingLarge"
        marginBottom="s32"
      >
        Criar um conta
      </Text>

      <TextInput
        label="Seu username"
        placeholder="@"
        boxProps={{ mb: 's20' }}
      />
      <TextInput
        label="Nome completo"
        placeholder="Digite seu nome completo"
        boxProps={{ mb: 's20' }}
        errorMessage="O nome deve contar pelo menos 2 caracteres"
      />
      <TextInput
        label="E-mail"
        placeholder="Digite seu e-mail"
        boxProps={{ mb: 's20' }}
      />

      <PasswordInput
        label='Senha'
        placeholder='Digite sua senha'
        boxProps={{ mb: 's48' }}
      />

      

      <Button
        title="Criar uma conta"
        onPress={submitForm}
      />


    </Screen>
  )
}