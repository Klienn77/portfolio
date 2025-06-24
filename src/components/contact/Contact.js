import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import profile from '../../data/Profile';

const Contact = () => {
  return (
    <ContactSection id="contact">
      <SectionTitle
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Entre em Contato
      </SectionTitle>
      
      <ContactIntro
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {profile.contact.intro}
      </ContactIntro>
      
      <ContactContainer>
        <ContactInfoCard
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <ContactInfoTitle>Informações de Contato</ContactInfoTitle>
          
          <ContactInfoItem>
            <ContactIcon className="location">
              <LocationIconSVG />
            </ContactIcon>
            <ContactText>{profile.location}</ContactText>
          </ContactInfoItem>
          
          <ContactInfoItem>
            <ContactIcon className="email">
              <EmailIconSVG />
            </ContactIcon>
            <ContactText>{profile.email}</ContactText>
          </ContactInfoItem>
          
          <ContactInfoItem>
            <ContactIcon className="phone">
              <PhoneIconSVG />
            </ContactIcon>
            <ContactText>{profile.phone}</ContactText>
          </ContactInfoItem>
          
          <SocialLinksContainer>
            <SocialLink href={`https://www.linkedin.com/in/fabiano-pedroso-a1110278/`} target="_blank" rel="noopener noreferrer">
              <LinkedInIconSVG />
            </SocialLink>
            <SocialLink href="https://github.com/klienn77" target="_blank" rel="noopener noreferrer">
              <GitHubIconSVG />
            </SocialLink>
          </SocialLinksContainer>
        </ContactInfoCard>
      </ContactContainer>
      
      
    </ContactSection>
   );
};

// Componentes estilizados
const ContactSection = styled.section`
  padding: 6rem 2rem;
  background-color: #f8f9fa;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 1.5rem;
  color: #1E3A8A;
  font-family: 'Montserrat', sans-serif;
  
  &:after {
    content: '';
    display: block;
    width: 80px;
    height: 4px;
    background-color: #FF5722;
    margin: 1rem auto 0;
  }
`;

const ContactIntro = styled(motion.p)`
  max-width: 800px;
  margin: 0 auto 3rem;
  text-align: center;
  font-size: 1.1rem;
  line-height: 1.6;
  color: #555;
  font-family: 'Roboto', sans-serif;
`;

const ContactContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  grid-template-columns: 1fr 2fr;
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ContactCard = styled(motion.div)`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  padding: 2rem;
`;

const ContactInfoCard = styled(ContactCard)`
  background: linear-gradient(135deg, #1E3A8A 0%, #2D4BA0 100%);
  color: white;
  max-width: 500px; 
  width: 100%; 
`;



const ContactInfoTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 2rem;
  font-family: 'Montserrat', sans-serif;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -0.5rem;
    left: 0;
    width: 50px;
    height: 3px;
    background-color: #FF5722;
  }
`;

const ContactInfoItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const ContactIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  
  &.email {
    background-color: rgba(255, 87, 34, 0.2);
  }
  
  &.phone {
    background-color: rgba(255, 255, 255, 0.2);
  }
  
  &.location {
    background-color: rgba(255, 255, 255, 0.15);
  }
`;

const ContactText = styled.p`
  font-size: 1rem;
  font-family: 'Roboto', sans-serif;
`;

const SocialLinksContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
`;

const SocialLink = styled.a`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #FF5722;
    transform: translateY(-3px);
  }
`;


// SVG Icons como componentes
const LocationIconSVG = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
  </svg>
 );

const EmailIconSVG = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white">
    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
  </svg>
 );

const PhoneIconSVG = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white">
    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
  </svg>
 );

const LinkedInIconSVG = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
  </svg>
 );

const GitHubIconSVG = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white">
    <path d="M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.24.73-.53v-1.85c-3.03.66-3.67-1.46-3.67-1.46-.5-1.26-1.21-1.6-1.21-1.6-.99-.68.07-.66.07-.66 1.09.08 1.67 1.12 1.67 1.12.97 1.66 2.54 1.18 3.16.9.1-.7.38-1.18.69-1.45-2.42-.27-4.96-1.2-4.96-5.36 0-1.18.42-2.15 1.12-2.91-.11-.27-.49-1.37.11-2.86 0 0 .92-.29 3 1.12a10.38 10.38 0 015.5 0c2.08-1.41 3-1.12 3-1.12.6 1.49.22 2.59.11 2.86.7.76 1.12 1.73 1.12 2.91 0 4.17-2.54 5.08-4.96 5.35.39.34.73 1 .73 2.01v2.98c0 .29.18.63.74.53A11 11 0 0012 1.27"/>
  </svg>
 );

export default Contact;
