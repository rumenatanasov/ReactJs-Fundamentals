import Data from './Data'
const baseUrl = 'hotels'

class HotelData {
    static create (hotel) {
       return  Data.post(`${baseUrl}/create`, hotel, true)
    }
    static getAll() {
        return Data.get(`${baseUrl}/all`)
    }
    static details(id) {
      return Data.get(`${baseUrl}/details/${id}`, id)
    }
    static addReview(id, review) {
        return Data.post(`${baseUrl}/details/${id}/reviews/create`, review, true)
    }
    static allReviews(id) {
        return Data.get(`${baseUrl}/details/${id}/reviews/`, true)
    }
}
export default HotelData
