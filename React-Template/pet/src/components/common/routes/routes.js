import React from 'react'
import { Route, Switch } from 'react-router-dom'
import ListPetsPage from '../../pets/ListPetsPage'
import RegisterPage from '../../users/RegisterPage'
import LoginPage from '../../users/LoginPage'
import Logout from '../../users/LogoutPage'
const Routes = () => (
    <Switch>
        <Route exact path='/' component={ListPetsPage} />
        <Route path='/users/register' component={RegisterPage} />
        <Route path='/users/login' component={LoginPage} />
        <Route path='/users/logout' component={Logout} />
    </Switch>
        )
    
export default Routes
