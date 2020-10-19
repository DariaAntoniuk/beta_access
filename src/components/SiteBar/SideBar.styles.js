import styled from 'styled-components';
import { NavLink as DefaultNavLink } from 'react-router-dom';

const Header = styled.header`
    top: 0;
    left: 0;
    position: sticky;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    background-color: #fff;
    min-height: 64px;
    border-bottom: 2px solid #a8a8a8;
`;

const NavLink = styled(DefaultNavLink)`
    text-decoration: none;
    font-size: 18px;
    padding: 0 5px;
    color: grey;
    &.active {
        color: palevioletred;
    }
`;

export const Styled = { Header, NavLink };
