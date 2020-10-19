import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

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

const App = () => {
    const isLoading = useSelector(state => accessKeySelectors.isLoading(state));
    const hasError = useSelector(state => accessKeySelectors.isError(state));

    return (
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
};

export default App;
