import React from "react";
import { Container, H1 } from "native-base";
import { StyleSheet } from "react-native";

export default function Category() {
  return (
    <Container style={styles.container}>
      <H1 style={{ color: "#eee" }}>Categories</H1>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: "#121212", padding: 10 },
});
