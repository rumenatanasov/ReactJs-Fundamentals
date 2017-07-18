import dispatcher from '../dispatcher'

let bookActions = {
    deleteBook: (id) => {
        dispatcher.dispatch({
            type: 'DELETE_BOOK',
            id
        })
    },
    createBook: (id) => {
        dispatcher.dispatch({
            type: 'CREATE_BOOK',
            id
        })
    }
}
export default bookActions
