
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const MarksContainer = styled(motion.div)`
  background-color: #ffeaa7;
  padding: 50px 20px;
  text-align: center;
`;

const MarksList = styled.ul`
  list-style: none;
  padding: 0;
  max-width: 600px;
  margin: 0 auto;
  font-size: 1.2rem;
  color: #333;
`;

const marksData = [
  { level: "Class 10 (ICSE)", score: "95%" },
  { level: "Class 12 (ISC)", score: "89.5%" },
  { level: "Current B.Tech (CSE)", score: "8.33 CGPA" } 
];

export default function Marks() {
  return (
    <MarksContainer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2>Academic Performance</h2>
      <MarksList>
        {marksData.map((mark, index) => (
          <li key={index}>
            <strong>{mark.level}</strong>: {mark.score}
          </li>
        ))}
      </MarksList>
    </MarksContainer>
  );
}
