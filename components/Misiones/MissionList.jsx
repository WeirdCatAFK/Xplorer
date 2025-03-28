import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import MissionCard from "./MissionCard";

const missions = [
  {
    title: "Sube a la peña",
    description: "Explora la increíble peña y disfruta de la vista.",
    image: "https://via.placeholder.com/80", 
  },
  {
    title: "Cruza los arcos",
    description: "Camina sobre los antiguos arcos y disfruta del paisaje.",
    image: "https://via.placeholder.com/80",
  },
  {
    title: "Disfruta un vino",
    description: "Descubre los mejores vinos de la región.",
    image: "https://via.placeholder.com/80",
  },
];

const MissionList = () => {
  return (
    <ScrollView style={styles.container}>
      {missions.map((mission, index) => (
        <MissionCard key={index} {...mission} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: "#FFE856",
    flex: 1,
  },
});

export default MissionList;
