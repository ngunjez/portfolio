import styled, { keyframes } from "styled-components";

export const ContactContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #fff;
  padding: 5% 0;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }
  @media screen and (max-width: 550px) {
    height: 100%;
  }
  @media screen and (max-width: 410px) {
    height: 100%;
  }
  @media screen and (max-width: 395px) {
    height: 100%;
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
  dislay: flex;
  color: #000;
  text-align: center;
  font-size: clamp(24px, calc(1.5rem + ((1vw - 7.68px) * 0.5208)), 30px);
  font-weight: 500;
  line-height: normal;
  font-family: Poppins;
  @media screen and (max-width: 768px) {
    // margin-top: 25%;
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
  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 0;
    gap: 20px;
  }
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

export const ContactSectionsContainer = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-around;
  align-items: flex-start;
  padding: 5% 5%;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 10% 20px;
    gap: 30px;
    width: 100%;
  }
`;

export const LeftSection = styled.div`
  flex: 1;
  max-width: 50%;

  @media screen and (max-width: 768px) {
    max-width: 100%;
  }
`;

export const RightSection = styled.div`
  flex: 1;
  max-width: 50%;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    width: 100%;
  }
`;

export const FormContainer = styled.div`
  width: 100%;
  padding: 2rem;
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  font-size: 16px;
  font-family: Poppins;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #6e85b7;
  }
`;

export const StyledTextarea = styled.textarea`
  width: 100%;
  height: 150px;
  padding: 12px;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  font-size: 16px;
  font-family: Poppins;
  resize: vertical;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #6e85b7;
  }
`;

export const StyledButton = styled.button`
  padding: 12px 24px;
  background-color: #000;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  font-family: Poppins;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #6e85b7;
  }
`;

export const ErrorMessage = styled.div`
  color: #ff0000;
  font-size: 14px;
  text-align: center;
`;

export const SuccessMessage = styled.div`
  color: #00aa00;
  font-size: 14px;
  text-align: center;
`;
