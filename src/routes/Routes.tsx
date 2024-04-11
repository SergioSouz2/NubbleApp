import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { IconProps } from "@components";
import { 
  LoginScreen,
  SignUpScreen,
  SucessScreen,
  ForgotPasswordScreen 
} from "@screens";

export type RootStackParamList  = {
  LoginScreen: undefined;
  SignUpScreen: undefined;
  ForgotPasswordScreen: undefined;
  SucessScreen: {
    title: string;
    description: string;
    icon: Pick<IconProps, 'name' | 'color'>;
  };
  //TODO: SucessScreen: icon, title, description;
}
const Stack = createNativeStackNavigator<RootStackParamList>();

export function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginScreen" screenOptions={{
            headerShown: false,
            fullScreenGestureEnabled:true
          }}>
        <Stack.Screen name="LoginScreen" component={LoginScreen}/>
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="SucessScreen" component={SucessScreen} />
        <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  )
}