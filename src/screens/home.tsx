import {
  AntDesign,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
import { View, Text } from "native-base";
import React from "react";
import { ButtonWithText } from "../components";

export const HomeScreen = () => {
  const nav = useNavigation();
  return (
    <View>
      <View
        mb={16}
        mt={8}
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDir="column"
      >
        <Text w="full" textAlign="center" fontSize="2xl" fontWeight="black">
          Hey there, Hari! 👋
        </Text>
        <View
          mt={8}
          display="flex"
          flexDir="row"
          justifyContent={"center"}
          alignItems="flex-end"
        >
          <Text color="gray.600" display="flex" pr={1} fontSize="sm" pb={1}>
            Spending left
          </Text>
          <Text
            fontWeight="semibold"
            fontFamily="mono"
            display="flex"
            color="blue.400"
            fontSize="2xl"
            pl={1}
          >
            ₹2,000/5,000
          </Text>
        </View>
      </View>
      <View
        display="flex"
        flexWrap="wrap"
        justifyContent="space-around"
        flexDir="row"
        mx={4}
      >
        <ButtonWithText onPress={() => nav.navigate("Scan")} text="Scan & Pay">
          <Ionicons name="scan" size={24} color="black" />
        </ButtonWithText>

        <ButtonWithText onPress={() => nav.navigate("Amount")} text="Account">
          <MaterialCommunityIcons
            name="piggy-bank-outline"
            size={24}
            color="black"
          />
        </ButtonWithText>

        <ButtonWithText onPress={() => nav.navigate("Scan")} text="Settings">
          <AntDesign name="setting" size={24} color="black" />
        </ButtonWithText>
      </View>
    </View>
  );
};
