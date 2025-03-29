import React from "react";
import { View, Text, StyleSheet } from "react-native";

const SearchResultCard = ({ title, description }) => {
  return (
    <View style={styles.card}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
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
    width: "90%",
    alignSelf: "center",
    elevation: 3,
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
});

export default SearchResultCard;
