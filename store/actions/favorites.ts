export const ADD_TO_FAV = "ADD_TO_FAVORITE";
export const RM_FR_FAV = "RM_FRM_FAVORITE";

export const rmFrmFav = (productId: number) => {
  return { type: RM_FR_FAV, pid: productId };
};

export const addToFav = (productId: number) => {
  return { type: ADD_TO_FAV, pid: productId };
};
