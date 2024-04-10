import React from "react";
import { Screen } from "../../../components/Screen/Screen";
import { Text } from "../../../components/Text/Text";
import { TextInput } from "../../../components/TextInput/TextInput";
import { Button } from "../../../components/Button/Button";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../routes/Routes";
import { useResetNavigationSucess } from "../../../hooks/useResetNavigationSucess";
import { FormTextInput } from "../../../components/Form/FormTextInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { ForgotPasswordSchema, forgotPasswordSchema } from "./ForgotPasswordSchema";
import { useForm } from "react-hook-form";

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'ForgotPasswordScreen'>


export function ForgotPasswordScreen({ navigation }: ScreenProps) {
    const { reset } = useResetNavigationSucess()

    const { control, formState, handleSubmit } = useForm<ForgotPasswordSchema>({
        resolver: zodResolver(forgotPasswordSchema),
        defaultValues: {
            email: '',
        },
        mode: 'onChange'
    })

    function submitForm(values : ForgotPasswordSchema) {
        console.log(values);
        reset({
            title: `Enviamos as instruções ${'\n'}para seu e-mail `,
            description: 'Clique no link enviado no seu e-mail para recuperar sua senha',
            icon: {
                name: 'messageRound',
                color: 'success'
            }
        })
    }

    return (
        <Screen canGoBack>
            <Text preset="headingLarge" marginBottom="s16">Esqueci minha senha</Text>
            <Text preset="paragraphLarge" marginBottom="s32" >Digite seu e-mail e enviaremos as instruções para redefinições de senha</Text>

            <FormTextInput
                control={control}
                name="email"
                label='E-mail'
                placeholder='Digite seu e-mail'
                boxProps={{ marginBottom: 's20' }}
            />


            <Button
                disabled={!formState.isValid}
                onPress={handleSubmit(submitForm)}
                title="Recuperar senha"
                marginTop="s40" />

        </Screen>
    )
}