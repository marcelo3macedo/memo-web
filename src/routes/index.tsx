import React from "react";
import { Switch } from "react-router-dom";

import Router from "./Router";
import { Layouts } from "@config/Layouts";
import SignIn from "@pages/auth/SignIn";
import SignUp from "@pages/auth/SignUp";
import Recover from "@pages/auth/Recover";
import Recovered from "@pages/auth/Recovered";
import Home from "@pages/main/Home";
import Deck from "@pages/main/Deck";

import { PATH_FORGOT_PASSWORD, PATH_SIGN_IN, PATH_SIGN_UP, PATH_RECOVERED } from "@services/Navigation";

export default function Routes() {
    return (
        <Switch>         
            <Router path="/" exact component={Home} layout={Layouts.Main} />    
            
            <Router path={PATH_SIGN_IN} exact component={SignIn} layout={Layouts.Auth}/>    
            <Router path={PATH_FORGOT_PASSWORD} component={Recover} layout={Layouts.Auth}/>
            <Router path={PATH_SIGN_UP} component={SignUp} layout={Layouts.Auth}/>   
            <Router path={PATH_RECOVERED} component={Recovered} layout={Layouts.Auth}/>    

            <Router path="/" exact component={Home} />     
            <Router path="/" exact component={Deck} />   
        </Switch>
    );
}