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
  background-color: #ffffff;
  background-image: radial-gradient(rgba(12, 12, 12, 0.06) 2px, transparent 0);
  background-size: 30px 30px;
  background-position: -5px -5px;
}
`;

export const Wrapper = styled.div`
  display: flex;
  height: auto;
  width: 80%;
  // background-color: red;
  border:none;
  // justify-content:space-evenly;
  gap:2px;
  margin-top:110px;
`;

export const Wrapper2 = styled.div`
display:flex;
flex-direction:column;
// justify-content: space-evenly;
gap:50px;
align-items:flex-start;
// background-color:blue;
margin-top:50px;
`

export const WrapperText = styled.div`
color: #262833;
font-size: clamp(30px, calc(1.875rem + ((1vw - 7.68px) * 3.0382)), 65px);
font-weight: 400;
line-height: 84.2%;
`

export const WrapperDescription = styled.div`
width: 65%;
height: auto;
flex-shrink: 0;
color: #192B3F;
font-size: clamp(16px, calc(1rem + ((1vw - 7.68px) * 0.3472)), 20px);
font-weight: 400;
line-height: normal;
// background-color:blue;
`

export const WrapperImage = styled.div`
width: 535px;
height: 448px;
border-radius: 10px;
background: url("/Pic.jpg"), lightgray 50% / cover no-repeat;
background-position:center;
background-size:cover;
`

export const Button = styled.div`
display: flex;
padding: 15px 36px;
flex-direction: column;
justify-content: center;
align-items: center;
border-radius: 8px;
background: #1EA9A4;
cursor: pointer;
color:#fff;
&:hover{
  background-color:#000;
  transition: all 0.2s ease-in-out;
}
`