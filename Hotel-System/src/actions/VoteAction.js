import dispatcher from '../dispatcher'
const voteActions = {
    types: {
        CREATE_VOTE: 'CREATE_VOTE'
    },
    create(reviews, id) {
        dispatcher.dispatch({
            type: this.types.CREATE_VOTE,
            reviews,
            id
        })
    }
}
export default voteActions
