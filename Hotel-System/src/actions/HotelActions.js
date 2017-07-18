import dispatcher from '../dispatcher'

const hotelActions = {
    types: {
        CREATE_HOTEL: 'CREATE_HOTEL',
        GET_ALL: 'GET_ALL',
        DETAILS_HOTEL: 'DETAILS_HOTEL',
        REVIEWS_HOTEL: 'REVIEWS_HOTEL',
        ALL_REVIEWS: 'ALL_REVIEWS'
    },
    create (hotel) {
        dispatcher.dispatch({
            type: this.types.CREATE_HOTEL,
            hotel
        })
    },
    getAll() {
        dispatcher.dispatch({
            type: this.types.GET_ALL
        })
    },
    details(id) {
        dispatcher.dispatch({
            type: this.types.DETAILS_HOTEL,
            id
        })
    },
    addReview(review, id) {
        dispatcher.dispatch({
            type: this.types.REVIEWS_HOTEL,
            review,
            id
        })
    },
    allReviews(id) {
    dispatcher.dispatch({
        type: this.types.ALL_REVIEWS,
        id
        
    })
    }
}
export default hotelActions
