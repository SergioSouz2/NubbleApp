import React from "react";
import { Controller, useForm } from 'react-hook-form'
import { NativeStackScreenProps } from "@react-navigation/native-stack";


import { Text } from "../../../components/Text/Text";
import { Screen } from "../../../components/Screen/Screen";
import { Button } from "../../../components/Button/Button";
import { RootStackParamList } from "../../../routes/Routes";
import { TextInput } from "../../../components/TextInput/TextInput";
import { PasswordInput } from "../../../components/PasswordInput/PasswordInput";
import { Alert } from "react-native";

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'LoginScreen'>
type LoginFormType = {
  email: string
  password: string
}

export function LoginScreen({ navigation }: ScreenProps) {

  const { control, formState, handleSubmit } = useForm<LoginFormType>({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange'
  })

  function submitForm({ email, password }:LoginFormType) {
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

      <Controller
        control={control}
        name="email"
        rules={{
          required: 'E-mail obrigatório',
          pattern: {
            value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
            message: 'E-mail inválido',
          }
        }}
        render={({ field, fieldState }) => (
          <TextInput
            value={field.value}
            onChangeText={field.onChange}
            errorMessage={fieldState.error?.message}
            label='E-mail'
            placeholder='Digite seu e-mail'
            boxProps={{ marginBottom: 's20' }}
          />
        )}
      />

      <Controller
        control={control}
        name="password"
        rules={{
          required: 'Senha obrigatório',
          minLength:{
            value:6,
            message: 'Senha deve ter no mínimo 6 caracteres'
          }
        }}
        render={({ field, fieldState }) => (
          <PasswordInput
            errorMessage={fieldState.error?.message}
            onChangeText={field.onChange}
            value={field.value}
            label='Senha'
            placeholder='Digite sua senha'
            boxProps={{ mb: 's10' }}
          />
        )}
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