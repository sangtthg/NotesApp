import {useNavigation, useRoute} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '../navigation';

export function useAppNavigation<T extends keyof RootStackParamList>() {
  const navigation =
    useNavigation<StackNavigationProp<RootStackParamList, T>>();
  const route = useRoute<RouteProp<RootStackParamList, T>>();

  const params = route.params as RootStackParamList[T];

  return {
    navigation,
    route,
    params,
  };
}
