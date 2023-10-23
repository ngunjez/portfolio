import styled from "styled-components";

export const AboutContainer = styled.div`
position:relative;
width:100vw;
height: auto;
// background-color:red;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
gap:10px;
`

export const AboutHeader = styled.div`
color: #1a3f34;
text-align:center;
font-size: clamp(24px, calc(1.5rem + ((1vw - 7.68px) * 0.5208)), 30px);
font-weight: 500;
line-height: normal;
padding: 3%;
`

export const AboutTextContainer = styled.div`
display:flex;
flex-direction:row;
width:80%;
height:auto;
border:none;
justify-content:space-around;
// align-items:center;
// background-color:blue;

`

export const AboutText = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:flex-start;
background-color:pink;
width:60%;
padding:1rem;
line-height:1.5;
font-size: clamp(16px, calc(1rem + ((1vw - 7.68px) * 0.6944)), 24px);
font-weight:500;
`

export const AboutPic = styled.div`
width: 635px;
height: 548px;
border-radius: 10px;
background: url("/About_Pic.jpg"), lightgray 50% / cover no-repeat;
background-position:center;
background-size:cover;
`

export const AboutTechContainer = styled.div`
display:flex;
flex-direction:row;
justify-content:space-evenly;
width:79%;
height:auto;
border:none;
background-color:blue;
`

export const AboutFrontContainer = styled.div`
display:flex;
flex-direction:row;
justify-content:center;
align-items:flex-start;
background-color:red;
`

export const AboutFrontHeader = styled.div`
color: #1a3f34;
text-align:center;
font-size: clamp(24px, calc(1.5rem + ((1vw - 7.68px) * 0.5208)), 30px);
font-weight: 500;
line-height: normal;
padding: 3%;
display:flex;
flex-direction:column;
justify-content:center;
`