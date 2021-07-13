import React from "react";
import { Switch } from "react-router-dom";

import Router from "./Router";
import SignIn from "@pages/SignIn";
import SignUp from "@pages/SignUp";
import Recover from "@pages/Recover";
import Recovered from "@pages/Recovered";

export default function Routes() {
    return (
        <Switch>             
            <Router path="/" exact component={Recovered} />
            <Router path="/" exact component={Recover} />
            <Router path="/" exact component={SignUp} />                 
            <Router path="/" exact component={SignIn} />
        </Switch>
    );
}