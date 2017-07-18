import React from 'react'
import Input from '../common/forms/input'
const LoginForm = (props) => (
    <form>
        <div>{props.error}</div>
        <Input
            name='name'
            placeholder='Name'
            onChange={props.onChange}
            value={props.pet.name}
        />
        <br />
        <Input
            name='image'
            type='url'
            placeholder='Image'
            onChange={props.onChange}
            value={props.pet.image}
        />
        <br />
        <Input
            name='age'
            type='number'
            placeholder='Age'
            onChange={props.onChange}
            value={props.pet.age}
        />
        <br />
        <div>
            <label htmlFor='type'>Type</label>
            <select name='type' value={props.pet.type} onChange={props.onChange}>
                <option value='Cat'>Cat</option>
                <option value='Dog'>Dog</option>
                <option value='Other'>Other</option>
            </select>
        </div>
        <br />
          <br />
        <Input
            name='breed'
            placeholder='Breed'
            onChange={props.onChange}
            value={props.pet.breed}
        />
        <br />
        <input type='submit' onClick={props.onSave} />
    </form>
)
export default LoginForm
