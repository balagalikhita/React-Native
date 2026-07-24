import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";
import { Appearance } from "react-native";
import { Colors } from "@/constants/theme";
export const unstable_settings = {
  anchor: "(tabs)",
};

export default function RootLayout() {
  const colorScheme = Appearance.getColorScheme();
  const theme = colorScheme === "dark" ? Colors.dark : Colors.light;
  return (
    <>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: theme.headerbackground,
          },
          headerTintColor: theme.text,
          headerShadowVisible: false,
        }}
      >
        {/* <Stack.Screen name="(tabs)" options={{ headerShown: false }} /> */}
        {/* <Stack.Screen name="(coffee)" options={{ headerShown: false }} /> */}
        <Stack.Screen
          name="index"
          options={{ title: "Home", headerShown: false }}
        />
        <Stack.Screen
          name="contact"
          options={{
            title: "Contact Us",
            headerShown: true,
            headerTitle: "Contact Us",
          }}
        />
        <Stack.Screen
          name="menu"
          options={{
            title: "Menu",
            headerShown: true,
            headerTitle: "Coffee Shop Menu",
          }}
        />
        <Stack.Screen
          name="modal"
          options={{ presentation: "modal", title: "Modal" }}
        />
      </Stack>
      <StatusBar style="auto" />
    </>
  );
}
