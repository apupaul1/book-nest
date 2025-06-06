export const addedBooks = email =>{
    return fetch(`http://localhost:3000/books?email=${email}`)
    .then(res => res.json())
}