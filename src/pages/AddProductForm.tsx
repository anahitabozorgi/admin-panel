import React, { useState } from "react";

import { useDispatch, useSelector } from 'react-redux';
import {userData, productList} from '../action/UserAction';
import { RootStore } from '../Store';
import { addProductList } from "../action/UserAction";
import '../assets/css/Modal.css'


const AddProductForm: React.FC<any> = ({setIsModalOpen}) => {

    const dispatch = useDispatch();

    const [tempVariable, setTempVariable] = useState<any>(
        {
            product_id: Date.now(),
            product_name: "",
            product_price: 0,
            product_image: null
        }
    )



    // const handleAddProduct = () => {
    //     dispatch(addProductList(tempVariable));

    // };

    const [amount, setAmount] = useState<number>(1)

    const [imageUrl, setImageUrl] = useState<string | null>(null);

    const handleAddProduct = () => {
        // if(tempVariable.product_price < 0) {
        //     alert('price can not be negative');
        //     return;
        // }

        // if(tempVariable.product_name.length < 2){
        //     alert('name can not be less than 2 letters');
        //     return;
        // }

        dispatch(addProductList({ ...tempVariable, product_image: imageUrl }));
        setIsModalOpen(false);
    };

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            const reader = new FileReader();
            reader.onload = () => {
                setImageUrl(reader.result as string);
            };
            reader.readAsDataURL(event.target.files[0]);
            setTempVariable({
                ...tempVariable,
                product_image: event.target.files[0]
            });
        }
    };


    const handlePrice = (value:any) => {
        if (value<0){
            setTempVariable({...tempVariable, product_price: 0});
        }
        else{
            setTempVariable({...tempVariable, product_price: value})
        }

    }

    return(
        <>
            
            
                <form className="modalBackground">
                    <div className="modalContainer">

                        <label htmlFor="name">Product Name: </label>
                        <input
                        type="text"
                        id="name"
                        value={tempVariable.product_name}
                        onChange={(item) => setTempVariable({...tempVariable, product_name: item.target.value})}
                        />

                        <label htmlFor="price">Product Price: </label>
                        <input
                        type="number"
                        id="price"
                        value={tempVariable.product_price}
                        //onChange={(item) => setTempVariable({...tempVariable, product_price: item.target.value})}
                        onChange={(item) => handlePrice(item.target.value)}
                        />

                        <label htmlFor="image">Product Image: </label>
                        <input
                            type="file"
                            id="image"
                            accept="image/*"
                            onChange={handleImageChange}
                        />

                        {imageUrl && <img src={imageUrl} alt="Product Preview" style={{ maxWidth: '200px' }} />}
                        <button type="button" onClick={()=>{handleAddProduct();}}>Add Product</button>
                        <button onClick={() => setIsModalOpen(false)}>back</button>

                    </div>

                    
                </form>
    
        
        </>
    );
}

export default AddProductForm;