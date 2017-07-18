import dispatcher from '../dispatcher'

let commentsAction = {
    types: {
        ADD_COMMENT: 'ADD_COMMENT',
        GET_ALL: 'GET_ALL'
    },
    create (message, id) {
        dispatcher.dispatch({
            type: this.types.ADD_COMMENT,
            message,
            id
        })
    },
    getAll (id)  {
        dispatcher.dispatch({
            type: this.types.GET_ALL,
            id
        })
    }
}
export default commentsAction
