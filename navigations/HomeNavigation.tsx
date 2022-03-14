import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Color from "../constants/Color";
import StackNavigation from "./StackNavigation";

const Tab = createBottomTabNavigator();
const HomeNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          switch (route.name) {
            case "Home":
              iconName = focused ? "ios-home" : "ios-home";
              break;
            case "favorites":
              iconName = focused ? "heart" : "heart-outline";
              break;
            default:
              iconName = focused ? "ios-home" : "ios-home";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#00487e",
        tabBarInactiveTintColor: "#1d86d7",
      })}
    >
      <Tab.Screen
        name="Home"
        component={StackNavigation}
        options={{ headerShown: false }}
      />
      {/* <Tab.Screen
           name="favorites"
           component={FavoriteList}
           options={{
             title: "Favorites",
             headerTintColor: Color.primary,
           }}
         /> */}
    </Tab.Navigator>
  );
};

export default HomeNavigation;
