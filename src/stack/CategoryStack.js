import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import Category from "../screens/Category";
import CategoryNews from "../screens/CategoryNews";
import AppHeader from "../containers/AppHeader";

const CategoryStack = createStackNavigator(
  {
    Category: {
      screen: Category,
      navigationOptions: () => {
        return {
          headerTitle: () => <AppHeader />,
          headerStyle: {
            backgroundColor: "#343a40",
          },
        };
      },
    },
    "Category News": {
      screen: CategoryNews,
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

export default CategoryStack;
