import React from 'react'
import Input from '../common/forms/input'
const RegisterForm = (props) => (
<form>
    <div>{props.error}</div>
    <Input
    name='email'
    type='email'
    placeholder='E-mail'
    onChange={props.onChange}
    value={props.user.email}  
     />
    <br />
    <label htmlFor='password'>Password</label>
    <input
    type='password'
    name='password'
    placeholder='Password'
    value={props.user.password}
    onChange={props.onChange} />
    <br />
    <label htmlFor='confirmPassword'>Confirm Password</label>
    <input
    type='password'
    name='confirmPassword'
    placeholder='ConfirmPassword'
    value={props.user.confirmPassword}
    onChange={props.onChange} />
    <br />
    <label htmlFor='name'>Name</label>
    <input
    type='text'
    name='name'
    placeholder='Please Enter Name'
    value={props.user.name}
    onChange={props.onChange} />
    <br />
    <input type='submit' onClick={props.onSave} />
</form>
)
export default RegisterForm
