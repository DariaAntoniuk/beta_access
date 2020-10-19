import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { accessKeySelectors } from 'redux/accessKey';
import { paths } from 'routes';

const PrivateRoute = ({ component: Component, hasAccessKey, ...routeProp }) => (
    <Route
        {...routeProp}
        render={props => (hasAccessKey ? <Component {...props} /> : <Redirect to={paths.betAccess} />)}
    />
);

const mapStateToProps = state => ({
    hasAccessKey: accessKeySelectors.getAccessKey(state),
});

export default connect(mapStateToProps)(PrivateRoute);
