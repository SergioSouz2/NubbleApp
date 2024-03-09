import React, { useState } from "react";
import { TextInput, TextInputProps } from "../TextInput/TextInput";
import { Icon } from "../Icon/Icon";

type PasswordInputProps = Omit<TextInputProps, 'RightComponent'> 

export function PasswordInput(props: PasswordInputProps) {

  const [isSecuteTextEntry, setSecuteTextEntry] = useState(true)

  function toggleSecureTextEntry() {
    setSecuteTextEntry(prev => !prev)

  }

  return (
    <TextInput
      secureTextEntry={isSecuteTextEntry}
      {...props}
      RightComponent={
        <Icon
          name={isSecuteTextEntry ? 'eyeOn' : 'eyeOff'}
          color='gray2'
          onPress={toggleSecureTextEntry}
        />
      }
    />
  )
}