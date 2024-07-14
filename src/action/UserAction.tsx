import { Dispatch } from 'redux';

import {
    USER_INFO,PRODUCT_INFO,ADD_PRODUCT,EDIT_PRODUCT, DELETE_PRODUCT
} from "./types";

export const userData:any = () => async (dispatch: any) => {
    try {
        const data = {
            username: "Anahita",
            fistName: "Anahita"
        }
        dispatch({
            type: USER_INFO,
            payload: data
        })
    }

    catch (e) {

    }
}

export const addProductList: any = (product:any) => async (dispatch:any) => {
    console.log("here is the product inside action", product)
    try {
        dispatch({
            type: ADD_PRODUCT,
            payload: product
        })
    }

    catch (e) {

    }

}


export const editProduct: any = (product_id: any, updatedProduct: any) => (dispatch: any) => {
    try {
        dispatch({
            type: EDIT_PRODUCT,
            payload: {
                product_id,
                updatedProduct
            }
        });

    } catch (e) {

    }
};

export const deleteProduct:any = (product_id: any,) => (dispatch:any) =>{
    try{
        dispatch({
            type: DELETE_PRODUCT,
            payload:{
                product_id,
                
            }
        }

        );
    }
    catch (e) {

    }
}

export const productList:any = () => async (dispatch: any) => {
    try {
        const data = [
            {
                product_id: 1,
                product_name: "Apple",
                product_price: 4000,
                product_image: [
                    {
                        img: "apple1.jpg"
                    },
                    {
                        img: "apple2.jpg"
                    }
                ]
            },
            {
                product_id: 2,
                product_name: "Apple",
                product_price: 2000,
            },

            {
                product_id: 3,
                product_name: "Asus",
                product_price: 400,
            },

            {
                product_id: 4,
                product_name: "LG",
                product_price: 800,
            },

            {
                product_id: 5,
                product_name: "Evvoli",
                product_price: 9000,
            }
        ]
        dispatch({
            type: PRODUCT_INFO,
            payload: data
        })
    }

    catch (e) {

    }
}