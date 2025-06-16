import styled, { keyframes } from "styled-components";
import Link from "next/link";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const pulse = keyframes`
  0% { opacity: 1; transform: translateY(-50%) scale(1); }
  50% { opacity: 0.7; transform: translateY(-50%) scale(1.1); }
  100% { opacity: 1; transform: translateY(-50%) scale(1); }
`;

export const ProjectsContainer = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  background-color: #0a121c;
  padding: 6rem 0;

  @media screen and (max-width: 768px) {
    min-height: auto;
    padding: 4rem 0;
  }
`;

export const ProjectsInnerContainer = styled.div`
  width: 90%;
  max-width: 1400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${fadeIn} 0.8s ease-out;
`;

export const ProjectsHeader = styled.h2`
  color: #fff;
  font-size: clamp(1.5rem, calc(1.5rem + ((1vw - 0.48rem) * 1.0417)), 2.25rem);

  font-weight: 700;
  position: relative;
  margin: 0 0 0.5rem 0;
  letter-spacing: 1px;
  display: flex;
  align-items: center;
  gap: 1rem;
  font-family: "Poppins", sans-serif;

  .arrow {
    color: #0095ff;
    font-size: 3rem;
    font-weight: 400;
    position: relative;
    top: -4px;
  }

  .left {
    margin-right: 0.5rem;
  }

  .right {
    margin-left: 0.5rem;
  }

  @media screen and (max-width: 768px) {
    font-size: 2.2rem;
    margin-top: 1rem;

    .arrow {
      font-size: 2.5rem;
    }
  }
`;

export const ProjectsSubheader = styled.p`
  color: #9ea7b3;
  font-size: clamp(1rem, 1.5vw, 1.25rem);
  text-align: center;
  margin: 0 0 3rem 0;
  font-family: "Poppins", sans-serif;
  font-weight: 300;
  max-width: 80%;

  @media screen and (max-width: 768px) {
    margin-bottom: 2rem;
    max-width: 90%;
  }
`;

export const ProjectsCarousel = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  width: 100%;

  @media screen and (max-width: 768px) {
    flex-wrap: nowrap;
    overflow-x: auto;
    justify-content: flex-start;
    padding: 1rem 0;
    gap: 1.2rem;
    scroll-snap-type: x mandatory;
    scrollbar-width: none;
    -ms-overflow-style: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

interface ProjectsArrowProps {
  direction: "right" | "left";
}

export const ProjectsArrow = styled.button<ProjectsArrowProps>`
  position: absolute;
  ${({ direction }) => (direction === "right" ? "right: 5%;" : "left: 5%;")}
  top: 50%;
  transform: translateY(-50%);
  width: 3.5rem;
  height: 3.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 149, 255, 0.15);
  border: none;
  border-radius: 50%;
  cursor: pointer;
  z-index: 10;
  transition: all 0.3s ease;
  animation: ${pulse} 1.5s infinite;

  &::after {
    content: ${({ direction }) =>
      direction === "right" ? '"\\2192"' : '"\\2190"'};
    color: #0095ff;
    font-size: 1.5rem;
  }

  &:hover {
    background: rgba(0, 149, 255, 0.3);
  }

  @media screen and (max-width: 1200px) {
    ${({ direction }) => (direction === "right" ? "right: 2%;" : "left: 2%;")}
  }

  @media screen and (min-width: 769px) {
    display: none;
  }
`;

export const ProjectCard = styled.article`
  width: calc(33.333% - 2rem);
  max-width: 400px;
  min-width: 280px;
  border-radius: 15px;
  background-color: #131f2c;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.35);
  }

  @media screen and (max-width: 1200px) {
    width: calc(50% - 2rem);
  }

  @media screen and (max-width: 768px) {
    width: 300px;
    flex: 0 0 300px;
    scroll-snap-align: start;
    margin: 0 0.5rem;
  }
`;

export const ProjectImageContainer = styled.div`
  width: 100%;
  height: auto;
  position: relative;
  overflow: hidden;

  img {
    width: 100%;
    height: auto;
    border-radius: 15px 15px 0 0;
    transition: transform 0.5s ease;
    object-fit: cover;
  }

  ${ProjectCard}:hover & img {
    transform: scale(1.05);
  }
`;

export const ProjectCardBody = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  height: 160px;
`;

export const ProjectCardTitle = styled.h3`
  color: #fff;
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0 0 0.75rem 0;
  font-family: "Poppins", sans-serif;
`;

export const ProjectCardText = styled.p`
  color: #9ea7b3;
  font-size: 0.95rem;
  line-height: 1.5;
  margin: 0 0 1.5rem 0;
  flex-grow: 1;
  font-family: "Poppins", sans-serif;
`;

export const ProjectCardLink = styled(Link)`
  display: inline-block;
  color: #0095ff;
  font-size: 0.95rem;
  font-weight: 500;
  text-decoration: none;
  transition: color 0.2s ease;
  margin-top: auto;
  font-family: "Poppins", sans-serif;

  &:hover {
    color: #4db5ff;
  }
`;
