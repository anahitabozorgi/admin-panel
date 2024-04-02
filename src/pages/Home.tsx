import '../assets/css/Home.css';
import Menu from '../components/Menu';
import Header from '../components/Header';
import Main from '../components/Main';

const Home: React.FC<any> = ({products, setProducts}) => {

    return(
        <>

            <div className="grid-container">
                <div className="item1"><Header/></div>
                <div className="item2"><Menu/></div>
                <div className="item3">
                    <Main
                        products = {products}
                        setProduct = {setProducts}
                    />
                </div>  
                <div className='item4'>Footer</div>
            </div>

        </>
    )

}

export default Home;