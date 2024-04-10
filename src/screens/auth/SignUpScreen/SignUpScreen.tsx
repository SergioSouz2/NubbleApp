import React from "react";
import { useForm } from 'react-hook-form'
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { zodResolver } from '@hookform/resolvers/zod'



import { SignUpSchema, signUpSchema } from './signUpSchema'
import { RootStackParamList } from "../../../routes/Routes";
import { useResetNavigationSucess } from "../../../hooks/useResetNavigationSucess";

import { Text } from "../../../components/Text/Text";
import { Screen } from "../../../components/Screen/Screen";
import { Button } from "../../../components/Button/Button";
import { FormTextInput } from "../../../components/Form/FormTextInput";
import { FormPasswordInput } from "../../../components/Form/FormPasswordInput";

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'SignUpScreen'>


export function SignUpScreen({ navigation }: ScreenProps) {

    const { reset } = useResetNavigationSucess()
    const { control, formState, handleSubmit } = useForm<SignUpSchema>({
        resolver: zodResolver(signUpSchema),
        defaultValues: {
            userName: '',
            fullName: '',
            email: '',
            password: '',
        },
        mode: 'onChange'
    })

    function submitForm(formValues: SignUpSchema) {
        //TODO: Implementar
        console.log(formValues);
        reset({
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


            <FormTextInput
                control={control}
                name="userName"
                label="Seu username"
                placeholder="@"
                boxProps={{ mb: 's20' }}
            />

            <FormTextInput
                control={control}
                name="fullName"
                label="Nome completo"
                placeholder="Digite seu nome completo"
                autoCapitalize="words"
                boxProps={{ mb: 's20' }}
            />

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
                boxProps={{ mb: 's48' }}

            />

            <Button
                disabled={!formState.isValid}
                title='Criar uma conta'
                onPress={handleSubmit(submitForm)}
            />
        </Screen>
    )
}