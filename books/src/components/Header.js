import React from 'react'
import {Link} from 'react-router-dom'

export default class Header extends React.Component {
    render() {
        return (
            <div>
            <Link to='/'>Home</Link>
            <Link to='/book/all'>All Books</Link>
            <Link to='/authors/all'>All Authors</Link>
            </div>
        )
    }
}