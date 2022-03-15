import Post from "../../models/post";

export const ADD_BLOG = "ADD_BLOG";
export const RM_BLOG = "RM_BLOG";

export const addBlog = (product: Post) => {
  return { type: ADD_BLOG, product: product };
};

export const rmBlog = (product_Id: number) => {
  return { type: RM_BLOG, product_id: product_Id };
};
