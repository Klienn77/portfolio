import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import profile from '../../data/Profile';

const ExperienceSection = () => {
  return (
    <ExperienceContainer id="experience">
      <SectionTitle
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Experiência Profissional
      </SectionTitle>
      
      <ExperienceTimeline>
        {profile.experience.map((exp, index) => (
          <ExperienceItem 
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 + (index * 0.1) }}
            isEven={index % 2 === 0}
          >
            <ExperienceCard isEven={index % 2 === 0}>
              <ExperienceHeader>
                <CompanyName>{exp.company}</CompanyName>
                <Position>{exp.position}</Position>
                <Period>{exp.period}</Period>
              </ExperienceHeader>
              
              <Description>{exp.description}</Description>
              
              {exp.achievements && (
                <AchievementsList>
                  <AchievementsTitle>Principais realizações:</AchievementsTitle>
                  {exp.achievements.map((achievement, i) => (
                    <AchievementItem key={i}>{achievement}</AchievementItem>
                  ))}
                </AchievementsList>
              )}
              
              {exp.relevantSkills && (
                <SkillsList>
                  <SkillsTitle>Habilidades relevantes para desenvolvimento:</SkillsTitle>
                  {exp.relevantSkills.map((skill, i) => (
                    <SkillItem key={i}>{skill}</SkillItem>
                  ))}
                </SkillsList>
              )}
              
              {index === 0 && (
                <TransitionBadge>
                  Desenvolvimento de Software
                </TransitionBadge>
              )}
              
              {index === 1 && (
                <TransitionBadge industrial>
                  Experiência Industrial
                </TransitionBadge>
              )}
            </ExperienceCard>
            
            <TimelineConnector isEven={index % 2 === 0}>
              <TimelineDot />
            </TimelineConnector>
          </ExperienceItem>
        ))}
      </ExperienceTimeline>
      
      <TransitionMessage
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <TransitionIcon />
        <TransitionText>
          Minha experiência industrial me proporcionou uma perspectiva única no desenvolvimento de software, 
          permitindo-me criar soluções que combinam precisão técnica com visão estratégica de negócios.
        </TransitionText>
      </TransitionMessage>
    </ExperienceContainer>
  );
};

// Styled Components
const ExperienceContainer = styled.section`
  padding: 6rem 2rem;
  background-color: white;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 4rem;
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

const ExperienceTimeline = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    width: 4px;
    background: linear-gradient(to bottom, #1E3A8A, #FF5722);
    transform: translateX(-50%);
  }
  
  @media (max-width: 768px) {
    &:before {
      left: 30px;
    }
  }
`;

const ExperienceItem = styled(motion.div)`
  display: flex;
  justify-content: ${props => props.isEven ? 'flex-end' : 'flex-start'};
  margin-bottom: 3rem;
  position: relative;
  
  @media (max-width: 768px) {
    justify-content: flex-end;
    padding-left: 60px;
  }
`;

const ExperienceCard = styled.div`
  width: calc(50% - 50px);
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  border-left: 4px solid ${props => props.isEven ? '#1E3A8A' : '#FF5722'};
  position: relative;
  
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ExperienceHeader = styled.div`
  margin-bottom: 1.5rem;
`;

const CompanyName = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #1E3A8A;
  font-family: 'Montserrat', sans-serif;
`;

const Position = styled.h4`
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  color: #333;
  font-family: 'Montserrat', sans-serif;
`;

const Period = styled.p`
  font-size: 0.9rem;
  color: #FF5722;
  font-weight: 600;
  font-family: 'Roboto', sans-serif;
`;

const Description = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #555;
  margin-bottom: 1.5rem;
  font-family: 'Roboto', sans-serif;
`;

const AchievementsList = styled.ul`
  margin-bottom: 1.5rem;
  padding-left: 1.5rem;
`;

const AchievementsTitle = styled.h5`
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.8rem;
  color: #333;
  font-family: 'Montserrat', sans-serif;
`;

const AchievementItem = styled.li`
  font-size: 0.95rem;
  margin-bottom: 0.5rem;
  color: #555;
  font-family: 'Roboto', sans-serif;
`;

const SkillsList = styled.ul`
  margin-bottom: 1.5rem;
  padding-left: 1.5rem;
  border-left: 2px solid #f0f0f0;
`;

const SkillsTitle = styled.h5`
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.8rem;
  color: #333;
  font-family: 'Montserrat', sans-serif;
`;

const SkillItem = styled.li`
  font-size: 0.95rem;
  margin-bottom: 0.5rem;
  color: #555;
  font-family: 'Roboto', sans-serif;
`;

const TimelineConnector = styled.div`
  position: absolute;
  top: 30px;
  ${props => props.isEven ? 'left: calc(50% - 30px);' : 'right: calc(50% - 30px);'}
  width: 30px;
  height: 2px;
  background-color: ${props => props.isEven ? '#1E3A8A' : '#FF5722'};
  
  @media (max-width: 768px) {
    left: 0;
    width: 30px;
  }
`;

const TimelineDot = styled.div`
  position: absolute;
  top: -4px;
  ${props => props.isEven ? 'right: -8px;' : 'left: -8px;'}
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: ${props => props.isEven ? '#1E3A8A' : '#FF5722'};
  
  @media (max-width: 768px) {
    left: -8px;
  }
`;

const TransitionBadge = styled.div`
  position: absolute;
  top: -12px;
  right: 20px;
  padding: 0.5rem 1rem;
  background-color: ${props => props.industrial ? '#FF5722' : '#1E3A8A'};
  color: white;
  font-size: 0.8rem;
  font-weight: 600;
  border-radius: 20px;
  font-family: 'Montserrat', sans-serif;
`;

const TransitionMessage = styled(motion.div)`
  max-width: 800px;
  margin: 4rem auto 0;
  padding: 2rem;
  background-color: #f8f9fa;
  border-radius: 8px;
  display: flex;
  align-items: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
`;

const TransitionIcon = styled.div`
  min-width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, #1E3A8A, #FF5722);
  margin-right: 1.5rem;
  position: relative;
  
  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 30px;
    height: 30px;
    background-color: white;
    mask: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm-2 14l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/></svg>') no-repeat center center;
    mask-size: contain;
  }
`;

const TransitionText = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #333;
  font-family: 'Roboto', sans-serif;
`;

export default ExperienceSection;
