import React from 'react'
import {Route, Switch} from 'react-router-dom'
import HomePage from './components/HomePage'
import AllBooks from './components/AllBooks'
import BooksDetails from './components/BookDetails'
import Authors from './components/Authors'
import AuthorDetails from './components/AuthorDetails'
const Routes = () => (
    <Switch>
       <Route exact path='/' component={HomePage}  />
       <Route path='/book/all' component={AllBooks}  />
       <Route path='/books/:id' component={BooksDetails}  />
       <Route path='/authors/all' component={Authors}  />
       <Route path='/authors/:id' component={AuthorDetails}  />
    </Switch>
)
export default Routes