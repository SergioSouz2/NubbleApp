import React, { useEffect, useState } from 'react';
import { FlatList, ListRenderItemInfo, StyleProp, ViewStyle } from 'react-native';

import { PostItem, Screen } from '@components';

import { AppTabScreenProps } from '@routes';

import { Post, postService } from '@domain';

import { HomeHeader } from './components/HomeHeader';
import { HomeEmpty } from './components/HomeEmpty';

export function HomeScreen({ navigation }: AppTabScreenProps<'HomeScreen'>) {

   const [postList, setPostList] = useState<Post[]>([]);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState<boolean | null>(null);


   async function fetchData() {
      try {
         setError(null)
         setLoading(true)
         const list = await postService.getList()
         setPostList(list)
      } catch (error) {
         setError(true)
      } finally {
         setLoading(false)
      }
   }


   function renderItem({ item }: ListRenderItemInfo<Post>) {
      return <PostItem post={item} />;
   }

   useEffect(() => {
      fetchData()
   }, []);

   return (
      <Screen style={$screen}>
         <FlatList
            showsVerticalScrollIndicator={false}
            data={postList}
            keyExtractor={item => item.id}
            renderItem={renderItem}
            contentContainerStyle={{ flex: postList.length === 0 ? 1 : undefined }}
            ListHeaderComponent={<HomeHeader />}
            ListEmptyComponent={<HomeEmpty refetch={fetchData} error={error} loading={loading} />}
         />
      </Screen>
   );
}


const $screen: StyleProp<ViewStyle> = {
   paddingTop: 0,
   paddingBottom: 0,
   paddingHorizontal: 0,
   flex: 1,
}