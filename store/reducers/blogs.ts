import Data from "../../DataFile";
import Post from "../../models/post";
import { ADD_TO_FAV } from "../actions/favorites";
import { RM_FR_FAV } from "../actions/favorites";
import { ADD_BLOG, GET_BLOG } from "../actions/blogs";
import favorites from "./favorites";

const initialState = {
  BlogData: Data,
  currentBlog: {},
  favorites: [1, 3],
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
        return data.id === action.product_id;
      });
      return {
        ...state,
        currentBlog: currentGlog,
      };
    case ADD_TO_FAV:
      const newFav = [...favorites, action.product_id];
      return {
        ...state,
        favorites: newFav,
      };
  }
  return state;
};
