import React, { useState } from "react";
import { Container, Spinner, Toast } from "native-base";
import { StyleSheet } from "react-native";
import FetchNews from "../hooks/FetchNews";
import SearchQueryInput from "../components/home/SearchQueryInput";
import NewsContainer from "../components/news/NewsContainer";

export default function Home({ navigation }) {
  const [urlDetails, setUrlDetails] = useState({
    category: "",
    query: "",
  });
  const [loading, error, results] = FetchNews(urlDetails);
  // console.log(query);

  const searchQueryNews = (query) => {
    setUrlDetails({
      category: "",
      query: query,
    });
  };

  const openNews = (item) => {
    navigation.navigate("News Details", { item });
  };

  return (
    <Container style={styles.container}>
      <SearchQueryInput searchQueryNews={searchQueryNews} loading={loading} />
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
