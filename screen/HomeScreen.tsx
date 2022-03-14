import { View, Text } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import Data from "../DataFile";
import Post from "../models/post";
import RenderPost from "./RenderPost";

const HomeScreen = () => {
  return (
    <FlatList
      data={Data}
      numColumns={2}
      renderItem={(itemData) => {
        return <RenderPost item={itemData.item} />;
      }}
    />
  );
};

export default HomeScreen;
