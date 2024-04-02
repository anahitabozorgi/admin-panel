import React, { useState } from "react";
import { Link } from "react-router-dom";

const AddProductForm: React.FC<any> = ({products, setProducts}) => {

    const [name, setName] = useState<string>('');
    const [price, setPrice] = useState<number>(0);
    const [status, setStatus] = useState<boolean>(false)



    const handleAddProduct = () => {
        setProducts([{
            id:Date.now(),
            name: name,
            price: price,
            status: status
        },

        ...products
    ])
    };

    return(
        <>
            <Link to={"/"}><button>back</button></Link>
            <h2>Add Product</h2>
                <form>
                    <div>
                        <label htmlFor="name">Product Name: </label>
                        <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(item) => setName(item.target.value)}
                        />

                        <label htmlFor="price">Product Price: </label>
                        <input
                        type="number"
                        id="price"
                        value={price}
                        onChange={(item) => setPrice(parseInt(item.target.value))}
                        />

                        <label htmlFor="productStatus">Product Status:</label>
                        <input
                        type="checkbox"
                        id="productStatus"
                        checked={status}
                        onChange={(item) => setStatus(item.target.checked)}
                        />
                    </div>

                    <button type="button" onClick={handleAddProduct}>Add Product</button>
                </form>
    
        
        </>
    );
}

export default AddProductForm;