import '../assets/css/Menu.css'
import { Link } from "react-router-dom";


const Menu = () => {


    return(
        <section className='menu'>
            <div className='top'>

                <img src="images/home.png" alt="" />
                <div className='name'>
                    <h4>AMSol</h4>
                </div>

            </div>

            <div className='items'>
                <ul>
                    <li>
                        <Link to={'/'} className="item selected" style={{textDecoration: 'none'}}>
                        <img src="images/dashboard.png" alt="" />
                        <p>Dashboard</p>
                        </Link>
                    </li>

                    <li>
                        <Link to={'/'} className='item' style={{textDecoration: 'none'}}>
                        <img src="images/management.png" alt="" />
                        <p>User Management</p>
                        <img className='icon' src='images/arrow.png'></img>
                        </Link>
                    </li>

                    <li>
                        <Link to={'/'} className='item' style={{textDecoration: 'none'}}>
                        <img src="images/store.png" alt="" />
                        <p>Store Management</p>
                        <img className='icon' src='images/arrow.png'></img>
                        </Link>
                    </li>

                    <li>
                        <Link to={'/'} className='item' style={{textDecoration: 'none'}}>
                        <img src="images/price.png" alt="" />
                        <p>Price Management</p>
                        <img className='icon' src='images/arrow.png'></img>
                        </Link>
                    </li>

                    <li>
                        <Link to={'/'} className='item' style={{textDecoration: 'none'}}>
                        <img src="images/vendor.png" alt="" />
                        <p>Vendor Management</p>
                        </Link>
                    </li>

                    <li>
                        <Link to={'/'} className='item' style={{textDecoration: 'none'}}>
                        <img src="images/procurement.png" alt="" />
                        <p>Procurement</p>
                        </Link>
                    </li>

                    <li>
                        <Link to={'/'} className='item' style={{textDecoration: 'none'}}>
                        <img src="images/inventory.png" alt="" />
                        <p>Inventory Management</p>
                        <img className='icon' src='images/arrow.png'></img>
                        </Link>
                    </li>

                    <li>
                        <Link to={'/'} className='item' style={{textDecoration: 'none'}}>
                        <img src="images/credit.png" alt="" />
                        <p>POS</p>
                        </Link>
                    </li>

                </ul>


            </div>

            <div className='bottom'>
                <ul>
                    <li>
                        <Link className='logout' to={'/'} style={{textDecoration: 'none'}}>
                        <img src="images/exit.png" alt="" />
                        <p>Logout</p>
                        </Link>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Menu;