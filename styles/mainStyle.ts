import { StyleSheet } from "react-native";

const mainStyle = StyleSheet.create({
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

export default mainStyle;
