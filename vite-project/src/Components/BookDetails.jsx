import { useParams } from "react-router-dom";
import { Books } from "./Utils/MockData";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faBookOpenReader, faStar } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";

function BookDetails() {

  const addedBook = useSelector((state) => state.cart.Books);

  const { id } = useParams();

  const [newAddedBook, setNewAddedBook] = useState([...Books]);
  
  useEffect(() => {
    setNewAddedBook([...Books, ...addedBook]);
   
    
  }, [addedBook]);





const bookFind = newAddedBook.find((book) => book.id === id);

  
  


  if (!bookFind) {
    return <p className="text-center font-extrabold ">Book not found!</p>;
  }


  return (
    <>

      <div className="flex flex-col items-center">
        <div className="px-2 shadow-xl shadow-yellow-100 w-4/5 lg:w-2/3 rounded-xl pt-2 pb-3 ">
          <h1 className="font-extrabold text-yellow-600 mb-3 md:text-xl">{bookFind.title}:</h1>
          <div className="flex justify-center">
            <img className="md:w-4/5" src={bookFind.coverImage} alt={bookFind.title} />

          </div>


          <div className="border-black border-solid border-2 mt-3 pl-2 py-1">
            <p className="mt-3 md:text-lg"><strong>Author:</strong> {bookFind.author}</p>
            <p className="md:text-lg"><strong>Category:</strong> {bookFind.category}</p>
            <p className="md:md:text-lg"><strong>Rating:</strong> {bookFind.rating} <FontAwesomeIcon icon={faStar} className="text-yellow-400" /></p>

          </div>
          <div className="shadow-inner shadow-white p-2">
            <p className="text-sm mt-3 pb-6 md:text-base"><strong>Description:</strong> {bookFind.description}</p>

          </div>


        </div>
        <div>
          <Link to="/BrowseBook"><button className="shadow-xl px-2 py-1 rounded-lg hover:scale-110 transition-transform each-linear bg-yellow-400 sm:mx-6 mt-5">Back to Browse</button></Link>
        </div>



      </div>

    </>
  );
}

export default BookDetails;