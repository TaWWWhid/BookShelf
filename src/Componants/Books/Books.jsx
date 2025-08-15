// import React from 'react';

import { useLoaderData } from "react-router-dom";
import Book from "../Book/Book";

const Books = () => {
    const books = useLoaderData();
    console.log(books);
    return (
        <section className="py-6 sm:py-12 dark:bg-gray-100 dark:text-gray-800">
	<div className="container p-6 mx-auto space-y-8">
		<div className="space-y-2 text-center">
			<h2 className="text-3xl font-bold">Books</h2>
			
		</div>
		<div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
			{
                books.map(book => <Book key={book.id} book={book}></Book>)
            }
			
			
			
		</div>
	</div>
</section>
    );
};

export default Books;