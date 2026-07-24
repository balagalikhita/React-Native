import {
  View,
  Text,
  StyleSheet,
  Appearance,
  Platform,
  SafeAreaView,
  ScrollView,
  FlatList,
  Image,
} from "react-native";
import React from "react";
import { Colors } from "@/constants/theme";
import { MENU_ITEMS } from "@/constants/menuItems";
import MENU_IMAGES from "@/constants/menuImages";
const menu = () => {
  const colorScheme = Appearance.getColorScheme();
  const theme = colorScheme === "dark" ? Colors.dark : Colors.light;
  const styles = createStyles(theme, colorScheme);
  const Container = Platform.OS === "web" ? ScrollView : SafeAreaView;
  return (
    <Container>
      <FlatList
        data={MENU_ITEMS}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <View>
              <Text>{item.title}</Text>
              <Text>{item.description}</Text>
            </View>
            <Image source={MENU_IMAGES[item.id - 1]} />
          </View>
        )}
      />
    </Container>
  );
};

export default menu;

function createStyles(
  theme: {
    text: string;
    background: string;
    headerbackground: string;
    tint: string;
    icon: string;
    tabIconDefault: string;
    tabIconSelected: string;
  },
  colorScheme: string | null | undefined,
) {
  return StyleSheet.create({});
}
