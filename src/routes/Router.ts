import React from "react";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";

import { Layouts } from "@config/Layouts";

export default function RouteWrapper({
    component: Component,
    layout = Layouts.Main,
    ...rest
}){
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
    layout: Layouts,
}