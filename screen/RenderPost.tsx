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
        <View>
          <View style={styles.imgContainer}>
            <Image style={styles.image} source={{ uri: item.post_img }} />
          </View>
          <View>
            <Text style={styles.title}>{item?.title}</Text>
          </View>
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
    minHeight: 200,
    borderRadius: 10,
    backgroundColor: "white",
  },
  shadows: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  imgContainer: {
    height: 150,
    width: "100%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: "hidden",
  },
  title: {
    fontSize: 18,
    fontFamily: "sans-serif",
    color: "black",
    fontWeight: "bold",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
export default RenderPost;
