import React from 'react';

import { paths } from 'routes';

import { Styled } from "./SideBar.styles";

const linkProps = {
    exact: true,
    activeClassName: 'active',
};

const SiteBar = () => (
    <Styled.Header>
        <nav>
            <Styled.NavLink to={paths.home} {...linkProps}>
                Home
            </Styled.NavLink>
            <Styled.NavLink to={paths.about} {...linkProps}>
                About
            </Styled.NavLink>
        </nav>
    </Styled.Header>
);

export default SiteBar;
