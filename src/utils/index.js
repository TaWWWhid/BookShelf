import  toast from 'react-hot-toast';
export const getBooks = () =>{
    let books = [];
    const storebooks = localStorage.getItem('books')
    if(storebooks){
         books =JSON.parse(storebooks)        
    }
    return books
}
export const added  = single =>{
  let books = getBooks()
  const isExist = books.find(b=>b.id === single.id)
  if(isExist){
    return toast.error('Alrready exist')
}
else{
  books.push(single)
localStorage.setItem('books',JSON.stringify(books))
  return toast('Alrready added')
}
}

export const saveBook = single =>{
    let books = getBooks()
    const isExist = books.find(b=>b.id === single.id)
    if(isExist){
  return toast.error('Alrready exist')

}
books.push(single)
localStorage.setItem('books',JSON.stringify(books))
toast.success('Added successfully')
}

