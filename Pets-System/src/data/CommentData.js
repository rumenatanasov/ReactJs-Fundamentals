import Auth from '../components/users/Auth'
import Data from './Data'
const baseUrl = 'http://localhost:5000/pets/details'
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
class CommentData {
     static create (message, id) {
    const options = getOptions()
    options.headers.Authorization = `bearer ${Auth.getToken()}`
    options.body = JSON.stringify({message})
    return window.fetch(`${baseUrl}/${id}/comments/create`, options)
     .then(handleResponseJson)
  }
    static getAll(id) {
        return Data.get(`${baseUrl2}/${id}/comments`, id)
    }
}
export default CommentData
