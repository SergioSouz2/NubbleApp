import { useNavigation } from "@react-navigation/native"
import { RootStackParamList } from "@routes"

export function useResetNavigationSucess(){
  const navigation = useNavigation()
  
  function reset(params: RootStackParamList['SucessScreen']){
    navigation.reset({
      index: 1,
      routes: [
        {
          name: 'LoginScreen'
        },
        {
          name: "SucessScreen",
          params
        }
      ]
    })
  }
  
  return {reset}

}