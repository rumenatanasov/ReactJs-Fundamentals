import React from 'react'
import { Link } from 'react-router-dom'
import AuthorsStore from '../stores/AuthorStore'

export default class AllAuthors extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            orderBy: 'Ascending',
            authors: []
        }
        AuthorsStore.on('change', () => {
            this.getAuthors()
        })
    }
    getAuthors() {
        let authors = AuthorsStore.getAll()
        authors = authors.sort((a, b) => a.name.localeCompare(b.name))

        this.setState({
            authors: authors
        })
    }
    componentWillMount() {
        this.getAuthors()
    }
    sortAuthors() {
        let authors = this.state.authors
        let nextSort
        if (this.state.orderBy === 'Ascending') {
            authors = authors.sort((a, b) => b.name.localeCompare(a.name))
            nextSort = 'Descending'
        } else {
            authors = authors.sort((a, b) => a.name.localeCompare(b.name))
            nextSort = 'Ascending'
        }
        this.setState({
            orderBy: nextSort,
            authors: authors
        })
    }
    render() {
        let authors = this.state.authors.map((author, index) => {
            return (
                <Link to={`/authors/${author.id}`} key={index}>
                    <div>
                        <img src={author.image} alt='author' />
                        <h3>{author.name}</h3>
                    </div>
                </Link>
            )
        })
        return (
            <div>
                <h2>All Authors:
                    <button onClick={this.sortAuthors.bind(this)}>
                        {this.state.orderBy === 'Ascending' ? 'Descending' : 'Ascending'}
                        </button>
                </h2>
                {authors}
            </div>
        )
    }
}