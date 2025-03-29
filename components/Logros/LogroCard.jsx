import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const LogroCard = ({ logro }) => {
  return (
    <View style={styles.card}>
      {/* Contenedor interno para la imagen y contenido */}
      <View style={styles.innerContainer}>
        {/* Imagen del logro */}
        <Image source={logro.image} style={styles.image} />

        {/* Contenido de la tarjeta */}
        <View style={styles.cardContent}>
          <Text style={styles.title}>
            {logro.title} <Text style={styles.xp}>+{logro.xp}xp</Text>
          </Text>
          <View style={styles.locationContainer}>
            <Ionicons name="location-outline" size={16} color="#444" />
            <Text style={styles.location}>{logro.location}</Text>
          </View>
          <Text style={styles.description}>{logro.description}</Text>
        </View>
      </View>
    </View>
  );
};

export default LogroCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    marginVertical: 15,
    marginHorizontal: 10,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 4,
  },
  innerContainer: {
    margin: 12,
    borderRadius: 12,
    overflow: "hidden",
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: 160,
    resizeMode: "cover",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  cardContent: {
    padding: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#2E7D32",
  },
  xp: {
    color: "#388E3C",
    fontWeight: "bold",
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 6,
  },
  location: {
    fontSize: 14,
    color: "#444",
    marginLeft: 5,
  },
  description: {
    fontSize: 14,
    color: "#666",
    marginTop: 8,
  },
});