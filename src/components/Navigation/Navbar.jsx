import React from 'react'
import { routes } from '../../constant'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <SNavbar>
      <NavContainer>
        <NavbarBrand>LOGO</NavbarBrand>
        <RightNav>
          <NavRoutes>
            {
              routes.map((route) => (
                <NavRoute to={route.link} key={route.name}>{route.name}</NavRoute>
              ))
            }
          <LoginButton>Login</LoginButton>
          </NavRoutes>
        </RightNav>
      </NavContainer>
    </SNavbar>
  )
}

export default Navbar


const SNavbar = styled.nav`
  background-color: #6f07f6;
`
const NavContainer = styled.div`
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

`;

const NavRoutes = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
  
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
