// import React from 'react';

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getBooks } from "../utils";
import Read from "../Componants/Read/Read";

// import NavBar from "../Componants/NavBar/NavBar";

const Listed_books = () => {
	const [tabIndex,setTabInedx]= useState(1);
	const[books,setBooks] =useState([])
	useEffect(() =>{
     const storeBook = getBooks()
     setBooks(storeBook)
	},[])

    return (
<div className="px-10">
<div className="py-10">

<button className="btn btn-block text-xl font-extrabold">Books</button>
</div>
<div className="items-center justify-center">
<details className="dropdown items-center ">
  <summary className="m-1 btn bg-green-500">Sort By</summary>
  <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
    <li><a >Rating</a></li>
    <li><a>Number of pages</a></li>
    <li><a >Publisher year</a></li>
  </ul>
</details>
</div>

		
		<div className="flex items-center -mx-4 overflow-x-auto py-10 px-10 overflow-y-hidden sm:justify-start flex-nowrap dark:bg-gray-100 dark:text-gray-800">
	<div>
	<Link  to='' onClick={()=>setTabInedx(0)}  
	className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 0? 'border border-b-0':'border-b'} dark:border-gray-600 dark:text-gray-600`}>
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
			<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
		</svg>
		<span>Read</span>
		
		<div>
		
		</div>
	</Link>
	

	</div>
	<Link  onClick={()=>setTabInedx(1)}
	
	className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 1 ? 'border border-b-0':'border-b'} dark:border-gray-600 dark:text-gray-600`}>
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
			<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
			<path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
		</svg>
		<span>Wishlist</span>
	</Link>
	
	
</div>

<div>
		{
			books.map(read=>(<Read key={read.id} read={read}></Read>))
		}
		</div>

</div>
    );
};

export default Listed_books;