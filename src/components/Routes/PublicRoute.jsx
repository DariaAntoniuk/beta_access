import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { accessKeySelectors } from 'redux/accessKey';

import { paths } from 'routes';

const PublicRoute = ({ component: Component, hasAccessKey, ...routeProp }) => (
    <Route
        {...routeProp}
        render={props =>
            hasAccessKey && routeProp.restricted ? <Redirect to={paths.home} /> : <Component {...props} />
        }
    />
);

const mapStateToProps = state => ({
    hasAccessKey: accessKeySelectors.getAccessKey(state),
});

export default connect(mapStateToProps)(PublicRoute);
