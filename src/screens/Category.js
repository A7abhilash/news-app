import React from "react";
import { Container, H1, List, ListItem, Text } from "native-base";
import { FlatList, StyleSheet } from "react-native";

export default function Category({ navigation }) {
  const categories = [
    {
      category: "business",
      text: "Business",
    },
    {
      category: "entertainment",
      text: "Entertainment",
    },
    {
      category: "sports",
      text: "Sports",
    },
    {
      category: "technology",
      text: "Technology",
    },
    {
      category: "general",
      text: "General",
    },
    {
      category: "health",
      text: "Health",
    },
    {
      category: "science",
      text: "Science",
    },
  ];

  return (
    <Container style={styles.container}>
      <H1 style={{ color: "#eee" }}>Categories</H1>
      <List>
        <FlatList
          data={categories}
          keyExtractor={categories.text}
          renderItem={({ item }) => (
            <ListItem
              onPress={() => navigation.navigate("Category News", item)}
            >
              <Text style={{ color: "#eee" }}>{item.text}</Text>
            </ListItem>
          )}
        />
      </List>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: "#121212", padding: 20 },
});
