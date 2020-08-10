import React from 'react'
import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom'
import Publication from './pages/Publication/Publication'
import ShareTougth from './pages/Share-Thougth/index'
 
const Navigation = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Publication} />
                <Route path="/share" component= {ShareTougth}/>
            </Switch>
        </BrowserRouter>
    )
}
export default Navigation
