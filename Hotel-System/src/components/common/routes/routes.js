import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Privateroutes from './PrivateRoutes'
import ListHotelsPage from '../../hotels/ListHotelsPage'
import RegisterPage from '../../users/RegisterPage'
import LoginPage from '../../users/LoginPage'
import Logout from '../../users/LogoutPage'
import HotelPage from '../../hotels/HotelPage'
import HotelDetails from '../../hotels/HotelDetails'
import UserDetails from '../../users/UserDetails'
const Routes = () => (
    <Switch>
        <Route exact path='/' component={ListHotelsPage} />
        <Route path='/users/register' component={RegisterPage} />
        <Route path='/users/login' component={LoginPage} />
        <Route path='/users/logout' component={Logout} />
        <Route path='/hotels/create' component={HotelPage} />
        <Privateroutes path='/hotels/details/:id' component={HotelDetails} />
        <Privateroutes path='/users/details/:id' component={UserDetails} />
    </Switch>
        )
    
export default Routes
