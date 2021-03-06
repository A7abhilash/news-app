import React from "react";

import { createStackNavigator } from "react-navigation-stack";
import Home from "../screens/Home";
import Details from "../screens/Details";
import AppHeader from "../containers/AppHeader";

const HomeStack = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: () => {
        return {
          headerTitle: () => <AppHeader />,
          headerStyle: {
            backgroundColor: "#343a40",
          },
        };
      },
    },
    "News Details": {
      screen: Details,
    },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#343a40",
      },
      headerTintColor: "#eee",
    },
  }
);

export default HomeStack;
