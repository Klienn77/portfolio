
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <NavContainer scrolled={scrolled}>
      <Logo href="#home">FP</Logo>
      <NavLinks>
        <NavItem href="#about">Sobre</NavItem>
        <NavItem href="#projects">Projetos</NavItem>
        <NavItem href="#experience">Experiência</NavItem>
        <NavItem href="#contact">Contato</NavItem>
      </NavLinks>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  background-color: ${props => props.scrolled ? '#1E3A8A' : 'transparent'};
  transition: background-color 0.3s ease;
  z-index: 1000;
  box-shadow: ${props => props.scrolled ? '0 2px 10px rgba(0,0,0,0.1)' : 'none'};
`;

const Logo = styled.a`
  font-size: 1.8rem;
  font-weight: 700;
  color: white;
  text-decoration: none;
  font-family: 'Montserrat', sans-serif;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
`;

const NavItem = styled.a`
  color: white;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  transition: all 0.3s ease;
  font-family: 'Montserrat', sans-serif;
  
  &:hover {
    color: #FF5722;
  }
`;


// Styled components aqui...

export default Navbar;
