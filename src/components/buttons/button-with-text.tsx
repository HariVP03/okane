import { Ionicons } from "@expo/vector-icons";
import { Text, Pressable } from "native-base";
import { InterfacePressableProps } from "native-base/lib/typescript/components/primitives/Pressable/types";
import React, { FC, ReactNode } from "react";

interface ButtonWithTextProps extends InterfacePressableProps {
  text: string;
  children: ReactNode;
}

export function ButtonWithText({
  children,
  text,
  ...rest
}: ButtonWithTextProps) {
  return (
    <Pressable
      w="90px"
      borderWidth={1}
      borderColor="blueGray.300"
      alignItems="center"
      justifyContent="center"
      m={1}
      rounded="xl"
      p={2}
      {...rest}
    >
      {children}
      <Text textAlign="center" fontSize="sm">
        {text}
      </Text>
    </Pressable>
  );
}
