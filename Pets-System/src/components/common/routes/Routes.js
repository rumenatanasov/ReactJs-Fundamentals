import React from 'react'
import {Switch, Route} from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import ListPetsPage from '../../pets/ListPetsPage'
import RegisterPage from '../../users/RegisterUserPage'
import LoginPage from '../../users/LoginUserPage'
import Logout from '../../users/LogoutPage'
import Pets from '../../pets/createPetPage'
import PetDetails from '../../pets/PetDetails'
const Routes = () => (
<Switch>
    <Route path='/' exact component={ListPetsPage} />
    <Route path='/users/register' component={RegisterPage} />
    <Route path='/users/login' component={LoginPage} />
    <PrivateRoute path='/users/logout' component={Logout} />
    <PrivateRoute path='/pets/add' component={Pets} />
    <Route path='/pets/details/:id' component={PetDetails} />
</Switch>
)
export default Routes