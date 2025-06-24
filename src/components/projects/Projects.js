import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import profile from '../../data/Profile';


const ProjectsSection = () => {
  // Placeholder projects - em um portfólio real, estes seriam substituídos pelos projetos reais
 const projects = React.useMemo(() => [
    {
      id: 1,
      title: "Ecommerce Imersivo",
      description: "Um e-commerce moderno e interativo, que combina visualização 3D com Three.js, personalização em tempo real e recomendações inteligentes baseadas em IA com TensorFlow.js. Este projeto entrega uma experiência imersiva e personalizada para o usuário, enquanto demonstra o potencial da inteligência artificial aplicada ao comércio eletrônico.",
      image: "fundo.png",
      technologies: ["React", "Node.js", "Three.js", "TensorFlow.js"],
      demoLink: "https://ecommerce-imersivo.vercel.app/", 
      codeLink: "https://github.com/Klienn77/ecommerce-imersivo.git",
      category: ["full-stack", "front-end", "back-end"], 
    },
    {
      id: 2,
      title: "Dashboard Administrativo",
      description: "Um painel poderoso que centraliza e analisa todos os dados do e-commerce imersivo, oferecendo relatórios em tempo real sobre vendas, engajamento, personalização e recomendações. Ele permite que gestores acompanhem KPIs, identifiquem tendências e tomem decisões estratégicas com base no desempenho e comportamento dos usuários.",
      image: "dashboard-posvendas.png",
      technologies: ["JavaScript", "Node.Js", "Mongo", "React"],
      demoLink: "https://github.com/Klienn77/pos-vendas-ecommerce.git",
      codeLink: "https://github.com/Klienn77/pos-vendas-ecommerce.git",
      category: ["full-stack", "front-end", "back-end"], 
    },
    {
      id: 3,
      title: "Plataforma de Gestão de Assistência Técnica",
      description: "Uma plataforma completa para a gestão de assistência técnica que organiza chamados, serviços, controle de peças e relatórios, desenvolvida a partir da minha própria experiência como consultor técnico e que prioriza agilidade, rastreamento e qualidade no atendimento.",
      image: "oficina-mecanica.jpg",
      technologies: ["JavaScript", "Node.js", "MySQL",],
      demoLink: "https://gestao-oficina.vercel.app",
      codeLink: "https://github.com/Klienn77/gestao-oficina.git",
      category:["full-stack", "front-end", "back-end"], 
    }
  ], []);

  const [filter, setFilter] = React.useState('all');
  const [filteredProjects, setFilteredProjects] = React.useState(projects);

  React.useEffect(() => {
  if (filter === 'all') {
    setFilteredProjects(projects);
  } else {
    setFilteredProjects(
      projects.filter(project => project.category.includes(filter))
    );
  }
}, [filter, projects]);

  return (
    <ProjectsContainer id="projects">
      <SectionTitle
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Meus Projetos
      </SectionTitle>
      
      <ProjectsIntro
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {profile.projects.intro}
      </ProjectsIntro>
      
      <FilterContainer
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <FilterButton 
          active={filter === 'all'} 
          onClick={() => setFilter('all')}
        >
          Todos
        </FilterButton>
        <FilterButton 
          active={filter === 'full-stack'} 
          onClick={() => setFilter('full-stack')}
        >
          Full Stack
        </FilterButton>
        <FilterButton 
          active={filter === 'front-end'} 
          onClick={() => setFilter('front-end')}
        >
          Front-end
        </FilterButton>
        <FilterButton 
          active={filter === 'back-end'} 
          onClick={() => setFilter('back-end')}
        >
          Back-end
        </FilterButton>
      </FilterContainer>
      
      <ProjectsGrid>
        {filteredProjects.map((project, index) => (
          <ProjectCard 
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
          >
            <ProjectImageContainer>
              <ProjectImage src={`/imagens/${project.image}`} alt={project.title} />
              <ProjectOverlay>
                <ProjectLinks>
                  <ProjectLink href={project.demoLink} target="_blank" rel="noopener noreferrer">
                    Demo
                  </ProjectLink>
                  <ProjectLink href={project.codeLink} target="_blank" rel="noopener noreferrer">
                    Código
                  </ProjectLink>
                </ProjectLinks>
              </ProjectOverlay>
            </ProjectImageContainer>
            
            <ProjectContent>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              
              <TechContainer>
                {project.technologies.map((tech, i) => (
                  <TechBadge key={i}>{tech}</TechBadge>
                ))}
              </TechContainer>
              
              <IndustryConnection>
                <ConnectionIcon />
                <ConnectionText>Conexão real com o mercado</ConnectionText>
              </IndustryConnection>
            </ProjectContent>
          </ProjectCard>
        ))}
      </ProjectsGrid>
      
      <TransitionNote
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <TransitionNoteIcon />
        <TransitionNoteText>
          Esses projetos mostram como uso minha experiência na indústria e no comércio brasileiro para desenvolver software, criando soluções que atendem às necessidades reais das empresas.
        </TransitionNoteText>
      </TransitionNote>
    </ProjectsContainer>
  );
};

