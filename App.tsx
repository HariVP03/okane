import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "./src/screens";
import { PayScreen } from "./src/screens/pay";
import { ScanScreen } from "./src/screens/scan";
import { AmountScreen } from "./src/screens/amount";

const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen
        name="Scan"
        component={ScanScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Amount"
        options={{
          headerBackVisible: false,
        }}
        component={AmountScreen}
      />
      <Stack.Screen name="Pay" component={PayScreen} />
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
