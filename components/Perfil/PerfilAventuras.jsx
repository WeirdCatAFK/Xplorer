import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const PerfilAventuras = () => {
  return (
    <View style={styles.adventureContainer}>
      <Text style={styles.adventureTitle}>AVENTURAS DESTACADAS</Text>
      <View style={styles.adventureGrid}>
        <View style={styles.adventureCard}>
          <Image
            source={require("../../assets/ruinas.jpeg")}
            style={styles.adventureImage}
          />
          <Text style={styles.adventureText}>Expedición a las ruinas</Text>
        </View>
        <View style={styles.adventureCard}>
          <Image
            source={require("../../assets/pancita.jpg")}
            style={styles.adventureImage}
          />
          <Text style={styles.adventureText}>Pancita llena</Text>
        </View>
        <View style={styles.adventureCard}>
          <Image
            source={require("../../assets/aventura1.jpg")}
            style={styles.adventureImage}
          />
          <Text style={styles.adventureText}>Aventura relajante</Text>
        </View>
      </View>
    </View>
  );
};

export default PerfilAventuras;

const styles = StyleSheet.create({
  adventureContainer: {
    marginTop: 20,
    paddingHorizontal: 15,
  },
  adventureTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2E7D32",
    marginBottom: 10,
  },
  adventureGrid: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  adventureCard: {
    width: "30%",
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 5,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  adventureImage: {
    width: "100%",
    height: 80,
    borderRadius: 6,
    marginBottom: 5,
  },
  adventureText: {
    fontSize: 12,
    textAlign: "center",
  },
});
