import { FlatList } from "react-native-gesture-handler";
import { connect, useSelector } from "react-redux";
import Post from "../models/post";
import RenderPost from "./RenderPost";

const HomeScreen = () => {
  const Data = useSelector((state) => state.Blogs.BlogData);
  console.log(Data);
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

const mapStateToProps = (state: { Blogs: { BlogData: {} } }) => ({
  Blogs: state?.Blogs?.BlogData,
});

export default connect(mapStateToProps, {})(HomeScreen);
