import {
  LandingContainer,
  Wrapper,
  Wrapper2,
  WrapperDescription,
  WrapperImage,
  WrapperText,
} from "@/styles/LandingPage";
import React from "react";
import { Fade } from "react-awesome-reveal";

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
