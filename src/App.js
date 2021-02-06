import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import Login from './pages/Login'
import Signup from './pages/Signup'
import Room from './pages/Room'

import {AuthProvider} from './AuthService';
import LoggedInRoute from './LoggedInRoute'


const App = () => {
    return (
        //<AuthProvider>でラップし、子孫コンポーネント全てでログイン済みユーザーのデータにアクセス可能
        <AuthProvider>
           <Router>
            <Switch>
            <LoggedInRoute exact path='/' component={Room} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/signup' component={Signup} />
            </Switch>
        </Router>   
        </AuthProvider>
        
    )
}

export default App


