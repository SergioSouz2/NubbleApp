import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";


import { RootStackParamList } from "@routes";
import {
  Icon,
  Text, 
  Screen, 
  Button,
} from '@components'

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'SucessScreen'> 

export function SucessScreen({route, navigation}: ScreenProps){

  function goBackToBegin(){
    // TODO: reset 
    navigation.goBack()
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