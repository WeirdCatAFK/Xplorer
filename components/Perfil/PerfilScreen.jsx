import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import PerfilMision from "./PerfilMision";
import PerfilAventuras from "./PerfilAventuras";
import NavBar from "../Common/NavBar";

const PerfilScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.content}>
        {/* Imagen en lugar del header */}
        <Image 
          source={require("../../assets/MapacheAmarillo11.png")} 
          style={styles.profileImage} 
        />

        {/* Nombre de perfil y usuario */}
        <View style={styles.profileContainer}>
          <Text style={styles.profileName}>Cayomixtle ✏️</Text>
          <Text style={styles.profileUser}>@MeliRuiz</Text>
        </View>

        {/* Sección Explorar Misiones */}
        <PerfilMision />

        {/* Sección Aventuras Destacadas */}
        <PerfilAventuras />
      </ScrollView>

      {/* Barra de navegación */}
      <NavBar />
    </View>
  );
};

export default PerfilScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  content: {
    flex: 1,
  },
  profileImage: {
    width: "100%",
    height: 150, // Ajusta la altura según lo necesites
    resizeMode: "cover",
  },
  profileContainer: {
    paddingHorizontal: 20,
    marginTop: 10,
  },
  profileName: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
  },
  profileUser: {
    fontSize: 16,
    color: "#666",
  },
});
