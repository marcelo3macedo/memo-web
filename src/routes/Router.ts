import React from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";

import { Layouts } from "@config/Layouts";
import { isAuthNeeded } from "@services/Navigation/auth";
import { checkAuthAction } from "@store/modules/auth/actions";

export default function RouteWrapper({
    component: Component,
    layout = Layouts.Main,
    ...rest
}){
    const dispatch = useDispatch();

    if (isAuthNeeded(layout.name)) {
        dispatch(checkAuthAction());
    }

    return (React.createElement(Route, Object.assign({}, rest, { 
      render: props => (
        React.createElement(layout, null,
        React.createElement(Component, Object.assign({}, props)))) 
    })));
}

RouteWrapper.propTypes = {
    layout: Layouts,
    component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired
}

RouteWrapper.defaultProps = {
    layout: Layouts.Main
}