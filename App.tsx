import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from "@react-navigation/native-stack";
import { HomeScreen } from "./src/screens";
import { PayScreen } from "./src/screens/pay";
import { ScanScreen } from "./src/screens/scan";
import { AmountScreen } from "./src/screens/amount";

const Stack = createNativeStackNavigator();

const commonOptions: NativeStackNavigationOptions = {
  headerTitleAlign: "center",
};

function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        options={{
          ...commonOptions,
        }}
        component={HomeScreen}
      />

      <Stack.Screen
        name="Scan"
        component={ScanScreen}
        options={{ ...commonOptions }}
      />

      <Stack.Screen
        name="Amount"
        options={{
          ...commonOptions,
        }}
        component={AmountScreen}
      />

      <Stack.Screen
        options={{
          ...commonOptions,
        }}
        name="Pay"
        component={PayScreen}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Routes />
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
