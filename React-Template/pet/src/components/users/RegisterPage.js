import React from 'react'
import RegisterForm from './RegisterForm'
import FormHelpers from '../common/forms/FormHelpers'
import UserStore from '../../stores/UserStore'
import UserActions from '../../actions/UserActions'
import toastr from 'toastr'
export default class RegisterPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            user: {
                email: '',
                password: '',
                confirmPassword: '',
                name: ''
            },
            error: ''
        }
        this.handleUserRegistration = this.handleUserRegistration.bind(this)
        UserStore.on(
            UserStore.eventTypes.USER_REGISTERED,
            this.handleUserRegistration
        )
    }
    componentWillUnmount() {
        UserStore.removeListener(
            UserStore.eventTypes.USER_REGISTERED,
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
        UserActions.register(this.state.user)
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
            error = 'Passwords do not match'
            formIsValid = false
        }
        if (error) {
            this.setState({error})
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