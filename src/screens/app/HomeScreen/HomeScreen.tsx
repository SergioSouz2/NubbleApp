import React, {useEffect, useState} from 'react';
import {Dimensions, FlatList, Image, ListRenderItemInfo} from 'react-native';

import {Box, Button, PostItem, Screen, Text} from '@components';

import {AppTabScreenProps} from '@routes';

import {Post, postService} from '@domain';

export function HomeScreen({navigation}: AppTabScreenProps<'HomeScreen'>) {
   const [postList, setPostList] = useState<Post[]>([]);

   function renderItem({item}: ListRenderItemInfo<Post>) {
      return <PostItem post={item} />;
   }

   useEffect(() => {
      postService.getList().then(list => setPostList(list));
   }, []);

   return (
      <Screen>
         <FlatList
            data={postList}
            keyExtractor={item => item.id}
            renderItem={renderItem}
         />
      </Screen>
   );
}
