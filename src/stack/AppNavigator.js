import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import CategoryStack from "./CategoryStack";
import HomeStack from "./HomeStack";

const AppNavigator = createBottomTabNavigator(
  {
    Home: HomeStack,
    Categories: CategoryStack,
  },
  {
    tabBarOptions: {
      labelStyle: {
        fontSize: 18,
        fontWeight: "600",
        paddingBottom: 12,
        flexDirection: "row",
      },
      activeBackgroundColor: "#495057",
      inactiveBackgroundColor: "#343a40",
    },
  }
);

export default createAppContainer(AppNavigator);
