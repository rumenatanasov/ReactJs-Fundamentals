import React from 'react'
import FormHelpers from '../common/forms/FormHelpers'
import RegisterForm from './RegisterForm'
import userActions from '../../actions/UserActions'
import userStore from '../../stores/UserStore'
import toastr from 'toastr'
export default class RegisterUserPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            user: {
                email: 'test@test.com',
                password: '123456',
                confirmPassword: '123456',
                name: 'test'
            },
            error: ''
        }
        this.handleUserRegistration = this.handleUserRegistration.bind(this)

        userStore.on(
            userStore.eventTypes.USER_REGISTERED,
            this.handleUserRegistration
        )
    }
    componentWillUnmount() {
        userStore.removeListener(
            userStore.eventTypes.USER_REGISTERED,
            this.handleUserRegistration
        )
    }
    handleUserChange(event) {
        FormHelpers.handleFormChange.bind(this)(event, 'user')
    }
    handleUserForm(event) {
        event.preventDefault()
        if (!this.validateUser()) {
            return
        }
        userActions.register(this.state.user)

    }
    handleUserRegistration(data) {
        if (!data.success) {
            let firstError = FormHelpers.getFirstError(data)

            this.setState({
                error: firstError
            })
        } else {
            toastr.success(data.message)
            this.props.history.push('/users/login')
        }
    }
    validateUser() {
        const user = this.state.user
        let formIsValid = true
        let error = ''
        if (user.password !== user.confirmPassword) {
            error = 'Password and condirm password do not match'
            formIsValid = false
        }
        if (error) {
            this.setState({ error })
        }
        return formIsValid
    }
    render() {
        return (
            <div>
                <h1>Register User</h1>
                <RegisterForm
                    user={this.state.user}
                    error={this.state.error}
                    onChange={this.handleUserChange.bind(this)}
                    onSave={this.handleUserForm.bind(this)}
                />
            </div>
        )
    }
}