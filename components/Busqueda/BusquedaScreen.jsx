import React, { useState } from "react";
import { 
  View, TextInput, StyleSheet, SafeAreaView, ImageBackground, Text 
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import SearchResultsList from "./SearchResultsList";

const BusquedaScreen = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const racha = 5; // Número de racha

  const sampleResults = [
    { id: "1", title: "Parque Nacional", description: "Un hermoso parque natural." },
    { id: "2", title: "Centro Histórico", description: "Lugares históricos y arquitectura." },
    { id: "3", title: "Playa Dorada", description: "Disfruta de la arena y el mar." },
  ];

  const handleSearch = (text) => {
    setQuery(text);
    if (text.trim().length > 0) {
      setResults(sampleResults.filter(item => item.title.toLowerCase().includes(text.toLowerCase())));
    } else {
      setResults([]);
    }
  };

  return (
    <ImageBackground 
      source={require("../../assets/ImagenBusqueda.png")} 
      style={styles.background}
    >
      <SafeAreaView style={styles.container}>
        
        {/* Contenedor con el cuadro amarillo que incluye la búsqueda y la racha */}
        <View style={styles.header}>
          <View style={styles.rachaContainer}>
            <Text style={styles.rachaText}>{racha}</Text>
            <Ionicons name="flame" size={24} color="#E65100" />
          </View>

          {/* Cuadro de búsqueda */}
          <View style={styles.searchContainer}>
            <TextInput
              placeholder="Buscar una ubicación"
              placeholderTextColor="#fff"
              style={styles.searchInput}
              value={query}
              onChangeText={handleSearch}
            />
            <Ionicons name="search" size={20} color="#fff" style={styles.searchIcon} />
          </View>
        </View>

        {/* Lista de resultados */}
        <SearchResultsList results={results} />

        {/* Menú de navegación */}
        <View style={styles.navBar}>
          <Ionicons name="home" size={30} color="#5a3e1b" />
          <Ionicons name="location" size={30} color="#5a3e1b" />
          <Ionicons name="person" size={30} color="#5a3e1b" />
          <Ionicons name="trophy" size={30} color="#5a3e1b" />
        </View>

      </SafeAreaView>
    </ImageBackground>
  );
};

export default BusquedaScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    width: "100%",
    height: "100%",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },
  header: {
    backgroundColor: "#FDD835",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
    borderRadius: 15,
    width: "90%",
    marginTop: 20,
    shadowColor: "#000",
    shadowOpacity: 0.4, // Más opacidad para una sombra más fuerte
    shadowOffset: { width: 0, height: 5 }, // Sombra abajo
    shadowRadius: 6,
    elevation: 8, // Para Android
  },
  rachaContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 10, 
  },
  rachaText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#E65100",
    marginRight: 5,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F4A261",
    padding: 12,
    borderRadius: 25,
    flex: 1,
  },
  searchInput: {
    flex: 1,
    color: "#fff",
    paddingLeft: 10,
    fontSize: 18,
  },
  searchIcon: {
    marginLeft: 10,
  },
  navBar: {
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#FDD835",
    width: "100%",
    paddingVertical: 15,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowOffset: { width: 2, height: 2 },
    elevation: 10,
  },
});
