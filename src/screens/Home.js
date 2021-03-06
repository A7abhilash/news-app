import React, { useState } from "react";
import { Container } from "native-base";
import { StyleSheet } from "react-native";
import useFetch from "./../hooks/useFetch";
import SearchQueryInput from "../components/home/SearchQueryInput";

export default function Home({ navigation }) {
  const [urlDetails, setUrlDetails] = useState({
    category: "",
    query: "",
  });
  const { loading, errror, results } = useFetch(urlDetails);
  // console.log(query);

  const searchQueryNews = (query) => {
    setUrlDetails({
      category: "",
      query,
    });
  };

  return (
    <Container style={styles.container}>
      <SearchQueryInput searchQueryNews={searchQueryNews} loading={loading} />
    </Container>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: "#121212", padding: 10 },
});
