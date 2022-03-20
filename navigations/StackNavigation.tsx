import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Color from "../constants/Color";
import HomeScreen from "../screen/HomeScreen";
import PostDetails from "../screen/PostDetails";

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Blogs"
        component={HomeScreen}
        options={{
          title: "Zelda Blog",
          headerTintColor: Color.primaryBlue,
        }}
      />
      <Stack.Screen
        name="PostDetails"
        component={PostDetails}
        options={({ route }) => ({
          headerTintColor: Color.primaryBlue,
          title: route?.params?.title,
          headerTitle:
            route?.params?.title.length >= 25
              ? route?.params?.title.slice(0, 24) + "..."
              : route?.params?.title,
        })}
      />
      {/* 
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={() => ({
          headerTintColor: Color.primary,
          title: "Profile",
        })}
      /> */}
    </Stack.Navigator>
  );
};

export default StackNavigation;
