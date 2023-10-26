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

const TechStack = [
  {
    title: "Frontend",
    tech: [
      "React js",
      "Javascript",
      "Typescript",
      "HTML & CSS",
      "Next js",
      "Styled-Components",
      "Material UI",
    ],
  },
  {
    title: "Backend",
    tech: ["Node.js"],
  },
  {
    title: "Blockchain",
    tech: ["Solidity", "Web3.js",],
  },
];

const About = () => {
  return (
    <AboutContainer>
      <AboutHeader>Personal Insight</AboutHeader>
      <AboutTextContainer>
        <AboutText>
          I am a dedicated front-end developer based in Nairobi, Kenya, deeply
          passionate about crafting visually appealing, user-centric, and
          responsive designs for websites, web applications, and digital
          platforms. My enthusiasm spans the entire front-end spectrum, and I
          thrive on taking on challenging projects that foster creativity and a
          positive impact. This website serves as a platform to showcase a
          selection of my innovative creations. My professional ethos is
          characterized by a keen sense of organization and a strong sense of
          independence, with a relentless commitment to detail. These qualities
          enable me to excel as a problem-solver in the ever-evolving field of
          web development. Beyond the realm of coding, I am an avid outdoor
          enthusiast, drawn to the wonders of travel and I have deep passion for
          football. I find solace in exploring the great outdoors and unwinding
          by immersing myself in captivating films. As a web developer, I
          channel my unwavering passion for creation and a mission-driven work
          ethic to effect meaningful change in the digital landscape. It is with
          great anticipation that I look forward to making a substantial impact
          at a high-growth company.
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
