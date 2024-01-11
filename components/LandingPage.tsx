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
import HomeLayout from "@/Layout/Layout";
import Image from "next/image";
import revamp2 from "@/public/revamp2.webp";


const downloadCV = () => {
  const cvFileName = 'cv4.pdf';
  const cvFileUrl = '/' + cvFileName;  

  console.log('CV File URL:', cvFileUrl);

  const link = document.createElement('a');
  link.href = cvFileUrl;
  link.download = cvFileName;
  link.click();
};

const LandingPage = () => {
  return (
    <LandingContainer id="home">
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
        <WrapperImage>
          <Image
          src={revamp2}
          alt= "picture of me"
          width={535}
          min-height={448}
          />
        </WrapperImage>
        </Fade>
      </Wrapper>
    </LandingContainer>
  );
};

export default LandingPage;


LandingPage.getLayout = function getLayout(page: React.ReactNode) {
  return (
    <HomeLayout>
      {page}
    </HomeLayout>
  );
};