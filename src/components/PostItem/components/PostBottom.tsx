import React from "react";
import { Box, Text } from "@components";
import { Post } from "@domain";


type Props = Pick<Post, 'author' | 'text' | 'commentCount'>

export function PostBottom({ author, text, commentCount }: Props) {

   const commentText = getCommentText(commentCount)

   return (
      <Box marginTop="s16">
         <Text preset="paragraphMedium" bold>{author.userName}</Text>
         <Text preset="paragraphMedium" color="gray1">{text}</Text>
         {commentText && (
            <Text marginTop="s8" preset="paragraphSmall" color="primary" bold>{commentText}</Text>
         )}
      </Box>
   )
}


function getCommentText(commentCount: number): string | null {
   if (commentCount === 0) {
      return null
   } else if (commentCount === 1) {
      return 'ver comentário'
   } else {
      return `ver ${commentCount} comentários`
   }
}