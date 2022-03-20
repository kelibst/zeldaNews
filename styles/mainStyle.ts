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
    width: "100%",
    maxWidth: 160,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: "hidden",
  },
  title: {
    fontSize: 18,
    fontFamily: "sans-serif",
    color: "black",
    fontWeight: "bold",
    marginLeft: 10,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  blogCont: {
    flexDirection: "row",
  },
  desc: {
    padding: 10,
    maxWidth: "80%",
  },
});

export default mainStyle;
