import dispatcher from '../dispatcher'

let commentsAction = {
    deleteComment: (id) => {
        dispatcher.dispatch({
            type: 'DELETE_COMMENT',
            id
        })
    }
}
export default commentsAction
