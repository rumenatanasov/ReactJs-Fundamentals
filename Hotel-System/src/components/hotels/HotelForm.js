import React from 'react'
import Input from '../common/forms/input'

const HotelForm = (props) => (
    <form>
        <div>{props.error}</div>
        <Input
        name='name'
        placeholder='Hotel Name'
        onChange={props.onChange}
        value={props.hotel.name} />
        <br />
        <Input
        name='location'
        placeholder='location'
        onChange={props.onChange}
        value={props.hotel.location} />
        <br />
        <Input 
        name='description'
        placeholder='description'
        onChange={props.onChange}
        value={props.hotel.description} />
        <br />
        <Input 
        name='numberOfRooms'
        type='number'
        placeholder='Number of rooms'
        onChange={props.onChange}
        value={props.hotel.numberOfRooms} />
        <br />
        <Input 
        name='image'
        type='url'
        placeholder='Image'
        onChange={props.onChange}
        value={props.hotel.image} />
        <br />
        <Input 
        name='parkingSlots'
        type='number'
        placeholder='Parking Slots'
        onChange={props.onChange}
        value={props.hotel.parkingSlots} />
        <br />
        <input type='submit' onClick={props.onSave} />
    </form>
)
export default HotelForm
