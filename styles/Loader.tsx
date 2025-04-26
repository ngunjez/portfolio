import styled, { keyframes } from 'styled-components';

// Enhanced animation keyframes
const floatAnimation = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-15px);
  }
`;

const pulseAnimation = keyframes`
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.7;
    transform: scale(0.95);
  }
`;

const rotateAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const shimmerAnimation = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

const dot1Animation = keyframes`
  3%,97% {
    width: 160px;
    height: 100px;
    margin-top: -50px;
    margin-left: -80px;
    border-radius: 8px;
    box-shadow: 0 10px 25px rgba(30, 63, 87, 0.5);
  }
  30%,36% {
    width: 80px;
    height: 120px;
    margin-top: -60px;
    margin-left: -40px;
    border-radius: 16px;
    box-shadow: 0 15px 35px rgba(30, 63, 87, 0.6);
  }
  63%,69% {
    width: 40px;
    height: 80px;
    margin-top: -40px;
    margin-left: -20px;
    border-radius: 12px;
    box-shadow: 0 8px 20px rgba(30, 63, 87, 0.4);
  }
`;

const dot2Animation = keyframes`
  3%,97% {
    height: 90px;
    width: 150px;
    margin-left: -75px;
    margin-top: -45px;
    border-radius: 6px;
    box-shadow: 0 8px 20px rgba(60, 81, 125, 0.5);
  }
  30%,36% {
    width: 70px;
    height: 96px;
    margin-left: -35px;
    margin-top: -48px;
    border-radius: 14px;
    box-shadow: 0 12px 30px rgba(60, 81, 125, 0.6);
  }
  63%,69% {
    width: 32px;
    height: 60px;
    margin-left: -16px;
    margin-top: -30px;
    border-radius: 10px;
    box-shadow: 0 6px 15px rgba(60, 81, 125, 0.4);
  }
`;

const dot3Animation = keyframes`
  3%,97% {
    height: 20px;
    width: 40px;
    margin-left: -20px;
    margin-top: 50px;
    border-radius: 0 0 8px 8px;
    box-shadow: 0 8px 15px rgba(107, 178, 205, 0.5);
  }
  30%,36% {
    width: 8px;
    height: 8px;
    margin-left: -5px;
    margin-top: 49px;
    border-radius: 8px;
    box-shadow: 0 5px 10px rgba(107, 178, 205, 0.6);
  }
  63%,69% {
    width: 16px;
    height: 4px;
    margin-left: -8px;
    margin-top: -37px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(107, 178, 205, 0.4);
  }
`;

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background: linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 35%, rgba(107, 178, 205, 0.15) 0%, transparent 25%),
      radial-gradient(circle at 75% 65%, rgba(60, 81, 125, 0.1) 0%, transparent 25%);
    z-index: 1;
  }
`;

export const LoaderWrapper = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${floatAnimation} 6s ease-in-out infinite;
  z-index: 5;
  
  &:before {
    content: '';
    position: absolute;
    width: 240px;
    height: 240px;
    background: radial-gradient(circle, transparent 30%, rgba(0, 0, 0, 0.2) 100%);
    border-radius: 50%;
    bottom: -120px;
    filter: blur(10px);
    opacity: 0.5;
    animation: ${pulseAnimation} 3s ease-in-out infinite;
    z-index: -1;
  }
`;

export const LoaderBase = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 10;
  width: 160px;
  height: 100px;
  margin-left: -80px;
  margin-top: -50px;
  border-radius: 8px;
  background: linear-gradient(135deg, #1e3f57 0%, #2b5d80 100%);
  animation: ${dot1Animation} 3s cubic-bezier(0.55, 0.3, 0.24, 0.99) infinite;
  box-shadow: 0 10px 25px rgba(30, 63, 87, 0.5);
  
  &:after {
    content: '';
    position: absolute;
    top: 5px;
    left: 5px;
    right: 5px;
    height: 10px;
    border-radius: 5px;
    background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.2) 50%, rgba(255, 255, 255, 0) 100%);
    background-size: 200% 100%;
    animation: ${shimmerAnimation} 2s linear infinite;
  }
`;

export const LoaderTwo = styled(LoaderBase)`
  z-index: 11;
  width: 150px;
  height: 90px;
  margin-top: -45px;
  margin-left: -75px;
  border-radius: 6px;
  background: linear-gradient(135deg, #3c517d 0%, #4e6a9e 100%);
  animation: ${dot2Animation} 3s cubic-bezier(0.55, 0.3, 0.24, 0.99) infinite;
  box-shadow: 0 8px 20px rgba(60, 81, 125, 0.5);
`;

export const LoaderThree = styled(LoaderBase)`
  z-index: 12;
  width: 40px;
  height: 20px;
  margin-top: 50px;
  margin-left: -20px;
  border-radius: 0 0 8px 8px;
  background: linear-gradient(135deg, #6bb2cd 0%, #8fd4ec 100%);
  animation: ${dot3Animation} 3s cubic-bezier(0.55, 0.3, 0.24, 0.99) infinite;
  box-shadow: 0 8px 15px rgba(107, 178, 205, 0.5);
`;

export const GlowEffect = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 300px;
  height: 300px;
  margin-left: -150px;
  margin-top: -150px;
  background: radial-gradient(circle, rgba(107, 178, 205, 0.3) 0%, transparent 70%);
  border-radius: 50%;
  z-index: 5;
  animation: ${pulseAnimation} 4s ease-in-out infinite;
  pointer-events: none;
`;

export const ParticlesContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 2;
`;

interface ParticleProps {
  size?: string;
  color?: string;
  top?: string;
  left?: string;
  duration?: string;
  delay?: string;
  opacity?: string;
}

export const Particle = styled.div<ParticleProps>`
  position: absolute;
  width: ${props => props.size || '4px'};
  height: ${props => props.size || '4px'};
  background: ${props => props.color || 'rgba(107, 178, 205, 0.6)'};
  border-radius: 50%;
  top: ${props => props.top || '50%'};
  left: ${props => props.left || '50%'};
  animation: ${floatAnimation} ${props => props.duration || '8s'} ease-in-out infinite;
  animation-delay: ${props => props.delay || '0s'};
  opacity: ${props => props.opacity || '0.6'};
`;

export const RotatingRing = styled.div`
  position: absolute;
  width: 320px;
  height: 320px;
  border: 1px solid rgba(107, 178, 205, 0.2);
  border-radius: 50%;
  top: 50%;
  left: 50%;
  margin-left: -160px;
  margin-top: -160px;
  animation: ${rotateAnimation} 20s linear infinite;
  z-index: 3;
  
  &:before {
    content: '';
    position: absolute;
    top: -3px;
    left: 50%;
    width: 8px;
    height: 8px;
    background: rgba(107, 178, 205, 0.8);
    border-radius: 50%;
    box-shadow: 0 0 10px 2px rgba(107, 178, 205, 0.4);
  }
`;