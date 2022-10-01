import AsyncStorage from "@react-native-async-storage/async-storage";
import { Flex, View, Text } from "native-base";
import React, { useEffect, useState } from "react";
import { TransactionCard } from "../components";

export function AccountScreen() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    AsyncStorage.getItem("transactions").then((res) => {
      setTransactions(JSON.parse(res || "{}"));
    });
  }, []);

  return (
    <Flex flex={1}>
      <Text
        fontSize="2xl"
        textAlign="center"
        mt={8}
        mb={4}
        fontWeight="semibold"
      >
        Your transactions
      </Text>
      <View
        display="flex"
        flexDir="row"
        mb={8}
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

      <Flex flex={1} mx={4} alignItems="center">
        {transactions?.map((e: any) => {
          return <TransactionCard {...e} />;
        })}
      </Flex>
    </Flex>
  );
}
