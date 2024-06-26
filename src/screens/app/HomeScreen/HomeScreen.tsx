import React from 'react';
import { FlatList, ListRenderItemInfo, StyleProp, ViewStyle } from 'react-native';

import { PostItem, Screen } from '@components';

import { AppTabScreenProps } from '@routes';

import { Post, usePostList } from '@domain';

import { HomeHeader } from './components/HomeHeader';
import { HomeEmpty } from './components/HomeEmpty';

export function HomeScreen({ navigation }: AppTabScreenProps<'HomeScreen'>) {
   const { error, loading, postList, refetch, fetchNextPage } = usePostList()

   function renderItem({ item }: ListRenderItemInfo<Post>) {
      return <PostItem post={item} />;
   }



   return (
      <Screen style={$screen}>
         <FlatList
            showsVerticalScrollIndicator={false}
            data={postList}
            keyExtractor={item => item.id}
            renderItem={renderItem}
            onEndReached={fetchNextPage}
            onEndReachedThreshold={0.3}
            contentContainerStyle={{ flex: postList.length === 0 ? 1 : undefined }}
            ListHeaderComponent={<HomeHeader />}
            ListEmptyComponent={<HomeEmpty refetch={refetch} error={error} loading={loading} />}
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