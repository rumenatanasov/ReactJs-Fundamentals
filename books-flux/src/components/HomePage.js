import React from 'react'
import { Link } from 'react-router-dom'
import BookStore from '../stores/BookStore'
import AuthorStore from '../stores/AuthorStore'
export default class HomePage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            books: []
        }
        BookStore.on('change', () => {
            this.getBooks()
        })
    }
    getBooks() {
        let books = BookStore.getAll()
        books = books.sort((a, b) => new Date(a.date) - new Date(b.date))
        for (let book of books) {
            book.authorName = AuthorStore.getAuthorByBook(book.id).name
        }
        this.setState({
            books: books
        })
    }
    componentDidMount() {
        this.getBooks()
    }
    render() {
        let bookNodes = this.state.books.map(b => {
            return (
                <div key={b.id}>
                    <Link to={`/books/${b.id}`}>
                        <img src={b.image} alt='cover' />
                        <h3>{b.title}</h3>
                    </Link>
                    <p>Author: <Link to={`/authors/${b.author}`}>{b.authorName}</Link></p>
                    </div>
                    )
        })
        return (
            <div>
                {bookNodes}
            </div>
                    )
    }
}