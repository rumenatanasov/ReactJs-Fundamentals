import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import HomePage from './components/HomePage'
import AboutPage from './components/AboutPage'
import NotFoundPage from './components/NotFoundPage'
import Rumen from './components/Rumen'
import SomeParamPage from './components/SomeParamPage'
const Routes = () => (
    <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/about' component={AboutPage} />
        <Route path='/rumen' component={Rumen} />
        <Route path='/page/with/:id' component={SomeParamPage} />
        <Route path='/contact' render={props => (
            <h3>From render</h3>
        )} />
        <Redirect from='/about-us' to='/about' />
            <Route component={NotFoundPage} />
</Switch>
)
export default Routes