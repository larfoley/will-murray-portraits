import React from 'react';
import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

const activeStyle = {
  fontWeight: 'bold',
}

const NavWrapper = styled.nav`
  background-color: white;
  padding: 0;
  height: 60px;
  position: fixed;
  width: 100%;
  border-bottom: 1px solid #f5f5f5;
`
const NavList = styled.ul`
  margin: 0;
  @media (max-width: 600px) {
    text-align: center;
  }
`
const NavItem = styled.li`
  display: inline-block;
  vertical-align: middle;
  @media (max-width: 600px) {

  }
`
const NavLink = styled(Link)`
  color: black;
  text-align: center;
  line-height: 60px;
  text-decoration: none;
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
