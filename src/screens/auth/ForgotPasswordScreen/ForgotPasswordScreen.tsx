import React from "react";
import { Screen } from "../../../components/Screen/Screen";
import { Text } from "../../../components/Text/Text";
import { TextInput } from "../../../components/TextInput/TextInput";
import { Button } from "../../../components/Button/Button";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../routes/Routes";
import { useResetNavigationSucess } from "../../../hooks/useResetNavigationSucess";

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'ForgotPasswordScreen'>


export function ForgotPasswordScreen({ navigation }: ScreenProps) {

  const { reset } = useResetNavigationSucess()


  function submitForm() {

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
      <TextInput
        errorMessage="mensagem de error"
        label="E-mail"
        placeholder="Digite seu e-mail"
        boxProps={{ mb: 's20' }}
      />
      <Button onPress={submitForm} title="Recuperar senha" marginTop="s40" />

    </Screen>
  )
}