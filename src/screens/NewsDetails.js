import React from "react";
import { Container, H3, Text } from "native-base";
import { Image, Linking, Button, StyleSheet, View } from "react-native";

export default function NewsDetails({ navigation }) {
  const item = navigation.getParam("item");
  return (
    <Container style={styles.container}>
      <Image source={{ uri: item.urlToImage }} style={{ height: 200 }} />
      <View style={styles.view}>
        <H3 style={styles.text}>{item.title}</H3>
      </View>
      <View style={styles.view}>
        <Text style={{ color: "white", fontSize: 18 }}>{item.description}</Text>
      </View>
      <View style={{ flexDirection: "column", ...styles.view }}>
        <Text style={{ fontSize: 14, ...styles.text }}>-{item.author}</Text>
        <Text style={{ fontSize: 14, ...styles.text }}>
          {new Date(item.publishedAt).toDateString()}
        </Text>
      </View>
      <Button title="Read More" onPress={() => Linking.openURL(item.url)} />
    </Container>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: "#121212", padding: 10, flex: 1 },
  text: { color: "white" },
  view: { marginVertical: 10 },
});
