import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { accessKeySelectors } from 'redux/accessKey';
import { paths } from 'routes';

const PrivateRoute = ({ component: Component, ...routeProp }) => {
    const hasAccessKey = useSelector(state => accessKeySelectors.getAccessKey(state));

    return (
        <Route
            {...routeProp}
            render={props => (hasAccessKey ? <Component {...props} /> : <Redirect to={paths.betAccess} />)}
        />
    );
};

export default PrivateRoute;
