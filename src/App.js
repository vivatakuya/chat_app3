import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import Login from './pages/Login'
import Signup from './pages/Signup'
import Room from './pages/Room'

const App = () => {
    return (
        <>
           <Router>
            <Switch>
                <Route exact path='/' component= {Room}/>
                <Route exact path='/login' component={Login} />
                <Route exact path='/signup' component={Signup} />
            </Switch>
        </Router>   
        </>
    )
}

export default App


