
import "./Book.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faBookOpenReader, faStar } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"




function Book(props) {


    return (

        <>
            <div className="text-xs w-28 sm:text-xl md:text-xl lg:text-xl sm:mx-2 sm:w-36 md:w-40 flex-shrink-0 hover:scale-105 transition-all  ">
               
               <Link to={`/books/details/${props.book.id}`}>
               <img 
                    src={props.book.coverImage}
                    alt="Book cover"
                    className=" img rounded-md shadow-2xl  p-2 "


                />
               </Link>
               
                <Link to={`/books/details/${props.book.id}`}>  <button className="bg-white px-6 py-1 my-2 text-yellow-400 mt-2 shadow-md hover:scale-110 transition-all ">More Details</button></Link>
                <div className="bg-slate-200">
                    <p className=" sm:text-base lg:text-lg">Title: {props.book.title}</p>
                    <p className="sm:text-base lg:text-lg">Author: {props.book.author}</p>
                    <p className="sm:text-base lg:text-lg">Rating: {props.book.rating} <span className="text-yellow-400 text-xs"><FontAwesomeIcon icon={faStar} /></span></p>

                </div>




            </div>




        </>



    )
}

export default Book;