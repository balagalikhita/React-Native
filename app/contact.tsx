import { View, Text, StyleSheet, Appearance, Linking } from "react-native";
import React from "react";
import { Colors } from "@/constants/theme";
import { Fontisto } from "@expo/vector-icons";

const contact = () => {
  const colorScheme = Appearance.getColorScheme();
  const theme = colorScheme === "dark" ? Colors.dark : Colors.light;
  const imgColor = colorScheme === "dark" ? "papayawhip" : "#333";
  const styles = createStyles(theme, colorScheme);
  return (
    <View style={styles.screen}>
      <View style={styles.imgContainer}>
        <Fontisto name="coffeescript" size={250} color={imgColor} />
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>Coffee Shop</Text>
        <Text style={styles.body}>
          555 Coffee Lane{"\n"}Kansas City, KS 55555-1234
        </Text>

        <Text style={styles.label}>Phone:</Text>
        <Text
          style={styles.link}
          onPress={() => Linking.openURL("tel:5555555555")}
        >
          555-555-5555
        </Text>
        <Text
          style={styles.link}
          onPress={() => Linking.openURL("sms:5555555555")}
        >
          or Click Here to Text!
        </Text>

        <Text style={styles.label}>Hours:</Text>
        <Text style={styles.body}>Open 6am to 4pm daily.</Text>
      </View>
    </View>
  );
};

export default contact;
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
  return StyleSheet.create({
    screen: {
      flex: 1,
      backgroundColor: theme.background,
    },
    topBand: {
      height: 20,
      backgroundColor: theme.headerbackground,
    },
    content: {
      paddingHorizontal: 12,
      paddingTop: 12,
    },
    title: {
      color: theme.text,
      fontSize: 26,
      fontWeight: "bold",
      lineHeight: 31,
      marginBottom: 10,
    },
    body: {
      color: theme.text,
      fontSize: 18,
      lineHeight: 27,
    },
    label: {
      color: theme.text,
      fontSize: 18,
      lineHeight: 27,
      marginTop: 12,
    },
    link: {
      color: theme.text,
      fontSize: 18,
      lineHeight: 27,
      textDecorationLine: "underline",
    },
    imgContainer: {
      backgroundColor: colorScheme === "dark" ? "#353636" : "#D0D0D0",
      height: 250,
    },
  });
}
