import React from 'react'
import petActions from '../../actions/PetActions'
import petStore from '../../stores/PetStore'
import commentsStore from '../../stores/CommentsStore'
import commentsActions from '../../actions/CommentActions'
import toastr from 'toastr'
export default class PetDetails extends React.Component {
    constructor(props) {
        super(props)
        let id = this.props.match.params.id
        this.state = {
            pet: {
                id
            },
            message: '',
            error: '',
            comments: []
        }
        this.petDetailsFetched = this.petDetailsFetched.bind(this)
        this.handleCommentCreation = this.handleCommentCreation.bind(this)
        this.commentsFetched = this.commentsFetched.bind(this)
        petStore.on(petStore.eventTypes.PET_DETAILS_FETCHED, this.petDetailsFetched)
        commentsStore.on(commentsStore.eventTypes.COMMENT_CREATED, this.handleCommentCreation)
        commentsStore.on(commentsStore.eventTypes.COMMENTS_FETCHED, this.commentsFetched)
    }
    componentWillMount() {
        petActions.details(this.state.pet.id)
        commentsActions.getAll(this.state.pet.id)

    }
    componentWillUnmount() {
        petStore.removeListener(petStore.eventTypes.PET_DETAILS_FETCHED, this.petDetailsFetched)
        commentsStore.removeListener(commentsStore.eventTypes.COMMENT_CREATED, this.handleCommentCreation)
        commentsStore.removeListener(commentsStore.eventTypes.COMMENTS_FETCHED, this.commentsFetched)
    }
    petDetailsFetched(data) {
        this.setState({
            pet: data
        })
    }
    commentsFetched(data) {
        this.setState({
            comments: data
        })
    }
    handleCommentChange(ev) {
        let value = ev.target.value
        this.setState({
            message: value
        })
    }
    handleCommentForm(ev) {
        ev.preventDefault()
        commentsActions.create(this.state.message, this.state.pet.id)
    }
    handleCommentCreation(data) {
        if (!data.success) {
            let firstError = data.message
            if (data.errors) {
                firstError = Object.keys(data.errors).map(k => data.errors[k])[0]
            }
            this.setState({
                error: firstError
            })
        } else {
            toastr.success(data.message)
            this.setState({
                message: ''
            })
            commentsActions.getAll(this.state.pet.id)
        }
    }
    render() {
        let comments = this.state.comments.map((c, i) => (
            <div key={i}>{c.message} - {c.user}</div>
        ))
        return (
            <div>
                <img src={this.state.pet.image} alt='pet' />
                <h2>Name: {this.state.pet.name}</h2>
                <p>Age: {this.state.pet.age}</p>
                <p>Type: {this.state.pet.type}</p>
                {this.state.pet.breed ? <p>Breed: {this.state.pet.breed}</p> : null}
                <h3>Add Comment</h3>
                <form>
                    <div>{this.state.error}</div>
                    <textarea
                        name='message'
                        value={this.state.message}
                        rows='10'
                        cols='80'
                        onChange={this.handleCommentChange.bind(this)} />
                    <input type='submit' onClick={this.handleCommentForm.bind(this)} />
                </form>
                <h3>Comments:</h3>
                {comments}
            </div>
        )
    }
}