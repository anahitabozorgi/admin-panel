import React, { useState } from "react";

import { useDispatch, useSelector } from 'react-redux';
import {userData, productList} from '../action/UserAction';
import { RootStore } from '../Store';
import {editProduct} from "../action/UserAction";
import '../assets/css/Modal.css'


const EditProduct: React.FC<any> = ({setOpenEditing, product_id, product_name, product_price}) => {

    const [productName, setProductName] = useState<string>(product_name);
    const [productPrice, setProductPrice] = useState<number>(product_price)

    const dispatch = useDispatch();

    const handleEditProduct = () => {
       
        const updatedProduct = {
            product_id: product_id, 
            product_name: productName,
            product_price: productPrice
            
        };

        console.log(updatedProduct.product_name)
        console.log(updatedProduct.product_price)
    
       
        dispatch(editProduct(product_id, updatedProduct));
    
       
        setOpenEditing(false);
    };


    const handlePrice = (value:any) => {
        if (value<0){
            setProductPrice(0);
        }
        else{
            setProductPrice(value)

        }

    }

    
    return(
        <>
            
            
                <form className="modalBackground">
                    <div className="modalContainer">
                    <h2>{product_id}</h2>

                        <label htmlFor="name">Product Name: </label>
                        <input
                        type="text"
                        id="name"
                        value={productName}
                        onChange={(item) => setProductName(item.target.value)}
                        />

                        <label htmlFor="price">Product Price: </label>
                        <input
                        type="number"
                        id="price"
                        value={productPrice}
                        onChange={(item) => handlePrice(item.target.value)}
                        //onChange={(item) => setTempVariable({...tempVariable, product_price: item.target.value})}
                        //onChange={(item) => handlePrice(item.target.value)}
                        />

                        <label htmlFor="image">Product Image: </label>
                        <input
                            type="file"
                            id="image"
                            accept="image/*"
                            //onChange={handleImageChange}
                        />

                    
                        <button onClick={handleEditProduct} type="button">Edit Product</button>
                        <button onClick={() => setOpenEditing(false)}>back</button>

                    </div>

                    
                </form>
    
        
        </>
    );
}

export default EditProduct;