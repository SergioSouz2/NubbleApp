import React from 'react';
import { ActivityIndicator } from 'react-native';
import { Text } from '../Text/Text';
import { TouchableOpacityBox, TouchableOpacityBoxProps } from '../Box/Box';


interface ButtonProps extends TouchableOpacityBoxProps {
   title: string;
   loading?: boolean;
}

export function Button({ title, loading, ...touchableOpacityBoxProps }: ButtonProps) {
   return (

      <TouchableOpacityBox
         paddingHorizontal='s20'
         height={50}
         justifyContent='center'
         alignItems='center'
         borderRadius='s16'
         {...touchableOpacityBoxProps}
      >
         {loading ? (<ActivityIndicator />) :
            (<Text preset='paragraphMedium' bold color='primaryContrast' >{title}</Text>)
         }
      </TouchableOpacityBox >
   );
}
