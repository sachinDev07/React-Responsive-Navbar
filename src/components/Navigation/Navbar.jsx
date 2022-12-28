import React from 'react'
import { routes } from '../../constant'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'

const Navbar = ({ toggleDrawer}) => {
  return (
    <SNavbar>
      <NavContainer>
        <DrawerButton onClick={toggleDrawer} >
          <FaBars />
        </DrawerButton>
        <NavbarBrand>LOGO</NavbarBrand>
        <RightNav>
          <NavRoutes>
            {
              routes.map((route) => (
                <NavRoute to={route.link} key={route.name}>{route.name}</NavRoute>
              ))
            }
          </NavRoutes>
          <LoginButton>Login</LoginButton>
        </RightNav>
      </NavContainer>
    </SNavbar>
  )
}

export default Navbar

const DrawerButton = styled.button`
  all: unset;
  font-size: 3rem;
  display: grid;
  cursor: pointer;

  @media (min-width: 768px) {
    display: none;
  }

`;

const SNavbar = styled.nav`
  background-color: #6f07f6;
`
const NavContainer = styled.div`
  padding: 1rem;
  height: 70px;
  max-width: 1300px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
`;

const NavbarBrand = styled.h2`
  font-size: 3rem;
  cursor: pointer;
`;

const RightNav = styled.div`
  display: flex;
  gap: 2rem;
`;

const NavRoutes = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: none;
  }
  
`;

const NavRoute = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 2rem;
  padding: .5rem;
  transition: all .5s ease;
  
  &:hover{
    color: black;
    background-color: white;
    box-shadow: 0px 0px 10px white;
    border-radius: 1rem;
  }

`;

const LoginButton = styled.button`
  font-size: 2rem;
  padding: 0.7rem 3rem;
  background-color: white;
  border-radius: 3rem;
  border: 1px solid black;
  transition: .3s ease;
  cursor: pointer;

  &:hover{
    border: 1px solid transparent;
    background-color: yellow;
    box-shadow: 0px 0px 10px yellow;
  }

`;
