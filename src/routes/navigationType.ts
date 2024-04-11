import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AppStackParamsList, AuthStackParamList} from '@routes';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends AuthStackParamList, AppStackParamsList {}
  }
}

export type AppScreenProps<RoutaName extends keyof AppStackParamsList> =
  NativeStackScreenProps<AppStackParamsList, RoutaName>;

export type AuthScreenProps<RoutaName extends keyof AuthStackParamList> =
  NativeStackScreenProps<AuthStackParamList, RoutaName>;
