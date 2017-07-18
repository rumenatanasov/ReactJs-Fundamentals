import dispatcher from '../dispatcher'

let authorsAction = {
    deleteAuthor: (id) => {
        dispatcher.dispatch({
            type: 'DELETE_AUTHOR',
            id
        })
    }
}
export default authorsAction