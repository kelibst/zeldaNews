import {
  Image,
  Text,
  TouchableOpacity,
  View,
  Platform,
  ToastAndroid,
  TouchableNativeFeedback,
  Button,
} from "react-native";
import React from "react";
import Post from "../models/post";

export type Props = {
  item: Post;
};

const RenderPost: React.FC<Props> = ({ item }) => {
  let Tocmp: any = TouchableOpacity;
  if (Platform.OS === "android" && Platform.Version >= 21) {
    Tocmp = TouchableNativeFeedback;
  }

  return (
    <Tocmp
      useForground
      onPress={() => {
        console.log("clicked");
      }}
    >
      <View>
        <Text>{item?.title}</Text>
      </View>
    </Tocmp>
  );
};

export default RenderPost;
