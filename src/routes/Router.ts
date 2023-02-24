import React from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";

import { Layouts } from "@config/Layouts";
import { isAuthNeeded } from "@services/Navigation/auth";
import { onChangePage } from "@services/Navigation/router";
import { verifyAction } from "@store/mods/auth/actions";

export default function RouteWrapper({
    component: Component,
    layout = Layouts.Main,
    // eslint-disable-next-line react/prop-types
    isPublic = false,
    ...rest
}){
    const dispatch = useDispatch()
    onChangePage()

    if (isAuthNeeded(layout.name) && !isPublic) {
        dispatch(verifyAction());
    }

    return (React.createElement(Route, Object.assign({}, rest, { 
      render: props => (
        React.createElement(layout, null,
        React.createElement(Component, Object.assign({}, props)))) 
    })));
}

RouteWrapper.propTypes = {
    layout: PropTypes.func,
    component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired
}

RouteWrapper.defaultProps = {
    layout: Layouts.Main
}