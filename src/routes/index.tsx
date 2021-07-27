import React from "react";
import { Switch } from "react-router-dom";

import Router from "./Router";
import SignIn from "@pages/auth/SignIn";
import SignUp from "@pages/auth/SignUp";
import Recover from "@pages/auth/Recover";
import Recovered from "@pages/auth/Recovered";
import Home from "@pages/main/Home";
import Deck from "@pages/main/Deck";

import { PATH_FORGOT_PASSWORD } from "@services/Navigation";

export default function Routes() {
    return (
        <Switch>         
            <Router path={PATH_FORGOT_PASSWORD} component={Recover} />

            <Router path="/" exact component={SignIn} />    
            <Router path="/signup" component={SignUp} />   
            <Router path="/recovered" component={Recovered} />    

            <Router path="/" exact component={Deck} />   
            <Router path="/" exact component={Home} />     
        </Switch>
    );
}