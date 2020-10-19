import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { paths } from './routes';

import { Layout } from './components/Layout';

import BetaAccessPage from './views/BetaAccessPage';
import HomePage from './views/HomePage';
import AboutUsPage from './views/AboutUsPage';

const App = () => (
    <Layout>
        <Switch>
            <Route path={paths.betAccess} exact component={BetaAccessPage} />
            <Route path={paths.home} exact component={HomePage} />
            <Route path={paths.about} exact component={AboutUsPage} />

            <Redirect to={paths.home} />
        </Switch>
    </Layout>
);

export default App;
