import styled, { keyframes } from "styled-components";

export const ContactContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }
  @media screen and (max-width: 550px) {
    height: 100vh;
  }
  @media screen and (max-width: 410px) {
    height: 100%;
  }
  @media screen and (max-width: 395px) {
    height: 100vh;
  }
  @media screen and (max-width: 376px) {
    height: 100%;
  }
  @media screen and (max-width: 365px) {
    height: 100%;
  }
  @media screen and (max-width: 330px) {
    height: 100%;
  }
`;

export const ContactHeader = styled.div`
  color: #000;
  text-align: center;
  font-size: clamp(24px, calc(1.5rem + ((1vw - 7.68px) * 0.5208)), 30px);
  font-weight: 500;
  line-height: normal;
  font-family: Poppins;
  @media screen and (max-width: 768px) {
    margin-top: 25%;
  }
  @media screen and (max-width: 290px) {
    margin-top: 35%;
  }
`;

export const ContactTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: fauto;
  align-items: center;
  text-align: center;
  justify-content: center;
  padding: 5% 0;
  gap: 50px;
`;

export const ContactDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  padding: 1rem;
  line-height: 2;
  font-size: clamp(16px, calc(1rem + ((1vw - 7.68px) * 0.1736)), 18px);
  font-weight: 500;
  font-family: Poppins;
  color: #000;
  text-align: center;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 0;
    text-align: center;
  }
`;

export const ContactLinks = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 90px;
  @media screen and (max-width: 768px) {
    gap: 50px;
  }
`;

export const Twitter = styled.div`
  width: 21px;
  height: 20px;
  flex-shrink: 0;
  background-image: url("/Twitter2.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  &:hover {
    background-color: #6e85b7;
  }
`;

export const LinkedIn = styled.div`
  width: 21px;
  height: 20px;
  flex-shrink: 0;
  background-image: url("/LinkedIn2.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  &:hover {
    background-color: #6e85b7;
  }
`;

export const Email = styled.div`
  width: 21px;
  height: 20px;
  flex-shrink: 0;

  background-image: url("/Email2.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  &:hover {
    background-color: #6e85b7;
  }
`;

export const Github = styled.div`
  width: 21px;
  height: 20px;
  flex-shrink: 0;
  background-image: url("/Github2.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  &:hover {
    background-color: #6e85b7;
  }
`;
