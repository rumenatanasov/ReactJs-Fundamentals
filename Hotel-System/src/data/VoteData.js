import Auth from '../components/users/Auth'
const baseUrl = 'http://localhost:5000/hotels/details'
const baseUrl2 = 'pets/details'
let getOptions = () => ({
    method: 'POST',
    mode: 'cors',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
})
let handleResponseJson = (res) => res.json()
class VoteData {
     static create (reviews, id) {
    const options = getOptions()
    options.headers.Authorization = `bearer ${Auth.getToken()}`
    options.body = JSON.stringify({reviews})
    return window.fetch(`${baseUrl}/${id}/reviews/create`, options)
     .then(handleResponseJson)
  }
}
export default VoteData
