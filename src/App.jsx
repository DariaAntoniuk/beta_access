import React from 'react';
import { Switch, Route, Redirect, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import { accessKeySelectors } from './redux/accessKey';

import { paths } from './routes';

import { Layout } from 'components/Layout';
import PublicRoute from 'components/Routes/PublicRoute';
import PrivateRoute from 'components/Routes/PrivateRoute';
import BetaAccessPage from 'views/BetaAccessPage';
import HomePage from 'views/HomePage';
import AboutUsPage from 'views/AboutUsPage';
import { Notification } from 'components/Notification';
import { Loader } from 'components/Loader';

const App = ({ isLoading, hasError }) => (
    <Layout>
        <Switch>
            <PublicRoute path={paths.betAccess} exact restricted component={BetaAccessPage} />
            <PrivateRoute path={paths.home} exact component={HomePage} />
            <PrivateRoute path={paths.about} exact component={AboutUsPage} />

            <Redirect to={paths.home} />
        </Switch>

        {isLoading && <Loader align="center" />}
        {!isLoading && hasError && <Notification message={hasError} />}
    </Layout>
);

const mapStateToProps = state => ({
    isLoading: accessKeySelectors.isLoading(state),
    hasError: accessKeySelectors.isError(state),
});

export default connect(mapStateToProps)(App);
