import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import {userData, productList, addProductList, deleteProduct} from '../action/UserAction';
import { RootStore } from '../Store';
import { useEffect } from 'react';
import EditProduct from "../pages/EditProduct";
import { useParams } from "react-router-dom";

const ProductListPage: React.FC<any> = ({products, setProducts}) => {
    const dispatch = useDispatch();
    // const productlist = useSelector((state:RootStore) => state.productlist);

    // useEffect(()=> {
    //     dispatch(productList());
    // }, []);

    //const {product_id} = useParams();
    const[openModalEditing, setOpenEditing] = useState<any>(false)
    const [editingProductId, setEditingProductId] = useState<number | null>(null);
    const [editingProductName, setEditingProductName] = useState<string | null>(null)
    const [editingProductPrice, setEditingProductPrice] = useState<number | null>(null);

    const openModal = (product_id: number, product_name:string, product_price:number) => {
        setEditingProductId(product_id); // Set the product_id of the product being edited
        setEditingProductName(product_name);
        setEditingProductPrice(product_price) 
        setOpenEditing(true);
    };


    const delete_Product = (product_id: any) => {
        //const newProducts = products.filter((item:any) => item.product_id !== product_id);
        dispatch(deleteProduct(product_id))

        //setProducts(newProducts);
    };

    // const EditProduct = (product_id: number) => {
    //     console.log(product_id)
    // }

    //const existingProduct = products.filter((item:any) => item.product_id == product_id)


    return(
        <>
            <table>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Status</th>
                        <th>Permissions</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        // products !== null && products && products.length >0 && products.map((product:any)=>
                        // {
                        // return
                        // (
                        //     <tr key={product.id}>
                        //         <td><img style={{width: "100px", height: "60px"}} src={`images/${product?.product_image[0]?.img}`} alt="" /></td>
                        //         <td>{product.product_name}</td>
                        //         <td>{product.product_price}</td>
                        //         <td>{product.product_status ? 'Active' : 'Inactive'}</td>
                        //         <td></td>
                        //         <td>
                        //             <button>Edit</button>
                        //             <button>Delete</button>
                        //         </td>
                        //     </tr>
                        // )
                        // })

                        // ------------------
                        products !== null && products && products.length >0 && products.map((product:any) => {
                            console.log("show products", product)
                            return (
                                <tr key={product.id}>

                                    <td>
                                        {product.product_image && product.product_image.length > 0 &&
                                            <img style={{ width: "100px", height: "60px" }} src={`images/${product.product_image[0]?.img || ''}`} alt="" />
                                        }
                                    </td>
                                    <td>{product?.product_name}</td>
                                    <td>{product?.product_price}</td>
                                    <td>{product?.product_status ? 'Active' : 'Inactive'}</td>
                                    <td></td>
                                    <td>
                                        <button onClick={() => openModal(product.product_id, product.product_name, product.product_price)}>Edit</button>
                                        
                                        {
                                        openModalEditing && <EditProduct
                                        product_id = {editingProductId}
                                        product_name = {editingProductName}
                                        product_price = {editingProductPrice}
                                        setOpenEditing = {setOpenEditing}
                                        />                                      
                                        }
                                        <button onClick={() => delete_Product(product.product_id)}>Delete</button>
                                    </td>
                                </tr>

                            )
                            })
                    }
                </tbody>
            </table>
        </>
    );

};

export default ProductListPage;