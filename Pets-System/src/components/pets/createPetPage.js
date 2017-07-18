import React from 'react'
import CreatePetForm from './createPetForm'
import FormHelpers from '../common/forms/FormHelpers'
import petActions from '../../actions/PetActions'
import petStore from '../../stores/PetStore'
import toastr from 'toastr'
export default class CreatePetPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            pet: {
                name: '',
                age: '',
                type: '',
                image: '',
                breed: ''
            },
            error: ''
        }
        this.handlePetCreation = this.handlePetCreation.bind(this)
        petStore.on(
            petStore.eventTypes.PET_CREATED,
            this.handlePetCreation
        )
    }
    componentWillUnmount() {
        petStore.removeListener(
            petStore.eventTypes.PET_CREATED,
            this.handlePetCreation
        )
    }
    handlePetChange(event) {
        FormHelpers.handleFormChange.bind(this)(event, 'pet')
    }
    handlePetForm(event) {
        event.preventDefault()

        // validate form data

        petActions.create(this.state.pet)
    }
    handlePetCreation(data) {
        console.log(data)
        if(!data.success) {
        let firstError = FormHelpers.getFirstError(data)

        this.setState({
            error: firstError
        })
        } else {
            toastr.success(data.message)
            this.props.history.push(`/pets/details/${data.pet.id}`)
        }
    }
    render() {
        return (
            <div>
                <h1>Add Pet</h1>
                <CreatePetForm
                    pet={this.state.pet}
                    error={this.state.error}
                    onChange={this.handlePetChange.bind(this)}
                    onSave={this.handlePetForm.bind(this)}
                />
            </div>
        )
    }
}