import React, {useState} from 'react';

import {Icon, TextInput, TextInputProps} from '@components';

export type PasswordInputProps = Omit<TextInputProps, 'RightComponent'>;

export function PasswordInput(props: PasswordInputProps) {
  const [isSecuteTextEntry, setSecuteTextEntry] = useState(true);

  function toggleSecureTextEntry() {
    setSecuteTextEntry(prev => !prev);
  }

  return (
    <TextInput
      secureTextEntry={isSecuteTextEntry}
      {...props}
      RightComponent={
        <Icon
          name={isSecuteTextEntry ? 'eyeOn' : 'eyeOff'}
          color="gray2"
          onPress={toggleSecureTextEntry}
        />
      }
    />
  );
}
