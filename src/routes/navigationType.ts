import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {CompositeScreenProps} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {
  AppStackParamsList,
  AppTabBottomTabParamsList,
  AuthStackParamList,
} from '@routes';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends AuthStackParamList, AppStackParamsList {}
  }
}

export type AppScreenProps<RoutaName extends keyof AppStackParamsList> =
  NativeStackScreenProps<AppStackParamsList, RoutaName>;

export type AuthScreenProps<RoutaName extends keyof AuthStackParamList> =
  NativeStackScreenProps<AuthStackParamList, RoutaName>;

export type AppTabScreenProps<
  RoutaName extends keyof AppTabBottomTabParamsList,
> = CompositeScreenProps<
  BottomTabScreenProps<AppTabBottomTabParamsList, RoutaName>,
  NativeStackScreenProps<AppStackParamsList, 'AppTabNavigator'>
>;
