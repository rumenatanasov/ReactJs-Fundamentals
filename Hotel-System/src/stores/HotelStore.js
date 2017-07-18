import {EventEmitter} from 'events'
import dispatcher from '../dispatcher'
import HotelActions from '../actions/HotelActions'
import HotelData from '../data/HotelData'

class HotelStore extends EventEmitter {
    create (hotel) {
        HotelData.create(hotel).then(data => this.emit(this.eventTypes.HOTEL_CREATED, data))
    }
    getAll() {
        HotelData.getAll().then(data => this.emit(this.eventTypes.HOTEL_FETCHED, data))
    }
     details (id) {
    HotelData.details(id)
      .then(data => this.emit(this.eventTypes.HOTEL_DETAILS_FETCHED, data))
  }
  addReview(review, id) {
      HotelData.addReview(review, id).then(data => this.emit(this.eventTypes.HOTEL_REVIEW_CREATED, data))
  }
  allReviews(id) {
      HotelData.allReviews(id).then(data => this.emit(this.eventTypes.REVIEWS_RETRIEVED, data))
  }

    handleAction(action) {
        switch(action.type) {
            case HotelActions.types.CREATE_HOTEL: {
                this.create(action.hotel)
                break
            }
            case HotelActions.types.GET_ALL: {
                this.getAll()
                break
            }
            case HotelActions.types.DETAILS_HOTEL: {
                this.details(action.id)
                break
            }
            case HotelActions.types.REVIEWS_HOTEL: {
                this.addReview(action.review, action.id)
                break
            }
            case HotelActions.types.ALL_REVIEWS: {
                this.allReviews(action.id)
                break
            }
            default: break
        }
    }
}
let hotelStore = new HotelStore()
hotelStore.eventTypes = {
    HOTEL_CREATED: 'hotel_created',
    HOTEL_FETCHED: 'hotel_fetched',
    HOTEL_DETAILS_FETCHED: 'hotel_details_fetched',
    HOTEL_REVIEW_CREATED: 'hotel_review_created',
    REVIEWS_RETRIEVED: 'reviews_retrieved'
}
dispatcher.register(hotelStore.handleAction.bind(hotelStore))
export default hotelStore
