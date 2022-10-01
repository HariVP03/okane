import AsyncStorage from "@react-native-async-storage/async-storage";
import { Flex, View, Text, ScrollView, FlatList } from "native-base";
import React, { useEffect, useState } from "react";
import { TransactionCard } from "../components";

export function AccountScreen() {
  const [transactions, setTransactions] = useState<any>([]);

  useEffect(() => {
    AsyncStorage.getItem("transactions").then((res) => {
      const arr = JSON.parse(res || "[{}]") as any[];
      arr.reverse();
      setTransactions(arr);
    });
  }, []);

  return (
    <Flex flex={1}>
      <View
        display="flex"
        flexDir="row"
        my={8}
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
      <Text fontSize="lg" mt={0} mx={4} mb={2} fontWeight="semibold">
        Your Transactions
      </Text>

      <Flex flex={1} alignItems="center">
        {/* <ScrollView bg="red.200" display="flex" alignItems="center">
          {transactions?.map((e: any) => {
            return <TransactionCard {...e} />;
          })}
        </ScrollView> */}
        <FlatList
          mx={4}
          contentContainerStyle={{
            alignItems: "center",
          }}
          data={transactions}
          renderItem={({ item }: any) => <TransactionCard {...item} />}
        />
      </Flex>
    </Flex>
  );
}
