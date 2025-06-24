
import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <Copyright>© {new Date().getFullYear()} Fabiano Pedroso. Todos os direitos reservados.</Copyright>
      </FooterContent>
    </FooterContainer>
   );
};

const FooterContainer = styled.footer`
  background-color: #1E3A8A;
  color: white;
  padding: 2rem 0;
  margin-top: 2rem;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
  }
`;

const Copyright = styled.p`
  margin-bottom: 1rem;
  text-align: center;
  font-family: 'Roboto', sans-serif;
  
  @media (min-width: 768px) {
    margin-bottom: 0;
    text-align: left;
  }
`;




export default Footer;
