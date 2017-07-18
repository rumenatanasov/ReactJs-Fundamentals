import React from 'react'
import {Link} from 'react-router-dom'
import BookStore from '../stores/BookStore'
import AuthorsStore from '../stores/AuthorStore'
import CommentsStore from '../stores/Comments'
import BooksActions from '../actions/BooksActions'
export default class BookDetailsPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            book: {
                id: this.props.match.params.id
            },
            author: {},
            comments: []
        }
        BookStore.on('change', () => {
            this.getBook()
        })
    }
    componentWillMount() {
        this.getBook()
    }
    getBook() {
        let book = BookStore.getBookById(this.state.book.id)
        let author = AuthorsStore.getAuthorByBook(this.state.book.id)
        let comments = CommentsStore.getCommentsByBook(this.state.book.id)

        this.setState({
            book: book,
            author: author,
            comments: comments
        })
    }
    deleteBook () {
        BooksActions.deleteBook(Number(this.state.book.id))
        this.props.history.push('/books/all')
    }
    deleteComment (event) {
        let id = event.target.parentElement.id 
        CommentsStore.deleteComment(id)
        let comments = CommentsStore.getCommentsByBook(this.state.book.id)
        this.setState({
            comments: comments
        })
    }

    render() {
        let comments = this.state.comments.map(c => {
            return (
                <p key={c.id} id={c.id}>{c.message}<button onClick={this.deleteComment.bind(this)}>Delete</button></p>
            )
        })
        return (
            <div>
                <img src={this.state.book.image} alt='book' />
                <h2>{this.state.book.title}</h2>
                <p>{this.state.description}</p>
                <p>Price: ${this.state.book.price}</p>
                <p>Author: <Link to={`/authors/${this.state.author.id}`}>{this.state.author.name}</Link></p>
                <button onClick={this.deleteBook.bind(this)}>Delete</button>
                <h4>Comments for this book:</h4>
                {comments}
            </div>
        )
    }
}