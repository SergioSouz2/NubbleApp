import {Box, Icon, IconProps, Text, TouchableOpacityBox} from '@components';
import {Post} from '@domain';
import React from 'react';
import {Marker} from 'react-native-svg';

type Props = Pick<Post, 'commentCount' | 'reactionCount' | 'favoriteCount'>;

export function PostActions({
   commentCount,
   favoriteCount,
   reactionCount,
}: Props) {
   function likePost() {
      // TODO: Implement like Post
   }

   function navigateToComment() {
      // TODO: Implement navigate To Comment
   }

   function FavoritePost() {
      // TODO: Implement FavoritePost
   }

   return (
      <Box flexDirection="row" marginTop="s16">
         <Item
            marked
            onPress={likePost}
            text={reactionCount}
            icon={{
               default: 'heart',
               marked: 'heartFill',
            }}
         />

         <Item
            onPress={navigateToComment}
            text={commentCount}
            icon={{
               default: 'comment',
               marked: 'comment',
            }}
         />

         <Item
            onPress={FavoritePost}
            text={favoriteCount}
            icon={{
               default: 'bookmark',
               marked: 'bookmarkFill',
            }}
         />
      </Box>
   );
}

interface ItemProps {
   onPress: () => void;
   text: number;
   marked?: boolean;
   icon: {
      default: IconProps['name'];
      marked: IconProps['name'];
   };
}

function Item({icon, onPress, text, marked = false}: ItemProps) {
   return (
      <TouchableOpacityBox
         flexDirection="row"
         alignItems="center"
         marginRight="s24"
         onPress={onPress}>
         <Icon
            color={marked ? 'market' : 'backgroundContrast'}
            name={marked ? icon.marked : icon.default}
         />
         {text > 0 && (
            <Text bold preset="paragraphSmall" marginLeft="s4">
               {text}
            </Text>
         )}
      </TouchableOpacityBox>
   );
}
