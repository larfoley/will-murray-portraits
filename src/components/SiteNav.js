import React from 'react';
import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

const activeStyle = {
  fontWeight: 'bold',
}

const NavWrapper = styled.nav`
  @media (min-width: 600px) {
    padding: 1em 0;
  }
  padding: 0;
  background-color: white;
  overflow: auto;
`
const NavList = styled.ul`
  text-align: center;
  margin: 0;
  float: left;
`
const NavItem = styled.li`
  display: inline-block;
  @media (max-width: 600px) {
    width: 33.333%;
  }
`
const NavLink = styled(Link)`
  color: black;
  text-align: center;
  text-decoration: none;
  padding: 1em .25em;
  border-bottom: 0 solid;
  min-width: 90px;
  display: inline-block;
  transition: .2s;
  font-size: .95em;
  margin-right: 7px;

  &:hover {
    font-weight: bold;

  }

`

const SiteNav = () => {
  return (
    <NavWrapper className="SiteNav">
      <NavList>
        <NavItem>
          <NavLink exact to="/" activeStyle={activeStyle}>Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/about" activeStyle={activeStyle}>About</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/contact" activeStyle={activeStyle}>Contact</NavLink>
        </NavItem>
      </NavList>
    </NavWrapper>
  )
}

export default SiteNav;
