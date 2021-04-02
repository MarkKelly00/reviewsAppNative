import React from "react";
import { View, Text } from "react-native";
import { globalStyles } from "../styles/global";

export default function Home() {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Tome Screen</Text>
      <Text style={globalStyles.bodyText}>Home Screen</Text>
    </View>
  );
}