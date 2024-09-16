import React from "react";
import { useParams } from "react-router-dom";
import Book from "./Book.jsx";
import { Books } from "./Utils/MockData";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";


function Category(){

    const addedBook = useSelector((state) => state.cart.Books);

    const [newAddedBook, setNewAddedBook] = useState([...Books]);

    useEffect(() => {
      setNewAddedBook([...Books, ...addedBook])
      
  
  
    }, [addedBook])
  



    const {category} = useParams();
    const filterbook = newAddedBook.filter((book)=>book.category.toLowerCase()===category.toLowerCase());




    return(

        <div className="lg:flex justify-center">
            
            <div id="popular" className="border-solid border-gray-400 mx-2 border-b-2 mb-10 lg:w-5/6 bg-neutral-200 px-1 pb-2 rounded-md h-auto     ">
                        <h3 className="py-2 sm:text-2xl md:text-3xl">{category}</h3>

                        <div  className="flex overflow-x-auto gap-2  ">
                            {filterbook.map((book) => (
                                <Book key={book.id} book={book} />
                            ))}
                        </div>


                    </div>
        </div>
    )
}

export default Category;