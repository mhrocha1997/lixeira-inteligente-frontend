import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Register from './pages/register';
import Logon from './pages/logon';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Register}/>
                <Route path="/" component = {Logon}/>
            </Switch>
        </BrowserRouter>

    );
}