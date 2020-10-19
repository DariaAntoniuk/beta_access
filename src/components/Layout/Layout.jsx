import React from 'react';
import { connect } from 'react-redux';

import { accessKeySelectors } from 'redux/accessKey';
import { SiteBar } from '../SiteBar';

import { Styled } from './Layout.styles';

const Layout = ({ hasAccessKey, children }) => (
    <Styled.Layout>
        {hasAccessKey && <SiteBar />}

        {children}
    </Styled.Layout>
);

const mapStateToProps = state => ({
    hasAccessKey: accessKeySelectors.getAccessKey(state),
});

export default connect(mapStateToProps)(Layout);
