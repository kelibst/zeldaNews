import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Color from "../constants/Color";
import HomeScreen from "../screen/HomeScreen";

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Houses"
        component={HomeScreen}
        options={{
          title: "Winners Library",
          headerTintColor: Color.primaryBlue,
        }}
      />
      {/* <Stack.Screen
        name="HouseDetails"
        component={HouseDetails}
        options={({ route }) => ({
          headerTintColor: Color.primary,
          title: route?.params?.title,
          headerTitle:
            route?.params?.title.length >= 25
              ? route?.params?.title.slice(0, 24) + "..."
              : route?.params?.title,
        })}
      /> */}
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
