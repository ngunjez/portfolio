import React from 'react';
import { 
  Container, 
  LoaderWrapper,
  LoaderBase,
  LoaderTwo, 
  LoaderThree,
  GlowEffect,
  ParticlesContainer,
  Particle,
  RotatingRing
} from '@/styles/Loader';

const Loader = () => {
  // Create an array of particle configurations
  const particles = Array(12).fill(null).map((_, i) => ({
    size: `${Math.floor(Math.random() * 4) + 2}px`,
    top: `${Math.floor(Math.random() * 80) + 10}%`,
    left: `${Math.floor(Math.random() * 80) + 10}%`,
    color: i % 3 === 0 
      ? 'rgba(107, 178, 205, 0.6)' 
      : i % 3 === 1 
        ? 'rgba(60, 81, 125, 0.5)' 
        : 'rgba(30, 63, 87, 0.4)',
    duration: `${Math.floor(Math.random() * 8) + 4}s`,
    delay: `${Math.random() * 5}s`,
    opacity: `${Math.random() * 0.5 + 0.3}`
  }));

  return (
    <Container>
      <ParticlesContainer>
        {particles.map((particle, index) => (
          <Particle key={index} {...particle} />
        ))}
      </ParticlesContainer>
      
      <RotatingRing />
      <GlowEffect />
      
      <LoaderWrapper>
        <LoaderBase />
        <LoaderTwo />
        <LoaderThree />
      </LoaderWrapper>
    </Container>
  );
};

export default Loader;