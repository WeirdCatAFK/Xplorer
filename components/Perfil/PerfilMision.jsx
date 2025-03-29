import React from "react";
import { View, Text, StyleSheet } from "react-native";

const PerfilMision = () => {
  return (
    <View style={styles.missionContainer}>
      <Text style={styles.missionTitle}>EXPLORAR MISIONES</Text>
      <View style={styles.missionCard}>
        <Text style={styles.missionText}>Descubre nuevas misiones</Text>
        <View style={styles.progressBar}>
          <View style={styles.progressFill}></View>
        </View>
        <Text style={styles.timeLeft}>Tiempo restante:</Text>
      </View>
    </View>
  );
};

export default PerfilMision;

const styles = StyleSheet.create({
  missionContainer: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  missionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFC107",
  },
  missionCard: {
    backgroundColor: "#E0E0E0", // Color gris claro
    padding: 15,
    borderRadius: 10,
    marginTop: 5,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
    elevation: 3,
  },
  missionText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#FF9800",
  },
  progressBar: {
    width: "100%",
    height: 8,
    backgroundColor: "#DDD",
    borderRadius: 4,
    marginTop: 8,
  },
  progressFill: {
    width: "50%",
    height: "100%",
    backgroundColor: "#FF9800",
    borderRadius: 4,
  },
  timeLeft: {
    fontSize: 12,
    color: "#555",
    marginTop: 5,
  },
});
