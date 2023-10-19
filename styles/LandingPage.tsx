import styled from "styled-components";

export const LandingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100vw;
  min-height: 100vh;
  // background-color: red;
`;

export const Wrapper = styled.div`
  display: inline-flex;
  height: 548px;
  flex-shrink: 0;
  width: 80%;
//   background-color: red;
  border:none;
  justify-content:space-around;
`;

export const Wrapper2 = styled.div`
display:flex;
flex-direction:column;
justify-content: space-evenly;
align-items:flex-start;
// background-color:blue;
`

export const WrapperText = styled.div`
color: #262833;
font-size: clamp(30px, calc(1.875rem + ((1vw - 7.68px) * 3.0382)), 65px);
font-weight: 400;
line-height: 84.2%;
`

export const WrapperDescription = styled.div`
width: 480px;
height: 276px;
flex-shrink: 0;
color: #192B3F;
font-size: clamp(16px, calc(1rem + ((1vw - 7.68px) * 0.3472)), 20px);
font-weight: 400;
line-height: normal;
`

export const WrapperImage = styled.div`
width: 635px;
height: 548px;
border-radius: 10px;
background: url("/Pic.jpg"), lightgray 50% / cover no-repeat;
background-position:center;
background-size:cover;
`

