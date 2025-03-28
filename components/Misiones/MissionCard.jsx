import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const MissionCard = ({ title, description, image }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        <View style={styles.bittonContainer}>
            <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Ver detalles</Text>
            </TouchableOpacity>
        </View>
    
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 15,
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    // shadowOffset: { width: 1, height: 2 },
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#E65100",
  },
  description: {
    fontSize: 12,
    color: "#666",
    marginVertical: 5,
  },
  buttonContainer: {
    alignSelf: 'flex-start',
  },
  button: {
    backgroundColor: "#000",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    width: 120, // <- Ajusta el ancho según lo necesites
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 12,
  },
});

export default MissionCard;
