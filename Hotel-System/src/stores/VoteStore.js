import {EventEmitter} from 'events'
import dispatcher from '../dispatcher'
import VoteAction from '../actions/VoteAction'
import VoteData from '../data/VoteData'

class VoteStore extends EventEmitter {
    create (reviews, id) {
        VoteData.create(reviews, id).then(data => this.emit(this.eventTypes.VOTE_CREATED, data))
    }
    handleActions(action) {
        switch(action.type) {
            case VoteAction.types.CREATE_VOTE: {
                this.create(action.reviews, action.id)
                break
            }
            default: break

        }
    }
}
let voteStore = new VoteStore()
voteStore.eventTypes = {
    VOTE_CREATED: 'vote_created'
}
dispatcher.register(voteStore.handleActions.bind(voteStore))
export default voteStore
