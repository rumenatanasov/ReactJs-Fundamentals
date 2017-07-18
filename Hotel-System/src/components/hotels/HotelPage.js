import React from 'react'
import Auth from '../users/Auth'
import HotelForm from './HotelForm'
import HotelActions from '../../actions/HotelActions'
import HotelStore from '../../stores/HotelStore'
import FormHelpers from '../common/forms/FormHelpers'
import toastr from 'toastr'

export default class HotelPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            hotel: {
                name: '',
                location: '',
                description: '',
                numberOfRooms: '',
                image: '',
                parkingSlots: ''

            },
            error: ''
        }
        this.handleHotelCreation = this.handleHotelCreation.bind(this)
        HotelStore.on(HotelStore.eventTypes.HOTEL_CREATED, this.handleHotelCreation)
    }
    componentWillUnmount() {
        HotelStore.removeListener(HotelStore.eventTypes.HOTEL_CREATED, this.handleHotelCreation)
    }
    handleHotelChange(ev) {
        FormHelpers.handleFormChange.bind(this)(ev, 'hotel')
    }
    handleHotelForm(ev) {
        ev.preventDefault()
        HotelActions.create(this.state.hotel)
    }
    handleHotelCreation(data) {
        console.log(data)
        if (!data.success) {
            let firstError = FormHelpers.getFirstError(data)

            this.setState({
                error: firstError
            })
        } else {
            toastr.success(data.message)
            this.props.history.push(`/hotels/details/${data.hotel.id}`)
        }
    }
    render() {
        return (
            <div>
                <h1>Add Hotel</h1>
                <HotelForm
                hotel={this.state.hotel}
                error={this.state.error}
                onChange={this.handleHotelChange.bind(this)}
                onSave={this.handleHotelForm.bind(this)} />
            </div>
        )
    }
}