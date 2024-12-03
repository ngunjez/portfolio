import styled, { css } from "styled-components";

export const LandingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: #101010;
  background-image: radial-gradient(rgba(12, 12, 12, 0.06) 2px, transparent 0);
  background-size: 30px 30px;
  background-position: -5px -5px;
  padding: 20px;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

`;

export const Wrapper = styled.div`
  display: flex;
  height: auto;
  width: 80%;
  border: none;
  gap: 2px;
  margin-top: 110px;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 95%;
    // margin-top: 80px;
    gap: 20px;
  }
`;

export const Wrapper2 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  align-items: flex-start;
  margin-top: 50px;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap:30px;
  }
`;

export const WrapperText = styled.div`
  color: #FFFFFF;
  font-size: clamp(30px, calc(1.875rem + ((1vw - 7.68px) * 3.0382)), 65px);
  font-weight: 500;
  line-height: 84.2%;
  font-family: Poppins;
  @media screen and (max-width:768px){
    text-align:center;
    line-height:90%;
  }
`;

export const WrapperDescription = styled.div`
  width: 65%;
  height: auto;
  flex-shrink: 0;
  color: #FFFFFF;
  font-size: clamp(16px, calc(1rem + ((1vw - 7.68px) * 0.3472)), 20px);
  font-weight: 400;
  line-height: normal;
  font-family: Poppins;

  @media screen and (max-width: 768px) {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
`;

export const WrapperImageStyles = css`
  align-items: center;
  justify-content: center;
  border-radius: 10px 10px 5px 10px;
  background-position: center;
  background-size: cover;
  @media screen and (max-width: 768px) {
    width: 100%;
    height: auto;
    align-items: center;
    justify-content: center;
  }
`;

export const WrapperImage = styled.div`
  ${WrapperImageStyles}
   transform: rotate(5deg); /* Adjust the angle to slant the card */
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25); /* Add a shadow for depth */
  transition: transform 0.3s ease;

  &:hover {
    transform: rotate(-5deg) scale(1.05); /* Slight scaling on hover */
  }

  @media screen and (max-width: 768px) {
    transform: rotate(0deg); /* Remove the slant for smaller screens */
  }
`;

export const Image = styled.img`
  ${WrapperImageStyles}
  border-radius: 30px;

`;

export const Button = styled.div`
  display: flex;
  padding: 15px 36px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background: #1ea9a4;
  cursor: pointer;
  color: #FFFFFF;
  font-family: DM Sans;
  font-weight:500;
  &:hover {
    background-color: #1ea9a4;
    transition: all 0.2s ease-in-out;
  }
`;