// Styled Components
const ProjectsContainer = styled.section`
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

const ProjectsIntro = styled(motion.p)`
  max-width: 800px;
  margin: 0 auto 3rem;
  text-align: center;
  font-size: 1.1rem;
  line-height: 1.6;
  color: #555;
  font-family: 'Roboto', sans-serif;
`;

const FilterContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
  flex-wrap: wrap;
  gap: 1rem;
`;

const FilterButton = styled.button`
  padding: 0.6rem 1.2rem;
  background-color: ${props => props.active ? '#1E3A8A' : 'white'};
  color: ${props => props.active ? 'white' : '#333'};
  border: 2px solid ${props => props.active ? '#1E3A8A' : '#ddd'};
  border-radius: 30px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: 'Montserrat', sans-serif;
  
  &:hover {
    background-color: ${props => props.active ? '#1E3A8A' : '#f0f0f0'};
    transform: translateY(-2px);
  }
`;

const ProjectsGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled(motion.div)`
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }
`;

const ProjectImageContainer = styled.div`
  position: relative;
  height: 200px;
  overflow: hidden;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
  
  ${ProjectCard}:hover & {
    transform: scale(1.05);
  }
`;

const ProjectOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(30, 58, 138, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  
  ${ProjectCard}:hover & {
    opacity: 1;
  }
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const ProjectLink = styled.a`
  padding: 0.6rem 1.2rem;
  background-color: #FF5722;
  color: white;
  border-radius: 4px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  font-family: 'Montserrat', sans-serif;
  
  &:hover {
    background-color: #E64A19;
    transform: translateY(-2px);
  }
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #1E3A8A;
  font-family: 'Montserrat', sans-serif;
`;

const ProjectDescription = styled.p`
  font-size: 0.95rem;
  line-height: 1.6;
  color: #555;
  margin-bottom: 1.5rem;
  font-family: 'Roboto', sans-serif;
`;

const TechContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const TechBadge = styled.span`
  padding: 0.3rem 0.8rem;
  background-color: #f0f0f0;
  border-radius: 20px;
  font-size: 0.8rem;
  color: #333;
  font-family: 'Roboto', sans-serif;
`;

const IndustryConnection = styled.div`
  display: flex;
  align-items: center;
  padding: 0.8rem;
  background-color: #FFF3E0;
  border-radius: 4px;
  border-left: 3px solid #FF5722;
`;

const ConnectionIcon = styled.div`
  width: 24px;
  height: 24px;
  background-color: #FF5722;
  border-radius: 50%;
  margin-right: 0.8rem;
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

const ConnectionText = styled.span`
  font-size: 0.85rem;
  color: #E64A19;
  font-weight: 600;
  font-family: 'Roboto', sans-serif;
`;

const TransitionNote = styled(motion.div)`
  max-width: 800px;
  margin: 4rem auto 0;
  padding: 2rem;
  background-color: white;
  border-radius: 8px;
  display: flex;
  align-items: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
`;

const TransitionNoteIcon = styled.div`
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
    mask: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6A4.997 4.997 0 0 1 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z"/></svg>') no-repeat center center;
    mask-size: contain;
  }
`;

const TransitionNoteText = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #333;
  font-family: 'Roboto', sans-serif;
`;

export default ProjectsSection;
