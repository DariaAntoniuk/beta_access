import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { accessKeySelectors } from 'redux/accessKey';

import { paths } from 'routes';

const PublicRoute = ({ component: Component, restricted, ...routeProps }) => {
    const hasAccessKey = useSelector(accessKeySelectors.getAccessKey);

    return (
        <Route
            {...routeProps}
            render={props => (hasAccessKey && restricted ? <Redirect to={paths.home} /> : <Component {...props} />)}
        />
    );
};

export default PublicRoute;
