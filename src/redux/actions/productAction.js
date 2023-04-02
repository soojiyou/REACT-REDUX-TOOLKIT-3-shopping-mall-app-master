import { productActions } from "../reducers/productReducer";

function getProducts(searchQuery) {
    return async (dispatch, getState) => {
        let url = `http://localhost:5000/products?q=${searchQuery}`;
        let response = await fetch(url);
        let data = await response.json();
        // dispatch({ type: "GET_PRODUCT_SUCCESS", payload: { data } });
        dispatch(productActions.getAllproducts({ data }));
    };
}


function getProductDetail(id) {
    return async (dispatch, getState) => {
        let url = `http://localhost:5000/products/${id}`;
        let response = await fetch(url);
        let data = await response.json();
        dispatch(productActions.getSingleProduct({ data }));
    }

}

export const productAction = { getProducts, getProductDetail }