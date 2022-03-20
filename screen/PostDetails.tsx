import { View, Text, Image } from "react-native";
import React, { Dispatch, useEffect } from "react";
import { connect } from "react-redux";
import { getBlog } from "../store/actions/blogs";
import Post from "../models/post";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import mainStyle from "../styles/mainStyle";

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
  return (
    <ScrollView>
      <TouchableOpacity>
        <Text style={mainStyle.title}>{currentBlog.title}</Text>
      </TouchableOpacity>
      <View>
        <View style={mainStyle.detimgContainer}>
          <Image
            style={mainStyle.image}
            source={{ uri: currentBlog.post_img }}
          />
        </View>
        <View>
          <TouchableOpacity>
            <Text>{currentBlog?.description}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
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
