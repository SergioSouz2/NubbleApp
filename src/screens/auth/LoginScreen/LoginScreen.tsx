import React from "react";
import { Alert } from "react-native";
import { zodResolver } from "@hookform/resolvers/zod";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { useForm } from 'react-hook-form'
import { LoginSchema, loginSchema } from "./LoginSchema";
import { RootStackParamList } from "../../../routes/Routes";

import { Text } from "../../../components/Text/Text";
import { Screen } from "../../../components/Screen/Screen";
import { Button } from "../../../components/Button/Button";
import { FormTextInput } from "../../../components/Form/FormTextInput";
import { FormPasswordInput } from "../../../components/Form/FormPasswordInput";

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'LoginScreen'>

export function LoginScreen({ navigation }: ScreenProps) {

  const { control, formState, handleSubmit } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange'
  })

  function submitForm({ email, password }:LoginSchema) {
    Alert.alert(`Email: ${email} ${`\n`} Senha: ${password}`)
  }

  function navigationToSignUpScreen() {
    navigation.navigate('SignUpScreen')
  }

  function navigateToForgotPassword() {
    navigation.navigate('ForgotPasswordScreen')
  }


  return (
    <Screen scrollable>
      <Text preset="headingLarge" bold marginBottom='s8'>
        Coffstack
      </Text>
      <Text preset="paragraphLarge" marginBottom='s40'>
        Digite seu e-mail e senha para entrar
      </Text>

      <FormTextInput
          control={control}
          name="email"
          label='E-mail'
          placeholder='Digite seu e-mail'
          boxProps={{ marginBottom: 's20' }}
      />

      <FormPasswordInput
         control={control}
         name="password"
         label='Senha'
         placeholder='Digite sua senha'
         boxProps={{ mb: 's10' }}
      
      />

      <Text
        preset='paragraphSmall'
        color='primary'
        bold
        onPress={navigateToForgotPassword}
      >
        Esqueci minha senha
      </Text>
      <Button
        disabled={!formState.isValid}
        title='Entrar'
        marginTop='s48'
        onPress={handleSubmit(submitForm)}
      />
      <Button
        preset='outline'
        title='Criar uma conta'
        marginTop='s12'
        onPress={navigationToSignUpScreen}
      />
    </Screen>
  )
}