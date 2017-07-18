import React from 'react'
import { Link } from 'react-router-dom'
import Auth from '../users/Auth'
import UserStore from '../../stores/UserStore'

export default class Navbar extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            username: Auth.getUser().name
        }
        this.handleUserLoggedIn = this.handleUserLoggedIn.bind(this)
        UserStore.on(UserStore.eventTypes.USER_LOGGED,
            this.handleUserLoggedIn)
    }
    handleUserLoggedIn(data) {
        if (data.success) {
            this.setState({
                username: data.user.name
            })
        }
    }
    render() {
        return (
            <div className='menu'>
                <Link to='/'>Home</Link>
                {Auth.isUserAuthenticated() ? (
                    <div>
                        <span><Link to={`/users/details/${this.state.username}`}>{this.state.username}</Link></span>
                        <Link to='/users/logout'>Logout</Link>
                        <Link to='/hotels/create'>Create Hotel</Link>
                    </div>
                ) : (
                        <div>
                            <Link to='/users/login'>Login</Link>
                            <Link to='/users/register'>Register</Link>
                        </div>
                    )}

            </div>
        )
    }
}