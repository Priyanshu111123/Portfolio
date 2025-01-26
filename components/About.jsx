
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutContainer = styled(motion.div)`
  background-color: #f7d794;
  padding: 50px 20px;
  text-align: center;
`;

const AboutText = styled.p`
  font-size: 1.2rem;
  color: #333;
  max-width: 600px;
  margin: 0 auto;
`;

export default function About() {
  return (
    <AboutContainer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2>About Me</h2>
      <AboutText>
        Hi! I am Priyanshu Raj. I’m a passionate developer and designer who loves creating engaging
        web experiences. My expertise includes React, JavaScript, and backend
        development with Node.js.
      </AboutText>
    </AboutContainer>
  );
}
