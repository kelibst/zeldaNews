import Data from "../../DataFile";
import Post from "../../models/post";
import { ADD_BLOG, GET_BLOG } from "../actions/blogs";

const initialState = {
  BlogData: Data,
  currentBlog: {},
};

export default (
  state = initialState,
  action: { type: string; product: Post; product_id: number }
) => {
  switch (action.type) {
    case ADD_BLOG:
      const newPost = new Post(
        action.product?.id,
        action.product.title,
        action.product.description,
        action.product.post_img
      );

      return {
        ...state,
        BlogData: [...state.BlogData, newPost],
      };
    case GET_BLOG:
      const currentGlog = Data.find((data, ind) => {
        console.log(data.id, action.product_id);
        return data.id === action.product_id;
      });
      return {
        ...state,
        currentBlog: currentGlog,
      };
  }
  return state;
};
