import React from "react";
import { Switch } from "react-router-dom";

import Router from "./Router";
import Login from "@pages/Login";

export default function Routes() {
    return (
        <Switch>
            <Router path="/" exact component={Login} />
        </Switch>
    );
}