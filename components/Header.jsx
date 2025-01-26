
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import profileImage from 'C:/Users/Public/Documents/MyPortfolio/portfolio/src/Assets/Priyanshu.jpg';


const HeaderContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ff8c00;
  color: #fff;
  padding: 50px 0;
`;

const ProfileImage = styled.img`
  width: 15%; 
  max-height: 15%;
  border-radius: 5%;
`;


const Title = styled(motion.h1)`
  font-size: 3rem;
  margin: 0;
`;

const Subtitle = styled(motion.p)`
  font-size: 1.5rem;
  margin-top: 10px;
`;

export default function Header() {
  return (
    <HeaderContainer
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
    <div>
      <ProfileImage src={profileImage} alt="Profile" />
    </div>
      <Title
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        Welcome to My Portfolio
      </Title>
      <Subtitle
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        Creative Developer & Designer
      </Subtitle>
    </HeaderContainer>
  );
}
