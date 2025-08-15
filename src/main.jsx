
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import Listed_books from './Pages/Listed_books.jsx'
import PageToRead from './Pages/PageToRead.jsx'
import MAinLayout from './Layouts/MAinLayout.jsx'
import SingleBook from './Pages/SingleBook.jsx'
// import Read from './Componants/Read/Read.jsx'
// import SingleBook from './Pag?es/SingleBook.jsx'
import  { Toaster } from 'react-hot-toast';
import Reads from './Componants/Reads/Reads.jsx'
import WishList from './Componants/WishList/WishList.jsx'
import Benifit from './Pages/Benifit.jsx'
import Knowledge from './Pages/Knowledge.jsx'
import ErrorPage from './Componants/ErrorPage/ErrorPage.jsx'
const router = createBrowserRouter([
  {
    path:'/',
    element:<MAinLayout></MAinLayout>,
    errorElement:<ErrorPage></ErrorPage>,
       children:[
        {
          path:'/',
          element:<Home></Home>,
          loader:() => fetch('./BooksDetails.json'),
        },
        {
          path:'/home/:id',
           loader:() => 
           fetch('./BooksDetails.json'),
           element:<SingleBook></SingleBook>,
           children:[
            {
              index:true,
              element:<Reads></Reads>,
              loader:() => 
              fetch('./BooksDetails.json'),
            },
            {
              
              path:'wishlist',
              element:<WishList></WishList>, 
             
            }
           ]

        },
        {
          path:'/list',
          element:<Listed_books></Listed_books>  ,
              },
        {
          path:'/page',
          element:<PageToRead></PageToRead>
        },
        {
          path:'/benifits',
          element:<Benifit></Benifit>
              },
        {
          path:'/know',
          element:<Knowledge></Knowledge>
              },
            
       ]
  },
  
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  
  <RouterProvider router={router}/>
  <Toaster></Toaster>
  {/* <App/> */}
  </>

)
