import {Screen, Text} from '@components';
import {AppTabScreenProps} from '@routes';
import React from 'react';

export function NewPostScreen({
  navigation,
}: AppTabScreenProps<'NewPostScreen'>) {
  return (
    <Screen>
      <Text preset="headingLarge"> NewPostScreen </Text>
    </Screen>
  );
}
