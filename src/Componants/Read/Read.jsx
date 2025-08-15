import PropTypes from 'prop-types';


const Read = ( {read}) => {
	const{bookName,author,image,tags,publisher,yearOfPublishing} = read; 
    return (
        <div>
            <div className="max-w-md p-8 sm:flex sm:space-x-6 dark:bg-gray-50 dark:text-gray-800">
	<div className="flex-shrink-0 w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
		<img src={image} alt="" className="object-cover object-center w-full h-full rounded dark:bg-gray-500" />
	</div>
	<div className="flex flex-col space-y-4">
		<div>
			<h2 className="text-2xl font-semibold">{bookName}</h2>
			<span className="text-sm dark:text-gray-600">by:{author}</span>
		</div>
		<div className="space-y-1">
			<span className="flex items-center space-x-2">
				
				<span className="dark:text-gray-600 flex gap-5"><span className='font-bold'>tag:</span> {
            tags.map((ing,idx) =><span className=" flex-col gap-5" key={idx}><a href="">{ing}</a></span> )
        }
			<p className='flex gap-1'>publishing year:{yearOfPublishing}</p>
				
				</span>
			</span>

			<span className="flex items-center space-x-2">
			<button className="btn btn-info">{publisher}</button>

			<button className="btn btn-success">View Details</button>

				
                      
			</span>
		</div>
	</div>
</div>
        </div>
    );
};
Read.propTypes ={
    read:PropTypes.object.isRequired
    
}

export default Read;