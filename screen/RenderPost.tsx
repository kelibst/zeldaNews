import {
  Image,
  Text,
  TouchableOpacity,
  View,
  Platform,
  ToastAndroid,
  TouchableNativeFeedback,
  Button,
  StyleSheet,
} from "react-native";
import React from "react";
import Post from "../models/post";
import mainStyle from "../styles/mainStyle";

export type Props = {
  item: Post;
  navigator: {
    navigate: Function;
  };
};

const RenderPost: React.FC<Props> = ({ item, navigator }) => {
  let Tocmp: any = TouchableOpacity;
  if (Platform.OS === "android" && Platform.Version >= 21) {
    Tocmp = TouchableNativeFeedback;
  }

  return (
    <View style={[styles.itemContainer]}>
      <Tocmp
        useForground
        onPress={() => {
          navigator.navigate("PostDetails", { id: item.id, title: item.title });
        }}
      >
        <View style={mainStyle.blogCont}>
          <View style={mainStyle.imgContainer}>
            <Image style={mainStyle.image} source={{ uri: item.post_img }} />
          </View>
          <TouchableOpacity style={mainStyle.detCont}>
            <View>
              <Text style={mainStyle.title}>{item?.title}</Text>
            </View>
            <View>
              <Text style={mainStyle.desc}>
                {item?.description.slice(0, 100) + "..."}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </Tocmp>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    marginBottom: 10,
    minHeight: 120,
    borderRadius: 10,
    backgroundColor: "white",
  },
});
export default RenderPost;
