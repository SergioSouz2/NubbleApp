import React from "react";

import { Box } from "../Box/Box";
import { Icon } from "../Icon/Icon";
import { Text } from "../Text/Text";

import { useAppSafeArea } from "../../hooks/useAppSafeArea";
interface ScreenProps {
  children: React.ReactNode;
  canGoBack?: boolean;
}

export function Screen({ children, canGoBack = false }: ScreenProps) {
  const { top } = useAppSafeArea()

  return (
    <Box
      paddingHorizontal="s24"
      style={{ paddingTop: top }}
    >
      {canGoBack &&
        <Box
          flexDirection="row"
          marginBottom="s24"
          alignItems="center"
        >
          <Icon color="primary" name="arrowLeft" />
          <Text preset="paragraphMedium" semiBold marginLeft="s8">Voltar</Text>
        </Box>
      }
      {children}
    </Box>
  )
}