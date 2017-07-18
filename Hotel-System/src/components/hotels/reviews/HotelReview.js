import React from 'react'
import HotelReviewsForm from './HotelReviewsForm'
import HotelActions from '../../../actions/HotelActions'
import HotelStore from '../../../stores/HotelStore'
import FormHelpers from '../../common/forms/FormHelpers'
class HotelReviews extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            newReview: {
                rating: 0,
                comment: ''
            },
            reviews: [],
            error: ''

        }
        this.handleReviewsRetrieved = this.handleReviewsRetrieved.bind(this)
        this.handleReviewAdded = this.handleReviewAdded.bind(this)
        HotelStore.on(HotelStore.eventTypes.HOTEL_REVIEW_CREATED, this.handleReviewAdded)
        HotelStore.on(HotelStore.eventTypes.HOTEL_REVIEWS_RETRIEVED, this.handleReviewsRetrieved)
    }
    componentDidMount() {
        HotelActions.allReviews(this.props.hotelId)
    }
    componentWillUnmount() {
        HotelStore.removeListener(HotelStore.eventTypes.HOTEL_REVIEW_CREATED, this.handleReviewAdded)
        HotelStore.removeListener(HotelStore.eventTypes.HOTEL_REVIEWS_RETRIEVED, this.handleReviewsRetrieved)
    }

    handleReviewsRetrieved(reviews) {
        this.setState({reviews})
    }
   handleReviewAdded(data) {
    console.log(data)
   }
    handleReviewChange(event) {
        FormHelpers.handleFormChange.bind(this)(event, 'newReview')
    }
    handleReviewSave(event) {
        event.preventDefault()
        const rating = Number(this.state.newReview.rating, 10)

        if (!rating || rating < 1 || rating > 5) {
            this.setState({
                error: 'Rating must be between 1 and 5'
            })
            return
        }
        HotelActions.addReview(this.props.hotelId, this.state.newReview)
    }
    render() {
        let reviews = ''
        if (this.state.reviews.length > 0) {
            reviews = this.state.reviews.map((review, index) => (
                <div key={index}>{review.user} {review.rating}</div>
            ))
        }
            return (
                <div>
                    <h4>Your opinion about this hotel pleaseeee</h4>
                    <HotelReviewsForm
                        review={this.state.newReview}
                        error={this.state.error}
                        onChange={this.handleReviewChange.bind(this)}
                        onSave={this.handleReviewSave.bind(this)} />
                    <div>
                        {reviews}
                    </div>
                </div>
            )
    }
}
export default HotelReviews
