import React from "react";
import { View, Text, Button } from "react-native";
import { globalStyles } from "../styles/global";

export default function Home({ navigation }) {
  const [reviews, setReviews] = useState([
    { title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'orem ipsum', key: '1'},
    { title: 'Gotta Catch Them All (Again)', rating: 5, body: 'orem ipsum', key: '2'},
    { title: 'Not So "Final" Fantasy', rating: 5, body: 'orem ipsum', key: '3'},
  ]);

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Home Screen</Text>
      <Text style={globalStyles.bodyText}>Home Screen</Text>
      <Button title='go to review dets' onPress={pressHandler}/>
    </View>
  );
}