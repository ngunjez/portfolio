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
import { ActionButton } from "@/styles/LandingPage";
import { motion } from "framer-motion";
import React from "react";
import HomeLayout from "@/Layout/Layout";

const downloadCV = () => {
  const cvFileName = "Rcv3.pdf";
  const cvFileUrl = "/" + cvFileName;

  console.log("CV File URL:", cvFileUrl);

  const link = document.createElement("a");
  link.href = cvFileUrl;
  link.download = cvFileName;
  link.click();
};

const TechStack = [
  {
    title: "Frontend",
    tech: [
      "React JS",
      "Javascript",
      "Typescript",
      "HTML & CSS",
      "Next js",
      "Material UI",
      "Vue JS",
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
      <AboutHeader>PERSONAL INSIGHT</AboutHeader>
      <AboutTextContainer>
        <AboutText>
          I&apos;m a passionate Frontend Developer with experience working remotely
          and on-site, specializing in user-centric, visually appealing, and
          responsive web applications. My expertise spans the full spectrum of
          frontend development, including Web2, Web3, and AI-driven
          technologies, where I thrive on solving complex challenges through
          clean, maintainable code. I value creativity, precision, and
          impact-driven work, and approach every project with independence,
          organization, and attention to detail. I&apos;ve led component
          architecture, mentored junior developers, and contributed to scalable,
          modern digital solutions. Outside of development, I enjoy exploring
          the outdoors, football, and great films. My goal is to create
          meaningful change in the digital space through purposeful,
          mission-driven design and engineering.
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

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        style={{ marginTop: "50px" }}
      >
        <ActionButton
          onClick={downloadCV}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="download-icon">↓</span> Download Resume
        </ActionButton>
      </motion.div>
    </AboutContainer>
  );
};

export default About;

About.getLayout = function getLayout(page: React.ReactNode) {
  return <HomeLayout>{page}</HomeLayout>;
};
