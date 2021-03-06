import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import AppHeader from "./src/containers/AppHeader";
import AppNavigator from "./src/stack/AppNavigator";
import { Container } from "native-base";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isReady: false,
    };
  }
  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return (
        <View style={styles.container}>
          <Text>Hello World!</Text>
        </View>
      );
    }

    return (
      <Container>
        <AppNavigator />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
