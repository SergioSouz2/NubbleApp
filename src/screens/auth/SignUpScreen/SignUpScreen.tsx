import React from "react";
import { Text } from "../../../components/Text/Text";
import { Controller, useForm } from 'react-hook-form'


import { TextInput } from "../../../components/TextInput/TextInput";
import { Button } from "../../../components/Button/Button";

import { Screen } from "../../../components/Screen/Screen";
import { PasswordInput } from "../../../components/PasswordInput/PasswordInput";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../routes/Routes";
import { useResetNavigationSucess } from "../../../hooks/useResetNavigationSucess";


type ScreenProps = NativeStackScreenProps<RootStackParamList, 'SignUpScreen'>
type SignUpFormType = {
  username: string
  fullname: string
  email: string
  password: string
}


export function SignUpScreen({ navigation }: ScreenProps) {

  const { reset } = useResetNavigationSucess()
  const { control, formState, handleSubmit } = useForm<SignUpFormType>({
    defaultValues: {
      username: '',
      fullname: '',
      email: '',
      password: '',
    },
    mode: 'onChange'
  })

  function submitForm(formValues: SignUpFormType) {
    //TODO: Implementar
    console.log(formValues);
    
    // reset({
    //   title: 'Sua conta foi criada com sucesso!',
    //   description: 'Agora é só fazer login na nossa plataforma',
    //   icon: {
    //     name: "checkRound",
    //     color: 'success'
    //   }
    // })
  }

  return (
    <Screen canGoBack scrollable>
      <Text
        preset="headingLarge"
        marginBottom="s32"
      >
        Criar um conta
      </Text>

      <Controller
        control={control}
        name="username"
        rules={{ required: 'Username Obrigatorio' }}
        render={({ field, fieldState }) => (
          <TextInput
            value={field.value}
            onChangeText={field.onChange}
            errorMessage={fieldState.error?.message}
            label="Seu username"
            placeholder="@"
            boxProps={{ mb: 's20' }}
          />
        )}
      />

      <Controller
        control={control}
        name="fullname"
        rules={{ required: 'Nome Obrigatorio' }}
        render={({ field, fieldState }) => (
          <TextInput
            value={field.value}
            onChangeText={field.onChange}
            errorMessage={fieldState.error?.message}
            label="Nome completo"
            placeholder="Digite seu nome completo"
            boxProps={{ mb: 's20' }}
          />
        )}
      />

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
          minLength: {
            value: 6,
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
            boxProps={{ mb: 's48' }}
          />
        )}
      />
  
      <Button
        disabled={!formState.isValid}
        title='Criar uma conta'
        onPress={handleSubmit(submitForm)}
      />


    </Screen>
  )
}