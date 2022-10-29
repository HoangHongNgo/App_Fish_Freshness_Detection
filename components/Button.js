import * as React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { Pressable } from "native-base";
import { Entypo } from "@expo/vector-icons";

export default function Button({ title, onPress, icon, color }) {
  return (
    <Pressable onPress={onPress} style={styles.button}>
      <Entypo name={icon} size={28} color={color ? color : "black"} />
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 10,
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontWeight: "bold",
    fontSize: 16,
    color: "black",
    marginLeft: 10,
  },
});
