import { PCardContainer, PHeader, ProjectsContainer, PCasesCard, PImageContainer, PCasesBody, PCasesTitle, PCasesText, PButtonContainer, ReadMoreText, PWwrapper } from "@/styles/Projects";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import HomeLayout from "@/Layout/Layout";

const projectUrls = [
    "https://www.brokerbox.app/",   
    "https://www.eqcap.fund/",       
    "https://www.code3camp.dev/",  
    "https://parallel-88-fd73osf7e-parallel-88.vercel.app/",        
    "https://www.peer2peer.pro/",         
    "https://www.skyswyp.co/", 
  ];

const smartCityCases = [
    {
      title: "BrokerBox",
      description:
        "Next js,Typescript, Styled-Components",
      imageSrc: "/brokerbox.jpg",
    },
    {
      title: "EQAM",
      description:
        "Next js, Javascript,",
      imageSrc: "/eqam.jpg",
    },
    {
      title: "Code3camp",
      description:
        "Next js, Typescript, Styled-Components, Material UI",
      imageSrc: "/code3camp.jpg",
    },
    {
      title: "Parallel88",
      description:
        "Next js, Javascript",
      imageSrc: "/p88.jpg",
    },
    {
      title: "P2P Processor",
      description:
        "Next js, Javscript, Web3.js, Nodejs",
      imageSrc: "/p2p.jpg",
    },
    {
      title: "Skyswyp",
      description:
        "Next js, Javascript, Styled-Components",
      imageSrc: "/skyswyp.jpg",
    },
  ];

const Projects = () => {
    return(
        <ProjectsContainer id="projects">
            <PHeader>PROJECTS</PHeader>
            <PWwrapper>
            <PCardContainer>
            {smartCityCases.map((smartCityCase, index) => (
            <PCasesCard key={index}>
              <PImageContainer>
                <Image
                  src={smartCityCase.imageSrc}
                  alt={smartCityCase.title}
                  width={383}
                  height={191}
                />
              </PImageContainer>
              <PCasesBody>
                <PCasesTitle>{smartCityCase.title}</PCasesTitle>
                <PCasesText>{smartCityCase.description}</PCasesText>
                <PButtonContainer>
                  <Link href={projectUrls[index]} target="_blank" rel="noopener noreferrer">
                    <ReadMoreText>View Site &#x2192;</ReadMoreText>
                  </Link>
                </PButtonContainer>
              </PCasesBody>
            </PCasesCard>
          ))}
            </PCardContainer>
            </PWwrapper>
        </ProjectsContainer>
    )
}

export default Projects;


Projects.getLayout = function getLayout(page: React.ReactNode) {
  return (
    <HomeLayout>
      {page}
    </HomeLayout>
  );
};

  
  