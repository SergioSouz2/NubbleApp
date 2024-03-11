import React from "react";
import { Screen } from "../../../components/Screen/Screen";
import { Icon } from "../../../components/Icon/Icon";
import { Text } from "../../../components/Text/Text";
import { Button } from "../../../components/Button/Button";
import { RootStackParamList } from "../../../routes/Routes";
import { NativeStackScreenProps } from "@react-navigation/native-stack";


type ScreenProps = NativeStackScreenProps<RootStackParamList, 'SucessScreen'> 

export function SucessScreen({route}: ScreenProps){

  function goBackToBegin(){
    // TODO: reset 
  }
  return(
    <Screen>
      <Icon {...route.params.icon}/>
      <Text preset="headingLarge" marginTop="s24">{route.params.title} </Text>
      <Text preset="paragraphLarge" marginTop="s16">{route.params.description}</Text>
      <Button onPress={goBackToBegin} title="Voltar ao Início" marginTop="s40"/>
    </Screen>
  )
}