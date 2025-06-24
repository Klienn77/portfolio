import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import profile from '../../data/Profile';

const AboutSection = () => {
  return (
    <AboutContainer id="about">
      <SectionTitle
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {profile.about.title}
      </SectionTitle>
      
      <ContentWrapper>
        <StoryContainer
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <StoryText>{profile.about.story}</StoryText>
        </StoryContainer>
        
        <TransitionContainer
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <TransitionTitle>Da Indústria para o Desenvolvimento</TransitionTitle>
          <SkillsTransitionList>
            {profile.about.transferableSkills.map((skill, index) => (
              <SkillTransitionItem 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 + (index * 0.1) }}
              >
                <IndustrySkill>{skill.from}</IndustrySkill>
                <TransitionArrow>→</TransitionArrow>
                <DevSkill>{skill.to}</DevSkill>
              </SkillTransitionItem>
            ))}
          </SkillsTransitionList>
        </TransitionContainer>
      </ContentWrapper>
      
      <EducationContainer
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <EducationTitle>Formação Acadêmica</EducationTitle>
        <EducationList>
          {profile.about.education.map((edu, index) => (
            <EducationItem 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.7 + (index * 0.1) }}
            >
              <EducationDegree>{edu.degree}</EducationDegree>
              <EducationDetails>
                <EducationInstitution>{edu.institution}</EducationInstitution>
                <EducationPeriod>{edu.period}</EducationPeriod>
              </EducationDetails>
            </EducationItem>
          ))}
        </EducationList>
      </EducationContainer>
      
      <TransitionVisual
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <TransitionTimeline>
          <TimelinePoint active>
            <TimelineYear>2007</TimelineYear>
            <TimelineLabel>Início na Indústria</TimelineLabel>
          </TimelinePoint>
          <TimelineLine />
          <TimelinePoint active>
            <TimelineYear>2019</TimelineYear>
            <TimelineLabel>Consultor Técnico</TimelineLabel>
          </TimelinePoint>
          <TimelineLine />
          <TimelinePoint active highlight>
            <TimelineYear>2023</TimelineYear>
            <TimelineLabel>Transição para Desenvolvimento</TimelineLabel>
          </TimelinePoint>
          <TimelineLine />
          <TimelinePoint>
            <TimelineYear>Hoje</TimelineYear>
            <TimelineLabel>Desenvolvedor Full Stack</TimelineLabel>
          </TimelinePoint>
        </TransitionTimeline>
      </TransitionVisual>
    </AboutContainer>
  );
};

// Styled Components
const AboutContainer = styled.section`
  padding: 6rem 2rem;
  background-color: #f8f9fa;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 3rem;
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

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  gap: 3rem;
  margin-bottom: 4rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const StoryContainer = styled(motion.div)`
  flex: 1;
`;

const StoryText = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #333;
  white-space: pre-line;
  font-family: 'Roboto', sans-serif;
`;

const TransitionContainer = styled(motion.div)`
  flex: 1;
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  border-left: 4px solid #FF5722;
`;

const TransitionTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: #1E3A8A;
  font-family: 'Montserrat', sans-serif;
`;

const SkillsTransitionList = styled.ul`
  list-style: none;
  padding: 0;
`;

const SkillTransitionItem = styled(motion.li)`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  padding: 0.8rem;
  border-radius: 6px;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #f8f9fa;
  }
`;

const IndustrySkill = styled.span`
  flex: 1;
  font-weight: 600;
  color: #555;
  padding: 0.5rem;
  background-color: #f0f0f0;
  border-radius: 4px;
  text-align: center;
  font-family: 'Roboto', sans-serif;
`;

const TransitionArrow = styled.span`
  margin: 0 1rem;
  color: #FF5722;
  font-size: 1.5rem;
`;

const DevSkill = styled.span`
  flex: 1;
  font-weight: 600;
  color: white;
  padding: 0.5rem;
  background-color: #1E3A8A;
  border-radius: 4px;
  text-align: center;
  font-family: 'Roboto', sans-serif;
`;

const EducationContainer = styled(motion.div)`
  max-width: 1200px;
  margin: 0 auto 4rem;
`;

const EducationTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 2rem;
  color: #1E3A8A;
  text-align: center;
  font-family: 'Montserrat', sans-serif;
`;

const EducationList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const EducationItem = styled(motion.div)`
  background-color: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  }
`;

const EducationDegree = styled.h4`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #333;
  font-family: 'Montserrat', sans-serif;
`;

const EducationDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const EducationInstitution = styled.span`
  color: #555;
  font-family: 'Roboto', sans-serif;
`;

const EducationPeriod = styled.span`
  color: #FF5722;
  font-weight: 600;
  font-family: 'Roboto', sans-serif;
`;

const TransitionVisual = styled(motion.div)`
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
`;

const TransitionTimeline = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;
  }
`;

const TimelinePoint = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  
  @media (max-width: 768px) {
    flex-direction: row;
    width: 100%;
    justify-content: flex-start;
    gap: 1rem;
  }
`;

const TimelineYear = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: ${props => props.highlight ? '#FF5722' : '#1E3A8A'};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  margin-bottom: 1rem;
  font-family: 'Montserrat', sans-serif;
  
  @media (max-width: 768px) {
    margin-bottom: 0;
  }
`;

const TimelineLabel = styled.div`
  font-size: 0.9rem;
  text-align: center;
  max-width: 120px;
  color: #555;
  font-family: 'Roboto', sans-serif;
  
  @media (max-width: 768px) {
    text-align: left;
    max-width: none;
  }
`;

const TimelineLine = styled.div`
  flex: 1;
  height: 4px;
  background: linear-gradient(90deg, #1E3A8A, #FF5722);
  
  @media (max-width: 768px) {
    display: none;
  }
`;

export default AboutSection;
