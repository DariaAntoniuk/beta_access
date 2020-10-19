import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { accessKeySelectors } from 'redux/accessKey';

import { paths } from './routes';

import { PrivateRoute, PublicRoute } from 'components/Routes';
import Layout from 'components/Layout';
import Loader from 'components/Loader';
import Notification from 'components/Notification';
import AboutUsPage from 'views/AboutUsPage';
import BetaAccessPage from 'views/BetaAccessPage';
import HomePage from 'views/HomePage';

const App = () => {
    const isLoading = useSelector(accessKeySelectors.isLoading);
    const error = useSelector(accessKeySelectors.getError);

    return (
        <Layout>
            <Switch>
                <PublicRoute path={paths.betaAccess} exact restricted component={BetaAccessPage} />
                <PrivateRoute path={paths.home} exact component={HomePage} />
                <PrivateRoute path={paths.about} exact component={AboutUsPage} />

                <Redirect to={paths.home} />
            </Switch>

            {isLoading && <Loader align="center" />}
            {!isLoading && error && <Notification message={error} />}
        </Layout>
    );
};

export default App;
