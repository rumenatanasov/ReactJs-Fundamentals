import React from 'react'
import data from '../Data'
import ReactPaginate from 'react-paginate'
import { Link } from 'react-router-dom'

export default class AllBooks extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            books: [],
            offset: 0
        }
    }
    componentDidMount() {
        data.getBooks().then(books => {
            books = books.sort((a, b) => new Date(a.date) - new Date(b.date))
            let authorsPromises = []
            for (let book of books) {
                authorsPromises.push(data.getAuthorByBook(book.id))
            }

            Promise.all(authorsPromises).then(authors => {
                for (let author of authors) {
                    for (let book of books) {
                        if (author.books.indexOf(book.id) > -1) {
                            book.authorName = author.name
                        }
                    }
                }
                this.setState({
                    books: books
                })
            })
        })

    }
    sortByDate() {
        this.setState(prevState => ({
            books: prevState.books.sort((a, b) => new Date(a.date) - new Date(b.date))
        }))
    }
    sortByAuthor() {
        this.setState(prevState => ({
            books: prevState.books.sort((a, b) => a.authorName.localeCompare(b.authorName))
        }))
    }
    sortByTitle() {
        this.setState(prevState => ({
            books: prevState.books.sort((a, b) => a.title.localeCompare(b.title))
        }))
    }
    comparator(reverse) {
        if (reverse) {
            return (a, b) => a['title'].toString().localeCompare(b['title'].toString())
        }
        return (a, b) => b['title'].toString().localeCompare(a['title'].toString())
    }
    getBooks(start, end, criteria) {
        data.getBooks().then((objs) => {
            this.setState({
                books: objs.sort(this.comparator(criteria)).slice(start, end),
                pageCount: objs.length / 2
            })
        })
    }
     handlePageClick = (input) => {
        let selected = input.selected
        let offset = Math.ceil(selected * 2)

        this.setState({offset: offset}, () => {
            this.getBooks(this.state.offset, this.state.offset + 2)
        })
    }
    render() {
        let bookNodes = this.state.books.map(b => {
            return (
                <div key={b.id}>
                    <Link to={`/books/${b.id}`}>
                        <img src={b.link} alt='cover' />
                        <h3>{b.title}</h3>
                    </Link>
                    <p>Author: <Link to={`/authors/${b.author}`}>{b.authorName}</Link></p>

                </div>
            )
        })
        return (
            <div>
                <h1>All Books</h1>
                <p>
                    Sort:
                    <button onClick={this.sortByDate.bind(this)}>Date</button>
                    <button onClick={this.sortByAuthor.bind(this)}>Author</button>
                    <button onClick={this.sortByTitle.bind(this)}>Title</button>
                </p>
                {bookNodes}
                <ReactPaginate previousLabel={'Previous'}
                    nextLabel={'Next'}
                    breakLabel={<a href="">...</a>}
                    breakClassName={'break-name'}
                    pageCount={this.state.pageCount}
                    marginPagesDisplayed={1}
                    pageRangeDisplayed={1}
                    onPageChange={this.handlePageClick}
                    containerClassName={'pagination'}
                    subContainerClassName={'pages pagination'}
                    activeClassName={'active'}
                ></ReactPaginate>
            </div>
        )
    }
}