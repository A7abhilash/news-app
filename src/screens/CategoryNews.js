import React from "react";
import { Container, H1 } from "native-base";
import { StyleSheet } from "react-native";

export default function CategoryNews() {
  return (
    <Container style={styles.container}>
      <H1 style={{ color: "#eee" }}>CategoryNews</H1>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: "#121212", padding: 10 },
});
