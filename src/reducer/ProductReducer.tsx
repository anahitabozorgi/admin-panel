import { PRODUCT_INFO, ADD_PRODUCT, EDIT_PRODUCT, DELETE_PRODUCT } from "../action/types";
const ProductReducer = (state: any = {}, action: any) => {
  switch (action.type) {
    case PRODUCT_INFO:
      return action.payload;

    case ADD_PRODUCT:
      console.log("Entered after adding");
        // return {
        //   ...state,
        //   products:[...state.products,action.payload]
        // }  
        return [
          action.payload,...state
        ]
    
    case EDIT_PRODUCT:
      const { product_id, updatedProduct } = action.payload;
      return state.map((product:any) => 
        product.product_id === product_id ? { ...product, ...updatedProduct } : product
      );

    case DELETE_PRODUCT:
      const { product_id: deletedProduct_id} = action.payload;
      return state.filter((prodcut:any) => prodcut.product_id !== deletedProduct_id)

    default:

      return state;
  }
};
export default ProductReducer;