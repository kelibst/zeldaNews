import { View, Text } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Data from "../DataFile";

const HomeScreen = () => {
  return (
    <FlatList
      data={Data}
      renderItem={(itemData) => (
        <View>
          <Text>Hello guys</Text>
        </View>
      )}
    />
  );
};

export default HomeScreen;
