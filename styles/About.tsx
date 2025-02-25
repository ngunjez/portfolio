import styled, { keyframes } from "styled-components";

const rotateAnimation = keyframes`
  100% {
    transform: rotateY(360deg);
  }
`;

export const AboutContainer = styled.div`
  position: relative;
  width: 100vw;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 5% 0;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 5% 0;
  }
`;

export const AboutHeader = styled.div`
  color: #1a3f34;
  text-align: center;
  font-size: clamp(30px, calc(1.5rem + ((1vw - 7.68px) * 0.5208)), 65px);
  font-weight: 500;
  font-family: Poppins;
  line-height: normal;
  padding: 3%;
  @media screen and (max-width: 768px) {
    margin-top: 40px;
  }
`;

export const AboutTextContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
  height: auto;
  border: none;
  justify-content: space-around;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
`;

export const AboutText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 60%;
  padding: 1rem;
  line-height: 1.5;
  font-size: clamp(16px, calc(1rem + ((1vw - 7.68px) * 0.3472)), 20px);
  font-weight: 500;
  font-family: Poppins;
  color: #000000;
  text-align: left;
  @media screen and (max-width: 768px) {
    width: 100%;
    text-align: center;
    line-height: normal;
  }
`;

export const AboutPic = styled.div`
  height: 348px;
  border-radius: 10px;
  background: linear-gradient(#faa504, #141001);
  animation: ${rotateAnimation} 7s infinite linear;
  transform-style: preserve-3d;
  background: url("/About_Pic.jpg"), lightgray 50% / cover no-repeat;
  background-position: center;
  background-size: cover;
  width: 25%;
  margin-right: 5%;
  flex-shrink: 0;
  @media screen and (max-width: 768px) {
    height: 220px;
    width: 200px;
  }
`;

export const AboutTechContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 80%;
  height: auto;
  border: none;
  margin-top: 50px;
  @media screen and (max-width: 768px) {
    width: 100%;
    gap: 5px;
  }
`;

export const AboutBigContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: auto;
  width: auto;
`;

export const AboutFrontContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const AboutFrontHeader = styled.div`
  color: #1a3f34;
  text-align: center;
  font-size: clamp(20px, calc(1.25rem + ((1vw - 7.68px) * 0.3472)), 24px);
  font-weight: 500;
  font-family: DM Sans;
  line-height: normal;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-weight: bold;
`;

export const AboutTitles = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  width: 100%;
  text-align: center;
  gap: 5px;
`;

export const Title = styled.div`
  font-size: clamp(16px, calc(0.875rem + ((1vw - 7.68px) * 0.1736)), 18px);
  font-family: Poppins;
  font-weight:500;
`;
