import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";

const gradientAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const float = keyframes`
  0% {
    transform: translateY(0px) rotate(5deg);
  }
  50% {
    transform: translateY(-10px) rotate(5deg);
  }
  100% {
    transform: translateY(0px) rotate(5deg);
  }
`;

const pulse = keyframes`
  0% {
    transform: scale(1);
    opacity: 0.8;
  }
  50% {
    transform: scale(1.05);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 0.8;
  }
`;


// Main container
export const LandingContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #0a0a0a;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ParticleCanvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

export const HeroSection = styled.div`
  position: relative;
  z-index: 2;
  width: 80%;
  padding: 0 40px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 90vh;

  @media (max-width: 768px) {
    padding: 0 10px;
    height: 100vh;
    width: 100%;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 30px;

  @media (max-width: 1024px) {
    flex-direction: column-reverse;
    text-align: center;
    gap: 50px;
  }
`;

export const InfoSection = styled.div`
  flex: 1;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media (max-width: 1024px) {
    align-items: center;
    max-width: 100%;
  }
`;

export const ProfileTitle = styled.h1`
  font-size: clamp(36px, 5vw, 64px);
  font-weight: 700;
  font-family: "Poppins", sans-serif;
  color: white;
  margin: 0;
  line-height: 1.1;
  position: relative;

  span {
    background: linear-gradient(90deg, #ffffff, #1ea9a4, #ffffff);
    background-size: 200% auto;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: ${gradientAnimation} 4s ease infinite;
  }

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const ProfileDescription = styled.p`
  font-size: clamp(1rem, calc(1rem + ((1vw - 0.48rem) * 0.6944)), 1.5rem);
  font-weight: 400;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.85);
  font-family: "DM Sans", sans-serif;
                margin: '0 auto',
  text-align: center;


  @media (max-width: 768px) {
    text-align: center;n
  }
`;

export const HighlightedText = styled.span`
  color: #1ea9a4;
  font-weight: 600;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: -2px;
    left: 0;
    background-color: #1ea9a4;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.3s ease;
  }

  &:hover::after {
    transform: scaleX(1);
    transform-origin: left;
  }
`;

export const ImageContainer = styled.div`
  flex: 0.8;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1024px) {
    width: 100%;
    max-width: 350px;
  }
`;

export const ProfileImage = styled.div`
  position: relative;
  width: 300px;
  height: 350px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      135deg,
      rgba(30, 169, 164, 0.3) 0%,
      rgba(0, 0, 0, 0) 60%
    );
    z-index: 1;
  }

  img {
    object-fit: cover;
    transition: transform 0.5s ease;
    width: 100%;
    height: 100%;
  }

  animation: ${float} 6s ease-in-out infinite;

  @media (max-width: 768px) {
    width: 250px;
    height: 300px;
    animation: none;
  }
`;

export const ActionButton = styled(motion.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 12px 30px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  font-family: "DM Sans", sans-serif;
  color: white;
  background: linear-gradient(90deg, #1ea9a4, #25c5c0);
  border: none;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(30, 169, 164, 0.3);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: left 0.7s ease;
  }

  &:hover::before {
    left: 100%;
  }

  .download-icon {
    font-size: 20px;
    animation: ${pulse} 2s infinite;
  }
`;


