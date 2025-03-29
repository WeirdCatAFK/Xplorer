import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import MissionCard from "./MissionCard";
import Header from "../../components/Header";

const missions = [
  {
    title: "Alcanzando a los dioses",
    description: "Explora la increíble peña y disfruta de la vista.",
    image: "https://media-public.canva.com/hHbnI/MAEtbehHbnI/1/tl.jpg", 
  },
  {
    title: "Cruza los arcos",
    description: "Camina sobre los antiguos arcos y disfruta del paisaje.",
    image: "https://media-public.canva.com/bsbU8/MAF757bsbU8/1/tl.jpg",
  },
  {
    title: "Disfruta un vino",
    description: "Descubre los mejores vinos de la región.",
    image: "https://media-public.canva.com/WwOoM/MAGL14WwOoM/1/tl.jpg",
  },
];

const MissionList = () => {
  return (
    <ScrollView>
      <Header />
      <ScrollView style={styles.container}>
        {missions.map((mission, index) => (
          <MissionCard key={index} {...mission} />
        ))}
      </ScrollView>
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
