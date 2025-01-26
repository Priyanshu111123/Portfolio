
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ContactContainer = styled.div`
  background-color: #82589f;
  color: #fff;
  padding: 50px 20px;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-width: 500px;
  margin: 0 auto;
`;

const Input = styled(motion.input)`
  padding: 10px;
  border: none;
  border-radius: 5px;
`;

export default function Contact() {
  return (
    <ContactContainer>
      <h2>Contact Me</h2>
      <Form>
        <Input type="text" placeholder="Your Name" />
        <Input type="email" placeholder="Your Email" />
        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          style={{
            padding: '10px 20px',
            borderRadius: '5px',
            border: 'none',
            backgroundColor: '#ff9ff3',
            color: '#fff',
            cursor: 'pointer',
          }}
        >
          Send Message
        </motion.button>
      </Form>
    </ContactContainer>
  );
}