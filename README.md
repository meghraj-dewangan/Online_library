# ShoppyGlobe - E-commerce Web Application

Welcome to **ShoppyGlobe**, an e-commerce application built using React and Redux. This platform allows users to browse, add books to the cart, and filter books by category and rating.

## Features

- Add books with details such as title, author, description, category, rating, and cover image.
- Filter books by **Fiction**, **Sci-Fi**, and **Non-Fiction** categories.
- Search for books by title or author.
- View detailed information about a book on the details page.
- Dynamic updating of the book list using Redux state management.
- Rating system to highlight popular books (rating above 4.1).

## Usage
- Add a book by navigating to the "Add Book" page.
- Browse books by categories or use the search functionality to find specific books.
- Click on the "More Details" button to view more information about any book.

## Components Overview
### 1. Header
- The header component contains navigation links to different sections of the app such as the home page, add book page, and the cart.
- It also contains the search bar for finding books by title or author.
- Technologies: React Router for navigation, state management for dynamic cart icon updates.

### 2. BookList
- Displays a list of all available books.
- Uses filtering to display books based on selected categories (Fiction, Non-Fiction, Sci-Fi).
- Each book in the list contains basic information such as title, author, rating, and an option to view more details.
- Technologies: React components, Redux for managing the book data.

### 3. BookCard
- A reusable component that displays the details of an individual book.
- Contains options like "More Details", "Add to Cart".
- Technologies: React component for reusability, props for dynamic content.

### 4. BookDetails
- Shows detailed information about a selected book.
- Includes a larger cover image, book description, rating, and author.
- Allows users to add the book to the cart from this page.
- Technologies: React Router to handle dynamic routing, Redux to fetch specific book details.

### 5. AddBook
- A form for adding new books to the inventory.
- Users can input the book title, author, category, rating, and upload a cover image.
- Upon submission, the new book is added to the Redux store and displayed in the BookList.
- Technologies: Controlled form in React, Redux actions to add a new book to the global state.

### 6. Cart
- Displays all the books added to the user's cart.
- Technologies: Redux for managing the cart state, React components for UI updates.

## State Management
The app uses Redux for state management, ensuring that the data flows efficiently across components and pages.

### Redux Store
- The global state is managed using Redux.
- Reducers are used to handle actions such as adding books, updating the cart.
- Actions dispatch requests to add/remove books, manage cart items.

### Reducers
- cartReducer: Manages the state of the shopping cart, including adding, and updating the quantity of items.
- Technologies: Redux toolkit for writing reducers and actions.

### Selectors
- Selectors are used to derive and retrieve data from the Redux state, such as filtering books based on category and fetching cart details.

## Technologies
- React: Front-end framework for building user interfaces.
- Redux: State management library to handle book-related actions.
- React Router: For navigation between different pages.
- Tailwind CSS: For styling and layout.

## License
This project is licensed under the MIT License.
