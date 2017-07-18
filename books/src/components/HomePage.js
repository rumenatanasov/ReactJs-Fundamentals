import React from 'react'
import data from '../Data'
import { Link } from 'react-router-dom'
import ReactPaginate from 'react-paginate'

export default class HomePage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            books: [],
            offset: 0
        }
    }

    componentDidMount() {
        data.getBooks().then(books => {
            books = books.sort((a, b) => new Date(b.date) - new Date(a.date))
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

        this.setState({ offset: offset }, () => {
            this.getBooks(this.state.offset, this.state.offset + 2)
        })
    }


    render() {
        let bookNodes = this.state.books.map(b => {
            return (
                <div className='book' key={b.id}>
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
                <ReactPaginate previousLabel={<button>Previous</button>}
                    nextLabel={<button>Next</button>}
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