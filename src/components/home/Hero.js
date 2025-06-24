import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import profile from '../../data/Profile';

const HeroSection = () => {
  return (
    <HeroContainer id='home'>
      <ContentWrapper>
        <TextContainer>
          <Title
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {profile.name}
          </Title>
          <Subtitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {profile.title}
          </Subtitle>
          <Tagline
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {profile.tagline}
          </Tagline>
          <Introduction
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            {profile.introduction}
          </Introduction>
          <ButtonContainer
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <PrimaryButton href="#projects">Ver Projetos</PrimaryButton>
            <SecondaryButton href="#contact">Fale Comigo</SecondaryButton>
          </ButtonContainer>
        </TextContainer>
        <TransitionVisual
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Elemento visual representando a transição de carreira */}
          <TransitionGraphic>
            <IndustryIcon />
            <TransitionArrow />
            <CodeIcon />
          </TransitionGraphic>
        </TransitionVisual>
      </ContentWrapper>
    </HeroContainer>
  );

};



// Styled Components
const HeroContainer = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, #1E3A8A 0%, #2D4BA0 100%);
  color: white;
  padding: 0 2rem;
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const TextContainer = styled.div`
  flex: 1;
  max-width: 600px;
  
  @media (max-width: 768px) {
    margin-bottom: 3rem;
  }
`;

const Title = styled(motion.h1)`
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  font-family: 'Montserrat', sans-serif;
`;

const Subtitle = styled(motion.h2)`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #FF5722;
  font-family: 'Montserrat', sans-serif;
`;

const Tagline = styled(motion.h3)`
  font-size: 1.5rem;
  font-weight: 400;
  margin-bottom: 1.5rem;
  opacity: 0.9;
  font-family: 'Roboto', sans-serif;
`;

const Introduction = styled(motion.p)`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  opacity: 0.8;
  font-family: 'Roboto', sans-serif;
`;

const ButtonContainer = styled(motion.div)`
  display: flex;
  gap: 1rem;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const Button = styled.a`
  padding: 0.8rem 1.5rem;
  border-radius: 4px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-block;
  font-family: 'Montserrat', sans-serif;
`;

const PrimaryButton = styled(Button)`
  background-color: #FF5722;
  color: white;
  border: none;
  
  &:hover {
    background-color: #E64A19;
    transform: translateY(-2px);
  }
`;

const SecondaryButton = styled(Button)`
  background-color: transparent;
  color: white;
  border: 2px solid white;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    transform: translateY(-2px);
  }
`;

const TransitionVisual = styled(motion.div)`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TransitionGraphic = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.1);
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
`;

// Placeholder components para os ícones
const IndustryIcon = styled.div`
  width: 100px;
  height: 100px;
  background-color: #FF5722;
  border-radius: 50%;
  position: relative;
  
  &:before {
    content: '';
    position: absolute;
    top: 25%;
    left: 25%;
    width: 50%;
    height: 50%;
    background-color: white;
    mask: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>') no-repeat center center;
    mask-size: contain;
  }
`;

const TransitionArrow = styled.div`
  width: 80px;
  height: 20px;
  background-color: white;
  margin: 0 1rem;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    right: -10px;
    top: -10px;
    width: 0;
    height: 0;
    border-left: 20px solid white;
    border-top: 20px solid transparent;
    border-bottom: 20px solid transparent;
  }
`;

const CodeIcon = styled.div`
  width: 100px;
  height: 100px;
  background-color: #1E3A8A;
  border-radius: 12px;
  position: relative;
  
  &:before {
    content: '';
    position: absolute;
    top: 25%;
    left: 25%;
    width: 50%;
    height: 50%;
    background-color: white;
    mask: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/></svg>') no-repeat center center;
    mask-size: contain;
  }
`;

export default HeroSection;
