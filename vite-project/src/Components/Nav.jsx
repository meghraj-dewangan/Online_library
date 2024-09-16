import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faBookOpenReader } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { addItem } from './CartSlice';


function Nav() {
    const cartItems = useSelector((store)=>store.cart.Books)
    console.log(cartItems)
    

    return (



        <div className="nav bg-neutral-300 shadow-lg mt-8 mb-8 rounded-lg py-2 sm:flex sm:justify-between"  >
            <span className='hidden sm:inline-block'><FontAwesomeIcon icon={faBookOpenReader} className='text-4xl  ml-4 text-yellow-600 md:text-6xl' /></span>

            <ul className="list-none flex flex-row place-content-around text-sm sm:justify-end items-center md:text-xl">
                <Link to="/">  <li className="shadow-xl px-2 py-1 rounded-lg hover:scale-110 transition-transform each-linear bg-neutral-400 sm:mx-6 ">Home</li></Link>
                <Link to="/BrowseBook"> <li className="shadow-xl px-2 py-1 rounded-lg hover:scale-110 transition-transform each-linear bg-neutral-400 sm:mx-6">Browse Book</li></Link>
                <Link to="/Add-Book"> <li className="shadow-xl px-2 py-1 rounded-lg hover:scale-110 transition-transform each-linear bg-neutral-400 sm:mx-6"><span className='text-yellow-400'>{cartItems.length }</span> Add Book</li></Link>   
            </ul>
        </div>




    )
}

export default Nav;