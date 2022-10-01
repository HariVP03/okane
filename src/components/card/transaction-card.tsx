import { Flex, Text } from "native-base";
import React from "react";

interface TransactionCardProps {
  receiver: {
    name: string;
    vpa: string;
  };
  amount: string;
}

export function TransactionCard({ amount, receiver }: TransactionCardProps) {
  return (
    <Flex
      borderWidth={1}
      borderColor="blueGray.300"
      w="full"
      mx={4}
      justifyContent="center"
      h={100}
      rounded="lg"
      my={2}
    >
      <Flex flex={1} flexDirection="row" alignItems="center" pl={4}>
        <Text mr={1} fontSize="sm" color="gray.500">
          To
        </Text>
        <Text fontSize="md" p={0} m={0}>
          {receiver.name}
        </Text>
      </Flex>
      <Flex flexDirection="row" justifyContent="space-between" flex={1} pl={4}>
        <Flex alignItems="center" flexDirection="row">
          <Text mr={1} fontSize="sm" color="gray.500">
            UPI ID
          </Text>
          <Text fontSize="md" p={0} m={0}>
            {receiver.vpa}
          </Text>
        </Flex>
        <Flex mr={4}>
          <Text fontSize="2xl" color="danger.600">
            ₹{amount}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
