import React, { useState } from "react";
import { View, Text, Flatlist, TouchableOpacity } from "react-native";
import { globalStyles } from "../styles/global";

export default function Home({ navigation }) {
  const [reviews, setReviews] = useState([
    {
      title: "Zelda, Breath of Fresh Air",
      rating: 5,
      body: "orem ipsum",
      key: "1",
    },
    {
      title: "Gotta Catch Them All (again)",
      rating: 5,
      body: "orem ipsum",
      key: "2",
    },
    {
      title: 'Not So "Final" Fantasy',
      rating: 5,
      body: "orem ipsum",
      key: "3",
    },
  ]);

  return (
    <View style={globalStyles.container}>
      <Flatlist
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("ReviewDetails", item)}
          >
            <Text style={globalStyles.titleText}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
