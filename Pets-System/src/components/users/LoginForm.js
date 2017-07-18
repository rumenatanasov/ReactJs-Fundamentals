import React from 'react'
import Input from '../common/forms/input'
const LoginForm = (props) => (
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
   <Input
    name='password'
    type='password'
    placeholder='Password'
    onChange={props.onChange}
    value={props.user.password}    
     />
    <br />
    <input type='submit' onClick={props.onSave} />
</form>
)
export default LoginForm
