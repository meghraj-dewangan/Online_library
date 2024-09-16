import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import BrowseBook from './Components/BrowseBook.jsx';

import App from './App.jsx'
import './index.css'
import Error from './Components/Error.jsx'
import Body from './Components/Body.jsx';
import AddBook from './Components/AddBook.jsx';
import Category from './Components/Category.jsx';
import BookDetails from './Components/BookDetails.jsx';





const appRouter = createBrowserRouter([

  {path:"/",
    element:<App/>,

    children:[
      {
        path:"",
        element:<Body/>,

      },
      {
        path:"/books/details/:id",
        element:<BookDetails/>,
      },
      {
        path:"/books/:category",
        element: <Category/>,
      },
      {
        
        path:"/BrowseBook",
        element:<BrowseBook/>,
      },
      {
        path:"/Add-Book",
        element: <AddBook/>,
      },
    
    ],
    errorElement:<Error/>,
   
  },
  



])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router= {appRouter}/>
  </StrictMode>,
)
