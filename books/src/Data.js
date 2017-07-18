let allBooks = [{
    id: 1,
    image: 'http://images.gr-assets.com/books/1325028693l/38500.jpg',
    title: 'Women',
    description: 'Story about naughty drunk girls hahahahhahaha',
    author: 1,
    comments: [1],
    price: '$8000',
    date: '2015-02-25T12:00:00Z',
    
},
{
     id: 2,
    image: 'http://images.gr-assets.com/books/1325028693l/38500.jpg',
    title: 'Women',
    description: 'Story about naughty drunk girls hahahahhahaha',
    author: 1,
    comments: [1],
    price: '$8000',
    date: '2015-02-25T12:00:00Z'
}, {

    id: 3,
    image: 'http://images.gr-assets.com/books/1325028693l/38500.jpg',
    title: 'Muje',
    description: 'Story about naughty drunk girls hahahahhahaha',
    author: 1,
    comments: [1],
    price: '$8000',
    date: '2015-02-25T12:00:00Z'
}, {
     id: 4,
    image: 'http://images.gr-assets.com/books/1325028693l/38500.jpg',
    title: 'Women',
    description: 'Story about naughty drunk girls hahahahhahaha',
    author: 2,
    comments: [1],
    price: '$8000',
    date: '2015-02-25T12:00:00Z'

}]
let authors = [{
    id: 1,
    name: 'Lazare Stani',
    image: 'https://media.licdn.com/mpr/mpr/shrink_100_100/AAEAAQAAAAAAAA0OAAAAJDgwZThiNDY4LWE2M2ItNGM3ZS1iNDU2LTBiYTE5NzkzNGYyOQ.jpg',
    books: [1, 2]
}, {
    id: 2,
    name: 'Antony Aliev',
    image: 'https://media.licdn.com/mpr/mpr/shrink_100_100/AAEAAQAAAAAAAA0OAAAAJDgwZThiNDY4LWE2M2ItNGM3ZS1iNDU2LTBiYTE5NzkzNGYyOQ.jpg',
    books: [3,4]
}]
let comments = [{
    id: 1,
    message: 'Oi Koitiooo',
    book: 1
}]

const data = {
    getBooks: () => {
        return new Promise((resolve, resject) => {
            resolve(allBooks)
        })
    },
    getBookById: (bookId) => {
        bookId = Number(bookId)
        return new Promise((resolve, reject) => {
            resolve(allBooks.filter(b => b.id === bookId)[0])
        })
    },
    getBooksByAuthor: (authorId) => {
        authorId = Number(authorId)
        return new Promise((resolve, reject) => {
            resolve(allBooks.filter(b => b.author === authorId))
        })
    },
    getAuthorByBook: (bookId) => {
        bookId = Number(bookId)
        return new Promise((resolve, reject) => {
            resolve(authors.filter(a => a.books.indexOf(bookId) > -1)[0])
        })
    },
    getAuthors: () => {
        return new Promise((resolve, reject) => {
            resolve(authors)
        })
    },
    getAuthorById: (authorId) => {
        authorId = Number(authorId)
        return new Promise((resolve, reject) => {
            resolve(authors.filter(a => a.id === authorId)[0])
        })
    },
    getCommentsByBook: (bookId) => {
        bookId = Number(bookId)
        return new Promise((resolve, reject) => {
            resolve(comments.filter(c => c.book === bookId))
        })
    }
}
export default data