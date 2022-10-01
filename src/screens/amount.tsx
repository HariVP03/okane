import { useNavigation } from "@react-navigation/native";
import { View, Text, Input, Button } from "native-base";
import React, { useState } from "react";
import { Linking } from "react-native";
import { parseUpiString } from "../helpers/upi-string";

export function AmountScreen({ route: { params } }: any) {
  const [amount, setAmount] = useState("");
  const nav = useNavigation();

  const onSubmit = () => {
    const upi = parseUpiString(params.data, parseInt(amount));
    Linking.openURL(upi).then((res) => {
      console.log({ res });
      nav.navigate("Success");
    });
  };

  return (
    <View flex={1} display="flex" justifyContent="center" alignItems="center">
      <Input
        minW={200}
        maxW="full"
        variant="underlined"
        minH={75}
        borderColor="blue.300"
        keyboardType="number-pad"
        fontSize="4xl"
        mt={-100}
        autoFocus
        textAlign="center"
        value={amount}
        onChangeText={(val) => {
          setAmount(val);
        }}
      />
      <Button
        mt={16}
        display="flex"
        justifyContent="center"
        alignItems="center"
        w={200}
        bg="blue.500"
        disabled={!amount}
        onPress={onSubmit}
      >
        <Text fontWeight="semibold" fontSize="xl" color="white" m={0} p={0}>
          Pay {amount && `₹${amount}`}
        </Text>
      </Button>
    </View>
  );
}
