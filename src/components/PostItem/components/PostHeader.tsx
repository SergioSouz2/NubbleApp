import React from 'react';
import {Image} from 'react-native';
import {Text, Box} from '@components';
import {Post} from '@domain';

type Props = Pick<Post, 'author'>;

export function PostHeader({author}: Props) {
   return (
      <Box flexDirection="row" alignItems="center" marginBottom="s16">
         <Image
            source={{uri: author.profileURL}}
            style={{width: 32, height: 32, borderRadius: 14}}
         />
         <Text marginLeft="s12" semiBold preset="paragraphMedium">
            {author.name}
         </Text>
      </Box>
   );
}
