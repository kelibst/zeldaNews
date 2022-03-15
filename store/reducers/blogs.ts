import Data from "../../DataFile";
import Post from "../../models/post";
import { ADD_BLOG } from "../actions/blogs";

const initialState = {
  BlogData: Data,
};

export default (
  state = initialState,
  action: { type: string; product: Post }
) => {
  switch (action.type) {
    case ADD_BLOG:
      const newPost = new Post(
        action.product.id,
        action.product.title,
        action.product.description,
        action.product.post_img
      );

      return {
        ...state,
        BlogData: [...state.BlogData, newPost],
      };
  }
  return state;
};
