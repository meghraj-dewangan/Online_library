import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faBookOpenReader, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

import { Books } from "./Utils/MockData";
import { useEffect } from "react";
import Book from "./Book";
import { useState } from 'react';
import { useSelector } from 'react-redux';




function BrowseBook() {

  const addedBook = useSelector((state) => state.cart.Books);

  const [newAddedBook, setNewAddedBook] = useState([...Books]);
  useEffect(() => {
    setNewAddedBook([...Books, ...addedBook])


  }, [addedBook])


  

  const fictionBooks = newAddedBook.filter((book) => book.category === "Fiction");
  const sciFiBooks = newAddedBook.filter((book) => book.category === "Sci-Fi");
  const nonFictionBooks = newAddedBook.filter((book) => book.category === "Non-Fiction");

  // state for search

  const [seachBook, SetsearchBook] = useState("");
  const [searchInput, setSearchInput] = useState("");

  //filter books by title or author based on the search 


  const filteredBooks = newAddedBook.filter((book) =>
    book.title.toLowerCase().includes(seachBook.toLowerCase()) ||
    book.author.toLowerCase().includes(seachBook.toLowerCase())
  );


  function handleSearch() {
    SetsearchBook(searchInput);
    setSearchInput("");
  };


  return (
    <div className='bg-white'>
      <div className=" flex flex-col items-center pb-3  ">
        <input onChange={(e) => setSearchInput(e.target.value)} value={searchInput} type="text" className="bg-neutral-100 border-gray-300 border-solid border-2 shadow-xl  rounded-lg px-2 w-56 text-black lg:w-80 lg:py-1  mt-3" />
        <button onClick={handleSearch} className="mt-3 hover:scale-110 ease-linear transition-all bg-yellow-400 p-1 px-2 rounded-lg shadow-md shadow-black w-16  "><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
      </div>



      {/* filter by category books */}

      <div>
        <h1 className="text-center text-xl font-extrabold text-yellow-600 py-3 ">Browse Book Page !</h1>
        <div className="bg-neutral-50 lg:flex lg:flex-col lg:items-center pt-7 ">


          <div className="border-solid border-gray-400 mx-2 border-b-2 mb-4 lg:w-5/6  bg-neutral-200 px-1 pb-2 rounded-md h-auto    ">
            <h3 className="py-2 sm:text-2xl md:text-3xl">Fiction</h3>

            <div className="flex overflow-x-auto gap-2  ">
              {fictionBooks.map((book) => (
                <Book key={book.id} book={book} />
              ))}
            </div>


          </div>


          <div className="border-solid border-gray-400 mx-2 border-b-2 mb-4 lg:w-5/6  bg-neutral-200 px-1 pb-2 rounded-md h-auto    ">
            <h3 className="py-2  sm:text-2xl md:text-3xl">Sci-fi</h3>

            <div className="flex overflow-x-auto gap-2 ">
              {sciFiBooks.map((book) => (
                <Book key={book.id} book={book} />
              ))}


            </div>


          </div>

          <div className="border-solid border-gray-400 mx-2 border-b-2 mb-4 lg:w-5/6   bg-neutral-200 px-1 pb-2 rounded-md h-auto    ">
            <h3 className="py-2 sm:text-2xl md:text-3xl">Non-Fiction</h3>

            <div className="flex overflow-x-auto gap-2 ">
              {nonFictionBooks.map((book) => (
                <Book key={book.id} book={book} />
              ))}

            </div>


          </div>


        </div>



      </div>

      {/*show all books */}


      <div >

        <div className='flex justify-center mt-10  '>

          <div className='flex flex-wrap justify-center shadow-md rounded-lg  py-3  shadow-black  w-5/6 bg-neutral-300'>

            {filteredBooks.length > 0 ? (
              filteredBooks.map((book) => (
                <Book key={book.id} book={book} />
              ))
            ) : (
              <p className='text-center'>no book found...</p>
            )
            }





          </div>

        </div>






      </div>

    </div>
  )
}

export default BrowseBook;