import React from 'react'
import {Link} from 'react-router-dom'
import queryString from 'query-string'
import petActions from '../../actions/PetActions'
import petStore from '../../stores/PetStore'
export default class ListPetsPage extends React.Component {
    constructor(props) {
        super(props)
        let query = queryString.parse(this.props.location.search)
        let page = Number(query.page, 10) || 1
        this.state = {
            pets: [],
            page: page
        }
        this.handlePetsFetching = this.handlePetsFetching.bind(this)
        petStore.on(petStore.eventTypes.PETS_FETCHED,
            this.handlePetsFetching)
    }
    componentDidMount() {
        petActions.all(this.state.page)
    }
    componentWillUnmount() {
        petStore.removeListener(
            petStore.eventTypes.PETS_FETCHED,
            this.handlePetsFetching
        )
    }
    handlePetsFetching(data) {
        this.setState({
            pets: data
        })
    }
    goToPrevPage() {
        if (this.state.page === 1) {
            return
        }
        let page = this.state.page
        page--
        this.setState({ page })
        this.props.history.push(`/?page=${page}`)
        petActions.all(page)
    }

    goToNextPage() {
        if (this.state.pets.length < 4) {
            return
        }
        let page = this.state.page
        page++
        this.setState({ page })
        this.props.history.push(`/?page=${page}`)
        petActions.all(page)

    }
    render() {
        let pets = 'No pets available'

        if (this.state.pets.length > 0) {
            pets = this.state.pets.map(pet => (
                <div key={pet.id}>
                    {pet.id} - <Link to={`/pets/details/${pet.id}`}>{pet.name}</Link>
                </div>
            )

            )
        }

        return (
            <div>
                <h1>All Pets</h1>
                {pets}
                <div>
                    <button onClick={this.goToPrevPage.bind(this)}>Prev</button>
                    <button onClick={this.goToNextPage.bind(this)}>Next</button>
                </div>
            </div>
        )
    }
}
