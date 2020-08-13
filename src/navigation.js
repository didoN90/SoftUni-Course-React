import React from 'react'
import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom'
import Publication from './pages/Publication/Publication'
import ShareTougth from './pages/Share-Thougth/index'
import Login from './pages/login/index'
import Register from './pages/register/index'
import ProfilePage from './pages/profile/index'
import Form from './pages/form/index'
import ErrorPage from './pages/error'
 
const Navigation = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Publication} />
                <Route path="/share" component= {ShareTougth}/>
                <Route path="/login" component= {Login}/>
                <Route path="/register" component= {Register}/>
                <Route path="/profile/:userid" component= {ProfilePage}/>
                <Route path="/form" component= {Form}/>
                <Route  component= {ErrorPage}/>

            </Switch>
        </BrowserRouter>
    )
}
export default Navigation
