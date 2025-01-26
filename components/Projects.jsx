
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  padding: 50px 20px;
  background-color: #3dc1d3;
  color: #fff;
`;

const ProjectCard = styled(motion.div)`
  background-color: #ffb8b8;
  padding: 20px;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const projectData = [
  {
    title: "Chess Game",
    description: "A web-based chess game using HTML, CSS, and JavaScript.",
    link: "https://example.com/chess-game"
  },
  {
    title: "Code Editor",
    description: "A browser-based code editor built with Node.js.",
    link: "https://example.com/code-editor"
  },
  {
    title: "Marketing Website",
    description: "A modern marketing website created with React and styled-components.",
    link: "https://example.com/marketing-website"
  }
];

export default function Projects() {
  return (
    <ProjectsContainer>
      {projectData.map((project, index) => (
        <ProjectCard
          key={index}
          whileHover={{ scale: 1.1 }}
          transition={{ type: 'spring', stiffness: 300 }}
          onClick={() => window.open(project.link, "_blank")} // Opens link in new tab
        >
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </ProjectCard>
      ))}
    </ProjectsContainer>
  );
}
