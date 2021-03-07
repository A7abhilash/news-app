import React from "react";
import { Container, Text, Spinner, Toast } from "native-base";
import { StyleSheet } from "react-native";
import FetchNews from "../hooks/FetchNews";
import NewsContainer from "../components/news/NewsContainer";

export default function CategoryNews({ navigation }) {
  const category = navigation.getParam("category");
  const text = navigation.getParam("text");
  const [loading, error, results] = FetchNews({
    category,
    query: "",
  });

  const openNews = (item) => {
    navigation.navigate("News Details", { item });
  };

  return (
    <Container style={styles.container}>
      <Text
        style={{
          color: "#eee",
          marginVertical: 10,
          fontSize: 30,
          textAlign: "center",
        }}
      >
        {text}
      </Text>
      {loading && <Spinner color="red" />}
      {error &&
        (() =>
          Toast.show({
            text: "Error fetching data...",
            duration: 3000,
          }))}
      {!loading && !error && results && (
        <NewsContainer data={results} openNews={openNews} />
      )}
    </Container>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: "#121212", paddingHorizontal: 10 },
});
