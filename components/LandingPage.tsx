import {
  Button,
  LandingContainer,
  Wrapper,
  Wrapper2,
  WrapperDescription,
  WrapperImage,
  WrapperText,
} from "@/styles/LandingPage";
import React from "react";
import { Fade } from "react-awesome-reveal";

const downloadCV = () => {
  const cvFileName = 'CV.pdf';
  const cvFileUrl = '/' + cvFileName;  

  console.log('CV File URL:', cvFileUrl);

  const link = document.createElement('a');
  link.href = cvFileUrl;
  link.download = cvFileName;
  link.click();
};

const LandingPage = () => {
  return (
    <LandingContainer>
      <Wrapper>
        <Wrapper2>
          <Fade direction="up" triggerOnce>
            <WrapperText>FRONTEND DEVELOPER</WrapperText>
            <WrapperDescription>
              I am a skilled frontend developer with a strong grasp of both web2
              and web3 technologies, adept at crafting intuitive user interfaces
              for both conventional and decentralized web applications.
            </WrapperDescription>
            <Button onClick={downloadCV}>&#x2193; Download CV</Button>
          </Fade>
        </Wrapper2>
        <Fade direction="up" triggerOnce>
        <WrapperImage></WrapperImage>
        </Fade>
      </Wrapper>
    </LandingContainer>
  );
};

export default LandingPage;
