import '../assets/css/Home.css';
import Menu from '../components/Menu';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductList from '../components/ProductList';
import { useDispatch, useSelector } from 'react-redux';
import {userData, productList} from '../action/UserAction';
import { RootStore } from '../Store';
import { useEffect, useState } from 'react';
import AddProductForm from './AddProductForm';


const Home: React.FC<any> = () => {

    const dispatch = useDispatch();
    const user = useSelector((state: RootStore) => state.user);
    const productlist = useSelector((state:RootStore) => state.productlist);
    const [products, setProducts] = useState<any>(null);
    

    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);

    

    useEffect(()=> {
        dispatch(userData());
    }, []);

    useEffect(()=>{
        setProducts(productlist);
    }, [productlist])

    useEffect(()=> {
        console.log("this is the user data", user.fistName)
    }, [user])

    

    useEffect(()=> {
        dispatch(productList());
    }, []);

    return(
        <>

            <div className="grid-container">
                <div className="item1"><Header/></div>
                <div className="item2"><Menu/></div>
                <div className="item3">
                    <button onClick={openModal}>+ Add</button>
                    {isModalOpen && <AddProductForm
                    setIsModalOpen = {setIsModalOpen}
                    />}
                    <ProductList
                    products = {products}
                    setProducts = {setProducts}
                    />
                </div>  
                <div className='item4'><Footer/></div>
            </div>

        </>
    )

}

export default Home;