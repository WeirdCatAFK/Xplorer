import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import SearchResultCard from "./SearchResultCard";

const SearchResultsList = ({ results }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={results}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <SearchResultCard {...item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
});

export default SearchResultsList;
