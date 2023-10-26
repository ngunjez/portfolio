import styled from "styled-components";

export const ContactContainer = styled.div`
position:relative;
width:100%;
height:100vh;
display:flex;
// align-items:center;
justify-content:center;
background-color:grey;
`

export const ContactHeader = styled.div`
// color: #1a3f34;
color:#fff;
text-align:center;
font-size: clamp(24px, calc(1.5rem + ((1vw - 7.68px) * 0.5208)), 30px);
font-weight: 500;
line-height: normal;
padding: 3%;
font-weight: normal;
`

export const ContactTextContainer = styled.div`
// background-color:blue;
display:flex;
flex-direction:column;
width:80%;
height:fit-content;
align-items:center;
text-align:center;
justify-content:center;
padding:5% 0;
`

export const ContactDescription = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
width:70%;
padding:1rem;
line-height:1.5;
font-size: clamp(16px, calc(1rem + ((1vw - 7.68px) * 0.1736)), 18px);
font-weight:500;
color:#fff;
`

export const ContactLinks = styled.div`
width:60%;
height:auto;
display:flex;
align-items:center;
justify-content:space-evenly;
// background-color:green;
margin-top:2rem;
`

export const Twiiter = styled.div`
width: 21px;
height: 20px;
flex-shrink: 0;
fill: #FFF;
background-image: url("/Twitter.svg");
background-position:center;
background-repeat:no-repeat;
background-size:cover;
`

export const LinkedIn = styled.div`
width: 21px;
height: 20px;
flex-shrink: 0;
fill: #FFF;
background-image: url("/LinkedIn.svg");
background-position:center;
background-repeat:no-repeat;
background-size:cover;
`

export const Email = styled.div`
width: 21px;
height: 20px;
flex-shrink: 0;
fill: #FFF;
background-image: url("/Email.svg");
background-position:center;
background-repeat:no-repeat;
background-size:cover;
`

export const Github = styled.div`
width: 21px;
height: 20px;
flex-shrink: 0;
fill: #FFF;
background-image: url("/Github.svg");
background-position:center;
background-repeat:no-repeat;
background-size:cover;
`