import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { routes } from '../../constant'

const Drawer = ({isOpen, toggleDrawer}) => {
  return (
    <>
        {isOpen && <BackDrop onClick={toggleDrawer} />}
        <SDrawer isOpen={isOpen}>
        <RightNav>
        <NavbarBrand>LOGO</NavbarBrand>
          <NavRoutes onClick={toggleDrawer}>
            {
              routes.map((route) => (
                <NavRoute to={route.link} key={route.name}>{route.name}</NavRoute>
              ))
            }
          </NavRoutes>
          <LoginButton>Login</LoginButton>
        </RightNav>
        </SDrawer>
    </>
  )
}

export default Drawer


const BackDrop = styled.div`
    width: 100%;
    height: 100%;
    z-index: 100;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.2);
    transition: all .3s ease;
`;

const SDrawer = styled.div`
    z-index: 150;
    position: absolute;
    top: 0;
    height: 100vh;
    width: 60%;
    background-color: white;
    transition: all .3s ease;
    transform: translateX(${(props) => (props.isOpen ? "0" : "-100%")});
`;

const RightNav = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem 3rem;
`;

const NavbarBrand = styled.h2`
  font-size: 3rem;
  cursor: pointer;
`;

const NavRoutes = styled.div`
  
`;

const NavRoute = styled(Link)`
  width: fit-content;
  display: flex;
  text-decoration: none;
  color: black;
  font-size: 2.5rem;
  padding: 2rem .5rem;
  cursor: pointer;

`;

const LoginButton = styled.button`
  font-size: 2rem;
  padding: 0.7rem 3rem;
  background-color: white;
  border-radius: 3rem;
  border: 1px solid black;
  transition: .3s ease;
  cursor: pointer;
  align-self: flex-start;

  &:hover{
    border: 1px solid transparent;
    background-color: yellow;
    box-shadow: 0px 0px 10px yellow;
  }

`;
