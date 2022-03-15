import { View, Text } from "react-native";
import React, { Dispatch, useEffect } from "react";
import { connect } from "react-redux";
import { getBlog } from "../store/actions/blogs";
import Post from "../models/post";

export interface Props {
  route: {
    params: { id: number };
  };
  currentBlog: Post;
  getBlog: Function;
}
const PostDetails: React.FC<Props> = ({ route, getBlog, currentBlog }) => {
  useEffect(() => {
    getBlog(route.params.id);
  }, [route.params.id]);
  console.log(currentBlog, "currentBlog");
  return (
    <View>
      <Text>PostDetails</Text>
    </View>
  );
};
const mapStateToProps = (state: { Blogs: { currentBlog: {} } }) => ({
  currentBlog: state?.Blogs?.currentBlog,
});
const mapDispatchToProps = (dispatch) => {
  return {
    getBlog: (product_id: number) => dispatch(getBlog(product_id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostDetails);
