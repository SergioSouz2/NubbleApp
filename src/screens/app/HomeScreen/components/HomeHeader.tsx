import React from "react";
import { Box, BoxProps, Icon } from "@components";
import { useAppSafeArea } from "@hooks";
import { SimpleLogo } from "@brand";


export function HomeHeader() {

   const { top } = useAppSafeArea()

   return (
      <Box
         {...$wrapper}
         style={{ paddingTop: top }}
      >
         <SimpleLogo width={70} />
         <Box flexDirection="row" gap="s24">
            <Icon name="search" />
            <Icon name="bellOn" />
            <Icon name="comment" />
         </Box>
      </Box>
   )
}

const $wrapper: BoxProps = {
   flexDirection: "row",
   justifyContent: "space-between",
   paddingBottom: "s24",
   paddingHorizontal: "s24",
}