import React, { useEffect, useState } from 'react';
import { Dimensions, FlatList, Image, ListRenderItemInfo, StyleProp, ViewStyle } from 'react-native';

import { PostItem, Screen } from '@components';

import { AppTabScreenProps } from '@routes';

import { Post, postService } from '@domain';

import { HomeHeader } from './components/HomeHeader';

export function HomeScreen({ navigation }: AppTabScreenProps<'HomeScreen'>) {
   const [postList, setPostList] = useState<Post[]>([]);

   function renderItem({ item }: ListRenderItemInfo<Post>) {
      return <PostItem post={item} />;
   }

   useEffect(() => {
      postService.getList().then(list => setPostList(list));
   }, []);

   return (
      <Screen style={$screen}>

         <FlatList
            showsVerticalScrollIndicator={false}
            data={postList}
            keyExtractor={item => item.id}
            renderItem={renderItem}
            ListHeaderComponent={<HomeHeader />}
         />
      </Screen>
   );
}


const $screen: StyleProp<ViewStyle> = {
   paddingTop: 0,
   paddingBottom: 0,
   paddingHorizontal: 0
}