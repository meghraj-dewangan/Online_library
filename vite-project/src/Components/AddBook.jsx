import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "./CartSlice";






function AddBook() {

    const dispatch = useDispatch();
    const [bookData, setBookData] = useState({
        id: "",
        title: "",
        author: "",
        description: "",
        category: "",
        rating: "",
        coverImage: "",
    });

    function handleChange(e) {
        setBookData({
            ...bookData,
            [e.target.name]: e.target.value,
        });
    };

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(addItem(bookData));
        setBookData({
            id: "",
            title: "",
            author: "",
            description: "",
            category: "",
            rating: "",
            coverImage: "",

        });
    };


    return (
        <div className="min-h-screen flex flex-col justify-between ">

            <div className="flex justify-center lg:mt-16 flex-grow">

                <div className=" w-4/5 shadow-xl shadow-slate-600 rounded-lg bg-slate-400  lg:w-3/5">

                    <form id="addBookForm  " onSubmit={handleSubmit}>

                        <p className="p-2 text-yellow-200">To add a Newbook...</p>

                        <div className="sm:flex sm:justify-start ">
                            <div className="my-3 ml-2">
                                <label htmlFor="id" className="pr-2 text-yellow-200">ID:</label>
                                <input
                                    className="ml-9 w-40"
                                    type="number"
                                    id="id"
                                    name="id"
                                    value={bookData.id}
                                    onChange={handleChange}
                                    placeholder="Enter book ID"
                                    required
                                />
                            </div>

                            <div className="my-3 ml-2">

                                <label htmlFor="title" className="pr-2  text-yellow-200 sm:ml-10 sm:mr-20">Title: </label>
                                <input
                                    className="ml-5 w-40"
                                    type="text"
                                    id="title"
                                    name="title"
                                    value={bookData.title}
                                    onChange={handleChange}
                                    placeholder="Enter book title"
                                    required
                                />

                            </div>

                        </div>

                        <div className="sm:flex sm:justify-start">

                            <div className="my-3 ml-2">

                                <label htmlFor="author" className="pr-2 text-yellow-200">Author:</label>
                                <input
                                    className="ml-1 w-40"
                                    type="text"
                                    id="author"
                                    name="author"
                                    value={bookData.author}
                                    onChange={handleChange}
                                    placeholder="Enter author's name"
                                    required
                                />

                            </div>


                            <div className="my-3 ml-2">

                                <label htmlFor="description" className="pr-2 text-yellow-200 sm:ml-10 ">Description:</label>
                                <textarea
                                    className="h-8 w-40 ml-16  "
                                    id="description"
                                    name="description"
                                    value={bookData.description}
                                    onChange={handleChange}
                                    placeholder="Enter description"
                                    rows="5"
                                    required
                                ></textarea>

                            </div>

                        </div>



                        <div className="sm:flex sm:justify-start">

                            <div className="my-3 ml-2">

                                <label htmlFor="category" className="pr-2 text-yellow-200">Category:</label>
                                <select id="category" name="category" value={bookData.category}
                                    onChange={handleChange} required>
                                    <option value="" disabled selected>
                                        Select category
                                    </option>
                                    <option value="Fiction">Fiction</option>
                                    <option value="Sci-Fi">Sci-Fi</option>
                                    <option value="Non-Fiction">Non-Fiction</option>
                                </select>

                            </div>


                            <div className="my-3 ml-2">

                                <label htmlFor="rating" className="text-yellow-200 sm:ml-16 sm:mr-20"> Rating:</label>
                                <input
                                    className="ml-4 w-40"
                                    type="number"
                                    id="rating"
                                    name="rating"
                                    value={bookData.rating}
                                    onChange={handleChange}
                                    min="0"
                                    max="5"
                                    step="0.1"
                                    placeholder="Rating (0-5)"
                                    required
                                />

                            </div>
                        </div>



                        <div className="my-3 ml-2">

                            <label htmlFor="coverImage" className="text-yellow-200"> Image URL:</label>
                            <input
                                className=" w-40 ml-16"
                                type="text"
                                id="coverImage"
                                name="coverImage"
                                value={bookData.coverImage}
                                onChange={handleChange}
                                placeholder="Enter image URL"


                            />


                        </div>




                        <div className="flex justify-center">
                            <button type="submit" className="text-black bg-neutral-300 px-2 py-1 ml-1 rounded-lg my-3 hover:scale-110 ease-linear transition-all"> Add Book</button>
                        </div>

                    </form>
                </div>
            </div>





        </div>

    )

}

export default AddBook;