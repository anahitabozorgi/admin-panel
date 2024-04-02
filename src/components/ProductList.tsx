import React from "react";

const ProductList: React.FC<any> = ({products, setProducts}) => {


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
                {products.map((product:any)=>(
                    <tr key={product.id}>
                        <td></td>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                        <td>{product.status ? 'Active' : 'Inactive'}</td>
                        <td></td>
                        <td>
                            <button>Edit</button>
                            <button>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
        </>
    );

};

export default ProductList;