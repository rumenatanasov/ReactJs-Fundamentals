import Data from './Data'
const baseUrl = 'pets'
class PetData {
    static all (page) {
        page = page || 1
        return Data.get(`${baseUrl}/all?page=${page}`)
    }
    static create (pet) {
        return Data.post(`${baseUrl}/create`, pet, true)
    }
    static details(id) {
        return Data.get(`${baseUrl}/details/${id}`, id)
    }
}
export default PetData
