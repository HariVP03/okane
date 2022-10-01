import { View, Text, Button } from "native-base";
import React, { useEffect, useState } from "react";
import { BarCodeScanner } from "expo-barcode-scanner";
import { useNavigation } from "@react-navigation/core";
import { Camera } from "expo-camera";
import { Dimensions } from "react-native";

export function ScanScreen() {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [scanned, setScanned] = useState<boolean>(false);
  const [data, setData] = useState<any>();
  const nav = useNavigation();

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleQRScanned = (props: any) => {
    nav.navigate("Amount", props);
  };

  if (hasPermission === null) {
    return (
      <View
        display="flex"
        h="full"
        w="full"
        justifyContent="center"
        alignItems="center"
      >
        <Text fontSize="lg" textAlign="center" mb={8} mx={4}>
          Requesting permission to use your camera...📸
        </Text>
      </View>
    );
  }
  if (hasPermission === false) {
    return (
      <View
        display="flex"
        h="full"
        w="full"
        justifyContent="center"
        alignItems="center"
      >
        <Text fontSize="lg" textAlign="center" mb={8} mx={4}>
          This app doesn't have the permission to use your camera...😑
        </Text>
        <Button
          onPress={() => {
            nav.navigate("Home");
          }}
        >
          Go Back
        </Button>
      </View>
    );
  }

  console.log({ hasPermission, scanned });

  return (
    <View flex={1}>
      {hasPermission && !scanned && (
        <Camera
          style={{
            flex: 1,
            width: Dimensions.get("screen").width,
          }}
          ratio={"1 / 1"}
          onBarCodeScanned={handleQRScanned}
        />
      )}
      <Text>{data}</Text>
    </View>
  );
}
