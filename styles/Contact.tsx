import styled, { keyframes } from 'styled-components';

export const ContactContainer = styled.div`
position:relative;
width:100%;
height:100vh;
display:flex;
align-items:center;
justify-content:center;
background: lightblue;
  background: radial-gradient(
      circle,
      rgb(170, 162, 162),
      #333 30%,
      rgba(88, 84, 84, 0.226) 0%
    ),
    radial-gradient(
      circle at 40px 40px,
      rgb(233, 228, 228),
      #333 30%,
      rgba(88, 84, 84, 0) 0%
    ),
    radial-gradient(
      circle at 600px 200px,
      rgb(233, 228, 228),
      #333 10%,
      rgba(88, 84, 84, 0) 0%
    ),
    radial-gradient(
      circle at 800px 100px,
      rgb(233, 228, 228),
      #333 10%,
      rgba(88, 84, 84, 0) 0%
    ),
    radial-gradient(
      circle at 700px 500px,
      rgb(233, 228, 228),
      #333 2%,
      rgba(88, 84, 84, 0.123) 0%
    ),
    radial-gradient(
      circle at 200px 400px,
      rgb(233, 228, 228),
      #333 1%,
      rgba(88, 84, 84, 0) 0%
    ),
    radial-gradient(
      circle at 300px 700px,
      rgb(233, 228, 228),
      #333 15%,
      rgba(88, 84, 84, 0) 0%
    ),
    radial-gradient(
      circle at 900px 500px,
      rgb(233, 228, 228),
      #333 20%,
      rgba(88, 84, 84, 0) 0%
    ),
    radial-gradient(
      circle at 650px 400px,
      rgb(233, 228, 228),
      #333 10%,
      rgba(88, 84, 84, 0) 0%
    ),
    radial-gradient(
      circle at 600px 600px,
      rgb(233, 228, 228),
      #333 1%,
      rgba(88, 84, 84, 0.959) 0%
    );
    @media screen and (max-width: 768px) {
      display:flex;
      flex-direction:column;
      align-items:center;
      justify-content:center;
      width:100%;
      height:100%;
    }
`

export const ContactHeader = styled.div`
// color: #1a3f34;
color:#fff;
text-align:center;
font-size: clamp(24px, calc(1.5rem + ((1vw - 7.68px) * 0.5208)), 30px);
font-weight: 500;
line-height: normal;
font-weight: normal;
@media screen and (max-width: 768px) {
margin-top: 25%;
}
`

export const ContactTextContainer = styled.div`
display:flex;
flex-direction:column;
width:80%;
height:fit-content;
align-items:center;
text-align:center;
justify-content:center;
padding:5% 0;
gap:50px;
`

export const ContactDescription = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
text-align:center;
width:100%;
padding:1rem;
line-height:2.0;
font-size: clamp(16px, calc(1rem + ((1vw - 7.68px) * 0.1736)), 18px); 
font-weight:500;
color:#fff;
text-align:center;
@media screen and (max-width: 768px) {
  width:100%;
  text-align:center;

}
`

export const ContactLinks = styled.div`
width:100%;
height:auto;
display:flex;
align-items:center;
justify-content:space-between;
gap:90px;
@media screen and (max-width: 768px) {
  gap:50px;
}
`

export const Twitter = styled.div`
width: 21px;
height: 20px;
flex-shrink: 0;
fill: #FFF;
background-color:#FFFBF5;
background-image: url("/Twitter.svg");
background-position:center;
background-repeat:no-repeat;
background-size:cover;
&:hover{
    background-color:#6E85B7;
}
`

export const LinkedIn = styled.div`
width: 21px;
height: 20px;
flex-shrink: 0;
fill: #FFF;
background-color:#FFFBF5;
background-image: url("/LinkedIn.svg");
background-position:center;
background-repeat:no-repeat;
background-size:cover;
&:hover{
    background-color:#6E85B7;
}
`

export const Email = styled.div`
width: 21px;
height: 20px;
flex-shrink: 0;
fill: #FFF;
background-color:#FFFBF5;
background-image: url("/Email.svg");
background-position:center;
background-repeat:no-repeat;
background-size:cover;
&:hover{
    background-color:#6E85B7;
}
`

export const Github = styled.div`
width: 21px;
height: 20px;
flex-shrink: 0;
fill: #FFF;
background-color:#FFFBF5;
background-image: url("/Github.svg");
background-position:center;
background-repeat:no-repeat;
background-size:cover;
&:hover{
    background-color:#6E85B7;
}
`