import React from 'react'
import Input from '../../common/forms/input'
const HotelReviewForm = (props) => (
    <form>
        <div>{props.error}</div>
        <Input
        name='rating'
        type='number'
        placeholder='rating'
        onChange={props.onChange}
        value={props.review.rating} />
        <br />
        <Input
        name='comment'
        placeholder='comment'
        onChange={props.onChange}
        value={props.review.comment} />
        <br />
        <input type='submit' onClick={props.onSave} />
    </form>
)
export default HotelReviewForm
