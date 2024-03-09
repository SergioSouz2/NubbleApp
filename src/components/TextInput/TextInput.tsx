import React, { useRef } from "react"
import { Pressable, TextInput as RNTextInput, TextInputProps as RNTextInputProps, TextStyle } from 'react-native';
import { Box, BoxProps } from "../Box/Box";
import { $fontFamily, $fontSizes, Text } from "../Text/Text";
import { Icon } from "../Icon/Icon";
import { useAppTheme } from "../../hooks/useAppTheme";

interface TextInputProps extends RNTextInputProps {
  label: string;
  errorMessage?: string;
  RightComponent?: React.ReactElement;
}

export function TextInput({ label, RightComponent, errorMessage, ...textInputProps }: TextInputProps) {
  const { colors } = useAppTheme();
  const inputRef = useRef<RNTextInput>(null)

  const $textInputContainer: BoxProps = {
    borderWidth: errorMessage ? 2 : 1,
    borderColor: errorMessage ? 'error' : "gray4",
    padding: "s16",
    borderRadius: "s12",
    flexDirection: "row",
  }

  function focusInput() {
    inputRef.current?.focus()
  }
  return (
    <Pressable onPress={focusInput}>
      <Box >
        <Text
          preset="paragraphMedium"
          marginBottom="s4">{label}
        </Text>
        <Box {...$textInputContainer}>
          <RNTextInput
            ref={inputRef}
            placeholderTextColor={colors.gray2}
            style={$textInputStyle}
            {...textInputProps}
          />
          {RightComponent && (
            <Box marginLeft="s16" justifyContent="center">
              {RightComponent}
            </Box>
          )}
        </Box>
        {
          errorMessage && (
            <Text preset="paragraphSmall" color="error" bold>{errorMessage}</Text>
          )
        }
      </Box>
    </Pressable>


  )
}

const $textInputStyle: TextStyle = {
  padding: 0,
  fontFamily: $fontFamily.regular,
  flexGrow: 1,
  flexShrink: 1,
  ...$fontSizes.paragraphMedium,
}

