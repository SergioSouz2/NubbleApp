import {Screen, Text} from '@components';
import {AppTabScreenProps} from '@routes';
import React from 'react';

export function FavoriteScreen({
  navigation,
}: AppTabScreenProps<'FavoriteScreen'>) {
  return (
    <Screen>
      <Text preset="headingLarge"> FavoriteScreen </Text>
    </Screen>
  );
}
