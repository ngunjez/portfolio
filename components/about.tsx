import {
  AboutBigContainer,
  AboutContainer,
  AboutFrontContainer,
  AboutFrontHeader,
  AboutHeader,
  AboutPic,
  AboutTechContainer,
  AboutText,
  AboutTextContainer,
  AboutTitles,
  Title,
} from "@/styles/About";
import React from "react";
import HomeLayout from "@/Layout/Layout";

const TechStack = [
  {
    title: "Frontend",
    tech: [
      "React js",
      "Javascript",
      "Typescript",
      "HTML & CSS",
      "Next js",
      "Material UI",
      "Vue",
      "Styled -",
      "Components",
    ],
  },
  {
    title: "Backend",
    tech: ["Node.js", "GrapghQL"],
  },
  {
    title: "Blockchain",
    tech: ["Solidity", "Web3.js"],
  },
];

const About = () => {
  return (
    <AboutContainer id="about">
      <AboutHeader>Personal Insight</AboutHeader>
      <AboutTextContainer>
        <AboutText>
          I am a passionate front-end developer based in Nairobi, Kenya,
          specializing in visually appealing, user-centric, and responsive web
          designs. My expertise covers the full spectrum of front-end
          development, and I thrive on challenging projects that encourage
          creativity and make a positive impact. My professional approach is
          defined by organization, independence, and meticulous attention to
          detail, allowing me to excel as a problem solver in web development.
          Beyond coding, I am an avid outdoor enthusiast who enjoys travel,
          football, and captivating films. I aim to create meaningful change in
          the digital landscape through my dedication and mission-driven work
          ethic. I look forward to contributing significantly to a high-growth
          company.
        </AboutText>
        <AboutPic></AboutPic>
      </AboutTextContainer>
      <AboutTechContainer>
        {TechStack.map((item, index) => (
          <AboutBigContainer key={index}>
            <AboutFrontContainer>
              <AboutFrontHeader>{item.title}</AboutFrontHeader>
              <AboutTitles>
                {item.tech.map((tech, index) => (
                  <Title key={index}>{tech}</Title>
                ))}
              </AboutTitles>
            </AboutFrontContainer>
          </AboutBigContainer>
        ))}
      </AboutTechContainer>
    </AboutContainer>
  );
};

export default About;

About.getLayout = function getLayout(page: React.ReactNode) {
  return <HomeLayout>{page}</HomeLayout>;
};
