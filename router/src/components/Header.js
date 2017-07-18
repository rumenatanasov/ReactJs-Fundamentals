import React from 'react'
import { Link } from 'react-router-dom'
let id = 4
export default class Header extends React.Component {

    render() {
      
        return (
            <div>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/rumen'>Rumen</Link>
                <Link to={'/page/with/' + id}>Params</Link>
            </div>
        )
    }
}

