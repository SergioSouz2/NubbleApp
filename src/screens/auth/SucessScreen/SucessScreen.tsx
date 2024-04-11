import React from 'react';

import {Icon, Text, Screen, Button} from '@components';
import {AuthScreenProps} from '@routes';

export function SucessScreen({
  route,
  navigation,
}: AuthScreenProps<'SucessScreen'>) {
  function goBackToBegin() {
    // TODO: reset
    navigation.goBack();
  }
  return (
    <Screen>
      <Icon {...route.params.icon} />
      <Text preset="headingLarge" marginTop="s24">
        {route.params.title}{' '}
      </Text>
      <Text preset="paragraphLarge" marginTop="s16">
        {route.params.description}
      </Text>
      <Button
        onPress={goBackToBegin}
        title="Voltar ao Início"
        marginTop="s40"
      />
    </Screen>
  );
}
