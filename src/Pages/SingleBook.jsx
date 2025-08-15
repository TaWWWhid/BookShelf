// import React from 'react';


// import { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { added, saveBook } from "../utils";

const SingleBook = () => {
//     const [a,b]=useState;
// const useEffect (() =>{
//     fetch('BooksDetails.json')
//     .then(res =>res.json())
//     .then(data => b(data))
// },[])


    const singleBook = useLoaderData();
    console.log(singleBook);
    const{id} = useParams();
    const single = singleBook.find( u=> u.id == id);
    const{bookName,author,image,review,totalPages,rating,category,tags,publisher,yearOfPublishing} = single; 

    const handleListPage = single =>{
      // console.log(single);
      saveBook(single)
    }

    const addedtoWishlist = single =>{
      // console.log(single);
      added(single)
    }

    return (
      <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">{bookName}</h1>
          <p className="py-6">by:{author}</p>
          <hr />
          <p className="py-6">{category}</p>
          <hr />
          <p className="py-6"><span className="font-bold">review:</span>{review}</p>
          <div className="gap-20">
          <p className='font-bold gap-10 px-3'>Tag:
        {
            tags.map((ing,idx) =><span className=" flex-col gap-20" key={idx}><a href="">{ing}</a></span> )
        }
        </p>
        <div className="py-5">
          <div className="flex gap-20">
          <p>Number of Pages:</p>
          <p>{totalPages}</p>
          </div>
          <div className="flex gap-20">
          <p>Publisher:</p>
          <p>{publisher}</p>
          </div>
          <div className="flex gap-20">
           <p>Year of Publishing:</p>
           <p>{yearOfPublishing}</p>
          </div>
          <div className="flex gap-20">
          <p>Rating:</p>
        <p>{rating}</p>
          </div>
        </div>
        
          </div>
          <div className="flex gap-10">
          <button  onClick={()=>handleListPage(single)}
           className="btn btn-neutral">Read</button>
          <button  onClick={()=>addedtoWishlist(single)} className="btn btn-info">Wishlist</button>
          </div>
        </div>
      </div>
    </div>
    );
};

export default SingleBook;