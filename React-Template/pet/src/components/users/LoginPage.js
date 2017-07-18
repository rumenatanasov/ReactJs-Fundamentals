import React from 'react'
import Auth from './Auth'
import LoginForm from './LoginForm'
import FormHelpers from '../common/forms/FormHelpers'
import UserActions from '../../actions/UserActions'
import UserStore from '../../stores/UserStore'
import toastr from 'toastr'

export default class LoginPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            user: {
                email: '',
                password: ''
            },
            error: ''
        }
        this.handleUserLogin = this.handleUserLogin.bind(this)
        UserStore.on(UserStore.eventTypes.USER_LOGGED, this.handleUserLogin)
    }
    componentWillUnmount() {
        UserStore.removeListener(
            UserStore.eventTypes.USER_LOGGED, this.handleUserLogin
        )
    }
    handleUserChange (event) {
        FormHelpers.handleFormChange.bind(this)(event, 'user')
    }
    handleUserForm(event) {
        event.preventDefault()
        UserActions.login(this.state.user)
    }
    handleUserLogin(data) {
        if (!data.success) {
            this.setState({
                error: data.message
            })
        } else {
            Auth.authenticateUser(data.token)
            Auth.saveUser(data.user)
            toastr.success(data.message)
            this.props.history.push('/')
        }
    }
    render() {
        return (
            <div>
                <h1>Please Login</h1>
                <LoginForm
                user={this.state.user}
                error={this.state.error}
                onChange={this.handleUserChange.bind(this)}
                onSave={this.handleUserForm.bind(this)} />
            </div>
        )
    }
}