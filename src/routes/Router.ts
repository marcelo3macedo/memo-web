import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";

import { Layouts } from "@config/Layouts";
import { isAuthNeeded } from "@services/Navigation/auth";
import { RootState } from "@store/modules/rootReducer";
import { navigatePush } from "@store/modules/navigate/actions";
import { PATH_SIGN_IN } from "@services/Navigation";

export default function RouteWrapper({
    component: Component,
    layout = Layouts.Main,
    ...rest
}){
    const dispatch = useDispatch();
    const { signed } = useSelector((state:RootState) => state.auth);

    if (isAuthNeeded(layout.name) && !signed) {
        dispatch(navigatePush({ path: PATH_SIGN_IN }));
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