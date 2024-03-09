import { useTheme } from "@shopify/restyle";
import React from "react";
import { ScrollView, View } from "react-native";
import { useAppTheme } from "../../../hooks/useAppTheme";

interface Props {
  children: React.ReactNode;
  backgroundColor: string;
}


export function ScrollViewContainer({children, backgroundColor}: Props){

  return(
    <ScrollView style={{backgroundColor}} >
      {children}
    </ScrollView>
  )
}

export function ViewContainer({children,backgroundColor}: Props){
  return(
    <View style={{backgroundColor}}>
      {children}
    </View>
  )
}