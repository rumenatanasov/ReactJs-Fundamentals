import React from 'react'
import HotelActions from '../../actions/HotelActions'
import HotelStore from '../../stores/HotelStore'
import Auth from '../users/Auth'
import VoteAction from '../../actions/VoteAction'
import VoteStore from '../../stores/VoteStore'
import HotelReviews from './reviews/HotelReview'
import toastr from 'toastr'
export default class HotelDetails extends React.Component {
    constructor(props) {
        super(props)
        const id = this.props.match.params.id
        this.state = {
            id: id,
            hotel: {},
            error: ''
        }
        this.hotelDetailsFetched = this.hotelDetailsFetched.bind(this)
        HotelStore.on(HotelStore.eventTypes.HOTEL_DETAILS_FETCHED, this.hotelDetailsFetched)

    }
    componentWillMount() {

        HotelActions.details(this.state.id)
    }
    componentWillUnmount() {
        HotelStore.removeListener(HotelStore.eventTypes.HOTEL_DETAILS_FETCHED, this.hotelDetailsFetched)

    }
    hotelDetailsFetched(hotel) {
        this.setState({
            hotel
        })
    }

    render() {
        return (
            <div>
                <img className='rumen' src={this.state.hotel.image} alt='hotel' />
                <h4>Id: {this.state.id}</h4>
                <h1>Name: {this.state.hotel.name}</h1>
                <h3>Number of Rooms: {this.state.hotel.numberOfRooms}</h3>
                <h3>Parking Slots: {this.state.hotel.parkingSlots}</h3>
                <HotelReviews hotelId={this.state.id} />
                <div>
                </div>
            </div>

        )
    }
}