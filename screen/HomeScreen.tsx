import { FlatList } from "react-native-gesture-handler";
import { connect, useSelector } from "react-redux";
import RenderPost from "./RenderPost";

const HomeScreen = (Props: { navigation: { navigate: Function } }) => {
  const Data = useSelector(
    (state: { Blogs: { BlogData: [] } }) => state.Blogs.BlogData
  );
  return (
    <FlatList
      data={Data}
      numColumns={2}
      renderItem={(itemData) => {
        return <RenderPost item={itemData.item} navigator={Props.navigation} />;
      }}
    />
  );
};

const mapStateToProps = (state: { Blogs: { BlogData: {} } }) => ({
  Blogs: state?.Blogs?.BlogData,
});

export default connect(mapStateToProps, {})(HomeScreen);
