import React from 'react';
import { useSelector } from 'react-redux';

import { accessKeySelectors } from 'redux/accessKey';
import SiteBar from '../SiteBar';

import { Styled } from './Layout.styles';

const Layout = ({ children }) => {
    const hasAccessKey = useSelector(accessKeySelectors.getAccessKey);

    return (
        <Styled.Layout>
            {hasAccessKey && <SiteBar />}

            {children}
        </Styled.Layout>
    );
};

export default Layout;
