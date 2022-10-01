import { View, Text } from "native-base";
import { Linking } from "react-native";
import React, { useEffect } from "react";

export function PayScreen({ route: { params } }: any) {
  const handlePay = () => {
    Linking.openURL(`${params.data}&am=100`);
  };

  useEffect(() => {
    handlePay();
  }, []);

  return (
    <View>
      <Text
        onPress={() => {
          handlePay();
        }}
      >
        {JSON.stringify(params)}
      </Text>
    </View>
  );
}
