import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Color from "../constants/Color";
import FavoriteList from "../screen/FavoriteList";
import UserProfile from "../screen/UserProfile";
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
            case "account":
              iconName = focused ? "person-circle" : "person-circle-outline";
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
      <Tab.Screen
        name="favorites"
        component={FavoriteList}
        options={{
          title: "Favorites Blog",
          headerTintColor: Color.primary,
        }}
      />

      <Tab.Screen
        name="account"
        component={UserProfile}
        options={{
          title: "User Section",
          headerTintColor: Color.primary,
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeNavigation;
