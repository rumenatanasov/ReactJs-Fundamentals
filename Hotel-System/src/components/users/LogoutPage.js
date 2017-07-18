import React from 'react'
import Auth from './Auth'

export default class LogoutPage extends React.Component {
    componentWillMount() {
        Auth.deauthenticateUser()
        Auth.removeUser()
        this.props.history.push('/')
    }
    render() {
        return null
    }
}