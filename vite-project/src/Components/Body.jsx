import BrowseBook from "./BrowseBook";
// import "./Body.css"
import HomePage from "./HomePage";
import Book from "./Book.jsx";
import { Books } from "./Utils/MockData.js";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";




function Body() {
    //Filter books by category
    const addedBook = useSelector((state)=>state.cart.Books);

    const[newAddedBook,setNewAddedBook] = useState([...Books]);
    useEffect(()=>{
        setNewAddedBook([...Books,...addedBook])


    },[addedBook])


    const fictionBooks =newAddedBook.filter((book) => book.category === "Fiction");
    const sciFiBooks = newAddedBook.filter((book) => book.category === "Sci-Fi");
    const nonFictionBooks = newAddedBook.filter((book) => book.category === "Non-Fiction");
    const popular = newAddedBook.filter((book)=>book.rating>=4.1);

    
    

    return (


        <>
            <div>



                <div className="pb-6" >

                    <HomePage />
                </div>

                <div>
                           


                    <ul className="bg-neutral-200  flex justify-between p-2 mb-2 text-yellow-500 lg:justify-start ">
                        <Link to="/books/Fiction"><li className="shadow-xl shadow-yellow-50 px-1 rounded-md bg-white lg:mr-3 hover:scale-110 transition-all" >Fiction</li></Link>
                        <Link to="/books/Sci-fi"><li className="shadow-xl shadow-yellow-50 px-1 rounded-md bg-white lg:mr-3 hover:scale-110 transition-all">Sci-fi</li></Link>
                        <Link to="/books/Non-Fiction"><li className="shadow-xl shadow-yellow-50 px-1 rounded-md bg-white hover:scale-110 transition-all">Non-Fiction</li></Link>
                    </ul>
                </div>

                < div className="flex flex-col items-center pb-3">
                    <p className="pb-2 md:text-xl font-bold">List of Popular Books</p>
                   <a href="#popular1"><button className="bg-white px-2 py-1 rounded-lg hover:scale-110 ease-linear transition-all text-yellow-500">View more</button></a> 
                    
                </div>

                <div className="bg-neutral-50 lg:flex lg:flex-col lg:items-center ">
                    <h2 className="font-extrabolFooterd text-center pt-4 mb-3 sm:text-2xl md:text-3xl sm:mt-6 sm:mb-6 font-bold ">Home page</h2>


                    <div id="popular1" className="border-solid border-gray-400 mx-2 border-b-2 mb-10 lg:w-5/6 bg-neutral-200 px-1 pb-2 rounded-md h-auto     ">
                        <h3 className="py-2 sm:text-2xl md:text-3xl">List of Popular Books</h3>

                        <div  className="flex overflow-x-auto gap-2  ">
                            {popular.map((book) => (
                                <Book key={book.id} book={book} />
                            ))}
                        </div>


                    </div>




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




        </>
    )
}

export default Body;