
import '../assets/css/Header.css'
const Header = () => {

    return(
        <>
        <div className='header'>
            <div className='left'>
                <img src="images/list-text.png" alt="" />
                <h2>Product List</h2>
            </div>

            <div className='right'>
                <h2>Afsak Mahmud</h2>
                <img src='images/account.png'></img>
            </div>
        </div>
        </>
    )
}

export default Header;