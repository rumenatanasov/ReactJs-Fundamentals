import React from 'react'
import {Route, Switch} from 'react-router-dom'
import HomePage from './components/HomePage'
import AllBooks from './components/AllBooks'
import AllAuthors from './components/AllAuthors'
import BookDetailsPage from './components/BookDetailsPage'
import AuthorDetails from './components/AuthorDetails'

const Routes = () => (
    <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/books/all' component={AllBooks} />
        <Route path='/authors/all' component={AllAuthors} />
        <Route path='/books/:id' component={BookDetailsPage} />
        <Route path='/authors/:id' component={AuthorDetails} />
    </Switch>
)
export default Routes