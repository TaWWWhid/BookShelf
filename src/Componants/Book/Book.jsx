import PropTypes from 'prop-types';
import { Link, Outlet } from "react-router-dom";
import { FaRegStar } from "react-icons/fa";

const Book = ({book}) => {
    const{image,bookName,author,rating,category,id} = book;
    return (
        
        <article className="flex flex-col dark:bg-gray-50 border-1">
				<Link to={`/home/${id}`}>
					<img alt={image} className="object-cover w-full h-52 dark:bg-gray-500" src={image} />
				</Link>
				<div className="flex flex-col flex-1 p-6">
                    <div className="flex text-sm text-green-500 gap-5 font-bold">
                        <p><span>Young Adult</span></p>
                        <p>Identity</p>
                    </div>
					<h3 className="flex-1 py-2 text-lg font-semibold leading-snug">{bookName}</h3>
                    <p className="text-sm gap-2">By:{author}</p>
					<div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
						<span className="text-sm">{category}</span>
						<span className="flex text-sm">{rating} <FaRegStar /></span>
					</div>
				</div>
				<Outlet></Outlet>
			</article>
    );
};
Book.propTypes ={
    book:PropTypes.object.isRequired
    
}


export default Book;