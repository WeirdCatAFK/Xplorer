import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import LogroCard from "./LogroCard";

const logrosData = [
  {
    id: "1",
    title: "Peña de Bernal",
    xp: "+30xp",
    location: "Bernal, Ezequiel Montes, Querétaro, México",
    description: "Felicidades, acabas de visitar el tercer monolito más grande del mundo,imagina estuviste más de 2,500 metros sobre el nivel del mar",
    image: require("../../assets/pasaje1.jpeg"),
  },
  {
    id: "2",
    title: "Mercado de Atesanías",
    xp: "+60xp",
    location: "Centro, Tequisquiapan, Querétaro, México",
    description: "¿Te gustaron las artesanías? Felicidades por apoyar los productos hechos a mano por artesanos locales, así como dulces típicos y licores regionales.",
    image: require("../../assets/pasaje2.jpg"),
  },
];

const LogrosList = () => {
  return (
    <View style={styles.listContainer}>
      <FlatList
        data={logrosData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <LogroCard logro={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default LogrosList;

const styles = StyleSheet.create({
  listContainer: {
    paddingBottom: 20,
  },
});
