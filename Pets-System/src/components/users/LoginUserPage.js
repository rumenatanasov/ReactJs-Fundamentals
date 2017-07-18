import React from 'react'
import Auth from './Auth'
import LoginForm from './LoginForm'
import FormHelpers from '../common/forms/FormHelpers'
import userActions from '../../actions/UserActions'
import userStore from '../../stores/UserStore'
import toastr from 'toastr'
export default class LoginUserPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            user: {
                email: 'test@test.com',
                password: '123456'
            },
            error: ''
        }
        this.handleUserLogin = this.handleUserLogin.bind(this)
        userStore.on(userStore.eventTypes.USER_LOGGED,
        this.handleUserLogin)
    }
    componentWillUnmount() {
        userStore.removeListener(
            userStore.eventTypes.USER_LOGGED,
            this.handleUserLogin
        )
    }
    handleUserChange (event) {
        FormHelpers.handleFormChange.bind(this)(event, 'user')
    }
    handleUserForm (event) {
        event.preventDefault()

        //Validate form
        userActions.login(this.state.user)
    }
    handleUserLogin (data) {
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