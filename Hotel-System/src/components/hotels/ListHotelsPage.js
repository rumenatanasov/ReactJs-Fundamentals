import React from 'react'
import {Link} from 'react-router-dom'
import HotelActions from '../../actions/HotelActions'
import HotelStore from '../../stores/HotelStore'
export default class ListHotelsPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            hotels: []
        }
        this.handleHotelsFetching = this.handleHotelsFetching.bind(this)
        HotelStore.on(HotelStore.eventTypes.HOTEL_FETCHED, this.handleHotelsFetching)
    }
    componentDidMount() {
        HotelActions.getAll()
    }
    componentWillUnmount() {
        HotelStore.removeListener(HotelStore.eventTypes.HOTEL_FETCHED, this.handleHotelsFetching)
    }
    handleHotelsFetching(data) {
        this.setState({
            hotels: data
        })
    }
    
    render() {
        let hotels = 'No hotels available'
        if (this.state.hotels.length > 0) {
            hotels = this.state.hotels.map(h => (
                <div key={h.id}>
                    {h.id} - <Link to={`/hotels/details/${h.id}`}>{h.name}</Link>
                </div>
            ))
        }
        return (
            <div>
            <h1>All Hotels</h1>
            {hotels}
            </div>
        )
    }
}